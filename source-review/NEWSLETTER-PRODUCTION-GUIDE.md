# EPSS 2026 Newsletter Production Guide

Last checked: September 14, 2026

## September 14 integration status

- Claude's complete September 14 addendum is archived intact at `source-review/Claude outputs/ADDENDUM-2026-09-14/`.
- The maintained Astro app now renders 17 production routes: the issue homepage, 14 story pages, the full historical archive, and a poster route that opens the downloadable PDF in the browser's native viewer.
- Five new story designs are integrated: John He's Spring 2026 field dispatch, Peng Ni, Lizzie Su, Edwin Schauble, and Allen Glazner.
- The 48-cover `EPSS Through Deep Time` archive and 24-by-36-inch poster PDF are integrated. The app's cover manifest normalizes image paths for nested Astro routes.
- The homepage keeps the source-safe Chair and RIMFAX pending language, the approved field selections, the NASA/JPL Mars image, and the approved commencement image.
- The addendum's instruction to remove the Peltzer Kelso Dunes lead was rejected. It conflicts with Abijah's direct confirmation that all photographs show Gilles and that `P3180036.JPG` should remain the lead.
- The addendum's unapproved Chair/RIMFAX prose was not imported.
- `npm run check` passes with 0 errors and 2 informational hints from Claude's unchanged runtime. `npm run build` generates all 17 routes successfully.
- Desktop and mobile browser checks found no broken images or horizontal overflow on the archive or five newly integrated article pages. All 48 archive covers hydrate correctly.

## What to do next

1. Review the maintained local Astro site at `http://127.0.0.1:4336/`, not the standalone HTML export. Check the five newly integrated story pages, the historical archive/poster, Peltzer, BALBOA, commencement, and the homepage archive link.
2. Confirm final photographer credits for Field, Peltzer, and BALBOA. Commencement-day photo credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson. The image selections themselves are now settled.
3. Resolve the highest-priority missing copy: RIMFAX, Chair's Note, John He's Geophysics 136C article, and any Ben-owned items that will remain in the issue.
4. Decide whether unresolved proposed stories should remain as forthcoming, be hidden, or be removed before launch.
5. Choose the final 2026 annual hero/cover image. The current hero is still a 2025 archive image.
6. After the final local review, explicitly ask Codex to commit and push the approved changes.

## What to send Claude now

Nothing else needs to be transferred to Claude for the current Codex integration. If Claude continues making design changes, send only this decision update:

> Please treat these media decisions as final: use IMG_6980, IMG_6960, IMG_5056, IMG_7839, IMG_6137, IMG_8033, IMG_6249, IMG_8211, IMG_5024, and IMG_5026 as field highlights; keep the remaining field pool accessible through the gallery/archive link. All photos in the Peltzer set do show Gilles. Keep P3180036.JPG as the Peltzer lead and make the remaining Peltzer photos available on the article page. Use DSC08208.jpg as the commencement lead; DSC08207.jpg and DSC08147.jpg are optional backups. Credit commencement-day photographs to Valeria Jaramillo Hernandez and Zachary Lacson. Do not replace these selections without asking. Keep RIMFAX copy blocked until source text is supplied.

For future Claude handoffs, send one complete project ZIP plus a short decision note like the one above. Do not resend raw Drive or Box folders unless Claude specifically needs to inspect a small, curated subset.

## Division of work

### Abijah

Primary role: editorial owner and bridge to people and services that require your account or judgment.

Current status:

- Sent Claude the source-review packet and media addendum.
- Asked Claude to use the NASA/JPL RIMFAX image, endowed-chairs photo, and newsletter covers.
- Downloaded and attached Claude's complete post-media ZIP.
- Approved ten field highlights: `IMG_6980`, `IMG_6960`, `IMG_5056`, `IMG_7839`, `IMG_6137`, `IMG_8033`, `IMG_6249`, `IMG_8211`, `IMG_5024`, and `IMG_5026`.
- Confirmed that the Peltzer set shows Gilles and that `P3180036.JPG` should lead the page.
- Approved `DSC08208.jpg` as the commencement lead, with `DSC08207.jpg` and `DSC08147.jpg` as optional backups.

Remaining tasks:

- Review the integrated local site and flag any preferred crop or ordering changes.
- Obtain human-owned copy, approvals, names, captions, and credits listed below.
- Approve the final issue scope: which proposed stories stay, become "Forthcoming," or are removed.
- Select a final annual hero/cover image.

### Claude

Primary role: design composition and rapid visual prototyping from the approved source packet and selected media.

Current status reported by Claude:

- Used the NASA/JPL Mars image for RIMFAX.
- Used the endowed-chairs installation photo.
- Rebuilt Past Issues from all 48 newsletter covers.
- Corrected the commencement image in Claude's design.
- Left the RIMFAX locator image unused, which is appropriate until article copy exists.
- Supplied the complete updated ZIP, including the design pages, media assets, archive covers, merge notes, and photo audit.
- Supplied the September 9 addendum with updated Peltzer and BALBOA pages, 22 media files, and the corrected BALBOA hero caption.
- Supplied the September 14 complete addendum with five additional story pages, two archive pages, archive runtime files, and a full page/asset manifest.

Remaining tasks:

- Keep RIMFAX body copy blocked.
- Keep proposed stories visually distinct from completed stories.
- Treat the field, Peltzer, and commencement choices above as locked if Claude continues making design changes.
- Do not switch the Peltzer lead back to `spectrometer-playa.jpg`; that change was based on an earlier mistaken assumption.
- Preserve the pinned lightbox controls and transparent data-URI fallback in the Peltzer and BALBOA page logic.

### Codex

Primary role: source verification, local media organization, production implementation, validation, and Git handoff.

Current status:

- Imported Claude's earlier redesign into the Astro project on branch `codex-claude-redesign-import-20260907`.
- Verified the live Google planning sheet and compared it with the local site.
- Staged source-backed BALBOA, Art and Science, Peltzer, commencement, RIMFAX, giving, and archive-cover assets.
- Consolidated relevant Downloads media into ignored raw and working folders.
- Built contact sheets and a smaller media-selection queue.
- Compared Claude's latest ZIP with the maintained Astro app.
- Added the ten approved field highlights as a homepage feature and gallery page.
- Kept `P3180036.JPG` as the Peltzer lead under the corrected `kelso-dunes.jpg` name and integrated Claude's 11-photo Peltzer archive.
- Integrated BALBOA's 11-frame mission album and the source-backed September 7, 2022 hero caption.
- Preserved Claude's September 9 addendum intact under `source-review/Claude outputs/epss-newsletter-addendum/`.
- Locked `DSC08208.jpg` as the commencement lead.
- Added the complete 48-cover archive with links to the past-issue PDFs.
- Integrated Claude's September 14 story pages for John He, Peng Ni, Lizzie Su, Edwin Schauble, and Allen Glazner.
- Integrated `EPSS Through Deep Time` and the printable archive poster while retaining Astro as the production source of truth.
- Preserved the complete September 14 addendum intact under `source-review/Claude outputs/ADDENDUM-2026-09-14/`.
- Verified 17 static routes, the 48-cover hydration flow, new article media, mobile responsiveness, and the field lightbox.

Remaining tasks:

- Apply any changes from Abijah's visual review.
- Remove public-facing production-status language once issue scope is final.
- Commit and push only after Abijah explicitly approves that step.

## Best order of work

1. Codex finishes build and visual validation of the integrated site.
2. Abijah reviews the field, Peltzer, commencement, and archive sections in the local preview.
3. Ben and other owners resolve the remaining copy and approval questions.
4. Abijah decides which unresolved stories remain visible and selects the annual hero.
5. Codex applies final captions, credits, content, and scope decisions.
6. Codex removes public-facing production-status language and runs final checks.
7. Abijah gives explicit approval to commit and push.
8. Codex commits, pushes, and prepares the pull request.

## Ben's remaining items from the live planning sheet

The sheet identifies five proposed/outreach items for Ben, two obituary items that already have source pages, and one final-review role.

| Item | Sheet status | What is available | Ben's remaining action | Placeholder check |
| --- | --- | --- | --- | --- |
| Lizzy Su student feature | Proposed; Ben | No confirmed article source | Confirm whether it is happening; obtain copy and photo if yes | Correct to show as "Forthcoming" or omit |
| Edwin Schauble faculty feature | Proposed; Ben | Local portrait only | Obtain or confirm article copy | Status is correct, but a real portrait should not look like a finished story without copy |
| RIMFAX, Paige and Emily | Proposed; Ben to contact Paige and Emily | Official NASA/JPL media; no article copy | Obtain source copy and confirm final title/scope | Correct: use the Mars image but keep copy "Forthcoming" |
| Peng PTRX/Sapphire/new lab and spring field video | Proposed; Ben | No source link or copy found | Confirm whether it remains in scope; obtain copy/video link if yes | Correct as a proposed research update |
| Allen Glazner alumni lecture | Proposed; Ben | Box lecture photos; no confirmed story or recording link | Confirm copy and the final recording/embed URL | Proposed status is correct; use a "Forthcoming" treatment until copy exists |
| Art Montana obituary | We have it; Ben | Published EPSS memorial page | Decide full article versus short memorial card and approve wording | It no longer needs a generic missing-copy placeholder |
| Ronald Shreve obituary | We have it; Ben | Published EPSS memorial page | Decide full article versus short memorial card and approve wording | It no longer needs a generic missing-copy placeholder |
| Gerald Schubert memorial | We have it; memorial written by Ben; final review | Source obituary and reminiscences are available | Complete final review/approval | Current source-backed article treatment is appropriate |

Items that should not be routed to Ben by default: Craig Manning retirement material, undergraduate fellowship details/photos, Chair's Note, John He's 136C article export, and giving-match dates/cap.

## Current placeholder audit

Correct or appropriately cautious:

- RIMFAX: official image available; story copy still marked forthcoming.
- Lizzy Su, Peng Group, and Jonathan Mitchell: proposed or no source, so placeholder treatment is appropriate.
- Geophysics 136C: the approved field photos are now presented as a gallery, while the article source remains behind the iCloud link.
- Undergraduate summer fellowships: names, blurbs, mentors, and photos remain incomplete.
- Journal Covers: no source set has been confirmed. This is separate from the newsletter-cover archive.
- Commencement: the local site uses the approved `DSC08208.jpg` class image.
- Gilles Peltzer: `P3180036.JPG`, now named `kelso-dunes.jpg`, leads the page; all 11 addendum photographs appear in the archive and lightbox.
- Past Issues: all 48 covers from Claude's package are now in the maintained site archive.

Needs correction or an editorial decision:

- Annual hero: still uses a 2025 archive landscape and needs the final 2026 cover/theme image.
- Chair's Note: uses a generic faculty portrait. Use a confirmed chair image or a no-image forthcoming treatment.
- Edwin Schauble and Allen Glazner: real portraits currently make unconfirmed stories look more complete than they are. Add a clear forthcoming treatment or hide them.
- Steve Joy and Peter Chi: article copy exists, but both cards use the same generic community image. A clean no-image layout is better unless portraits are found.
- Memorials: Art Montana and Ronald Shreve have source pages, while Candice Hansen-Koharcheck has a spelling/source decision. Decide individual cards versus one grouped module.
- Craig Manning: the sheet says material is still pending, but he is not clearly represented in the current local community cards.
- Public workflow copy: phrases such as "source-backed," "staged locally," and "still to resolve" are useful during production but should be removed before launch.

Claude's latest package has now been inspected. The archive, RIMFAX visual, giving visual, commencement replacement, Art and Science assets, and BALBOA assets are valid inputs. Claude's switch away from `P3180036.JPG` was not retained because Abijah has confirmed that the Peltzer photo set does show Gilles.

## Media review queue

### Selected and staged

- Field: ten approved highlights are in `app/public/assets/images/2026/field-highlights/`.
- Gilles Peltzer: `P3180036.JPG` is the `kelso-dunes.jpg` lead; all 11 supplied field-archive photographs are in `app/public/assets/images/2026/peltzer/`.
- BALBOA: all 11 source-document frames are in `app/public/assets/images/2026/balboa/`.
- Commencement: `DSC08208.jpg` is the approved lead.
- RIMFAX Mars image: NASA/JPL-Caltech.
- Endowed-chairs installation: Penny Jennings, UCLA Division of Physical Sciences.
- Newsletter archive: 48 cover JPGs, 1967-2025.

### Review next

- Field, Peltzer, and BALBOA: confirm final photographer credits; image selection is complete. Commencement-day photo credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson.
- BALBOA: confirm the four people in `instrument-b.jpg` before naming them, and obtain a PNG or JPEG export of the 40 MCF balloon-gore illustration if it remains in scope.
- Art and Science: `source-review/media-selection/04-art-science/` - approve artwork choices, captions, crops, and artist credit/signoff.
- BALBOA: `source-review/media-selection/05-balboa/` - approve launch image and source figures; confirm credits.

### Still to retrieve only if those sections remain

- Allen Glazner lecture photos and recording/embed link.
- Full Box EPSS 103A / Field 2026 pool, including a valid Palos Verdes download.
- Steve Joy and Peter Chi portraits.
- Undergraduate fellowship photos.
- Journal covers.
- Final 2026 cover artwork or annual hero image.

## Downloads consolidation status

Do not review the loose Downloads copies. The relevant files are already represented in the project:

| Downloads item | Consolidated location | Action |
| --- | --- | --- |
| Death Valley ZIP and extracted folder | `source-review/raw-media/field/` and `source-review/media-working/extracted/field/` | Ten approved highlights are staged; keep the remaining originals as the source pool |
| San Diego/Salton Sea ZIP and extracted folder | Same field folders | Ten approved highlights are staged; keep the remaining originals as the source pool |
| Palos Verdes ZIP | Raw field folder, but the 230-byte download is invalid | Re-download from Box only if more field choices are needed |
| `DSC00126.JPG` | Raw field folder and current local preview asset | Keep as an available field candidate |
| `DSC08208.jpg` | Raw commencement folder and current local preview asset | Approved as lead; credit confirmed as Valeria Jaramillo Hernandez and Zachary Lacson; confirm caption details if needed |
| `peltzer_pics.zip` | Raw and extracted Peltzer folders | Identity and selection confirmed; finish captions and credits |
| BALBOA DOCX | Raw BALBOA folder and extracted figures | Approve figures and credits |
| Jewitt PDF | Raw Art and Science folder; Hilke PDF is there too | Approve artwork/captions |
| Latest Claude redesign ZIP and September 9 addendum | Compared with and translated into the maintained Astro project | Keep as reference; future source refreshes must preserve the approved media choices and lightbox behavior |
| Donor spreadsheet and saved Gmail page | Source evidence, not image-selection media | No visual review needed now |

The originals in Downloads have not been moved or deleted.

## Primary resources

- Live planning sheet: https://docs.google.com/spreadsheets/d/1saDvrj2ksT0xZ8eWpx5JLLwf_-f4kUfLaxStNeAx-qo/edit?gid=0#gid=0
- Overall source status: `source-review/source-status.csv`
- Media source manifest: `source-review/media-manifest.csv`
- Human review folder: `source-review/media-selection/`
- Full contact sheets and index: `source-review/contact-sheets/`
- Raw intake, local only: `source-review/raw-media/`
- Extracted working media, local only: `source-review/media-working/`
- Claude transfer packets: `source-review/claude-transfer/`
- Latest Claude standalone decision map: `source-review/CLAUDE-LATEST-STANDALONE-CROSSWALK.md`
- Claude September 9 addendum: `source-review/Claude outputs/epss-newsletter-addendum/`
- Current issue content: `app/src/content/issues/2026.json`
- Current article files: `app/src/content/articles/`
- Current selected public assets: `app/public/assets/images/2026/`
- Approved field gallery assets: `app/public/assets/images/2026/field-highlights/`
- Confirmed Peltzer gallery assets: `app/public/assets/images/2026/peltzer/gallery/`
- Past-issue cover assets: `app/public/assets/covers/`
- Past-issue PDF links and labels: `app/src/data/newsletter-covers.ts`
- Current branch: `codex-claude-redesign-import-20260907`
- Existing branch comparison/PR page: https://github.com/abijahsimon/EPSS-Newsletter/pull/new/codex-claude-redesign-import-20260907

## Review of Claude's latest response

Latest download status:

- `UCLA EPSS Newsletter-latest.zip` was reviewed on September 8, 2026.
- It contains eleven self-contained HTML pages, not editable source code or a Git branch.
- Its SHA-256 is `c1e66e7e52d669fecd874a3857f63dd3525ac49ccb0e499f0c8c4faf2048c2a1`.
- Its homepage is a useful newer visual reference, but its field mosaic still contains placeholders and archival imagery, and its Gilles Peltzer page still uses the wrong lead image.
- The maintained Astro app remains the production source of truth. See `source-review/CLAUDE-LATEST-STANDALONE-CROSSWALK.md` for the exact port, hold, and reject decisions.

Good decisions:

- Correct official RIMFAX visual and credit.
- Correct local endowed-chairs image use.
- Correct 2026 commencement replacement.
- Useful 48-cover archive with a 12-cover initial view and an expand control.
- Correct decision not to place the technical RIMFAX locator image without supporting copy.
- Correct warning that named portraits should not imply completed stories.

Verified corrections and remaining cautions:

- Claude's complete ZIP and `PHOTO-AUDIT-AND-EMAIL-BRIEF.md` were received and inspected.
- Claude's September 9 addendum was merged: the Peltzer and BALBOA pages now include their 11-image albums and deliberate pinned lightboxes, and the corrected BALBOA caption is live.
- Claude's static `.dc.html` pages were treated as design reference, not as a replacement for the maintained Astro app.
- The field mosaic is filled with approved images, and a ten-photo gallery is available on the site.
- The user-approved `P3180036.JPG` is now the addendum's `kelso-dunes.jpg` lead; `spectrometer-playa.jpg` appears only as a supporting field photograph.
- Remaining media questions are the annual hero, Chair image treatment, optional portraits, detailed captions/credits for non-commencement images, artist signoff, and media for any proposed stories retained in scope.
- Commencement-day photo credit is now confirmed as Valeria Jaramillo Hernandez and Zachary Lacson.
- Exact giving-match dates/cap and the prior chair letter remain content approvals, not media problems.
- Candice/Candace spelling must be settled before adding that memorial to the page. The external source uses Candice Hansen-Koharcheck.
