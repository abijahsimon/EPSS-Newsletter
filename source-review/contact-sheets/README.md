# Contact Sheets

This folder is for generated visual review sheets. Generated sheets are local-only by default and ignored by git because they contain source media.

Run this after placing raw downloads in `source-review/raw-media/`:

```bash
python3 source-review/scripts/build_contact_sheets.py
```

Expected generated files:

- `<group>-sheet.jpg`
- `media-index.csv`

Contact sheets are review artifacts. Final selected images should be copied separately into `app/public/assets/images/2026/<section>/` with metadata.

Current generated sheets:

1. `art-science-sheet.jpg`
2. `balboa-sheet.jpg`
3. `commencement-sheet.jpg`
4. `field-sheet.jpg`
5. `peltzer-sheet.jpg`
6. `media-index.csv`

Each sheet should show:

- thumbnail
- original filename
- source location
- pixel dimensions
- recommended use
- caption/credit status
