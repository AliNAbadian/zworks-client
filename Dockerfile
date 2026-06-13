# syntax=docker/dockerfile:1

# ---- Base Stage ----
# Use oven/bun:latest for the base image, which is efficient for Node.js projects.
FROM oven/bun:latest AS base
# Set the working directory inside the container.
WORKDIR /app

# ---- Dependencies Stage ----
# This stage installs only the dependencies.
FROM base AS deps
# Configure npm registry (though Bun usually handles this well, it's in the original).
RUN echo 'registry=https://registry.npmjs.org' > ~/.npmrc
# Copy package.json and lockfile to leverage Docker cache.
COPY package.json bun.lock ./
# Install dependencies using Bun's package manager. --frozen-lockfile ensures exact versions.
RUN bun install --frozen-lockfile

# ---- Builder Stage ----
# This stage builds the application.
FROM base AS builder
# Copy the installed node_modules from the deps stage.
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application code.
COPY . .

# Disable Next.js telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

# ---- Permission Adjustment for Build ----
# Ensure the .next directory and its cache sub-directory are writable by the user
# that will eventually run the application (nextjs). This is crucial for build steps
# that might create or write to these directories.
# We use the intended user's UID/GID (1001) which are defined later.
# If the directory doesn't exist yet, mkdir -p will create it.
RUN mkdir -p .next/cache && chown -R 1001:1001 .next/cache

# Build the Next.js application.
RUN bun run build

# ---- Runner Stage ----
# This stage prepares the final, lean image for running the application.
FROM oven/bun:1 AS runner
WORKDIR /app

# Set production environment variables.
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Create system user and group for running the application.
# This is a common practice for security, running as a non-root user.
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# Copy built assets from the builder stage.
# Use --chown to ensure the copied files are owned by the nextjs user.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user.
USER nextjs

# Expose the port the application will run on.
EXPOSE 3000

# Define the command to run the application.
CMD ["bun", "server.js"]
