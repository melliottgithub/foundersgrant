"""Generate Apple-grade visual assets for Founders Grant:
1. public/icon.svg
2. public/apple-touch-icon.png (180x180)
3. src/app/favicon.ico & public/favicon.ico (multi-resolution: 16, 32, 48)
4. public/og-image.png (1200x630)
5. public/manifest.webmanifest
"""
import os
import math
from PIL import Image, ImageDraw, ImageFont

ROOT = "/home/mellio/workspace/projects/foundersgrant"
PUBLIC = os.path.join(ROOT, "public")
SRC_APP = os.path.join(ROOT, "src", "app")

os.makedirs(PUBLIC, exist_ok=True)
os.makedirs(SRC_APP, exist_ok=True)

# 1. Create SVG Icon
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="appleBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0077ed"/>
      <stop offset="50%" stop-color="#0071e3"/>
      <stop offset="100%" stop-color="#005bb5"/>
    </linearGradient>
    <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0071e3" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Apple iOS Squircle Base -->
  <rect x="32" y="32" width="448" height="448" rx="104" fill="url(#appleBlueGrad)" filter="url(#shadow)"/>
  
  <!-- Subtle Top Highlight Rim -->
  <rect x="32" y="32" width="448" height="224" rx="104" fill="url(#innerGlow)"/>

  <!-- Architectural Foundation Monogram: In-Kind Engineering Beam + Ascending Chevron -->
  <!-- Left Pillar / F Stem -->
  <path d="M 148 136 L 204 136 L 204 376 L 148 376 Z" fill="#ffffff" rx="8"/>
  
  <!-- Top Crossbar -->
  <path d="M 148 136 L 364 136 C 374 136 380 144 380 154 L 380 178 C 380 188 374 196 364 196 L 204 196 L 204 136 Z" fill="#ffffff"/>
  
  <!-- Mid Crossbar / Grant Platform Bar -->
  <path d="M 148 240 L 316 240 C 324 240 330 246 330 254 L 330 274 C 330 282 324 288 316 288 L 204 288 L 204 240 Z" fill="#ffffff"/>

  <!-- Ascending Emerald / White Foundation Chevron (representing grant lift) -->
  <path d="M 332 376 L 380 376 L 380 316 L 332 316 Z" fill="#34c759" rx="6"/>
  <circle cx="356" cy="270" r="14" fill="#34c759"/>
</svg>'''

with open(os.path.join(PUBLIC, "icon.svg"), "w") as f:
    f.write(svg_content)
print("Created public/icon.svg")

# 2. Render Apple Touch Icon (180x180 PNG) & Favicons (16, 32, 48, 64, 128, 256)
def draw_apple_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Scale factors
    scale = size / 512.0
    corner_r = int(104 * scale)
    pad = int(32 * scale)
    box_w = size - 2 * pad
    
    # Draw gradient background squircle
    # Simple multi-pass rounded rect
    base_color = (0, 113, 227, 255) # Apple Blue
    draw.rounded_rectangle(
        [(pad, pad), (pad + box_w, pad + box_w)],
        radius=corner_r,
        fill=base_color
    )
    
    # Draw stylized F and foundation chevron
    def s(val):
        return int(val * scale)
        
    # Stem
    draw.rounded_rectangle([(s(148), s(136)), (s(204), s(376))], radius=int(6*scale), fill=(255, 255, 255, 255))
    # Top bar
    draw.rounded_rectangle([(s(148), s(136)), (s(364), s(196))], radius=int(8*scale), fill=(255, 255, 255, 255))
    # Mid bar
    draw.rounded_rectangle([(s(148), s(240)), (s(316), s(288))], radius=int(8*scale), fill=(255, 255, 255, 255))
    # Emerald accent dot/cube
    draw.rounded_rectangle([(s(332), s(328)), (s(380), s(376))], radius=int(6*scale), fill=(52, 199, 89, 255))
    
    return img

icon_180 = draw_apple_icon(180)
icon_180.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("Created public/apple-touch-icon.png")

# Favicon ICO (16, 32, 48, 64)
sizes = [16, 32, 48, 64]
ico_images = [draw_apple_icon(s) for s in sizes]
ico_path_public = os.path.join(PUBLIC, "favicon.ico")
ico_path_src = os.path.join(SRC_APP, "favicon.ico")
ico_images[0].save(ico_path_public, format="ICO", sizes=[(s, s) for s in sizes], append_images=ico_images[1:])
ico_images[0].save(ico_path_src, format="ICO", sizes=[(s, s) for s in sizes], append_images=ico_images[1:])
print(f"Created {ico_path_public} and {ico_path_src}")

# 3. Create Web App Manifest
manifest = '''{
  "name": "Founders Grant",
  "short_name": "FoundersGrant",
  "description": "In-kind software engineering and AI workflow grants for bootstrapped founders.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0071e3",
  "icons": [
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/icon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
'''
with open(os.path.join(PUBLIC, "manifest.webmanifest"), "w") as f:
    f.write(manifest)
print("Created public/manifest.webmanifest")

# 4. Create OpenGraph Image (1200x630 Apple Light Card)
def create_og_image():
    W, H = 1200, 630
    img = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)

    # Soft radial background illumination
    # Draw soft light slate background border
    draw.rectangle([(0, 0), (W, H)], fill=(255, 255, 255, 255))
    
    # Outer elegant subtle frame
    draw.rectangle([(20, 20), (W - 20, H - 20)], fill=(250, 250, 252, 255), outline=(229, 229, 234, 255), width=2)
    
    # Top banner bar
    draw.rectangle([(20, 20), (W - 20, 36)], fill=(0, 113, 227, 255))

    # Try loading system font, fallback to default
    try:
        font_logo = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
        font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 52)
        font_subtitle = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 26)
        font_pill = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
        font_card_val = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
        font_card_lbl = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
        font_footer = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
    except Exception:
        font_logo = ImageFont.load_default()
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
        font_pill = ImageFont.load_default()
        font_card_val = ImageFont.load_default()
        font_card_lbl = ImageFont.load_default()
        font_footer = ImageFont.load_default()

    # Draw Logo and App Icon on Top Left
    icon_sample = draw_apple_icon(64)
    img.paste(icon_sample, (70, 70), icon_sample)
    
    logo_brand = "FoundersGrant"
    draw.text((150, 76), logo_brand, fill=(29, 29, 31, 255), font=font_logo)
    brand_w = int(draw.textlength(logo_brand, font=font_logo))
    draw.text((150 + brand_w, 76), ".org", fill=(0, 113, 227, 255), font=font_logo)

    # Active Cohort Pill
    pill_text = "Q4 2026 / Q1 2027 COHORT LIVE · IN-KIND SPRINT"
    pill_text_w = int(draw.textlength(pill_text, font=font_pill))
    draw.rounded_rectangle([(70, 155), (70 + pill_text_w + 50, 195)], radius=20, fill=(234, 243, 255, 255), outline=(184, 218, 255, 255))
    draw.ellipse([(88, 171), (98, 181)], fill=(52, 199, 89, 255))
    draw.text((110, 164), pill_text, fill=(0, 113, 227, 255), font=font_pill)

    # Main Headline
    draw.text((70, 220), "The $0 In-Kind Technology Grant.", fill=(29, 29, 31, 255), font=font_title)
    draw.text((70, 285), "Engineered for Founders Who Build.", fill=(0, 113, 227, 255), font=font_title)

    # Subtext
    subtext = "Full-stack Next.js web applications, local SEO frameworks, and autonomous\nAI workflows awarded to bootstrapped entrepreneurs at zero cost."
    draw.text((70, 365), subtext, fill=(110, 110, 115, 255), font=font_subtitle, spacing=8)

    # 4 Bottom Metric Badges
    badges = [
        ("$52,000+", "In-Kind Value Delivered"),
        ("12 Metros", "Regional Grant Hubs"),
        ("100% Free", "Zero Invoicing or Lock-in"),
        ("7–14 Days", "Sprint Time to Production"),
    ]
    card_w = 245
    card_h = 95
    start_x = 70
    y_pos = 460
    
    for i, (val, lbl) in enumerate(badges):
        x = start_x + i * (card_w + 24)
        draw.rounded_rectangle([(x, y_pos), (x + card_w, y_pos + card_h)], radius=12, fill=(255, 255, 255, 255), outline=(210, 210, 215, 255))
        is_green = i in [0, 2]
        val_color = (52, 199, 89, 255) if is_green else (0, 113, 227, 255)
        draw.text((x + 16, y_pos + 16), val, fill=val_color, font=font_card_val)
        draw.text((x + 16, y_pos + 56), lbl, fill=(110, 110, 115, 255), font=font_card_lbl)

    # Footer note
    draw.text((70, 580), "Engineered & Directed by DevMellio LLC · Denver, CO · 1500 N Grant St · foundersgrant.org", fill=(142, 142, 147, 255), font=font_footer)

    og_path = os.path.join(PUBLIC, "og-image.png")
    img.save(og_path, "PNG")
    print(f"Created {og_path}")

create_og_image()
