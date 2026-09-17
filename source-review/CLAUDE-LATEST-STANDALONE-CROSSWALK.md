# Claude Latest Standalone Crosswalk

Reviewed: September 8, 2026

## Package identity

- Download: `UCLA EPSS Newsletter-latest.zip`
- SHA-256: `c1e66e7e52d669fecd874a3857f63dd3525ac49ccb0e499f0c8c4faf2048c2a1`
- Format: eleven self-contained HTML pages with bundled scripts, styles, and images
- Production use: visual and content reference only

This is not the editable website project or a Git branch. Do not copy these HTML files over the maintained Astro app. The useful design patterns can be ported selectively while the Astro content, media decisions, routes, and source controls remain authoritative.

## Page inventory

- `EPSS Annual Newsletter 2026.html`
- `Article - Art and Science.html`
- `Article - Awards 2026.html`
- `Article - BALBOA.html`
- `Article - Commencement 2026.html`
- `Article - Donors and Endowments.html`
- `Article - Gerald Schubert.html`
- `Article - Gilles Peltzer.html`
- `Article - Peter Chi.html`
- `Article - Steve Joy.html`
- `Article Page.html`

## Homepage decisions

| Claude section | Decision | Production handling |
| --- | --- | --- |
| Header and navigation | Port selectively | Keep the compact editorial treatment. Retain only links to sections that exist in the maintained app. |
| Three-image hero | Hold | The composition is useful, but the final 2026 hero or cover image has not been approved. Do not promote archival images as the final annual hero. |
| Chair letter card | Hold | Keep visibly forthcoming or omit until final chair copy and an approved chair image are supplied. |
| Table of contents | Port | The scannable issue guide is useful and matches the maintained app's route structure. |
| RIMFAX feature | Port visual only | Keep the NASA/JPL-Caltech Martian image. Do not use Claude's unsourced body copy or pull quote. Source copy is still pending. |
| Signals from the labs | Port layout | BALBOA is source-backed. Peng and other proposed updates remain forthcoming or hidden until source copy exists. |
| Endowed chairs | Port layout and approved image | Use the installation image and verified donor/endowment source. Confirm any changing figures or campaign language before publication. |
| Featured People | Port layout cautiously | The three-column editorial grid is strong. Lizzy Su, Allen Glazner, and Edwin Schauble must remain forthcoming or be hidden until their stories are confirmed. |
| Art and Science | Port | The maintained Astro article already contains the complete, source-backed eight-work gallery. |
| From the field | Port layout, replace content | Claude's mosaic still labels images as placeholders and uses archival images. Use the ten approved 2026 highlights in the maintained app instead. |
| Awards | Port layout | Use the source-backed awards article and retain its open confirmations. |
| Commencement | Port | `DSC08208.jpg` is the approved lead. `DSC08207.jpg` and `DSC08147.jpg` remain optional backups if obtained. |
| Farewells and memorials | Port layout cautiously | Steve Joy, Peter Chi, and Gerald Schubert have source-backed article pages. Do not imply portraits exist where they do not. |
| Giving | Port layout | The dark giving band and CTA structure are useful. Confirm match dates, cap, donor figures, and subscription destination before launch. |
| Past issues | Port | Keep the complete 48-cover archive already implemented in Astro. |

## Article decisions

| Article | Decision | Reason |
| --- | --- | --- |
| Art and Science | Keep Astro content and media | The maintained article has the full eight-work source set and gallery behavior. |
| Awards 2026 | Keep Astro content | Source-backed with known open confirmations. |
| BALBOA | Keep Astro content and figures | Source-backed DOCX content and extracted figures are already integrated. |
| Commencement 2026 | Keep Astro content and lead | The Claude page now agrees with the approved `DSC08208.jpg` lead. |
| Donors and Endowments | Keep Astro content | Preserve verified source language and open match details. |
| Gerald Schubert | Keep Astro content | Source-backed memorial content is already integrated. |
| Gilles Peltzer | Reject Claude media choice | Claude still leads with the spectrometer/playa image. Keep `P3180036.JPG` at the top and the other confirmed Peltzer images in the article gallery. |
| Peter Chi | Keep Astro content | Copy exists; use a no-image-safe presentation until a portrait is confirmed. |
| Steve Joy | Keep Astro content | Copy exists; use a no-image-safe presentation until a portrait is confirmed. |
| Generic Article Page | Do not publish | Template reference only. |

## Best next order

1. Use the maintained Astro preview as the production review surface.
2. Treat this standalone export as a visual reference, not another project to merge wholesale.
3. Review and approve the final annual hero, chair treatment, and public issue scope.
4. Supply final captions and credits for Field, Peltzer, Art and Science, and BALBOA. Commencement-day credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson; only caption/details may still need review if the frame changes.
5. Resolve or remove proposed stories that still lack source copy.
6. Port any remaining approved visual refinements into Astro and rerun build, responsive, link, and accessibility checks.
7. Commit and push only after explicit approval.
