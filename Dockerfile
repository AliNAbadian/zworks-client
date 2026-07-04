FROM oven/bun:1 AS builder
WORKDIR /app

ARG NEXT_PUBLIC_SITE_URL=https://zworks.ir
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=3072"

COPY package.json bun.lock ./
# Install production deps only, then add build-time dev deps (skip @biomejs/biome — its musl binary fails in this image).
RUN bun install --frozen-lockfile --production \
  && bun add -d typescript @tailwindcss/postcss tailwindcss @types/node @types/react @types/react-dom tw-animate-css

COPY . .
RUN rm -rf .next
RUN bun run build

FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=10s --start-period=90s --retries=5 \
  CMD curl -f http://127.0.0.1:3000/ || exit 1

CMD ["bun", "server.js"]
