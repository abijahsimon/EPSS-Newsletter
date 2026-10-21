# Claude Transfer Guide

Last updated: 2026-09-15

## Latest Codex Sync

After the September 14 addendum integration and poster-PDF work, give Claude:

```text
source-review/claude-transfer/PASTE-INTO-CLAUDE-2026-09-15.txt
source-review/claude-transfer/CODEX-SYNC-2026-09-15.md
```

The first file is a short paste-ready instruction. The second is the detailed change and decision record. Claude can compare against the pushed GitHub branch `codex-claude-redesign-import-20260907`; Claude should continue returning review output or downloadable files because its repository access remains read-only.

## Goal

Use Claude for editorial consolidation, copy review, and structured recommendations. Use Codex for repository changes, media extraction, local asset handling, validation, commits, and pushes.

Claude currently should not be treated as the system that owns the repo because its GitHub access is read-only. Ask Claude for review output, patches, tables, or a downloadable package. Then bring that output back to Codex for implementation.

## What Has Already Been Done Locally

- Claude's exported redesign was imported into the Astro site on branch `codex-claude-redesign-import-20260907`.
- The authoritative review build is now the Vite/DC source in `source-review/Claude outputs/epss-newsletter-source/`.
- The GitHub Pages review build is deployed from `gh-pages` at commit `92d943f`:
  `https://abijahsimon.github.io/EPSS-Newsletter/`
- Drive media was downloaded locally for BALBOA, Art & Science, and Peltzer.
- Likely field and commencement downloads were found in `Downloads` and moved into local intake.
- Contact sheets were generated for BALBOA, Art & Science, Commencement, Field, and Peltzer.
- Local preview media assets were created and wired into the site for:
  - BALBOA hero and two inline source figures
  - Art & Science hero collage
  - Commencement class-photo hero
  - Peltzer hero image
- John He's Spring 2026 field dispatch and the four Benjamin Paul story links are integrated into the Vite/DC review build.
- The Geophysics 136C article remains separate and source-blocked.
- Awards portraits were staged, normalized, and wired into the awards page wherever a matching portrait exists.
- `pnpm run build` passes for the Vite source.

These latest media changes are local and uncommitted. Raw media is intentionally ignored by git.

## What To Give Claude

For the newest all-in-one handoff, attach or share:

```text
source-review/claude-transfer/claude-review-handoff-20260910.zip
```

Paste this message into Claude:

```text
source-review/claude-transfer/next-message-to-claude.txt
```

For the John He and Benjamin Paul story-copy source folder only, use:

```text
source-review/claude-transfer/story-copy-20260909/
```

Paste this prompt into Claude:

```text
source-review/claude-transfer/story-copy-20260909/paste-this-into-claude.txt
```

This story packet contains the five story Markdown files that Codex prepared in the Astro hand-port, plus the relevant web-sized assets and `.dc.html` integration inventory. Those stories are already integrated in the review build; this folder is now a source/reference packet, not an instruction to rebuild from scratch.

Older 2026-09-07 transfer packet:

Best option: attach the generated transfer packet:

```text
source-review/claude-transfer/claude-transfer-packet-20260907.zip
```

The packet contains:

- Paste-ready prompt and this guide
- Source status tables
- Story packets
- Open questions
- Claude output crosswalk
- Media pass status
- Contact sheets for BALBOA, Art & Science, Commencement, Field, and Peltzer
- Selected media candidate manifest
- Small site-ready preview assets
- RIMFAX Mars rover image and endowed-chairs image in `design-assets/`
- Public newsletter archive cover JPGs in `newsletter-covers/`

It intentionally does not include raw Drive/Box media.

## What Claude Should Produce

Ask Claude for one or more of these formats:

- Markdown: edited story copy, notes, and open questions
- CSV: media selections, captions, credits, source filenames, and approval status
- JSON snippets: proposed changes to `app/src/content/issues/2026.json`
- Unified diff patches: only if Claude is making exact code/content recommendations
- Short handoff note: what changed, what is ready, what remains blocked

Do not ask Claude to create a branch or push to GitHub unless its access changes.

## What You Still Need To Do

1. Attach `claude-review-handoff-20260910.zip` to Claude.
2. Paste the contents of `next-message-to-claude.txt`.
3. Tell Claude to return a downloadable output or pasteable Markdown/CSV/JSON, not a GitHub branch.
4. Download anything Claude produces and give it back to Codex.
5. For any remaining Box media, download only the in-scope media pools and place them locally:
   - `source-review/raw-media/commencement/commencement-box-val-edited.zip`
   - `source-review/raw-media/commencement/commencement-box-zach.zip`
   - `source-review/raw-media/field/epss-103a-2026.zip`
6. Ask Codex to run the contact-sheet script again after adding more Box files.
7. After you approve final media, tell Codex explicitly to commit and push the selected changes.

Already prepared for Claude's design work:

- RIMFAX preferred visual: `source-review/claude-transfer/design-assets/perseverance-ingenuity-mars-nasa-jpl.jpg`
- RIMFAX alternate locator visual: `source-review/claude-transfer/design-assets/rimfax-location-perseverance-nasa-jpl.jpg`
- Endowed chairs visual: `source-review/claude-transfer/design-assets/chairs-installation-2026.jpg`
- Awards portrait crops: `source-review/claude-transfer/design-assets/awards-portraits/`
- Awards portrait source note: `source-review/claude-transfer/awards-portraits-20260910.md`
- 2025 field-trail reference image: `source-review/claude-transfer/design-assets/people-walking-into-infinity-2025.png`
- Past issue covers: `source-review/claude-transfer/newsletter-covers/`
- Cover source/index file: `source-review/claude-transfer/newsletter-covers/newsletter-covers-manifest.csv`

## Things Not To Transfer To Claude Yet

- Full raw Box folders
- Full raw Drive folders
- Huge image folders
- Unreviewed private downloads
- Anything Claude should not publish or embed

For Claude, contact sheets plus the selected-media CSV are usually enough. If Claude needs visual context, use the small preview assets in the transfer packet.

## Remaining Content Blockers

- Geophysics 136C / iCloud article text
- RIMFAX final source copy
- Craig Manning source copy
- Suburban full copy
- Undergraduate summer fellowship recipients/projects/photos
- Ming-Chang Liu portrait, if the awards page should show one
- Award host/advisor details and any required portrait credit language
- Chair note final editable copy
- Final captions and credits for selected media
- Commencement and field-photo contact-sheet review from Box
- UCLA/College postcard production specifications
