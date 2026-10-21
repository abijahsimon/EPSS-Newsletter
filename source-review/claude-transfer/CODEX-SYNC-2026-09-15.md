# Codex sync for Claude - 2026-09-15

Use this note to reconcile Claude's copy with the maintained repository. The Astro app in `app/` is the production source of truth. Do not replace it with the standalone Vite export.

## What Codex integrated

- Imported the corrected Claude article pages and addendum assets into the Astro renderer while preserving the Claude design markup.
- Added the historical archive at `/epss-through-deep-time/` with all 48 print newsletter covers.
- Added the 24-by-36-inch archive poster as a real PDF. `/archive-poster/` now redirects to `/downloads/epss-newsletter-archive-poster.pdf`, so a browser PDF viewer supplies its normal view, print, and download controls.
- Added the five latest article routes: `/stories/field-highlights/`, `/stories/peng-ni/`, `/stories/lizzie-su/`, `/stories/edwin-schauble/`, and `/stories/allen-glazner/`.
- Preserved the addendum's BALBOA caption correction, Peltzer `thermal-print.jpg` rename, pinned lightbox controls, and data-URI lightbox loading fix.

## Editorial and media decisions to preserve

- Gilles Peltzer: all supplied field photos show Gilles. Keep `P3180036.JPG`, represented in the site as `kelso-dunes.jpg`, as the lead image. Keep the remaining images available on the article page.
- Commencement: keep `DSC08208.jpg` as the lead. `DSC08207.jpg` and `DSC08147.jpg` are backups.
- RIMFAX: use the approved NASA/JPL Mars image already placed in the maintained app.
- Field highlights: preserve the selected highlights and leave the remaining approved photographs accessible in the gallery.
- Do not invent article copy, captions, credits, quotes, names, counts, or approvals. Keep unresolved source and approval items explicit.

## Files Claude should treat as current

- `app/src/reference-pages/` contains the current Claude-designed page markup used by Astro.
- `app/src/components/ReferencePage.astro` contains route rewriting and lightbox hydration required by the embedded pages.
- `app/src/lib/reference-pages.ts` is the page-to-route registry.
- `app/public/covers-data.js`, `app/public/doc-page.js`, and `app/public/support.js` are required runtimes.
- `app/public/downloads/epss-newsletter-archive-poster.pdf` is the generated poster delivered by the site.
- `source-review/addendum-integration-2026-09-14.md` records the selective addendum merge and rejected regressions.

## Do not undo

- Do not reintroduce `field-instruction.jpg`; `thermal-print.jpg` is the corrected name.
- Do not replace the lightbox's pinned-control layout or remove its data-URI `lightboxSrc` behavior.
- Do not remove `kelso-dunes.jpg` from Peltzer or substitute a different lead.
- Do not move production back to the root Vite files. Continue syncing design changes into the Astro files listed above.

## Remaining human-review work

- Resolve the open copy, caption, credit, approval, and source questions listed in `source-review/open-questions.md` and `source-review/source-status.csv`.
- Replace the poster's 2026 online-issue screenshot placeholder after the final issue homepage is approved.
- Re-export the poster PDF after any cover, title, or 2026 screenshot change.
