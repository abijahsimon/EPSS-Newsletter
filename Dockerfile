# syntax=docker/dockerfile:1.7
# Multi-stage build for the EPSS newsletter static site (Astro → nginx).
# Production mount is the subdomain root: https://newsletter.epss.ucla.edu/

ARG NODE_VERSION=22
ARG PNPM_VERSION=11.7.0

FROM node:${NODE_VERSION}-bookworm-slim AS build
ARG PNPM_VERSION
WORKDIR /src

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/* \
  && npm install --global "pnpm@${PNPM_VERSION}"

COPY app/package.json app/pnpm-lock.yaml app/pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY app/ ./
# Subdomain root: NEWSLETTER_BASE=/
ENV NEWSLETTER_BASE=/
RUN pnpm check \
  && pnpm test:paths \
  && pnpm build \
  && pnpm verify:links

FROM nginx:1.27-alpine AS runtime

RUN apk add --no-cache curl \
  && rm -f /etc/nginx/conf.d/default.conf

COPY docker-prod/nginx.conf /etc/nginx/conf.d/newsletter.conf
COPY --from=build /src/dist /usr/share/nginx/html

# Liveness for Docker / compose / smoke tests (not part of the public site UI).
RUN printf 'ok\n' > /usr/share/nginx/html/healthz


EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -fsS http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
