# Handoff — content pass, 7 September 2026

**Intended branch: `claude/content-pass-2026-09-07` (not `main`).**

> **I could not create the branch myself.** My GitHub access is read-only — I can
> list, read, search, and copy *from* a repo into this project, but I have no
> commit, push, or branch-creation tool. Nothing has been pushed. The branch has
> to be created by you or by Codex; commands are at the bottom of this note.

---

## 1. What changed

**Art & Science — completed as a two-voice pair.**
The `source-review/` packet's first priority was "Remove 'Hilke missing' from any
outgoing email or task list. Hilke's PDF is present." It was. I read Drive PDF
`1M-IC_733TQPk8YkWup4yOBlr372ywpC0` and built her half from her own written
answers: painting since childhood and never stopping, the parallel she draws to
children who stop asking fundamental questions, representational work from her
travels in Asia, acrylics on canvas with occasional pastels and gouache, and the
closing line now used as her pull quote — *"I paint for the same reason that I do
research: I simply enjoy doing it."* Her three works carry the artist's exact
titles, media, dates and dimensions. Both portraits were already in the project.

The page headline is now **"Two scientists who paint"**, because the contrast
between them is the story: Jewitt started twenty years ago with no background;
Schlichting never stopped.

**Corrected my own invention.** The issue page described this as "built from this
summer's interviews." Both artists supplied *written* answers. Fixed.

**Faculty awards — rewritten from source.** Drive doc
`11h4yT3zj6ViXP-IpMHT_wMmWlxEZaRBmGBDl9CSaEGI` was marked available in
`source-status.csv` and I had not read it. It contained a citation I had
**substantively wrong**:

> I had Jean-Luc Margot's entry as "Royal Academy of Belgium, April 2026." The
> source leads instead with two major international honors for 2026–27 — a
> **Fulbright-Tocqueville Distinguished Chair** and an **International Francqui
> Professor Chair** — taking him to the Paris Observatory, the University of
> Nantes and four Belgian universities, for research on the rotation and interior
> structure of Venus and icy moons in support of ESA's EnVision mission. The Royal
> Academy election is an *addition* to those, alongside being named a
> Corresponding Astronomer of the Royal Observatory of Belgium.

All five faculty citations (Margot, Manning, Mainzer, Cao, Liu) now carry real
sourced detail and links to the EPSS / Physical Sciences / UCLA Newsroom stories.
Ming-Chang Liu is corrected to **2026 Fellow** of the Meteoritical Society.

**Design consistency pass** (from the preceding review): light blue retired as the
only cool tone in a warm palette; paper warmed to `#efe7d6` (reads as uncoated
stock, all inks still above AA); dark-ground text alphas cut from ~10 to 2; the
12 links that led to a generic placeholder template now read "Forthcoming" instead.

**Gerald Schubert memorial built** from Dave Bercovici's obituary — the largest
item on the packet's "available" list. Kept whole, with his awards pulled into an
inset and the closing handball line as the pull quote. Quieter treatment than the
other pages: dark masthead, single column, no sidebar. I also corrected an existing
issue-page dek that promised "overview, video, and slides" — the source has neither.

**`TO BE CHECKED.md` reconciled** against the packet — see §4.

## 2. What is ready

Ten article pages plus the issue page, all built from real source documents:

| Page | Source | State |
|---|---|---|
| `Article - Art and Science.dc.html` | Jewitt + Schlichting PDFs | **Complete text.** Both voices, 8 captions verbatim. Artwork images pending |
| `Article - Awards 2026.dc.html` | Student Awards doc + Faculty Awards doc | **Complete text** for faculty, graduate, dissertation, postdoc |
| `Article - Commencement 2026.dc.html` | Programme PDF | **Complete** — programme, all awards, 65 degree candidates |
| `Article - Donors and Endowments.dc.html` | Donor XLSX (both tabs) | **Complete** — 112 donors, 20 endowed funds |
| `Article - BALBOA.dc.html` | Zhou DOCX | **Complete text.** 2 figures pending |
| `Article - Gilles Peltzer.dc.html` | Mistral doc | **Complete text.** Photos pending |
| `Article - Steve Joy.dc.html` | Joy doc | **Complete text.** Portrait pending |
| `Article - Peter Chi.dc.html` | Chi DOCX | **Complete text.** Portrait pending |
| `Article - Gerald Schubert.dc.html` | Bercovici obituary | **Complete text.** Portrait optional |
| Issue page, Giving section | Emily Bisno email | **Complete** except match dates/cap |

Accessibility is in place across all ten pages: skip link, visible focus rings,
reduced-motion support, `aria-live` on the carousel. Palette is nine colours with
one defined role each; type is a four-step scale with nothing below 10px.

## 3. What still needs media consolidation

The packet is right that these are **selection and extraction tasks, not missing
files**. Every caption and credit below is already written into the page — the
image is the only gap.

| # | Section / article | Image type needed | Source location | Caption / credit status |
|---|---|---|---|---|
| 1 | **Issue page — hero carousel** (3 slots) | **Landscape, ~2400px wide.** Current files are 854×1103 portrait upscaled 1.7×, which is why they look soft | Box `field-2026` (folder 400260548483) and `epss-103a-2026` (folder 400388889455) | Alt text written for the 3 current images; **new picks need new alt text and captions** — the JS caption array must stay in step with the `<img>` alt attributes |
| 2 | **Issue page — Dispatches mosaic** (4 empty tiles) | Landscape field photography | Same two Box folders | **Captions needed.** Photographers named in the essay: Juan Alvarado, McKenna Keiser, plus Allie Quan, Michele Chan, Peter Glass, Kaia McArthur Jessum, Mason Stone — attribution per image not yet mapped |
| 3 | **Commencement** — full-bleed ceremony photo | Landscape group shot | Drive `15KbbG_9rNxQXLHRMQUglVbLehN4lD2FR` (12 named files) or Box Val's/Zach's sets | **Credit written: "Photographs by Val and Zach."** Caption needed. Write-up suggests `DSC08208.jpg` — needs confirming |
| 4 | **Endowed Chairs** — installation photo | 1600×900 available | `epss.ucla.edu/wp-content/uploads/2026/07/chairs-installation-2026.jpg` | **Caption and credit already written** (Penny Jennings, UCLA Division of Physical Sciences). Currently **hotlinked** — must be saved locally or it will be blank in PDF export |
| 5 | **Art & Science** — 8 artworks | Artwork reproductions; placeholders already match each stated aspect ratio | Inside the two Drive PDFs | **All 8 captions complete and verbatim** — titles, media, dates, dimensions |
| 6 | **BALBOA** — 2 figures | Scientific figures | Embedded in DOCX `1jOeujjNVAWcLzsDALcquJUaF4w0s-IhH` | **Captions and citations complete** (Zhou et al. 2007; Zhou et al. 2023) |
| 7 | **Peltzer** — field photographs | Field/portrait mix | `peltzer_pics.zip` (~26.6 MB), Drive `1FQMUjYtoapOBN0Wdgs2hwHU4srEXe5Zq` | **Captions already transcribed** into the article sidebar from the source doc |
| 8 | **Steve Joy** — portrait | Portrait, 4:5 slot | Not located | Genuinely unconfirmed. Layout is safe without it |
| 9 | **Peter Chi** — portrait | Portrait, circular byline | Not located | Genuinely unconfirmed. Layout is safe without it |
| 10 | **Issue page — archive** (7 cards) | Cover images, 3:4 | Local PDFs exist for 2022–2025 only; 2025 cover already in | **Low priority** — packet says do not block the issue on this |

Per your constraint, no Box or Drive media, ZIPs, `node_modules`, or build output
has been added to this project.

## 4. Files to review first

1. **`TO BE CHECKED.md`** — start here. Section 0 lists **ten items I had
   previously reported as missing that are in fact available**. Those should not be
   chased with anyone. The genuine blockers are then grouped by owner, matching
   `source-review/open-questions.md`.
2. **`Article - Awards 2026.dc.html`** — the Margot correction is the most
   significant factual change in this pass. Worth reading against the source doc.
3. **`Article - Art and Science.dc.html`** — the only page where new article text
   was written this pass. Both halves are the artists' own words.
4. **Issue page, Giving section** — uses Emily Bisno's email copy verbatim, with
   the real donate link (`Fund=50025O`) and her contact details.

### Two discrepancies I could not resolve

- **Gerald Schubert — now resolved and built.** My earlier "folder returns nothing"
  report was a *listing* failure, not an access failure. `story-packets/schubert.md`
  supplies direct file IDs, and `18ymM9vcvpgR1tB7gUATHzqpZ-WlaECk4` read fine. The
  packet's instruction not to ask for re-sharing was correct. Open per the packet:
  is Ben's version final, who approves, and should the reminiscences PDF supply
  sidebar quotes rather than just a link?
- **Schubert birth year.** The obituary says "age 86" on 31 August 2025 — so 1938
  or 1939. I have **not** stated a year; both the row and page read "Died 31 August
  2025 · aged 86". Supply it if the archive should carry full dates.
- **Podcast name.** The faculty awards doc spells it *"Unobtainium"* in its heading
  and *"Unobtanium"* in the link text. I used **Unobtainium** on the awards page.
  Worth one check.

### Creating the branch

```bash
git checkout -b claude/content-pass-2026-09-07
# copy the .dc.html files, assets/, TO BE CHECKED.md and HANDOFF.md in
git add -A
git commit -m "Content pass: Hilke art & science pair, sourced faculty awards, design consistency"
git push -u origin claude/content-pass-2026-09-07
```

`github.md` records the repo as `abijahsimon/Newsletter-Site`, branch `main`, last
read at commit `727edd8`. Note that the repo is still in its pre-redesign state —
none of this design work exists there yet, so the branch will be a large first
addition rather than a diff.
