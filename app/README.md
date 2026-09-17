# EPSS Newsletter App

This Astro app is the public renderer for the 2026 EPSS newsletter. The supplied Claude/Vite source is preserved intact under:

```text
../source-review/Claude outputs/epss-newsletter-source/
../source-review/Claude outputs/epss-newsletter-addendum/
../source-review/Claude outputs/ADDENDUM-2026-09-14/
```

The September 9 addendum is a byte-for-byte archive of Claude's two updated page variants and 22 supplied images. The September 14 addendum is preserved separately and contains Claude's complete 18-page Vite/DC set, archive runtime, manifests, and assets.

Working copies of Claude's 18 designed pages live in `src/reference-pages/`. They intentionally use inline style attributes, a small global `<helmet>` block, and the supplied public runtime files; there is no missing page-level CSS file.

## Requirements

- Node.js 22.12 or newer
- pnpm 11.7

## Run And Build

From `app/`:

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

`pnpm build` writes the static site to `dist/`.

## Rendering Architecture

- `src/pages/index.astro` renders Claude's issue page.
- `src/pages/stories/[slug].astro` renders the 14 Claude-designed article pages.
- `src/pages/epss-through-deep-time.astro` renders the archive. `src/pages/archive-poster.astro` redirects to the generated 24-by-36-inch PDF in `public/downloads/`, allowing the browser's native PDF viewer to provide viewing and download controls.
- `src/components/ReferencePage.astro` extracts the supplied page body, adds document metadata, and rewrites routes plus root-relative dynamic media paths for nested Astro story URLs.
- `src/lib/reference-pages.ts` maps Claude's filenames to Astro routes.
- `src/reference-pages/*.html` contains the editable working copies of Claude's inline-style pages.
- `public/support.js` runs Claude's carousel, accordions, signup state, archive expansion, folios, reading progress, and share controls.
- `public/covers-data.js` hydrates all 48 historical covers with root-relative asset paths; `public/doc-page.js` supplies the fixed-format source canvas retained at `src/reference-pages/archive-poster.html` for future PDF regeneration.

The original source ZIP and imported source-review copy should remain unchanged. Make newsletter edits in `app/`.

## Approved Media Exceptions

- RIMFAX uses the NASA/JPL-Caltech Perseverance and Ingenuity image.
- Commencement uses the derivative of `DSC08208.jpg`.
- Gilles Peltzer uses `P3180036` as the `kelso-dunes.jpg` lead and displays all 11 addendum photographs in the field archive and lightbox.
- BALBOA displays all 11 source-document frames in the mission album and lightbox; the hero caption uses the source document's September 7, 2022 wording.
- The homepage field mosaic uses six approved 2026 highlights; the Field Highlights page contains all ten selected photographs.
- The full Spring 2026 field dispatch page uses the 12-image source-document gallery supplied in the September 14 addendum.

Do not replace these with Claude's earlier source selections during a source refresh.

The Peltzer and BALBOA lightboxes deliberately keep their controls pinned to the viewport and use a transparent data-URI fallback for a closed lightbox. Preserve both details when editing the inline page logic.

## Editing Workflow

1. Edit the relevant file in `src/reference-pages/` for a Claude-designed page.
2. Add new media under `public/assets/` using a descriptive filename; do not overwrite unrelated originals.
3. Keep final captions, credits, quotations, and article copy marked pending until approved source material exists.
4. Review desktop and mobile layouts in the browser.
5. Run `pnpm check` and `pnpm build`.

## Fonts And External Runtime

Claude's pages load Newsreader, IBM Plex Sans, and IBM Plex Mono from Google Fonts. `support.js` also loads its React runtime as supplied by Claude. If either external request is blocked, the page can fall back or fail to initialize, so verify these requests in the intended hosting environment before launch.

## QA

The current visual and interaction results are documented in `../design-qa.md`. The final gate is `final result: passed`.
