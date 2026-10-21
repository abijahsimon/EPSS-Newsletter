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
4. Use the staged official NASA/JPL Perseverance-on-Mars image for the RIMFAX visual slot, but keep the RIMFAX story copy blocked until source text arrives.
5. Use the rendered newsletter-cover folder for Claude's past-issues/archive module.
6. Build contact sheets before choosing any remaining hero, commencement, and field images.
7. Once final media is selected, normalize filenames and update the site JSON/Markdown.

## Latest Codex media pass

- BALBOA, Art & Science, Commencement, Field, and Peltzer source media have been copied/downloaded locally and reviewed through contact sheets.
- Small local preview assets have been staged for BALBOA, Art & Science, Commencement, Field, and Peltzer.
- BALBOA now has two inline figures extracted from the DOCX with source captions.
- Commencement, Peltzer, and Art & Science have hero candidates. Commencement-day credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson; final Peltzer, Art & Science, and detailed commencement caption approvals are still pending.
- Field has a contact sheet and one staged candidate, but the article text is still blocked behind iCloud.
- RIMFAX has a staged official NASA/JPL Perseverance-on-Mars image in `app/public/assets/images/2026/rimfax/` and `source-review/claude-transfer/design-assets/`; article copy remains blocked.
- The public endowed-chairs installation image has been saved locally and copied into `source-review/claude-transfer/design-assets/`.
- Public EPSS newsletter archive covers have been rendered into `source-review/claude-transfer/newsletter-covers/` with a CSV manifest.
- Additional Box downloads may still be useful for full Valeria/Zachary commencement coverage and EPSS 103A coverage.
- Use `source-review/claude-transfer/paste-this-into-claude.txt` as the current paste-ready Claude prompt.
- Use `source-review/site-ready-assets/selected-media-candidates.csv` as the selected media manifest.

## Suggested Claude prompt

```text
Use the files in source-review/ as authoritative for the EPSS 2026 newsletter. Do not rely on the old missing-media checklist except through source-review/claude-output-crosswalk.md. For each section you touch, cite the relevant row in source-status.csv or media-manifest.csv. If a material is marked available, do not ask the team for it again; instead identify whether the next step is writing, image selection, caption confirmation, local extraction, or final approval.
```
