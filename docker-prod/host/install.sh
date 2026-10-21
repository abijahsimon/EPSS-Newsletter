#!/bin/bash
# Idempotent host prep helpers for /opt/newsletter (run as root via bin/deploy).
set -euo pipefail

if [ "$(id -u)" -ne 0 ]; then
  echo "host/install.sh must run as root" >&2
  exit 1
fi

REPO=/opt/newsletter
chmod 755 "$REPO/bin/deploy" 2>/dev/null || true
chmod 755 "$REPO/docker-prod/host/install.sh" 2>/dev/null || true

# Ensure compose .env is root-only if present.
if [ -f "$REPO/docker-prod/.env" ]; then
  chown root:root "$REPO/docker-prod/.env"
  chmod 600 "$REPO/docker-prod/.env"
fi

# Placeholder dirs for future local state (certs are under /etc/letsencrypt).
mkdir -p /var/lib/newsletter
