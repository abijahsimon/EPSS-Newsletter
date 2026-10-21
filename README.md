# newsletter
For Departmental Newsletters

The current 2026 site is the static Astro project in [`app/`](app/). The repository-root HTML is a historical version.

- [Production deploy to epssdocker03](DEPLOY.md) — epssapps-style `bin/deploy`, Docker, Traefik file provider / existing WP proxy, CertiNext, opt-in DNS cutover
- [Build and hosting instructions](app/DEPLOYMENT.md)
- [Editing guide](EDITING_GUIDE.md)
- [CI](.github/workflows/ci.yml) — Astro checks + Docker image build on PRs
- [Deploy workflow](.github/workflows/deploy.yml) — `sudo /opt/newsletter/bin/deploy` on `[self-hosted, epssdocker03]`

Production URL (after DNS cutover): `https://newsletter.epss.ucla.edu`
