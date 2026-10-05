"""
Generates the two cover images (English + Marathi) for the Kindle book,
at the standard 1600x2560 (1:1.6) Kindle/KDP cover ratio.
"""
import io, os
import cairosvg
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = "/sessions/determined-awesome-turing/mnt/bharatiy-gyan-bhandar/kindle-book"
FONTS = f"{ROOT}/assets/fonts"
IMAGES = f"{ROOT}/assets/images"
OUT = f"{ROOT}/assets/covers"
os.makedirs(OUT, exist_ok=True)

W, H = 1600, 2560
MAROON = (104, 35, 33)
GOLD = (201, 162, 74)
CREAM = (246, 239, 224)
CREAM_DIM = (214, 199, 168)

def yantra_png(size, color_hex, opacity=255):
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" stroke="{color_hex}" stroke-width="0.8">
    <g transform="translate(100 100)">
      <rect x="-94" y="-94" width="188" height="188"></rect>
      <rect x="-80" y="-80" width="160" height="160"></rect>
      <circle r="74"></circle><circle r="56"></circle>
      <g>
        <path d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(45)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(90)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(135)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(180)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(225)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(270)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
        <path transform="rotate(315)" d="M0 -70 C 12 -45 12 -30 0 -16 C -12 -30 -12 -45 0 -70 Z"></path>
      </g>
      <polygon points="0,-44 38,22 -38,22"></polygon>
      <polygon points="0,44 38,-22 -38,-22"></polygon>
      <circle r="4" fill="{color_hex}"></circle>
    </g>
    </svg>"""
    png_bytes = cairosvg.svg2png(bytestring=svg.encode(), output_width=size, output_height=size)
    im = Image.open(io.BytesIO(png_bytes)).convert("RGBA")
    if opacity < 255:
        r, g, b, a = im.split()
        a = a.point(lambda p: int(p * opacity / 255))
        im = Image.merge("RGBA", (r, g, b, a))
    return im

def make_background():
    bg = Image.open(f"{IMAGES}/hero-manuscript.jpg").convert("RGB")
    bg = ImageOps.fit(bg, (W, H), method=Image.LANCZOS, centering=(0.5, 0.42))
    overlay = Image.new("RGB", (W, H), MAROON)
    bg = Image.blend(bg, overlay, 0.66)
    # top & bottom darkening bands so text always sits on a calm field
    grad = Image.new("L", (1, H), 0)
    for y in range(H):
        d_top = max(0, 1 - y / (H * 0.34))
        d_bot = max(0, 1 - (H - y) / (H * 0.40))
        grad.putpixel((0, y), int(200 * max(d_top, d_bot)))
    grad = grad.resize((W, H))
    black = Image.new("RGB", (W, H), (8, 3, 3))
    bg = Image.composite(black, bg, grad)
    return bg

def wrap_to_width(draw, text, font, max_width):
    words = text.split(" ")
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_width or not cur:
            cur = trial
        else:
            lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

def fit_font(draw, text, path, start_size, max_width, min_size=28):
    size = start_size
    while size > min_size:
        font = ImageFont.truetype(path, size)
        if draw.textlength(text, font=font) <= max_width:
            return font
        size -= 2
    return ImageFont.truetype(path, min_size)

def centered(draw, text, font, y, fill, tracking=0):
    if tracking:
        widths = [draw.textlength(ch, font=font) for ch in text]
        total = sum(widths) + tracking * (len(text) - 1)
        x = (W - total) / 2
        for ch, w in zip(text, widths):
            draw.text((x, y), ch, font=font, fill=fill)
            x += w + tracking
        return
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    draw.text(((W - w) / 2, y), text, font=font, fill=fill)
    return bbox[3] - bbox[1]

def line_height(font):
    a, d = font.getmetrics()
    return a + d

def build_cover(lang):
    img = make_background()
    draw = ImageDraw.Draw(img)

    margin = 110
    draw.rectangle([margin, margin, W - margin, H - margin], outline=GOLD, width=3)
    draw.rectangle([margin + 18, margin + 18, W - margin - 18, H - margin - 18], outline=(*GOLD,), width=1)

    yantra = yantra_png(260, "#c9a24a", opacity=220)
    img.paste(yantra, (int((W - 260) / 2), margin + 70), yantra)

    text_w = W - 2 * (margin + 90)
    y = margin + 70 + 260 + 60

    f_deva_title = ImageFont.truetype(f"{FONTS}/NotoSerifDevanagari-Bold.ttf", 108)
    centered(draw, "भारतीय ज्ञान भंडार", f_deva_title, y, CREAM)
    y += line_height(f_deva_title) + 34

    if lang == "en":
        f_title_en = fit_font(draw, "Bhāratīya Jñāna Bhaṇḍāra", f"{FONTS}/CormorantGaramond-SemiBold.ttf", 92, text_w)
        centered(draw, "Bhāratīya Jñāna Bhaṇḍāra", f_title_en, y, CREAM)
        y += line_height(f_title_en) + 42

        f_sub = ImageFont.truetype(f"{FONTS}/CormorantGaramond-SemiBoldItalic.ttf", 42)
        for line in wrap_to_width(draw, "Seven Journeys Through the Indic Mind, from the Vedas to the Modern Age", f_sub, text_w):
            centered(draw, line, f_sub, y, CREAM_DIM)
            y += line_height(f_sub) + 8
    else:
        f_title_en = fit_font(draw, "Bhāratīya Jñāna Bhaṇḍāra", f"{FONTS}/CormorantGaramond-SemiBold.ttf", 62, text_w)
        centered(draw, "Bhāratīya Jñāna Bhaṇḍāra", f_title_en, y, CREAM_DIM)
        y += line_height(f_title_en) + 40

        f_sub_deva = ImageFont.truetype(f"{FONTS}/NotoSerifDevanagari-Regular.ttf", 46)
        for line in wrap_to_width(draw, "भारतीय मनाच्या सात वाटा । वेदांपासून आधुनिक युगापर्यंत", f_sub_deva, text_w):
            centered(draw, line, f_sub_deva, y, CREAM)
            y += line_height(f_sub_deva) + 10

    # byline + edition badge, anchored near the foot
    f_mono = ImageFont.truetype(f"{FONTS}/JetBrainsMono-Regular.ttf", 28)
    by_y = H - margin - 220
    centered(draw, "COMPILED  BY  VIVEK  SOVANI", f_mono, by_y, CREAM_DIM, tracking=4)

    badge_text = "ENGLISH EDITION" if lang == "en" else "मराठी आवृत्ती"
    badge_font = (ImageFont.truetype(f"{FONTS}/JetBrainsMono-SemiBold.ttf", 26) if lang == "en"
                  else ImageFont.truetype(f"{FONTS}/NotoSerifDevanagari-SemiBold.ttf", 32))
    bbox = draw.textbbox((0, 0), badge_text, font=badge_font)
    bw, bh = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad_x, pad_y = 34, 16
    bx = (W - bw) / 2 - pad_x
    by = H - margin - 120
    draw.rectangle([bx, by, bx + bw + pad_x * 2, by + bh + pad_y * 2], outline=GOLD, width=2)
    draw.text((bx + pad_x, by + pad_y - bbox[1]), badge_text, font=badge_font, fill=GOLD)

    out_path = f"{OUT}/cover-{lang}.jpg"
    img.convert("RGB").save(out_path, "JPEG", quality=92)
    print("wrote", out_path, img.size)

build_cover("en")
build_cover("mr")
