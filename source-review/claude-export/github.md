repo: abijahsimon/EPSS-Newsletter
branch: main
path: (whole repo; design work lives in this project's .dc.html files)

## Last sync

date: 2026-09-06T11:57:06Z
commit: 727edd8291a4

### Updated in this project

- Read repo tree: legacy static `index.html` + `styles.css`, and the Astro app under `app/`.
- Confirmed `assets/images/` (89 extracted 2025 newsletter images) and `assets/people/` are the shared asset source.
- Design in this project has moved well past the repo: real photos, real awards copy, new Contents/Endowed Chairs/Dispatches sections.
- Nothing pushed upstream yet — the repo is still the pre-redesign state.

## Screen map

| Project screen | Repo files it relates to |
| --- | --- |
| EPSS Annual Newsletter 2026.dc.html | index.html, styles.css, app/src/pages/index.astro, app/src/styles/newsletter.css |
| Article Page.dc.html | (new — no repo equivalent yet) |
| EPSS Newsletter - Current Site.dc.html | index.html, styles.css (faithful recreation of the pre-redesign site) |
| assets/images/*, assets/people/* | assets/images/, assets/people/ |

## Notes

- Content model for reuse: `app/src/content/issues/2026.json` + `app/src/content/articles/*.md`, schema in `app/src/content.config.ts`.
- The port back to Astro has NOT been done. To deploy, the 2026 design needs moving into `index.astro` + `newsletter.css`, with copy in the issue JSON.
