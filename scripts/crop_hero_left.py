from PIL import Image

im = Image.open("scripts/hero_live.png")
print("Full hero size:", im.size)

# Crop left column of hero: x=100 to 750, y=100 to 750
crop = im.crop((120, 140, 750, 720))
crop.save("scripts/current_hero_left.png")
print("Saved scripts/current_hero_left.png")
