"""ينشئ النسخ الخفيفة للصور: لكل صورة jpg في up/ و img/
   - نسخة webp بنفس الحجم (أخف)
   - صورة مصغّرة في t/ (عرض 560) بصيغتين jpg و webp
   ما يلمس الصور اللي لها نسخ جاهزة."""
import os, sys
from PIL import Image, ImageOps

TW = 560
made = 0

def save(im, path, fmt, q):
    global made
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    im.save(path, fmt, quality=q, **({"method": 6} if fmt == "WEBP" else {"optimize": True, "progressive": True}))
    made += 1

for d in ("up", "img"):
    if not os.path.isdir(d):
        continue
    for f in sorted(os.listdir(d)):
        if not f.lower().endswith((".jpg", ".jpeg")):
            continue
        src = os.path.join(d, f)
        base = os.path.splitext(f)[0]
        wf = os.path.join(d, base + ".webp")
        tj = os.path.join("t", d, f)
        tw = os.path.join("t", d, base + ".webp")
        if os.path.exists(wf) and os.path.exists(tj) and os.path.exists(tw):
            continue
        try:
            im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        except Exception as e:
            print("skip", src, e, file=sys.stderr)
            continue
        if not os.path.exists(wf):
            save(im, wf, "WEBP", 78)
        if not (os.path.exists(tj) and os.path.exists(tw)):
            th = im.copy()
            if th.width > TW:
                th = th.resize((TW, round(th.height * TW / th.width)), Image.LANCZOS)
            if not os.path.exists(tj):
                save(th, tj, "JPEG", 80)
            if not os.path.exists(tw):
                save(th, tw, "WEBP", 78)

print("made", made)
