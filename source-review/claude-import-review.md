# Claude ZIP Import Review

## 2026-09-10 correction

The deployment target has changed since the original 2026-09-07 import note below. The authoritative review-build implementation is now:

```text
source-review/Claude outputs/epss-newsletter-source/
```

This is the Vite multi-page wrapper around Claude's `.dc.html` design. The Astro app remains useful as source-review/work-in-progress material, but it is not the target for the internal review deployment.

Claude's `ADDENDUM-2026-09-10.zip` was imported into:

```text
source-review/Claude outputs/ADDENDUM-2026-09-10/
```

The addendum's Vite pages, assets, and `vite.config.js` have been applied to the authoritative Vite source. The matching `.dc.html` exports have also been copied into `source-review/claude-export/` for direct source comparison.

The older notes below are retained as history and should not be read as current deployment direction.

## 2026-09-10 cleanup after addendum

After checking the production spreadsheet, the authoritative Vite source now uses the sheet-backed Edwin Schauble draft title, "Investigating Earth's History with Isotopic Fingerprints." Allen Glazner's supplied title, "When the evidence stops fitting," is treated as the working display title instead of a separate title blocker.

Other local cleanup completed: Lizzie Su's portrait filename is normalized to `lizzie-su.jpeg`; the issue page no longer describes the separate Geophysics 136C placeholder as John He's completed field dispatch; the RIMFAX feature summary is visibly marked as pending team review; the Peng Ni gallery no longer repeats the hero and lab-team images in the gallery grid; and the Vite build is configured with a relative base for project-page deployment.

The remaining launch blockers are tracked in `source-review/launch-open-items-2026-09-10.md`.

Imported on: 2026-09-07

Source ZIP:

```text
/Users/abijahsimon/Downloads/UCLA EPSS Newsletter Redesign.zip
```

Local branch:

```text
codex-claude-redesign-import-20260907
```

## What was staged

Claude's static export was copied into:

```text
source-review/claude-export/
```

This gives us the `.dc.html` pages, handoff notes, support runtime, and bundled visual assets as a reference for porting.

## What was intentionally excluded

The import excluded:

- `.thumbnail`
- `uploads/`

The excluded `uploads/` folder contained transient generated files, a donor XLSX copy, and a Gmail HTML export. Those should not be treated as deployable site assets.

## Important merge decision

Claude's export is not a direct replacement for the Astro app. The deployable site lives under:

```text
app/
```

The Claude pages are generated `.dc.html` artifacts with inline styles, custom artifact markup, and `support.js`. They should be used as content/design reference only, then ported deliberately into:

```text
app/src/content/issues/2026.json
app/src/content/articles/
app/src/pages/
app/src/styles/newsletter.css
app/public/assets/
```

## Recommended next step

Port only the grounded, source-backed pieces first:

1. Art and Science
2. Awards
3. BALBOA
4. Commencement
5. Donors and Endowments
6. Gerald Schubert
7. Gilles Peltzer
8. Steve Joy
9. Peter Chi

Keep RIMFAX, Lizzy Su, Edwin Schauble, Craig Manning, Suburban, John He/136C, and unresolved giving details marked as forthcoming or review-only until their sources are confirmed.
