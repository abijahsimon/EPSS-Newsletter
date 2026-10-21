# Consolidation Workflow

Use this sequence to move from scattered sources to final site assets.

## Phase 1: Source truth

1. Keep `source-status.csv` updated as the canonical editorial inventory.
2. Mark each item as one of: Available, Partial, Proposed only, Waiting for material, Blocked, Dropped.
3. Store unresolved questions only in `open-questions.md`.
4. Do not let a source be both "available" and "missing"; instead separate copy, media, captions, and approval.

## Phase 2: Media review

1. Download or export only the candidate media pools that are actually in scope.
2. Generate contact sheets for:
   - Commencement
   - Field / Geophysics 136C
   - Peltzer
   - Jewitt/Hilke artwork
   - BALBOA figures
3. On each contact sheet, show filename, source folder, dimensions, and proposed use.
4. Select final images with human review before renaming/compressing.

## Phase 3: Site-ready assets

1. Copy selected images into `app/public/assets/images/2026/<section>/`.
2. Use descriptive lowercase filenames, for example `commencement-class-portrait-dsc08208.jpg`.
3. Create or update a per-image metadata table with:
   - original filename
   - source folder
   - final site path
   - alt text
   - caption
   - credit
   - rights/permission note
   - crop/focal point note
4. Compress large JPEGs and generate WebP if the site build supports it.

## Phase 4: Content assembly

1. Convert available copy into article Markdown or issue JSON entries.
2. Remove internal planning language from public sections.
3. Preserve source links in comments or internal notes, not public copy.
4. Replace placeholder images only after selected media has metadata.

## Phase 5: QA

1. Run the Astro build.
2. Check desktop and mobile screenshots.
3. Verify that no image is hotlinked unless intentionally external.
4. Verify captions/credits render where required.
5. Check keyboard navigation and visible focus.

