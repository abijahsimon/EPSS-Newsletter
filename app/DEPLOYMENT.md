# Newsletter build and hosting

The maintained site is the static Astro app in this directory. The repository-root HTML is historical source; do not deploy it as the current newsletter.

Requires Node.js 22.12+ and pnpm 11.7.0. Install the locked dependencies with `pnpm install --frozen-lockfile`.

## Build for a subdomain root

```sh
pnpm check
pnpm test:paths
pnpm build
pnpm verify:links
pnpm preview
```

## Build for a path such as /newsletter

```sh
pnpm check
pnpm test:paths
NEWSLETTER_BASE=/newsletter pnpm build
NEWSLETTER_BASE=/newsletter pnpm verify:links
NEWSLETTER_BASE=/newsletter pnpm preview
```

The same commands work with another mount, such as `NEWSLETTER_BASE=/EPSS-Newsletter` for a GitHub Pages project. Use the same base when building, checking links, and previewing. Rebuild when the mount changes.

Deploy the **contents of `dist/`** at the selected web root/mount. The build does not create an additional directory named after the mount. Use `pnpm build`, which runs both Astro and the required final static-path pass; `astro build` alone does not rewrite the copied public files.

The final path pass covers this project's known static asset/story/archive/download roots, root home links, and exported cover data. External URLs and fragment-only links are preserved. A new site-owned root directory must be added to `scripts/site-base.mjs` and covered by the path tests.

Serve directory `index.html` files and preserve trailing-slash routing. If mounted beneath a CMS, pass the selected subtree to the static files rather than the CMS catch-all. The build needs no server-side Node process, database, or WordPress conversion. The build can also be served by a static server inside an existing container platform.

The public media archive is copied from `public/media-archive/`; its directory-index path should be tested against the built site. The development server may require the explicit `/media-archive/index.html` path.

## Runtime and maintenance

- Signup posts directly to the configured Google Form and its linked Google Sheet. It does not require backend credentials in this repository. Verify a disposable response and Sheet receipt after deployment.
- Existing pages use the bundled DC support runtime and existing external fonts/CDN resources. Review the actual build against hosting response-header policies before release.
- Analytics is not configured. The site owner must supply the desired measurement configuration.
- Editorial updates use the sources in `src/`; several pages render `src/reference-pages/` HTML, while other stories render Markdown. Follow the editing guide rather than editing `dist/`.
- Publish only `dist/`, not the source repository or internal planning files.

October 16 validation: root and `/newsletter` builds each passed the 260-local-URL check across 20 HTML files; path regression tests and Astro check passed. Browser tests covered navigation, article galleries, both archives, and the poster redirect at `/newsletter/`. These are local tests, not confirmation of production DNS, server configuration, security approval, or editorial release approval.

## EPSS repository and build pipeline

The maintained EPSS repository is `ucla-earth-planetary-and-space-sciences/newsletter`, branch `main`. GitHub Actions validates both root and `/newsletter` configurations on pushes and pull requests to `main`, with manual dispatch available. Each successful run uploads `newsletter-static-root` and `newsletter-static-subpath` artifacts, retained for seven days.

Use the artifact matching the agreed hosting mount. VM deployment and production cutover require the server endpoint, access method, document root or container configuration, and an agreed freeze/release window from the hosting owner. The validation workflow does not contain server credentials or an automatic production deployment step.
