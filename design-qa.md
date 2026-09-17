# EPSS Newsletter Design QA

## Comparison Target

- Claude source: `source-review/Claude outputs/epss-newsletter-source/`, with the September 9 overlay at `source-review/Claude outputs/epss-newsletter-addendum/` and the complete September 14 addendum at `source-review/Claude outputs/ADDENDUM-2026-09-14/`.
- Addendum comparison render: Claude's overlaid Peltzer and BALBOA pages were rendered at `http://127.0.0.1:4338/` during QA.
- Astro implementation: `app/dist/`, rendered at `http://127.0.0.1:4336/`.
- Reference integration: the supplied inline-style page markup is rendered directly through Astro; route and approved-media paths are rewritten without restyling the pages.
- Pages checked: homepage, all 14 story routes, EPSS Through Deep Time, and the archive poster.

## Matched Evidence

- Desktop viewport: 1280 x 720.
- Mobile viewport: 390 x 844.
- Homepage top comparison: `output/playwright/home-top-reference-vs-astro.jpg`.
- Table of contents comparison: `output/playwright/toc-reference-vs-astro.jpg`.
- Desktop article matrix: `output/playwright/route-qa/desktop-page-comparisons.jpg`.
- Mobile article matrix: `output/playwright/route-qa/mobile-page-comparisons.jpg`.
- Mobile homepage comparison: `output/playwright/home-mobile-reference-vs-astro.jpg`.
- Peltzer addendum comparisons: `output/playwright/addendum-peltzer-desktop-comparison.jpg` and `output/playwright/addendum-peltzer-mobile-comparison.jpg`.
- BALBOA addendum comparisons: `output/playwright/addendum-balboa-desktop-comparison.jpg` and `output/playwright/addendum-balboa-mobile-comparison.jpg`.
- September 14 browser comparison: archive, archive poster, and Allen Glazner were compared directly against Claude's supplied pages at matching 1280 x 720 and 390 x 844 viewports.

## Findings

- No actionable P0, P1, or P2 visual mismatch remains.
- The homepage has the complete 14-section Claude structure and the exact 16-row, two-column table of contents.
- Seven article pages have a mean first-viewport pixel difference of `0.0000` at both tested viewport sizes.
- The updated BALBOA page matches Claude's addendum at desktop and mobile sizes.
- The updated Gilles Peltzer page matches Claude's addendum visually; its archive credit and fundraising sentence retain the two earlier source-safety corrections.
- Newsreader, IBM Plex Sans, and IBM Plex Mono loaded successfully in the browser. Typography, spacing, rules, colors, image crops, and responsive reflow match the supplied source.
- All 11 production routes have meaningful browser titles, no horizontal overflow, and no broken images after lazy media is loaded.
- Homepage interactions passed: carousel step and play state, research accordions, signup confirmation, and expansion from 12 to all 48 archive covers.
- Article share controls passed and display `Link copied`.
- Peltzer and BALBOA each render 11 unique gallery assets with no nested-route path failures.
- Both lightboxes passed click, Close, Escape, previous/next button, and left/right arrow-key checks. Their controls remain pinned at 1280 x 720 and 390 x 844, and the transparent data-URI fallback remains in the built output.
- Browser console: no errors.
- The September 14 archive and five new article pages have no broken images or horizontal overflow at desktop and mobile sizes.
- The archive hydrates all 48 cover images from root-relative paths. The poster uses the supplied fixed-format canvas and contains no broken media.
- John He's 12-image gallery lightbox opens the correct root-relative asset and its pinned Previous, Next, and Close controls remain usable at the mobile viewport.

## Approved Differences

- RIMFAX uses `/assets/images/2026/rimfax/perseverance-ingenuity-mars-nasa-jpl.jpg` with the NASA/JPL-Caltech treatment.
- Commencement uses the approved `DSC08208.jpg` derivative at `/assets/images/2026/commencement/commencement-class-2026-geology-building.jpg`.
- Gilles Peltzer uses the approved `P3180036` frame as `kelso-dunes.jpg` and includes all 11 addendum photographs in the archive/lightbox.
- The Peltzer hero credit reads `From the EPSS-262 field archive; photographer to confirm` instead of Claude's `Photo source: ???`, and unresolved fundraising-match dates remain unpublished.
- BALBOA uses the source document's corrected hero caption: `BALBOA LDB (Long Duration Balloon) flight test on 7 September 2022, from Fort Sumner, New Mexico.`
- The field mosaic uses six approved 2026 highlights and links to the Field Highlights page containing the complete ten-image selected set.
- Unverified Chair and RIMFAX quotations were replaced with explicit forthcoming/source-pending language while preserving the source layouts.
- Internal `.html` links were rewritten to the Astro `/stories/.../` routes.
- Page titles and descriptions were added in the document head; this has no visual effect.

## Verification

- `astro check`: 0 errors; 2 informational hints in Claude's generated `public/support.js`.
- `astro build`: 17 static pages generated successfully.
- Desktop and mobile browser matrix: 0 broken images and 0 horizontal-overflow failures.
- Addendum media checksum: all 22 supplied files match the imported public assets.
- Obsolete `field-instruction.jpg`: absent from the app; `thermal-print.jpg` is used instead.
- Archive expansion: 48 covers rendered and loaded.
- September 14 archive page: 48 of 48 cover images loaded after lazy-load activation, with no unresolved template text.
- September 14 new story pages: 0 broken images and 0 horizontal-overflow failures at 1280 x 720 and 390 x 844.
- Final local preview: `http://127.0.0.1:4336/`.

## Remaining Editorial Work

- P3: replace forthcoming/source-pending text when final Chair, RIMFAX, Geophysics 136C, Lizzie Su, Allen Glazner, Edwin Schauble, Peng Lab, and Craig Manning materials arrive or receive approval.
- P3: confirm photographer credits for the Peltzer and BALBOA archives. Commencement-day photo credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson.
- P3: confirm the names for `instrument-b.jpg` before naming its subjects, and obtain a PNG or JPEG export of BALBOA's 40 MCF balloon-gore illustration if it should be published.

final result: passed
