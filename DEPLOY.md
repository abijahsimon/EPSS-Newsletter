# Deploy newsletter to epssdocker03

Paste-ready steps for Daniel. Conventions match **epssapps** (`bin/deploy` + `docker-prod/`, self-hosted runner with NOPASSWD for one script) and **print** on this host (faculty-web Apache + CertiNext `.cert` lineage).

| Fact | Value |
|------|--------|
| Host | `epssdocker03` — faculty WordPress host **128.97.5.81** |
| Edge | **faculty-web-1** (Apache) owns host `:80`/`:443` on Docker network `faculty_default` |
| Public name (after cutover) | `newsletter.epss.ucla.edu` |
| Upstream | `http://newsletter:8080/` (compose alias on `faculty_default`) |
| Certs | `/etc/letsencrypt/live/newsletter.epss.ucla.edu.cert/{fullchain,privkey}.pem` |
| Deploy mirror | `/opt/newsletter` |
| Deploy command | `sudo /opt/newsletter/bin/deploy` |
| Runner labels | `[self-hosted, epssdocker03]` |
| Current DNS | Still Squarespace — **do not cut over until the final opt-in step** |

Campus hosts are unreachable from CI VMs; every host/DNS/TLS command is yours. Do **not** edit faculty compose files (they live outside this repo).

---

## 1. Discovery (confirm faculty-web path)

```bash
docker ps --filter name=faculty-web --format 'table {{.Names}}\t{{.Image}}\t{{.Ports}}'
docker network inspect faculty_default --format '{{.Name}} {{range .Containers}}{{.Name}} {{end}}'
ls /opt/faculty/apache/sites-enabled/ | head
# print vhost is the template:
sudo grep -E 'ProxyPass|SSLCertificate|ServerName' /opt/faculty/apache/sites-enabled/print.epss.ucla.edu.conf
sudo ls /etc/letsencrypt/live | grep -E 'print|newsletter' || true
```

**Primary mode (this host):** faculty-web Apache vhost → `http://newsletter:8080/` on `faculty_default`. Leave `COMPOSE_PROFILES=` empty (no Traefik).

**Traefik profile:** only for greenfield hosts without faculty-web. Traefik uses the internal compose `web` network; newsletter still also joins `NEWSLETTER_PROXY_NETWORK`. If that external network is missing, create it (`docker network create faculty_default`) or set `NEWSLETTER_PROXY_NETWORK` to another existing bridge. Do **not** enable Traefik on epssdocker03 while faculty-web owns 80/443.

---

## 2. One-time host prep

### 2.1 Clone deploy mirror

```bash
sudo mkdir -p /opt/newsletter
sudo chown "$USER":"$USER" /opt/newsletter
git clone git@github.com:ucla-earth-planetary-and-space-sciences/newsletter.git /opt/newsletter
cd /opt/newsletter && git checkout main
sudo chown -R root:root /opt/newsletter
```

### 2.2 Compose `.env`

```bash
sudo cp /opt/newsletter/docker-prod/.env.example /opt/newsletter/docker-prod/.env
sudo chmod 600 /opt/newsletter/docker-prod/.env
sudo "${EDITOR:-nano}" /opt/newsletter/docker-prod/.env
```

| Key | What it holds |
|-----|----------------|
| `NEWSLETTER_IMAGE` | Local image tag (`newsletter:prod`) |
| `NEWSLETTER_HOST_PORT` | Loopback port for smoke (default `8088`) |
| `NEWSLETTER_PROXY_NETWORK` | Faculty Docker network (default `faculty_default`) |
| `COMPOSE_PROFILES` | Leave empty on epssdocker03 |
| `DEPLOY_HEALTH_WAIT` | Health wait seconds (default `90`) |
| `SMOKE_HOST_HEADER` | Host header for loopback smoke |
| `SMOKE_PUBLIC` | Keep `0` until DNS cutover |
| `NEWSLETTER_PUBLIC_URL` | Used only when `SMOKE_PUBLIC=1` |

`bin/deploy` **fails** if `NEWSLETTER_PROXY_NETWORK` does not exist (clear error naming the network).

### 2.3 GitHub Actions runner

```bash
cd /opt/actions-runner   # or create from GitHub → Settings → Actions → Runners
./config.sh --url https://github.com/ucla-earth-planetary-and-space-sciences/newsletter \
  --token <REGISTRATION_TOKEN_FROM_GITHUB_UI> \
  --name epssdocker03-newsletter \
  --labels self-hosted,epssdocker03 \
  --work _work
sudo ./svc.sh install && sudo ./svc.sh start
```

### 2.4 sudoers (NOPASSWD for exactly one path)

```bash
ps aux | grep -E 'Runner.Listener|actions.runner' | head
sudo cp /opt/newsletter/docker-prod/host/sudoers.newsletter /etc/sudoers.d/newsletter
sudo sed -i 's/RUNNER_USER/<actual-runner-user>/' /etc/sudoers.d/newsletter
sudo chmod 0440 /etc/sudoers.d/newsletter
sudo visudo -cf /etc/sudoers.d/newsletter
```

---

## 3. TLS — CertiNext RSA (`.cert` lineage)

Issue on **cert.epss** via netadmin **Issue CertiNext RSA** (or certbot + existing CertiNext account + dns-rfc2136), then sync to epssdocker03 like other faculty hostnames.

Expected paths on epssdocker03 (note the **`.cert`** directory name, same as print):

```text
/etc/letsencrypt/live/newsletter.epss.ucla.edu.cert/fullchain.pem
/etc/letsencrypt/live/newsletter.epss.ucla.edu.cert/privkey.pem
```

```bash
sudo ls -l /etc/letsencrypt/live/newsletter.epss.ucla.edu.cert/
sudo openssl x509 -in /etc/letsencrypt/live/newsletter.epss.ucla.edu.cert/fullchain.pem -noout -subject -dates
```

---

## 4. faculty-web Apache vhost (primary)

Copy the print-style vhost into the faculty sites-enabled bind mount (do **not** change faculty compose):

```bash
sudo cp /opt/newsletter/docker-prod/host/apache-faculty-web/newsletter.epss.ucla.edu.conf \
  /opt/faculty/apache/sites-enabled/

# After certs exist and newsletter container is on faculty_default:
docker exec faculty-web-1 apachectl configtest
docker exec faculty-web-1 apachectl graceful
```

Vhost summary (mirrors print):

- `:80` → `RewriteRule` redirect to https  
- `:443` → SSL from `.../newsletter.epss.ucla.edu.cert/{fullchain,privkey}.pem`  
- `ProxyPass / http://newsletter:8080/` with `ProxyPreserveHost On` and `X-Forwarded-Proto: https`

---

## 5. First deploy (Squarespace still live)

```bash
# Network must exist (faculty stack running):
docker network inspect faculty_default >/dev/null

sudo /opt/newsletter/bin/deploy

# Loopback health (compose publish):
curl -fsS http://127.0.0.1:8088/healthz

# Through faculty-web on the host (TLS verify may fail until public DNS; use -k + resolve):
curl -k -fsS --resolve newsletter.epss.ucla.edu:443:127.0.0.1 \
  https://newsletter.epss.ucla.edu/healthz
# Expect: ok
```

Or trigger **Actions → Deploy newsletter** (queues until the epssdocker03 runner exists).

Keep `SMOKE_PUBLIC=0` so deploys never require the public Squarespace name.

---

## 6. DNS cutover (final, opt-in)

Only when container + Apache + cert tests pass and stakeholders agree. Zone is dynamic on dns1 (`128.97.31.38`, `/var/lib/bind`).

```bash
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

Then:

```bash
sudo sed -i 's/^SMOKE_PUBLIC=.*/SMOKE_PUBLIC=1/' /opt/newsletter/docker-prod/.env
curl -fsSI https://newsletter.epss.ucla.edu/ | head
curl -fsS https://newsletter.epss.ucla.edu/healthz
# Must NOT look like Squarespace
```

---

## 7. Layout

```text
/opt/newsletter/
  bin/deploy
  docker-prod/
    docker-compose.yml          # joins faculty_default as alias newsletter
    .env
    host/
      apache-faculty-web/newsletter.epss.ucla.edu.conf
      sudoers.newsletter
    traefik/dynamic/routes.yml  # optional profile only; `.cert` PEM paths
/opt/faculty/apache/sites-enabled/   # faculty bind-mount (not in this repo)
```

## 8. Rollback

```bash
cd /opt/newsletter
sudo git fetch origin && sudo git reset --hard <known-good-sha>
sudo /opt/newsletter/bin/deploy
# Remove vhost if needed:
#   sudo rm /opt/faculty/apache/sites-enabled/newsletter.epss.ucla.edu.conf
#   docker exec faculty-web-1 apachectl graceful
```

DNS emergency: point `newsletter` A back to the previous Squarespace target.
