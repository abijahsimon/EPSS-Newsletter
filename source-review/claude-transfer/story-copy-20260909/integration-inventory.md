# Integration Inventory - 2026-09-09

## What Happened

Codex first integrated the new John He and Benjamin Paul story copy into the Astro hand-port as Markdown article pages. The later deployment instruction clarified that the authoritative implementation is Claude's `.dc.html`/Vite source. Claude's 2026-09-10 addendum has now been merged into the Vite/DC source, so the new article pages are deployable in the review build.

## Already Present In Codex/Astro Source

- `app/src/content/articles/field-highlights.md`
- `app/src/content/articles/peng-ni.md`
- `app/src/content/articles/lizzie-su.md`
- `app/src/content/articles/edwin-schauble.md`
- `app/src/content/articles/allen-glazner.md`

These have been copied into this packet under `articles/`.

## Current Claude/Vite Status

The authoritative Vite source is:

```text
source-review/Claude outputs/epss-newsletter-source/
```

It currently has these top-level page entries:

- `index.html`
- `_article-template.html`
- `allen-glazner.html`
- `art-and-science.html`
- `awards-2026.html`
- `balboa.html`
- `commencement-2026.html`
- `donors-and-endowments.html`
- `edwin-schauble.html`
- `gerald-schubert.html`
- `gilles-peltzer.html`
- `john-he.html`
- `lizzie-su.html`
- `peng-ni.html`
- `peter-chi.html`
- `steve-joy.html`

These pages were built and deployed to the GitHub Pages review URL on 2026-09-09. The deployed build has 16 pages total because five addendum pages were added to the original 11-page set.

## Article Status Matrix

| Item | Status | Notes |
|---|---|---|
| John He Spring 2026 field dispatch | Integrated in deployable Vite/DC pages | Live as `john-he.html`. This is not the still-blocked Geophysics 136C article. |
| John He Geophysics 136C article | Not found / access blocked | The article source remains behind an iCloud Pages link or otherwise unavailable in this workspace. Field media exists, but the article copy is not integrated because no source text is available. |
| Peng Ni article | Integrated in deployable Vite/DC pages | Live as `peng-ni.html`; gallery display was adjusted so duplicate hero/lab images do not repeat in the main gallery grid. |
| Lizzie Su article | Integrated in deployable Vite/DC pages | Live as `lizzie-su.html`; filename and image references normalized from Lizzy to Lizzie. |
| Edwin Schauble article | Integrated in deployable Vite/DC pages | Live as `edwin-schauble.html`; uses draft title "Investigating Earth's History with Isotopic Fingerprints." |
| Allen Glazner article | Integrated in deployable Vite/DC pages | Live as `allen-glazner.html`; uses draft title "When the evidence stops fitting." |

## Recommended Claude Integration

No further integration is needed for the five addendum pages before internal review. Future Claude work should be limited to:

- replacing temporary or placeholder copy once final source arrives;
- applying approved credit/caption corrections;
- keeping John He's field dispatch separate from the unavailable Geophysics 136C article unless the editor explicitly decides to merge them.

## Other Things Still To Integrate Separately

- Craig Manning placeholder: integrated on the issue page using the user-specified 2008-2012 chairmanship dates; no further verification needed per the user.
- RIMFAX temporary copy: prepared in `source-review/claude-transfer/temporary-review-copy-20260909.md` from the requested JPL source only.
- Chair letter: screenshot transcript prepared in `source-review/claude-transfer/temporary-review-copy-20260909.md`; final editable source is still needed.
- Vanity URL request to Omar: Gmail draft created to Omar and CC Jonathan Aurnou.
- Signals from the Lab hero choice: documented in `source-review/claude-transfer/signals-media-decision-20260909.md`.
- Awards portraits: 14 normalized square portraits are prepared in `source-review/claude-transfer/design-assets/awards-portraits/` and wired into the awards page wherever available; source details are in `source-review/claude-transfer/awards-portraits-20260910.md`. Ming-Chang Liu remains missing/text-only.
- 2025 "people walking into infinity" extraction: staged as `source-review/claude-transfer/design-assets/people-walking-into-infinity-2025.png`, but only as a reference/backup asset.
- Archive route: use `/newsletter/archive/` as the final route under the planned `epss.ucla.edu/newsletter` structure.
- Postcard production specifications: still need confirmation from UCLA/College requirements.
- Deploy review build: completed from the Vite `.dc.html` source; QA completed on the deployed GitHub Pages URL.

## Repo Hygiene Note

The stale-export deletion list from the user should wait until anything still needed has been merged into the authoritative Vite source. This packet does not delete those directories.
