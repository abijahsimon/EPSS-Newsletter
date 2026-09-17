#!/usr/bin/env python3
"""Build paginated review sheets from the newsletter media index."""

from __future__ import annotations

import csv
import math
import re
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


PAGE_SIZE = 18
CURATED_FIELD_SHORTLIST = [
    ("san-diego-salton-sea-field-trip.zip", "IMG_6980.jpg"),
    ("san-diego-salton-sea-field-trip.zip", "IMG_6949.jpg"),
    ("san-diego-salton-sea-field-trip.zip", "IMG_6936.jpg"),
    ("san-diego-salton-sea-field-trip.zip", "IMG_6960.jpg"),
    ("san-diego-salton-sea-field-trip.zip", "IMG_6994.jpg"),
    ("san-diego-salton-sea-field-trip.zip", "IMG_6968.jpg"),
    ("death-valley-superbloom.zip", "IMG_8033.jpeg"),
    ("death-valley-superbloom.zip", "IMG_4832.jpg"),
    ("death-valley-superbloom.zip", "IMG_6139.JPG"),
    ("death-valley-superbloom.zip", "IMG_4980.jpg"),
    ("death-valley-superbloom.zip", "IMG_5056.jpg"),
    ("death-valley-superbloom.zip", "IMG_5082.jpg"),
]


@dataclass
class Candidate:
    group: str
    source_file: str
    filename: str
    path: Path
    width: int
    height: int
    note: str


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def font(size: int) -> ImageFont.ImageFont:
    for path in (
        Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
        Path("/Library/Fonts/Arial.ttf"),
    ):
        if path.exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def wrap(draw: ImageDraw.ImageDraw, value: str, face: ImageFont.ImageFont, width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for word in value.split():
        proposed = f"{current} {word}".strip()
        if draw.textbbox((0, 0), proposed, font=face)[2] <= width:
            current = proposed
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines[:3]


def load_candidates(index_path: Path, project_root: Path) -> list[Candidate]:
    candidates: list[Candidate] = []
    with index_path.open(newline="", encoding="utf-8") as handle:
        for row in csv.DictReader(handle):
            path = project_root / row["relative_path"]
            if not path.exists():
                continue
            candidates.append(
                Candidate(
                    group=row["group"],
                    source_file=row["source_file"],
                    filename=row["filename"],
                    path=path,
                    width=int(row["width"]),
                    height=int(row["height"]),
                    note=row["notes"],
                )
            )
    return candidates


def build_page(candidates: list[Candidate], output: Path, start_number: int = 1) -> None:
    thumb_w, thumb_h = 260, 180
    label_h, gap, margin, columns = 78, 18, 24, 3
    rows = math.ceil(len(candidates) / columns)
    width = margin * 2 + columns * thumb_w + (columns - 1) * gap
    height = margin * 2 + rows * (thumb_h + label_h + gap) - gap
    sheet = Image.new("RGB", (width, max(height, 260)), "white")
    draw = ImageDraw.Draw(sheet)
    label_font = font(13)
    meta_font = font(11)

    for offset, candidate in enumerate(candidates):
        column = offset % columns
        row = offset // columns
        x = margin + column * (thumb_w + gap)
        y = margin + row * (thumb_h + label_h + gap)
        with Image.open(candidate.path) as image:
            image = ImageOps.exif_transpose(image)
            image.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
            tile = Image.new("RGB", (thumb_w, thumb_h), "#f3f4f6")
            tile.paste(image.convert("RGB"), ((thumb_w - image.width) // 2, (thumb_h - image.height) // 2))
            sheet.paste(tile, (x, y))
        draw.rectangle((x, y, x + thumb_w, y + thumb_h), outline="#d1d5db", width=1)
        for line_no, line in enumerate(
            wrap(draw, f"{start_number + offset}. {candidate.filename}", label_font, thumb_w)
        ):
            draw.text((x, y + thumb_h + 8 + line_no * 16), line, fill="#111827", font=label_font)
        source_label = Path(candidate.source_file).stem.replace("-20260716T145036Z-1-001", "")
        draw.text(
            (x, y + thumb_h + 56),
            f"{candidate.width}x{candidate.height} | {source_label}"[:58],
            fill="#4b5563",
            font=meta_font,
        )

    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output, quality=88)


def shortlist_field(candidates: list[Candidate]) -> list[Candidate]:
    lookup = {(candidate.source_file, candidate.filename): candidate for candidate in candidates}
    return [lookup[key] for key in CURATED_FIELD_SHORTLIST if key in lookup]


def main() -> int:
    project_root = Path.cwd()
    output_root = project_root / "source-review" / "media-selection"
    index_path = project_root / "source-review" / "contact-sheets" / "media-index.csv"
    candidates = load_candidates(index_path, project_root)

    grouped: defaultdict[tuple[str, str], list[Candidate]] = defaultdict(list)
    for candidate in candidates:
        grouped[(candidate.group, candidate.source_file)].append(candidate)

    folder_numbers = {
        "field": "01-field",
        "commencement": "02-commencement",
        "peltzer": "03-peltzer",
        "art-science": "04-art-science",
        "balboa": "05-balboa",
    }
    for (group, source_file), items in sorted(grouped.items()):
        folder = output_root / folder_numbers.get(group, group)
        base = f"{slug(group)}-{slug(Path(source_file).stem)}"
        for page_index, start in enumerate(range(0, len(items), PAGE_SIZE), start=1):
            page_path = folder / f"{base}-{page_index:02d}.jpg"
            if not page_path.exists():
                build_page(items[start : start + PAGE_SIZE], page_path, start_number=start + 1)

    shortlist = shortlist_field(candidates)
    for page_index, start in enumerate(range(0, len(shortlist), PAGE_SIZE), start=1):
        build_page(
            shortlist[start : start + PAGE_SIZE],
            output_root / "01-field" / f"00-field-landscape-shortlist-{page_index:02d}.jpg",
            start_number=start + 1,
        )

    with (output_root / "field-shortlist.csv").open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(["shortlist_number", "filename", "source_file", "source_path", "width", "height"])
        for number, candidate in enumerate(shortlist, start=1):
            writer.writerow(
                [number, candidate.filename, candidate.source_file, candidate.path, candidate.width, candidate.height]
            )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
