Fonts for the EPSS postcard
===========================

Install these three, quit Illustrator with Cmd-Q, reopen. Cmd-Q matters:
Illustrator reads the font list once at launch.

    Newsreader12pt-Regular.ttf      body copy, teasers, signature (11.5–13 pt)
    Newsreader16pt-Regular.ttf      the "Newsletter" nameplate (16 pt)
    Newsreader24pt-Regular.ttf      the headline (25 pt)

Also install IBM Plex Sans and IBM Plex Mono — Regular, Medium and SemiBold
of each — from IBM's own release or Google Fonts:

    https://github.com/IBM/plex/releases
    https://fonts.google.com/specimen/IBM+Plex+Sans
    https://fonts.google.com/specimen/IBM+Plex+Mono

IBM Plex is OFL with the Reserved Font Name "Plex", so modified copies cannot
keep "Plex" in the family name and are not bundled here. IBM's release already
uses correct family and style names.


Why three files instead of one
------------------------------
Newsreader carries an OPTICAL SIZE axis, opsz, running 6 to 72. A typeface
with that axis is really a family of designs: at small sizes the letters want
thicker stems, wider spacing and a larger x-height; at display sizes they want
finer hairlines, tighter spacing and more contrast.

Claude Design loads Newsreader as a variable font, and browsers apply
font-optical-sizing: auto by default. So every type size on that page gets its
own optical instance — 11.5 pt copy is drawn with the 11.5 pt design, a 50 pt
hero with the 50 pt design.

A static font cannot do that. One static face is one point on the axis. The
first set of static files I supplied were all the opsz-16 instance, so:

    body copy at 11.5 pt   10.5% narrower and 8.6% lighter than Claude Design
    x-height at 11.5 pt    6.8% smaller
    headline at 25 pt      3.5% wider and 3.3% heavier

Shipping one face per optical range fixes it. The names match Google Fonts'
own static download ("Newsreader 12pt", "Newsreader 16pt", "Newsreader 24pt"),
so Google's files work here too if you prefer to get them from source.


Consequence for the layout
--------------------------
Correct optical metrics are about 10% wider at text sizes, so the body copy no
longer fit its old column: all six lines overflowed, the widest by 19.8 pt.
The measure was widened from 3.95 in to 4.25 in, which restores the same
six-line block at the full 11.5 pt. Line breaks are now computed from measured
glyph widths rather than set by hand, so this cannot drift again.


Licence
-------
Newsreader — SIL Open Font License 1.1, Copyright 2020 The Newsreader Project
Authors (github.com/productiontype/Newsreader). The copyright header declares
no Reserved Font Name, so instancing and renaming are permitted. Full text in
Newsreader-OFL.txt.

MODIFICATION NOTICE, as the OFL asks. These are static instances cut from the
upstream variable font at opsz 12 / 16 / 24, weight 400, named per instance,
with Macintosh-platform name records added and the OS/2 fsSelection REGULAR
bit set. No outline data was edited.
