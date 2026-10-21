# TO BE CHECKED — EPSS Newsletter 2026

Open questions, source conflicts, and unverified details in the 2026 digital issue.

**Last updated: 2026-09-07.** This list has been reconciled against the authoritative
handoff packet in `source-review/` (`source-status.csv`, `media-manifest.csv`,
`claude-output-crosswalk.md`). Section 0 records items I had previously listed as
missing that are in fact **available** — those should not be chased with the team.

---

## 0. Corrected — previously listed as missing, actually available

These were false alarms in my earlier checklist, caused by my not having Drive, Box,
or Gmail access. Per `claude-output-crosswalk.md`, do **not** email anyone about these.

| Item | Reality | Next step |
|---|---|---|
| **Hilke Schlichting's art & science answers** | Present all along in Drive PDF `1M-IC_733TQPk8YkWup4yOBlr372ywpC0`. **Now read and published** — the Art & Science page is a complete two-voice pair | Artwork images still need extracting from the PDF |
| **Gerald Schubert memorial** | ✅ **Built 2026-09-07** from Dave Bercovici's obituary. My earlier "folder returns nothing" report was a *listing* failure, not an access failure — the packet supplies direct file IDs and those read fine | Review the page; confirm Ben's version is final and who approves it |
| **Commencement photographs** | Not missing — large pools in Drive (12+ named files) and Box (Valeria/Zachary sets) | `DSC08208.jpg` is selected; credit confirmed as Valeria Jaramillo Hernandez and Zachary Lacson. Confirm caption/details only if the selected frame changes |
| **Field mosaic photographs** | Not missing — Box `field-2026` and `epss-103a-2026` hold 26+ named JPGs plus trip ZIPs | Select **landscape** candidates, confirm captions |
| **Endowed chairs installation photo** | Public EPSS image exists at 1600×900; credit Penny Jennings, UCLA Division of Physical Sciences | Save locally rather than hotlinking (needed for PDF export) |
| **Peltzer field photographs** | Not missing — `peltzer_pics.zip` (~26.6 MB) in Drive | Extract and select; captions already transcribed into the article |
| **Jewitt paintings** | Not missing — images and captions are inside the Drive PDF | Extract image assets |
| **BALBOA figures** | Likely embedded in the DOCX (file size suggests it) | Download raw DOCX and extract; confirm figure credits |
| **Faculty awards copy** | ✅ **Read and applied 2026-09-07.** Contained a citation I had substantively wrong — see item 4a below | Done — review the rewritten faculty section |
| **Glazner lecture media** | Box has Favorites + Originals ZIPs | Select photos; recording/embed link is separately unconfirmed |

### Open on Schubert

| Item | Detail |
|---|---|
| Birth year | The obituary gives "age 86" on 31 August 2025, which means 1938 or 1939. **I have not stated a birth year** — the row and page both read "Died 31 August 2025 · aged 86". Supply the year if the archive should carry full dates |
| Approval owner | Per the packet: is Ben's memorial version final, and who signs off? |
| Reminiscences PDF | Linked as further reading. Should it instead supply pull-quotes or sidebar material? |

## 1. Real source conflicts (two documents disagree)

| # | Issue | Detail |
|---|---|---|
| 1 | Scholarship fund name | Commencement programme: "John W. & **France R. Hardin** Scholarship". Endowment spreadsheet: "John W. & **Frances R. Handin** Scholarship Fund". Needs source-of-truth confirmation |
| 2 | Degree count | I counted 65 candidates. **Sarah Marcum appears under both MS and PhD** — so it may be 64, or she may legitimately receive both. Verify against the programme before publication |
| 3 | Dean Skye Lewis degree | Programme reads "Geology (Ecology, Behavior, & Evolution\*)" under Bachelor of Science, with `*` marking the **major** — implying Geology is the minor. But he is listed among EPSS BS candidates. Restored as printed; needs a human answer |
| 4a | **Jean-Luc Margot citation — CORRECTED** | I had led with "Royal Academy of Belgium, April 2026." The source doc leads with two 2026–27 honors: a **Fulbright-Tocqueville Distinguished Chair** and an **International Francqui Professor Chair**; the Royal Academy election is an addition. Now fixed on both the awards page and the issue roll |
| 4b | **Podcast spelling** | The faculty awards doc spells it *"Unobtainium"* in its heading and *"Unobtanium"* in the link text. Using **Unobtainium**. One check needed |
| 5 | Candice Hansen-Koharcheck | Planning sheet says "Candace Hansen"; PSI remembrance says "Candice Hansen-Koharcheck". Using the source spelling — **confirm with stakeholders before publication** |

## 2. Real content blockers (genuinely awaiting people)

Per `open-questions.md`, this is the correct escalation list.

**Emmanuel / Ben status**
| # | Item | Status |
|---|---|---|
| 5 | Geophysics 136C article (John He) | Behind an iCloud Pages link. Needs Google Doc, Word, or PDF export. **Field media itself is available** |
| 6 | RIMFAX body copy | Ben to contact Paige and Cardarelli. Real blocker — page currently uses a working title and my own lede |
| 7 | Lizzy Su student feature | Proposed only; marked "Forthcoming" on the site |
| 8 | Edwin Schauble faculty feature | Proposed only; local portrait exists, body copy does not |
| 9 | Peng lab / PTRX / Sapphire | Proposed only — confirm still in scope |
| 10 | Craig Manning retirement | Waiting for material |
| 11 | Silver Suburban retrospective | Drive doc holds **only** Shanya Dinata's quote. Who owns the full copy? |
| 12 | Chair's letter | **Conflict:** planning sheet says "Not started"; 10 Aug meeting notes say "all done". Where does final copy live? |
| 13 | Jonathan Mitchell Eos features | Not started; confirm scope |

**Nanette / Jon / awards owners**
| # | Item |
|---|---|
| 14 | Undergraduate summer fellowships — recipients, project blurbs, mentors, photos |
| 15 | Is there a second 51 Pegasi b fellow besides Samuel Yee? |
| 16 | Faculty hosts for Danica Adams and Madeleine Kerr, if those should be listed |

**Emily / giving**
| # | Item |
|---|---|
| 17 | Exact field matching dates and cap — rendered as `[dates to confirm]` / `[cap to confirm]` on the site |
| 18 | Does she still want to add a sentence to the field page after seeing a preview? |

**Commencement owner**
| # | Item |
|---|---|
| 19 | Confirm the selected hero/group image and its caption/details if needed. The commencement-day photo credit is confirmed as Valeria Jaramillo Hernandez and Zachary Lacson |

## 3. Media: selection and extraction work (not requests)

These need internal work, not an email.

| # | Item | Work needed |
|---|---|---|
| 20 | **Hero carousel is soft** | Real implementation issue. The three images are 854×1103 **portrait** upscaled 1.7× into a wide crop. Fix by selecting landscape candidates from Box field folders — not by asking for files |
| 21 | Commencement ceremony photo | `DSC08208.jpg` selected; public credit should read "Commencement-day photographs by Valeria Jaramillo Hernandez and Zachary Lacson." |
| 22 | Field mosaic — 4 empty tiles | Landscape selection from `field-2026` / `epss-103a-2026` |
| 23 | Chairs installation photo | Save locally; caption and Penny Jennings credit already written |
| 24 | Jewitt (5) + Hilke (3) artworks | Extract from PDFs; all 8 captions already in place with exact titles, media, dates, dimensions |
| 25 | BALBOA figures (2) | Extract from DOCX; captions and citations already in place |
| 26 | Peltzer photographs | Extract ZIP; captions already in the article sidebar |
| 27 | Steve Joy and Peter Chi portraits | Still genuinely unconfirmed. Both pages use no-portrait-safe layouts |
| 28 | Archive covers 2024–2017 | Local PDFs exist for 2022–2025 only. **Low priority** — do not block the issue on this |

## 4. Copy I wrote that needs sign-off

My words, not the department's. Per the crosswalk, item 31 is the sharpest risk.

| # | Item |
|---|---|
| 29 | Chair's card blurb in the hero — invented pending Jon Aurnou's real letter |
| 30 | **Pull quotes on the RIMFAX and Endowed Chairs sections are mine, not sourced quotes.** Convert to paraphrase or remove before launch. (The Art & Science, Peltzer, Steve Joy and Peter Chi pull quotes ARE real — drawn from source documents) |
| 31 | Section deks throughout — fine for preview, need editorial sign-off |
| 32 | Giving impact panels — claims are drawn from real content elsewhere in the issue, but the framing is mine |
| 33 | Alumni contact route points to `epss.ucla.edu/alumni-information-form/` — confirm that is right |
| 34 | Working titles in use: "Beneath the Red Dust" (RIMFAX), "Investigating Earth's History with Isotopic Fingerprints" (Schauble) |

## 5. Out of scope unless the team reverses

Per meeting notes recorded in the crosswalk — **do not build, and do not ask about.**

| # | Item | Note |
|---|---|---|
| 35 | Welcome new faculty/staff | Meeting notes say likely dropped from 2026 |
| 36 | David Southwood lecture | Meeting notes say not in 2026 |
| 37 | Journal covers | Not started; only if stakeholders want a gallery module |
| 38 | EPSSSO highlight | Planning-only |
| 39 | QR postcards | Out of scope for site media |

## 6. Our own QA, not a source request

| # | Item |
|---|---|
| 40 | Screen-reader and keyboard-only walkthrough has **not** been done. Skip links, focus rings and reduced-motion are in place across all 10 pages, but that came from reading markup — not from testing with assistive technology |
| 41 | Print/PDF export untested at Letter and A4 |
