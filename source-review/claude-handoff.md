# Claude Handoff: EPSS 2026 Newsletter

Use this packet as the source-of-truth layer for newsletter consolidation. The earlier checklist was useful as a risk list, but several "missing" items were only missing because Claude could not access Google Drive, Gmail, or Box.

## What Claude can safely do

- Draft or refine site copy only from materials listed as available, partial, or explicitly approved as placeholder.
- Use `source-status.csv` to decide whether a story should be treated as ready, partial, proposed, or blocked.
- Use `media-manifest.csv` to choose candidate media pools, but do not invent image filenames, captions, credits, or people identities.
- Use `open-questions.md` as the only escalation list for Emmanuel/team follow-up.
- Keep internal planning language out of public site copy unless it is visibly marked as a preview/admin artifact.

## Recommended output formats

- For editorial work: Markdown story drafts with source notes at the bottom.
- For site data: JSON records that mirror `app/src/content/issues/2026.json`.
- For media planning: CSV rows keyed by stable asset group and article id.
- For human image selection: contact sheets in PDF or HTML with filenames, source folder, and proposed use.
- For implementation handoff: copied/compressed images in `site-ready-assets/` plus alt text, caption, credit, and focal-point notes.

## Current priorities

1. Remove "Hilke missing" from any outgoing email or task list. Hilke's PDF is present.
2. Treat Commencement and Field media as available source pools, not missing assets.
3. Ask about true content blockers: John He/iCloud, RIMFAX, Craig Manning, Suburban full copy, undergrad fellowships, award host details, and Ben-owned pieces.
4. Build contact sheets before choosing hero, commencement, and field images.
5. Once final media is selected, normalize filenames and update the site JSON/Markdown.

## Suggested Claude prompt

```text
Use the files in source-review/ as authoritative for the EPSS 2026 newsletter. Do not rely on the old missing-media checklist except through source-review/claude-output-crosswalk.md. For each section you touch, cite the relevant row in source-status.csv or media-manifest.csv. If a material is marked available, do not ask the team for it again; instead identify whether the next step is writing, image selection, caption confirmation, local extraction, or final approval.
```

