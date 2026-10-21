# Deploy newsletter to epssdocker03

Paste-ready steps for Daniel. Conventions match **epssapps** (`bin/deploy` + `docker-prod/`, self-hosted runner with NOPASSWD for one script, Traefik **file provider**, CertiNext PEMs under `/etc/letsencrypt`).

| Fact | Value |
|------|--------|
| Host | `epssdocker03` — faculty WordPress host **128.97.5.81** |
| Public name (after cutover) | `newsletter.epss.ucla.edu` |
| Deploy mirror | `/opt/newsletter` (git checkout of this repo) |
| Deploy command | `sudo /opt/newsletter/bin/deploy` |
| Runner labels | `[self-hosted, epssdocker03]` |
| Current DNS | Still Squarespace — **do not cut over until step 7** |

Campus hosts are unreachable from CI VMs; every host/DNS/TLS command is yours.

---

## 1. Discovery on epssdocker03 (do this first)

SSH in (same path netadmin uses for WordPress: user `wpdeploy` or your admin account) and record what already owns the edge:

```bash
hostname -f
ip -4 addr show | grep -E 'inet '

# What listens on 80/443?
sudo ss -tlnp | grep -E ':80 |:443 ' || sudo netstat -tlnp | grep -E ':80 |:443 '

# Docker already?
command -v docker; docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}' 2>/dev/null || echo 'no docker'

# Existing reverse proxy configs (Apache and/or nginx)
sudo ls /etc/apache2/sites-enabled 2>/dev/null || true
sudo ls /etc/nginx/sites-enabled 2>/dev/null || true
sudo apache2ctl -S 2>/dev/null | head -40 || true
sudo nginx -T 2>/dev/null | grep -E 'server_name|listen ' | head -40 || true

# Any Traefik already?
docker ps --filter name=traefik --format '{{.Names}} {{.Ports}}' 2>/dev/null || true
sudo ls /etc/letsencrypt/live 2>/dev/null || true
```

**Decision (write it down):**

| Discovery result | Proxy mode for newsletter |
|------------------|---------------------------|
| Apache or nginx already on :80/:443 (typical WordPress) | **Existing proxy** — newsletter on `127.0.0.1:8088` only; add a vhost from `docker-prod/host/*-newsletter.conf.example`. Leave `COMPOSE_PROFILES=` empty. |
| Nothing on :80/:443 and Docker is fine | **Optional Traefik profile** — set `COMPOSE_PROFILES=traefik` in `.env` after PEMs exist. Uses `docker-prod/traefik/dynamic/routes.yml` (file provider, **no** docker.sock, **no** ACME). |
| Traefik already running elsewhere on the host | Attach newsletter to that stack’s network / routes — do **not** start a second Traefik on 80/443. Ask before inventing a parallel edge. |

Do **not** bind a new process to :80/:443 until this table is decided. WordPress sites must keep working.

---

## 2. One-time host prep

### 2.1 Clone deploy mirror

```bash
sudo mkdir -p /opt/newsletter
sudo chown "$USER":"$USER" /opt/newsletter   # temporary for clone; deploy script re-asserts root bits
git clone git@github.com:ucla-earth-planetary-and-space-sciences/newsletter.git /opt/newsletter
# or HTTPS with a deploy key / machine credentials you already use for epssapps
cd /opt/newsletter
git checkout main
sudo chown -R root:root /opt/newsletter
```

### 2.2 Docker Engine + Compose v2

If missing (discovery said no docker):

```bash
# Use the same install path you use on epssdocker / other EPSS hosts
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-v2
sudo systemctl enable --now docker
```

### 2.3 Compose `.env`

```bash
sudo cp /opt/newsletter/docker-prod/.env.example /opt/newsletter/docker-prod/.env
sudo chmod 600 /opt/newsletter/docker-prod/.env
sudo "${EDITOR:-nano}" /opt/newsletter/docker-prod/.env
```

| Key | What it holds |
|-----|----------------|
| `NEWSLETTER_IMAGE` | Local image tag (`newsletter:prod`) |
| `NEWSLETTER_HOST_PORT` | Loopback port (default `8088`) |
| `COMPOSE_PROFILES` | Empty, or `traefik` only if discovery cleared :80/:443 |
| `DEPLOY_HEALTH_WAIT` | Health wait seconds (default `90`) |
| `SMOKE_HOST_HEADER` | Host header for local smoke (`newsletter.epss.ucla.edu`) |
| `SMOKE_PUBLIC` | Keep `0` until DNS cutover (step 7) |
| `NEWSLETTER_PUBLIC_URL` | Public URL used only when `SMOKE_PUBLIC=1` |

No application secrets are required for the static site. Do not put CertiNext account material in this `.env`.

### 2.4 GitHub Actions runner (labels: `self-hosted`, `epssdocker03`)

Skip if a runner with those labels already exists on this host.

```bash
# Example — adjust user/dir to match epssapps runners if you have a standard
cd /opt/actions-runner   # or create anew from GitHub → Settings → Actions → Runners
./config.sh --url https://github.com/ucla-earth-planetary-and-space-sciences/newsletter \
  --token <REGISTRATION_TOKEN_FROM_GITHUB_UI> \
  --name epssdocker03-newsletter \
  --labels self-hosted,epssdocker03 \
  --work _work
sudo ./svc.sh install
sudo ./svc.sh start
```

### 2.5 sudoers (NOPASSWD for exactly one path)

```bash
# Confirm the runner OS user:
ps aux | grep -E 'Runner.Listener|actions.runner' | head

sudo cp /opt/newsletter/docker-prod/host/sudoers.newsletter /etc/sudoers.d/newsletter
sudo sed -i 's/RUNNER_USER/<actual-runner-user>/' /etc/sudoers.d/newsletter
sudo chmod 0440 /etc/sudoers.d/newsletter
sudo visudo -cf /etc/sudoers.d/newsletter
```

Line must remain:

```text
<runner-user> ALL=(root) NOPASSWD: /opt/newsletter/bin/deploy
```

### 2.6 Wire reverse proxy (existing Apache/nginx mode)

Only if discovery chose **existing proxy**:

```bash
# Apache example:
sudo cp /opt/newsletter/docker-prod/host/apache-newsletter.conf.example \
  /etc/apache2/sites-available/newsletter.conf
# Edit Document/Proxy port if NEWSLETTER_HOST_PORT != 8088
sudo a2enmod proxy proxy_http headers ssl
sudo a2ensite newsletter
# Enable the site *after* cert files exist (step 4), then:
# sudo apache2ctl configtest && sudo systemctl reload apache2
```

Or use `nginx-newsletter.conf.example` the same way. Until the cert exists, you can still test the container on loopback (step 5).

### 2.7 Optional Traefik profile

Only if discovery chose **Traefik** and :80/:443 are free:

1. Ensure `docker-prod/traefik/dynamic/routes.yml` keeps real `http:` routers/services **and** a `tls.certificates` entry with real `certFile` / `keyFile` paths (never a file that is only `tls: {}`).
2. Set `COMPOSE_PROFILES=traefik` in `.env`.
3. Cert PEMs must exist at the paths in `routes.yml` before `docker compose up` (step 4).

---

## 3. GitHub variables / secrets

Daniel sets these in the GitHub UI. **Never paste secret values into chat or git.**

### Variables (optional — defaults live in host `.env`)

| Name | What it holds |
|------|----------------|
| *(none required)* | Deploy reads host `/opt/newsletter/docker-prod/.env` |

### Secrets

| Name | What it holds | When needed |
|------|----------------|-------------|
| *(none for deploy)* | Runner + sudoers is enough | Default path |
| Runner registration token | Short-lived UI token | One-time runner install only — do not store long-term |

This workflow does **not** need `DEPLOY_SSH_*` secrets (unlike a hosted-runner SSH deploy).

---

## 4. TLS — CertiNext RSA on cert.epss, copy to epssdocker03

EPSS issues RSA certs with CertiNext ACME (`https://acme-us.certinext.io/v1/directory`) on **cert.epss**; netadmin syncs PEMs to app hosts under `/etc/letsencrypt/live/<name>/`.

### 4.1 Issue (on cert.epss / via netadmin)

Preferred: netadmin UI **Issue CertiNext RSA** for `newsletter.epss.ucla.edu` (same path as other EPSS hostnames).

CLI equivalent on the cert host (names only — use existing account + dns-rfc2136 creds already on that box):

```bash
# On cert.epss — adjust to the host's usual certbot wrapper if different
sudo certbot certonly \
  --dns-rfc2136 \
  --dns-rfc2136-credentials /etc/letsencrypt/rfc2136.ini \
  --server https://acme-us.certinext.io/v1/directory \
  --key-type rsa --rsa-key-size 2048 \
  -d newsletter.epss.ucla.edu
```

### 4.2 Sync to epssdocker03

Use the same netadmin / certrenewer sync that places PEMs on epssdocker. Expected paths on epssdocker03:

```text
/etc/letsencrypt/live/newsletter.epss.ucla.edu/fullchain.pem
/etc/letsencrypt/live/newsletter.epss.ucla.edu/privkey.pem
```

```bash
# On epssdocker03 — verify after sync (do not cat private keys into logs/chat)
sudo ls -l /etc/letsencrypt/live/newsletter.epss.ucla.edu/
sudo openssl x509 -in /etc/letsencrypt/live/newsletter.epss.ucla.edu/fullchain.pem -noout -subject -dates
```

Apache/nginx examples and Traefik `routes.yml` both reference these paths.

---

## 5. First deploy (Squarespace still live)

### 5.1 Manual smoke before Actions

```bash
sudo /opt/newsletter/bin/deploy
curl -fsS http://127.0.0.1:8088/healthz          # ok
curl -fsSI -H 'Host: newsletter.epss.ucla.edu' http://127.0.0.1:8088/ | head
```

### 5.2 Trigger via GitHub Actions

- Merge this PR to `main`, or **Actions → Deploy newsletter → Run workflow**.
- Job runs on `[self-hosted, epssdocker03]` and executes only:

  `sudo /opt/newsletter/bin/deploy`

Keep `SMOKE_PUBLIC=0` so the job never requires the public hostname.

### 5.3 Test via host IP + Host header (optional from your laptop)

```bash
curl -fsSI --resolve newsletter.epss.ucla.edu:443:128.97.5.81 \
  https://newsletter.epss.ucla.edu/ | head
# or HTTP to the loopback publish if you SSH-tunnel:
# ssh -L 8088:127.0.0.1:8088 epssdocker03
```

Temporary DNS name (optional): add e.g. `newsletter-test.epss.ucla.edu` → `128.97.5.81` without touching the Squarespace name.

---

## 6. DNS prep on dns1 (128.97.31.38) — record only, no cutover yet

Zone `epss.ucla.edu` is dynamic under `/var/lib/bind`. You may pre-stage a **low-TTL** test name; leave `newsletter` pointing at Squarespace until step 7.

```bash
# Example test name only (optional):
nsupdate -k /etc/bind/keys/<epss-update.key> <<'EOF'
server 127.0.0.1
zone epss.ucla.edu
update delete newsletter-test.epss.ucla.edu A
update add newsletter-test.epss.ucla.edu 60 A 128.97.5.81
send
EOF
dig @128.97.31.38 newsletter-test.epss.ucla.edu A +short
```

---

## 7. DNS cutover (final, opt-in — takes Squarespace offline for this name)

Run **only** when container + TLS + Host-header tests pass and stakeholders agree.

```bash
# On dns1 — replace/update the newsletter A record to epssdocker03
nsupdate -k /etc/bind/keys/<epss-update.key> <<'EOF'
server 127.0.0.1
zone epss.ucla.edu
update delete newsletter.epss.ucla.edu A
update add newsletter.epss.ucla.edu 300 A 128.97.5.81
send
EOF

dig @128.97.31.38 newsletter.epss.ucla.edu A +short
# Expect: 128.97.5.81
```

Alternate freeze/thaw:

```bash
sudo rndc freeze epss.ucla.edu
# Edit dynamic zone under /var/lib/bind — set newsletter A → 128.97.5.81
sudo rndc thaw epss.ucla.edu
sudo rndc sync epss.ucla.edu
```

Then on epssdocker03:

```bash
# Opt into public smoke for subsequent deploys
sudo sed -i 's/^SMOKE_PUBLIC=.*/SMOKE_PUBLIC=1/' /opt/newsletter/docker-prod/.env
curl -fsSI https://newsletter.epss.ucla.edu/ | head
curl -fsS https://newsletter.epss.ucla.edu/healthz
# Must NOT look like Squarespace
```

---

## 8. Layout after install

```text
/opt/newsletter/                    # deploy mirror (root-owned)
  bin/deploy                        # only path in sudoers NOPASSWD
  docker-prod/
    docker-compose.yml
    .env                            # mode 600, root — never commit
    .env.example
    nginx.conf
    traefik/dynamic/routes.yml      # file provider; real cert paths
    host/
      install.sh
      sudoers.newsletter
      apache-newsletter.conf.example
      nginx-newsletter.conf.example
  Dockerfile
  app/                              # Astro sources
```

---

## 9. Rollback

```bash
cd /opt/newsletter
sudo git fetch origin
sudo git reset --hard <known-good-sha>
sudo /opt/newsletter/bin/deploy
```

DNS rollback (emergency): point `newsletter` A record back to the previous Squarespace target (whatever dig showed before step 7).
