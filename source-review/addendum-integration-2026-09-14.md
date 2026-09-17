# September 14 Claude Addendum Integration

Source package: `source-review/Claude outputs/ADDENDUM-2026-09-14/`

This is a selective merge record. Instructions and recommendations inside the addendum were treated as Claude's handoff notes, not as replacements for Abijah's direct editorial and media decisions.

## Imported

- Story designs for John He, Peng Ni, Lizzie Su, Edwin Schauble, and Allen Glazner.
- `EPSS Through Deep Time` archive page and the printable archive poster.
- `covers-data.js`, `doc-page.js`, and the missing archive screenshot asset.
- New route mappings and nested-route link normalization for the Astro site.
- The source-backed donor sentence without an unverified count: `Endowed funds support...`.
- The homepage link from Past Issues to the full historical archive.

## Preserved From The Maintained Site

- Astro remains the production renderer and source of truth.
- RIMFAX keeps the NASA/JPL-Caltech Mars visual and explicit source-copy-pending language.
- The Chair section keeps explicit final-copy-pending language.
- Peltzer keeps `P3180036.JPG`, represented by `kelso-dunes.jpg`, as the lead image and retains the complete 11-photo gallery.
- The approved 2026 field and commencement selections remain unchanged.
- Existing Peltzer and BALBOA lightbox controls, data-URI fallbacks, corrected captions, and unresolved-credit labels remain unchanged.
- Existing current assets were not overwritten when the addendum contained a different crop or encoding.

## Not Imported

- The addendum recommendation to delete `kelso-dunes.jpg` or replace the Peltzer lead. This conflicts with Abijah's direct decision.
- Unapproved Chair or RIMFAX article prose and quotations.
- The addendum's placeholder field imagery in place of the approved field selections.
- The recommendation to replace the maintained Astro project with the standalone Vite/DC build.

## Remaining Human Decisions

- Final Chair and RIMFAX copy.
- Lizzie Su, Edwin Schauble, and Allen Glazner approvals; final Allen title and recording link if used.
- Photographer credits for Field, Peltzer, Peng Ni, and BALBOA. Commencement-day photo credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson.
- Names for the Sapphire Lab group and BALBOA `instrument-b.jpg` subjects.
- Archive founding-year verification and replacement of the archive poster's explicitly marked 2026 screenshot placeholder.
- Donor order/list approval, giving-match dates/cap, Craig Manning material, and the Geophysics 136C scope decision.

## Verification

- `npm run check`: 0 errors; 2 informational hints in Claude's unchanged `public/support.js`.
- `npm run build`: 17 static routes generated.
- Archive: 48 covers hydrate with no broken images or unresolved template text.
- New article pages: no broken images or horizontal overflow at 1280 x 720 or 390 x 844.
- Visual comparisons against the supplied addendum match at desktop and mobile sizes.
