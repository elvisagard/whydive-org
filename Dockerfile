# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@10.13.1 --activate

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/package.json
COPY backend/package.json ./backend/package.json

RUN pnpm install --frozen-lockfile

FROM base AS builder

ARG NEXT_PUBLIC_ASSET_BASE_URL=https://static.whydive.org
ENV NEXT_PUBLIC_ASSET_BASE_URL=$NEXT_PUBLIC_ASSET_BASE_URL

COPY --from=deps /app/ ./
COPY . .

RUN pnpm frontend:build

RUN mkdir -p /app/frontend/public-runtime/images/whydive /app/frontend/public-runtime/images/brands /app/frontend/public-runtime/advisor \
  && find /app/frontend/public -maxdepth 1 -type f -exec cp {} /app/frontend/public-runtime/ \; \
  && cp /app/frontend/public/images/whydive/article-fallback.svg /app/frontend/public-runtime/images/whydive/article-fallback.svg \
  && cp /app/frontend/public/images/whydive/logo-dark.svg /app/frontend/public-runtime/images/whydive/logo-dark.svg \
  && cp /app/frontend/public/images/whydive/logo-light.svg /app/frontend/public-runtime/images/whydive/logo-light.svg \
  && cp /app/frontend/public/images/brands/*.svg /app/frontend/public-runtime/images/brands/ \
  && cp /app/frontend/public/images/logo-main.svg /app/frontend/public-runtime/images/logo-main.svg \
  && cp /app/frontend/public/images/bottom-line-graph.svg /app/frontend/public-runtime/images/bottom-line-graph.svg \
  && cp -R /app/frontend/public/advisor/. /app/frontend/public-runtime/advisor/

FROM node:22-alpine AS runner
WORKDIR /app

ARG NEXT_PUBLIC_ASSET_BASE_URL=https://static.whydive.org
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_ASSET_BASE_URL=$NEXT_PUBLIC_ASSET_BASE_URL
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/frontend/.next/static ./frontend/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/frontend/public-runtime ./frontend/public

USER nextjs

EXPOSE 3000

CMD ["node", "frontend/server.js"]
