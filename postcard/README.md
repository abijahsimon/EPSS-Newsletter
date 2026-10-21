# EPSS Newsletter rebrand postcard — 2025–2026

Self-contained. Everything the artboards reference lives under `assets/`.

    Postcard - Front.dc.html                     Side A — p12_02 (desert traverse)
    Postcard - Front (alt, Joshua tree).dc.html  Side A — p10_03 (Mojave sunset)
    Postcard - Back.dc.html                      Side B — message + QR + address side
    assets/qr-newsletter.svg                     QR → https://epss.ucla.edu/newsletter
    assets/brand/epss-lockup-white.svg           UCLA_Uxd_Wht_EarthPlanetarySpaceSci_C
    assets/brand/epss-lockup-black.svg           UCLA_Uxd_Blk_EarthPlanetarySpaceSci_C
    assets/brand/newsletter-logo-black.png       from the 2026 issue export
    assets/images/                               candidate photographs
    proofs/                                      rendered PNGs + photo contact sheet

## Specification

Trim 6 x 9 in landscape. Artboard 9.25 x 6.25 in (0.125 in bleed all round).
Safe margin 0.375 in from trim; content sits 0.5 in from the artboard edge.
Stock: 14–16 pt C2S, matte or dull coat — gloss scatters lamplight across the QR.

Type   Newsreader (display + editorial body) · IBM Plex Sans (UI) · IBM Plex Mono (eyebrows, 0.16em)
Color  paper #FBFAF7 · ink #101820 · body #1F2933 · secondary #54626D
       UCLA gold #FFD100 · rust #9A4A26 · UCLA blue #2774AE · sand #EFE7D6

Body copy floor 11.5 pt. Gold is never text — only a field behind ink.
Side B: left half carries all design content; right half is the mail house's
(indicia top right, recipient address centre right, barcode clear zone bottom 0.625 in).

## Known issue — image resolution

The newsletter photo library tops out near 1100 px on the long edge; these files
appear to be screen-resolution extracts from the print PDF. At 9.25 in full bleed
that prints near 120 dpi. The split front confines the photo to a 4.1 in panel,
which lands near 175 dpi — acceptable on matte at arm's length, still short of 300.

For a 300 dpi front, a 2775 px original is needed. `source-review/media-manifest.csv`
lists the Google Drive and Box folders holding the original camera files
(DSC_*.JPG). The layout does not change when a larger file is dropped in.

## Before print

- [ ] `epss.ucla.edu/newsletter` redirect live (QR is already generated against it)
- [ ] Scan test from the actual printed stock, not a screen
- [ ] Confirm postage: 6 x 9 exceeds the USPS postcard maximum, so this mails at
      letter rates — check with UCLA Mail & Document Services
- [ ] Decide who fulfils "prefer paper?" requests, and the print-on-demand cap
- [ ] Swap SVG lockups for the bundle's EPS files at press
- [ ] Export PDF/X-1a, CMYK, with crop marks

## Press files — `press/`

    print-{front,back,front-joshua}-rgb.pdf    hand these to the printer
    print-{front,back,front-joshua}-cmyk.pdf   naive CMYK, reference proof only

Page 10 x 7 in · BleedBox 9.25 x 6.25 · TrimBox 9 x 6 · crop marks in the
0.25 in gutter outside the bleed, so no mark touches artwork.

Give the printer the **RGB** files plus the colour spec below and let their
prepress do the ICC conversion against the real output intent. The CMYK files
here were converted without a printer profile — useful as a proof, not a
press file, and not certified PDF/X-1a (that needs their OutputIntent).

### Measured

    Max total area coverage   295.7%  (under the 300% coated ceiling)
    Contrast, all text        passes WCAG AA — lowest is rust on cream at 5.95:1
    Gold on cream             1.40:1 — confirms the rule: gold is never text
    QR decode                 verified from the rendered proof

### Two colour builds to specify, not to leave to naive conversion

**The cream is the bigger risk.** #FBFAF7 converts to C0.8 M1.2 Y2.4 K0 — a
1-2% dot in cyan and magenta across a large flat field. That is exactly what
mottles, or drops out unevenly, on press. Two clean fixes:

1. Print on a warm / natural white stock and leave the field unprinted. Free,
   perfectly even, and close to the digital cream. Recommended.
2. Or spec it as a single-ink tint (~3% Y) rather than a three-colour build.

**The navy needs a proper rich black.** #101820 converted to C74 M66 Y56 K70
— too little black for a large dark field, so reversed type will fringe if
registration drifts. Spec instead:

    navy    C40 M30 Y30 K100     (TAC 200%, stable under registration drift)
    gold    use the Pantone in the UCLA brand guidelines, not a CMYK build
    rust    #9A4A26 converts acceptably; match to a Pantone if budget allows

### The card — swapped, and now mailable

    Postcard - Side A (address).svg    commencement band, masthead, address zones
    Postcard - Side B (message).svg    copy + QR left, field photo right
    press/print-sideA-address-rgb.pdf  Side A press geometry
    press/print-sideB-message-rgb.pdf  Side B press geometry

Everything superseded is in `_retired/`. Delete it when you're satisfied.

**Side A** arrives face up with the recipient's name on it, so it carries the
identity: a 2.2 in commencement band bleeding off the top at 368 ppi, gold
hairline, then the masthead, return address, and three story teasers down the
left. The right half is empty on purpose.

**Side B** is the message: copy, QR at 1.45 in, field photo panel, masthead in
the sky under the haze layer. No USPS constraints on this side.

### The masthead lockup

The old treatment set NEWSLETTER in tracked serif caps under the logo. At
11 pt that reads as stretched text, not a mark — and it floated, with no
geometric relationship to the lockup above it. `proofs/proof-masthead-
variants.png` compares four treatments at print size.

What ships is one designed unit, on both sides:

    [ UCLA EPSS lockup ]                    2.4 in wide
    ────────────────────────────────        gold rule, 1 pt, exactly lockup width
    Newsletter          ANNUAL · 2025–26    Newsreader 16 pt title case, ink
                                            IBM Plex Mono 6.8 pt rust, right-aligned

Three things make it read as a logo rather than a line of type. The rule fixes
the nameplate to the lockup's measure, so the block has a defined edge. Title
case at 16 pt has presence where tracked caps at 11 pt had none. And the mono
tag right-aligns to the rule's end, which gives the unit real geometry instead
of a ragged right.

Folding the year into the tag also removed Side B's separate "2025–2026 ISSUE"
line — three stacked elements became one lockup.

It lives in a single layer, `Masthead lockup` on Side A and `Photo overlay -
masthead` on Side B, so it can be copied between documents as a unit. Worth
carrying back to the website masthead so print and web match.

Measured against the hazed sky on Side B, worst case across the whole block:

    Newsletter, 16 pt ink        13.19:1   needs 3.0    PASS
    issue tag, 6.8 pt rust        4.58:1   needs 4.5    PASS
    UCLA blue inside the lockup   3.69:1   needs 3.0    PASS

### The three reserved zones on Side A

Hidden layer `USPS zones` draws them. Measured from the artboard edge (bleed
included), in points:

    recipient address block    x 352.8  y 255.6   w 259.2  h 82.8
    permit indicia             x 502.2  y 184.4   w 136.8  h 57.6
    barcode clear zone         x 315.0  y 396.0   w 342.0  h 45.0
                               = bottom 5/8 in across the right 4.75 in

Verified programmatically: every live element on Side A was tested against all
three rectangles and **nothing intrudes**. Re-run that check after any edit —
it is the whole reason this arrangement exists.

### Verification on both sides

    fonts embedded    Newsreader-Regular, IBMPlexSans, IBMPlexSans-SmBld,
                      IBMPlexMono-Medm — all live vector text, no rasterised type
    Side A band       3400 px source placed at 368 ppi
    Side B panel      852 px source at 176 ppi — relink the high-res original
    QR                decodes to https://epss.ucla.edu/newsletter
    USPS zones        clear

### Still open

- Relink Side B's field photo once the high-res original turns up (page 12 of
  the 2025 printed newsletter — confirm the caption and credit there).
- `epss.ucla.edu/newsletter` redirect live before the mail drop.
- Physical scan test off the printed stock.
- Cream and navy build specs — see the colour section above.
### Opening these in Illustrator

Install the three fonts in `fonts/`, quit Illustrator with Cmd-Q, reopen, then
open `Postcard - Side A (address).svg`. See `fonts/README.txt`.

`Postcard - Side A (address) OUTLINED.svg` and its Side B twin need no fonts
at all — every character is a vector path. Positionally identical to the
live-text files: every line's ink starts and ends within 0.375 pt (one device
pixel) of the live rendering.

Layers arrive as Illustrator layers. Photos are embedded — select one and
Relink to swap in a higher-res file.

### Why the type looked different from Claude Design

Newsreader carries an OPTICAL SIZE axis, `opsz`, running 6 to 72. A face with
that axis is a family of designs: small sizes want thicker stems, wider
spacing and a larger x-height; display sizes want finer hairlines and tighter
spacing. Claude Design loads the variable font and browsers apply
`font-optical-sizing: auto`, so every type size there gets its own instance.

The static files first supplied were all the opsz-16 instance. Measured:

    body copy at 11.5 pt    10.5% narrower, 8.6% lighter, x-height 6.8% smaller
    headline at 25 pt        3.5% wider, 3.3% heavier

Fixed by shipping one static face per optical range — `Newsreader 12pt`,
`Newsreader 16pt`, `Newsreader 24pt`, matching Google Fonts' own static naming
— and calling the right one at each size.

Correct metrics are ~10% wider at text sizes, so the old body copy no longer
fit: all six lines overflowed the 3.95 in measure, the widest by 19.8 pt. The
measure is now 4.25 in, which restores the same six-line block at the full
11.5 pt, and line breaks are computed from measured glyph widths rather than
set by hand.

### Verification, current build

    overflow            none, either side
    USPS zones          clear on Side A
    outlined vs live    every line's ink edges within 0.375 pt
    fonts embedded      Newsreader 12/16/24pt, IBMPlexSans, IBMPlexSans-SmBld,
                        IBMPlexMono-Medm — all live vector text
    outlined PDFs       zero fonts
    QR                  decodes to https://epss.ucla.edu/newsletter

### ⚠ One press note

Side A's naive CMYK conversion peaks at **307.5% total ink**, over the 300%
coated ceiling. It affects 0.019% of the page — 298 pixels at 150 dpi — in the
deepest shadows of the commencement photograph. The 99.9th percentile is
298.0%, so this is a handful of pixels, not a field.

Hand the printer the **RGB** files and let their prepress convert against the
real output intent with its own ink limit; that resolves it. The CMYK files
here remain a reference proof only. Side B peaks at 294.9% and is clear.
