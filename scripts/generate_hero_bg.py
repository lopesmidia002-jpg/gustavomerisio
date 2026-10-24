import numpy as np
from PIL import Image

def generate_hero_bg():
    w, h = 2400, 1200
    
    xs = np.linspace(0, w - 1, w, dtype=np.float32)
    ys = np.linspace(0, h - 1, h, dtype=np.float32)
    xx, yy = np.meshgrid(xs, ys)
    
    # Arc centered towards the right side (over the video frame and compass)
    cx = 1560.0
    cy = 1220.0
    r_peak = 1140.0
    
    # Distance from center
    dist = np.sqrt((xx - cx)**2 + (yy - cy)**2)
    diff = dist - r_peak
    
    # Radial band thickness (smooth wide Gaussian roll-off)
    sigma_inner = 230.0
    sigma_outer = 270.0
    
    band_profile = np.where(diff < 0,
                            np.exp(-0.5 * (diff / sigma_inner)**2),
                            np.exp(-0.5 * (diff / sigma_outer)**2))
    
    # Angle in radians (0 is right, pi/2 is straight up, pi is left)
    angles = np.arctan2(-(yy - cy), (xx - cx))
    
    # Arch window:
    # Right edge (angle 0.1 rad) through top-right (0.8 rad) to top-center (1.6 rad)
    # Fades out smoothly as it approaches the left column (angle > 1.9 rad or x < 1050)
    fade_right = np.clip((angles - 0.05) / 0.35, 0, 1)
    fade_left = np.clip((2.20 - angles) / 0.70, 0, 1)
    
    # Also strictly protect the left column (x < 980) to ensure pristine black background for text
    x_protection = np.clip((xx - 880.0) / 220.0, 0, 1)
    
    angular_window = fade_right * (fade_left ** 1.4) * (x_protection ** 1.2)
    
    # Intensity along arc:
    # Maximum over the video / right side (~1.0)
    # Medium over the top apex (~0.85)
    # Fades out cleanly on the left
    t_arc = np.clip((2.20 - angles) / 2.0, 0, 1)
    arc_brightness = 0.50 + 0.50 * (t_arc ** 0.8)
    
    total_light = np.clip(band_profile * angular_window * arc_brightness, 0, 1)
    
    # Color stops matching Image 2:
    # Right flank (t_arc ~ 0.7 to 1.0): glowing peach amber
    r_hi, g_hi, b_hi = 244.0, 162.0, 116.0
    # Apex (t_arc ~ 0.35 to 0.65): rich flame orange
    r_mid, g_mid, b_mid = 228.0, 92.0, 30.0
    # Left flank (t_arc ~ 0.0 to 0.3): deep burnt amber rust
    r_lo, g_lo, b_lo = 160.0, 50.0, 12.0
    
    w_hi = np.clip((t_arc - 0.45) / 0.55, 0, 1) ** 1.1
    w_lo = np.clip((0.45 - t_arc) / 0.45, 0, 1) ** 1.1
    w_mid = np.maximum(0, 1.0 - w_hi - w_lo)
    
    target_r = w_hi * r_hi + w_mid * r_mid + w_lo * r_lo
    target_g = w_hi * g_hi + w_mid * g_mid + w_lo * g_lo
    target_b = w_hi * b_hi + w_mid * b_mid + w_lo * b_lo
    
    # Base background: deep black (#040404)
    bg_base = 4.0
    
    r = bg_base + (total_light ** 1.05) * (target_r - bg_base)
    g = bg_base + (total_light ** 1.25) * (target_g - bg_base)
    b = bg_base + (total_light ** 1.45) * (target_b - bg_base)
    
    # Organic 35mm film grain / cinematographic stippling
    np.random.seed(42)
    noise = np.random.normal(0, 1, (h, w)).astype(np.float32)
    
    grain_scale = 8.5 * (total_light ** 0.35 + 0.12)
    r = np.clip(r + noise * grain_scale, 0, 255)
    g = np.clip(g + noise * grain_scale * 0.88, 0, 255)
    b = np.clip(b + noise * grain_scale * 0.72, 0, 255)
    
    img_array = np.stack([r, g, b], axis=-1).astype(np.uint8)
    img = Image.fromarray(img_array)
    
    img.save('assets/images/hero-ambient-arc.jpg', quality=95)
    print("Saved assets/images/hero-ambient-arc.jpg", img.size)

if __name__ == '__main__':
    generate_hero_bg()
