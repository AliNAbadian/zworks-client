# syntax=docker/dockerfile:1

FROM oven/bun:latest AS base

WORKDIR /app

FROM base AS deps
RUN echo 'registry=https://registry.npmjs.org' > ~/.npmrc
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# بهینه‌سازی: غیرفعال کردن تلمتری و تنظیم محدودیت حافظه برای Node.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=2048"

# اگر بیلد با turbopack همچنان کرش کرد، می‌توانید --turbopack را حذف کنید
RUN bun run build

FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
# تنظیم مالکیت پوشه .next برای کاربر nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]
