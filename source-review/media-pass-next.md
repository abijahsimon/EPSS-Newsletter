# Media Pass Next Steps

## What I can do now

- Verify Drive file existence and metadata.
- Build contact sheets from local raw files, ZIPs, DOCX embedded media, and PDF page renders.
- Create a selected-assets manifest with original filename, source, final site path, alt text, caption, credit, and crop notes.
- Move only selected, web-ready assets into `app/public/assets/images/2026/`.
- Wire selected images into article frontmatter and homepage cards.
- Render public newsletter PDF first pages into a compact cover folder for Claude.

## Current access limit

The Google Drive connector confirms the files exist, but it returns app transfer references instead of normal local filesystem paths. Box file tools are not installed/exposed in this session. For the actual image extraction step, the simplest reliable workflow is still: download the in-scope raw media into `source-review/raw-media/`, then let Codex process it locally.

## Already Downloaded From Drive

1. `peltzer_pics.zip`
   - Drive ID: `1FQMUjYtoapOBN0Wdgs2hwHU4srEXe5Zq`
   - Local intake path: `source-review/raw-media/peltzer/peltzer_pics.zip`

2. `The BALBOA Balloon Project_EPSS.docx`
   - Drive ID: `1jOeujjNVAWcLzsDALcquJUaF4w0s-IhH`
   - Local intake path: `source-review/raw-media/balboa/The BALBOA Balloon Project_EPSS.docx`

3. `Jewitt painting.pdf`
   - Drive ID: `1KixS8YECm9LHXLEWAfpgvgn4JIzgRz0j`
   - Local intake path: `source-review/raw-media/art-science/Jewitt painting.pdf`

4. `Art_and_Science_Hilke.pdf`
   - Drive ID: `1M-IC_733TQPk8YkWup4yOBlr372ywpC0`
   - Local intake path: `source-review/raw-media/art-science/Art_and_Science_Hilke.pdf`

## Also Found In Downloads And Moved Into Intake

1. `DSC08208.jpg`
   - Local intake path: `source-review/raw-media/commencement/DSC08208.jpg`
   - Notes: suggested commencement class photo from the source review.

2. `DSC00126.JPG`
   - Local intake path: `source-review/raw-media/field/DSC00126.JPG`
   - Notes: field-class image candidate.

3. `San Diego Salton Sea Field Trip-20260716T145032Z-1-001.zip`
   - Local intake path: `source-review/raw-media/field/san-diego-salton-sea-field-trip.zip`

4. `Palos Verdes Day Trip-20260716T145034Z-1-001.zip`
   - Local intake path: `source-review/raw-media/field/palos-verdes-day-trip.zip`

5. `Death Valley Superbloom-20260716T145036Z-1-001.zip`
   - Local intake path: `source-review/raw-media/field/death-valley-superbloom.zip`

## Download From Box Only If Needed

1. Commencement 2026, Val's edited photos
   - Put at: `source-review/raw-media/commencement/commencement-box-val-edited.zip`

2. Commencement 2026, Zach's photos
   - Put at: `source-review/raw-media/commencement/commencement-box-zach.zip`

3. Field 2026
   - Put at: `source-review/raw-media/field/field-2026.zip`

4. EPSS 103A 2026
   - Put at: `source-review/raw-media/field/epss-103a-2026.zip`

The current commencement sheet has only `DSC08208.jpg`; download the full Valeria/Zachary folders if one class photo is not enough. The current field sheet has 337 candidates from the downloaded field trip zips and one loose field image; download EPSS 103A or additional loose Box images if that course needs fuller coverage.

## Already Prepared For Claude

- RIMFAX preferred design image: `source-review/claude-transfer/design-assets/perseverance-ingenuity-mars-nasa-jpl.jpg`
- RIMFAX alternate locator image: `source-review/claude-transfer/design-assets/rimfax-location-perseverance-nasa-jpl.jpg`
- Endowed chairs image: `source-review/claude-transfer/design-assets/chairs-installation-2026.jpg`
- Newsletter covers: `source-review/claude-transfer/newsletter-covers/`
- Covers manifest: `source-review/claude-transfer/newsletter-covers/newsletter-covers-manifest.csv`

Use the preferred RIMFAX image for design placement; credit NASA/JPL-Caltech if it is published. Use the alternate locator only if Claude needs an instrument-specific supporting visual. Use the covers folder for Claude's past-issues design module.

## Contact Sheets

The current local intake has already been processed. Rerun after adding more Box files:

```bash
python3 source-review/scripts/build_contact_sheets.py
```

Expected outputs:

- `source-review/contact-sheets/<group>-sheet.jpg`
- `source-review/contact-sheets/media-index.csv`
- extracted working files under `source-review/media-working/`

Then use the contact sheets to pick final images. Do not move everything into the app. Only selected images with captions/credits should become site assets.
