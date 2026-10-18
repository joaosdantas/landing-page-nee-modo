#!/usr/bin/env python3
"""Generate OG cover + logo PNGs for social/schema (no external deps beyond Pillow)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_og() -> None:
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), "#090C15")
    draw = ImageDraw.Draw(img)

    # Soft accent circles
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((760, -100, 1200, 340), fill=(30, 58, 95, 115))
    od.ellipse((-40, 340, 380, 700), fill=(255, 199, 0, 30))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    draw.text((80, 140), "NEXABEE", fill="#FFC700", font=font(34, bold=True))
    draw.text((80, 220), "Nee MODO", fill="#FFFFFF", font=font(72, bold=True))
    draw.text((80, 330), "Mais processos de financiamento", fill="#CBD5E1", font=font(32))
    draw.text((80, 380), "em menos tempo", fill="#CBD5E1", font=font(32))
    draw.text(
        (80, 500),
        "Sistema para correspondente bancario e assessoria",
        fill="#94A3B8",
        font=font(24),
    )

    out = PUBLIC / "og-cover.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size} bytes)")


def make_logo() -> None:
    size = 512
    img = Image.new("RGBA", (size, size), (9, 12, 21, 255))
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((40, 40, 472, 472), radius=64, fill=(14, 29, 57, 255))
    draw.text((128, 170), "M", fill="#FFC700", font=font(220, bold=True))
    out = PUBLIC / "logo.png"
    img.save(out, "PNG", optimize=True)
    print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    PUBLIC.mkdir(exist_ok=True)
    make_og()
    make_logo()
