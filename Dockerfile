# syntax=docker/dockerfile:1
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# کپی کردن خروجی بیلد که قبلاً خارج از داکر انجام شده
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

USER nextjs

EXPOSE 3000

CMD ["bun", "zworks-client/server.js"]