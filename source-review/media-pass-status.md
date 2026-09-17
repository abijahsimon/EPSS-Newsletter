# Media Pass Status

Last updated: 2026-09-09

## Downloaded Into Local Intake

- `source-review/raw-media/peltzer/peltzer_pics.zip`
- `source-review/raw-media/balboa/The BALBOA Balloon Project_EPSS.docx`
- `source-review/raw-media/art-science/Jewitt painting.pdf`
- `source-review/raw-media/art-science/Art_and_Science_Hilke.pdf`
- `source-review/raw-media/commencement/DSC08208.jpg`
- `source-review/raw-media/field/DSC00126.JPG`
- `source-review/raw-media/field/death-valley-superbloom.zip`
- `source-review/raw-media/field/palos-verdes-day-trip.zip`
- `source-review/raw-media/field/san-diego-salton-sea-field-trip.zip`
- `source-review/raw-media/peng-ni/DSC01542.jpg`
- `source-review/raw-media/peng-ni/Sapphire_2.jpg`
- `source-review/raw-media/peng-ni/DSC01512.jpg`
- `source-review/raw-media/peng-ni/DSC01513.jpg`
- `source-review/raw-media/John-He/Field newsletter, Spring 2026.docx`
- `source-review/raw-media/John-He/image1.jpeg` through `image9.jpeg`
- `source-review/raw-media/John-He/image1.png` through `image3.png`

These raw files are intentionally ignored by git.

## Generated Local Review Outputs

- `source-review/contact-sheets/art-science-sheet.jpg` - 10 rendered PDF page candidates.
- `source-review/contact-sheets/balboa-sheet.jpg` - 12 embedded DOCX image candidates.
- `source-review/contact-sheets/commencement-sheet.jpg` - 1 loose commencement candidate from `DSC08208.jpg`.
- `source-review/contact-sheets/field-sheet.jpg` - 256 readable field candidates from the downloaded field trip zips and loose field image.
- `source-review/contact-sheets/John-He-sheet.jpg` - 24 candidates from the Spring 2026 field newsletter DOCX and its extracted media.
- `source-review/contact-sheets/peltzer-sheet.jpg` - 12 ZIP image candidates.
- `source-review/contact-sheets/peng-ni-sheet.jpg` - 4 image attachments from the Peng Ni email follow-up.
- `source-review/contact-sheets/media-index.csv` - generated index of extracted candidates.

The contact sheet script now skips invalid temporary Office lock files instead of failing the full indexing pass. Some older HEIC files in the field and Peltzer source archives still cannot be converted by the available local macOS image tools; the currently staged website media avoids those unreadable files.

Generated contact sheets and extracted working files are intentionally ignored by git because they contain source media.

## Local Preview Assets Staged

- `app/public/assets/images/2026/balboa/balboa-launch-vehicle.jpg`
- `app/public/assets/images/2026/balboa/balboa-meinel-aurora.png`
- `app/public/assets/images/2026/balboa/balboa-dayglow-gravity-waves.png`
- `app/public/assets/images/2026/balboa/balboa-magnetosphere-diagram.png`
- `app/public/assets/images/2026/art-science/art-science-hero-collage.jpg`
- `app/public/assets/images/2026/art-science/jewitt-forest.jpg`
- `app/public/assets/images/2026/art-science/hilke-morni.jpg`
- `app/public/assets/images/2026/commencement/commencement-class-2026-geology-building.jpg`
- `app/public/assets/images/2026/field/field-class-desert-outcrop.jpg`
- `app/public/assets/images/2026/peltzer/peltzer-death-valley-dunes.jpg`
- `app/public/assets/images/2026/peltzer/peltzer-field-map.jpg`
- `app/public/assets/images/2026/rimfax/perseverance-ingenuity-mars-nasa-jpl.jpg`
- `app/public/assets/images/2026/rimfax/rimfax-location-perseverance.jpg`
- `app/public/assets/images/2026/giving/chairs-installation-2026.jpg`
- `app/public/assets/images/2026/peng-ni/meteorite-field-team.jpg`
- `app/public/assets/images/2026/peng-ni/sapphire-lab-team.jpg`
- `app/public/assets/images/2026/peng-ni/meteorite-closeup-peng-ni.jpg`
- `app/public/assets/images/2026/peng-ni/meteorite-closeup.jpg`
- `app/public/assets/images/2026/field-spring-2026/valley-of-fire-fleet.jpg`
- `app/public/assets/images/2026/field-spring-2026/zion-dawn.jpg`
- `app/public/assets/images/2026/field-spring-2026/valley-of-fire-class.jpg`
- `app/public/assets/images/2026/field-spring-2026/painted-canyon-structural.jpg`
- `app/public/assets/images/2026/field-spring-2026/painted-canyon-whiteboard.jpg`
- `app/public/assets/images/2026/field-spring-2026/bishop-tuff-igneous-petrology.jpg`
- `app/public/assets/images/2026/field-spring-2026/ucla-light-painting.jpg`
- `app/public/assets/images/2026/field-spring-2026/field-notebook-lunch.jpg`
- `app/public/assets/images/2026/field-spring-2026/field-class-outcrop.jpg`
- `app/public/assets/images/2026/field-spring-2026/white-mountain-research-station-class.jpg`
- `app/public/assets/images/2026/field-spring-2026/field-sketching.jpg`
- `app/public/assets/images/2026/field-spring-2026/desert-ridge-class.jpg`

These are optimized derivatives for local preview and editorial review. They should not be pushed or published until final permission, caption, and credit decisions are confirmed.

Claude's 2026-09-10 addendum re-encoded three Spring field photograph derivatives from PNG to JPEG for the Vite review build:

- `app/public/assets/images/2026/field-spring-2026/painted-canyon-structural.jpg`
- `app/public/assets/images/2026/field-spring-2026/painted-canyon-whiteboard.jpg`
- `app/public/assets/images/2026/field-spring-2026/field-notebook-lunch.jpg`

The older generated PNG derivatives were removed from the public asset folders after those source references were updated.

The selected-candidate manifest is at `source-review/site-ready-assets/selected-media-candidates.csv`.

## Initial Visual Notes

- BALBOA: `image7.jpeg` is wired as a local hero candidate. `image2.png` and `image3.png` are wired as inline figures using captions found in the DOCX. `image1.png` is staged as a supporting diagram candidate, but its third-party adaptation credit needs review before public use.
- Art & Science: one Jewitt artwork crop and one Schlichting artwork crop are staged, plus a side-by-side local hero collage. Final crop and credit approval remain needed.
- Commencement: `DSC08208.jpg` is wired as the approved lead class photo. Nanette confirmed commencement-day photo credit as Valeria Jaramillo Hernandez and Zachary Lacson; Zachary Lacson is from the orders team. Detailed caption/person confirmation may still be needed. This is not a full Valeria/Zachary commencement pool review yet.
- Field: the three field-trip zips found in Downloads plus `DSC00126.JPG` have been copied into local intake and contact-sheeted. `DSC00126.JPG` is staged as a local field-class candidate, but the field article text remains blocked behind iCloud.
- Field newsletter: the attached `Field newsletter, Spring 2026.docx` is in raw intake. Its embedded images are extracted, optimized, and wired into `Dispatches from the Field` and the homepage field mosaic. Two HDR phone images initially rendered black after `sips` resizing; the site assets were regenerated with Pillow and visually rechecked.
- Peng Ni: the four Gmail attachments from Benjamin Paul's `potential peng ni photo` email are in raw intake, contact-sheeted, optimized, and wired into the Peng Ni story gallery and homepage research card. The email marked the story fully approved.
- New email story drafts: Lizzie Su, Edwin Schauble, and Allen Glazner are now included as published story pages and linked from the homepage. Benjamin Paul's `story links` email noted those three were still awaiting approval, and Allen's final title was still pending, so final editorial signoff remains needed before public launch.
- Peltzer: `P3180036.JPG` is wired as a local hero candidate; `IMG_1132.JPG` is staged as a supporting field-instruction candidate. Exact caption matching remains needed.
- RIMFAX: the preferred official NASA/JPL Perseverance-on-Mars image is staged locally and wired into the homepage card. An official NASA/JPL RIMFAX locator image is staged as an alternate supporting visual. Article copy remains blocked.
- Impact of Giving: the public endowed-chairs installation photo has been saved locally and copied into the Claude transfer design-assets folder. Credit is listed in `media-manifest.csv`.
- Archive covers: first-page cover JPGs were rendered from the public EPSS newsletter archive into `source-review/claude-transfer/newsletter-covers/`. Use `newsletter-covers-manifest.csv` for titles and source PDF URLs.

## Still Needed

- Final human selection for each story.
- Caption and credit confirmation for selected images other than the commencement-day photo credit, which is now confirmed.
- Optional additional Box downloads for the full commencement Valeria/Zachary pools and any missing EPSS 103A/loose field files.
- Optional cleaner extraction/cropping of additional art images from the rendered PDF pages.
- Sheet gaps still not fully resolved by local raw media: RIMFAX final story media/copy, Craig Manning, undergraduate summer fellowships, David Southwood, journal covers, and optional full EPSS 103A/field folders listed in the planning sheet.
