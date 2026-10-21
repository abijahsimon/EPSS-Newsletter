#!/usr/bin/env python3
"""Build local media contact sheets for the EPSS newsletter review packet.

The script reads raw files from source-review/raw-media, extracts image
candidates from ZIP/DOCX files, renders PDF pages when pdftoppm is available,
and writes contact sheets plus a CSV index to source-review/contact-sheets.
Raw and extracted files stay outside git-tracked site assets.
"""

from __future__ import annotations

import argparse
import csv
import os
import shutil
import subprocess
import sys
import zipfile
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".gif", ".heic", ".heif"}
ARCHIVE_SUFFIXES = {".zip", ".docx"}
PDFTOPPM_CANDIDATES = [
    "/Users/abijahsimon/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm",
    "pdftoppm",
]


@dataclass
class MediaItem:
    group: str
    source_file: str
    derived_from: str
    path: Path
    width: int
    height: int
    fmt: str
    size: int
    note: str = ""


def rel(path: Path, root: Path) -> str:
    try:
        return str(path.relative_to(root))
    except ValueError:
        return str(path)


def safe_member_name(name: str) -> Path | None:
    member = Path(name)
    if member.is_absolute() or ".." in member.parts:
        return None
    if "__MACOSX" in member.parts or member.name.startswith("._"):
        return None
    return member


def ensure_unique(path: Path) -> Path:
    if not path.exists():
        return path
    stem = path.stem
    suffix = path.suffix
    parent = path.parent
    counter = 2
    while True:
        candidate = parent / f"{stem}-{counter}{suffix}"
        if not candidate.exists():
            return candidate
        counter += 1


def extract_images_from_zip(source: Path, destination: Path, docx_only: bool) -> list[Path]:
    extracted: list[Path] = []
    destination.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(source) as archive:
        for info in archive.infolist():
            member = safe_member_name(info.filename)
            if member is None or info.is_dir():
                continue
            if docx_only and not str(member).startswith("word/media/"):
                continue
            if member.suffix.lower() not in IMAGE_SUFFIXES:
                continue

            target = destination / member.name
            with archive.open(info) as src, target.open("wb") as dst:
                shutil.copyfileobj(src, dst)
            extracted.append(target)

    return extracted


def find_pdftoppm() -> str | None:
    for candidate in PDFTOPPM_CANDIDATES:
        resolved = shutil.which(candidate) if os.sep not in candidate else candidate
        if resolved and Path(resolved).exists():
            return resolved
    return None


def render_pdf_pages(source: Path, destination: Path) -> list[Path]:
    pdftoppm = find_pdftoppm()
    if not pdftoppm:
        return []

    destination.mkdir(parents=True, exist_ok=True)
    prefix = destination / source.stem.replace(" ", "-")
    subprocess.run(
        [pdftoppm, "-png", "-r", "140", str(source), str(prefix)],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    return sorted(destination.glob(f"{prefix.name}-*.png"))


def image_info(path: Path) -> tuple[int, int, str]:
    with Image.open(path) as img:
        return img.width, img.height, img.format or path.suffix.lower().lstrip(".")


def convert_with_sips(source: Path, destination: Path) -> Path | None:
    sips = shutil.which("sips")
    if not sips:
        return None
    destination.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        [sips, "-s", "format", "jpeg", str(source), "--out", str(destination)],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if result.returncode != 0 or not destination.exists():
        return None
    return destination


def convert_with_quicklook(source: Path, destination_dir: Path) -> Path | None:
    qlmanage = shutil.which("qlmanage")
    if not qlmanage:
        return None
    destination_dir.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        [qlmanage, "-t", "-s", "1000", "-o", str(destination_dir), str(source)],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    if result.returncode != 0:
        return None
    thumbnail = destination_dir / f"{source.name}.png"
    if not thumbnail.exists():
        return None
    return thumbnail


def readable_image_path(path: Path, work_root: Path) -> tuple[Path, str]:
    try:
        image_info(path)
        return path, ""
    except Exception:
        if path.suffix.lower() not in {".heic", ".heif"}:
            raise

    converted = work_root / "converted" / f"{path.stem}.jpg"
    converted_path = convert_with_sips(path, converted)
    if converted_path is not None:
        try:
            image_info(converted_path)
            return converted_path, f"converted from {path.suffix.lower().lstrip('.')}"
        except Exception:
            converted_path.unlink(missing_ok=True)

    thumbnail_dir = work_root / "converted"
    thumbnail_path = convert_with_quicklook(path, thumbnail_dir)
    if thumbnail_path is None:
        raise RuntimeError("could not convert HEIC/HEIF image with sips or qlmanage")
    image_info(thumbnail_path)
    return thumbnail_path, f"quicklook thumbnail from {path.suffix.lower().lstrip('.')}"


def discover_group_media(group_dir: Path, raw_root: Path, work_root: Path) -> list[MediaItem]:
    group = group_dir.name
    candidates: list[tuple[Path, str, str, str]] = []

    for path in sorted(group_dir.rglob("*")):
        if not path.is_file():
            continue
        suffix = path.suffix.lower()

        if suffix in IMAGE_SUFFIXES:
            candidates.append((path, path.name, "", "raw image"))
            continue

        extraction_dir = work_root / "extracted" / group / path.stem
        if suffix in ARCHIVE_SUFFIXES:
            try:
                extracted = extract_images_from_zip(path, extraction_dir, docx_only=suffix == ".docx")
            except zipfile.BadZipFile:
                print(f"Skipping invalid archive {path}", file=sys.stderr)
                continue
            for extracted_path in extracted:
                candidates.append((extracted_path, path.name, rel(path, raw_root), "archive image"))
            continue

        if suffix == ".pdf":
            rendered = render_pdf_pages(path, extraction_dir)
            for rendered_path in rendered:
                candidates.append((rendered_path, path.name, rel(path, raw_root), "rendered pdf page"))

    items: list[MediaItem] = []
    for path, source_file, derived_from, note in candidates:
        try:
            display_path, conversion_note = readable_image_path(path, work_root)
            width, height, fmt = image_info(display_path)
        except Exception as exc:
            print(f"Skipping unreadable image {path}: {exc}", file=sys.stderr)
            continue
        item_note = f"{note}; {conversion_note}" if conversion_note else note
        items.append(
            MediaItem(
                group=group,
                source_file=source_file,
                derived_from=derived_from,
                path=display_path,
                width=width,
                height=height,
                fmt=fmt,
                size=display_path.stat().st_size,
                note=item_note,
            )
        )
    return items


def load_font(size: int) -> ImageFont.ImageFont:
    for font_path in [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ]:
        if Path(font_path).exists():
            return ImageFont.truetype(font_path, size)
    return ImageFont.load_default()


def wrap_label(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        test = f"{current} {word}".strip()
        if draw.textbbox((0, 0), test, font=font)[2] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines[:4]


def build_sheet(items: list[MediaItem], output_path: Path, project_root: Path) -> None:
    thumb_w = 260
    thumb_h = 180
    label_h = 78
    gap = 18
    margin = 24
    cols = 3
    rows = (len(items) + cols - 1) // cols
    width = margin * 2 + cols * thumb_w + (cols - 1) * gap
    height = margin * 2 + rows * (thumb_h + label_h + gap) - gap

    sheet = Image.new("RGB", (width, max(height, 260)), "white")
    draw = ImageDraw.Draw(sheet)
    font = load_font(13)
    small = load_font(11)

    for index, item in enumerate(items):
        col = index % cols
        row = index // cols
        x = margin + col * (thumb_w + gap)
        y = margin + row * (thumb_h + label_h + gap)

        with Image.open(item.path) as img:
            img = ImageOps.exif_transpose(img)
            img.thumbnail((thumb_w, thumb_h), Image.Resampling.LANCZOS)
            thumb = Image.new("RGB", (thumb_w, thumb_h), "#f3f4f6")
            paste_x = (thumb_w - img.width) // 2
            paste_y = (thumb_h - img.height) // 2
            if img.mode in {"RGBA", "LA"}:
                thumb.paste(img.convert("RGBA"), (paste_x, paste_y), img.convert("RGBA"))
            else:
                thumb.paste(img.convert("RGB"), (paste_x, paste_y))
            sheet.paste(thumb, (x, y))

        draw.rectangle((x, y, x + thumb_w, y + thumb_h), outline="#d1d5db", width=1)
        label = f"{index + 1}. {item.path.name}"
        meta = f"{item.width}x{item.height} | {item.fmt} | {item.note}"
        for line_no, line in enumerate(wrap_label(draw, label, font, thumb_w)):
            draw.text((x, y + thumb_h + 8 + line_no * 16), line, fill="#111827", font=font)
        draw.text((x, y + thumb_h + 56), meta[:52], fill="#4b5563", font=small)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output_path, quality=88)


def write_index(items: list[MediaItem], output_path: Path, project_root: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle)
        writer.writerow(
            [
                "group",
                "source_file",
                "derived_from",
                "filename",
                "width",
                "height",
                "format",
                "bytes",
                "relative_path",
                "notes",
            ]
        )
        for item in items:
            writer.writerow(
                [
                    item.group,
                    item.source_file,
                    item.derived_from,
                    item.path.name,
                    item.width,
                    item.height,
                    item.fmt,
                    item.size,
                    rel(item.path, project_root),
                    item.note,
                ]
            )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--raw-dir", default="source-review/raw-media")
    parser.add_argument("--work-dir", default="source-review/media-working")
    parser.add_argument("--out-dir", default="source-review/contact-sheets")
    args = parser.parse_args()

    project_root = Path.cwd()
    raw_root = (project_root / args.raw_dir).resolve()
    work_root = (project_root / args.work_dir).resolve()
    out_root = (project_root / args.out_dir).resolve()

    if not raw_root.exists():
        print(f"Raw media folder does not exist: {raw_root}")
        return 1

    group_dirs = [path for path in sorted(raw_root.iterdir()) if path.is_dir()]
    if not group_dirs:
        print(f"No media groups found in {raw_root}")
        return 0

    all_items: list[MediaItem] = []
    for group_dir in group_dirs:
        items = discover_group_media(group_dir, raw_root, work_root)
        if not items:
            print(f"{group_dir.name}: no images found")
            continue
        all_items.extend(items)
        sheet_path = out_root / f"{group_dir.name}-sheet.jpg"
        build_sheet(items, sheet_path, project_root)
        print(f"{group_dir.name}: {len(items)} candidates -> {rel(sheet_path, project_root)}")

    write_index(all_items, out_root / "media-index.csv", project_root)
    print(f"Index: {rel(out_root / 'media-index.csv', project_root)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
