FROM node:20-bookworm-slim AS builder
WORKDIR /app

ARG NEXT_PUBLIC_SITE_URL=https://zworks.ir
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=3072"

COPY package.json package-lock.json ./
RUN npm ci --include=dev --include=optional \
  && npm install --no-save @tailwindcss/oxide-linux-x64-gnu lightningcss-linux-x64-gnu

COPY . .
RUN rm -rf .next
ENV NODE_ENV=production
RUN npm run build

FROM node:20-bookworm-slim AS runner
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

CMD ["node", "server.js"]
