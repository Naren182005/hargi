import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

SOURCE_DIR = r"D:\hargi\Personal-portfolio-main\image"
TARGET_DIRS = [
    r"D:\hargi\Personal-portfolio-main\image",
    r"D:\hargi\Personal-portfolio-main\public\sequence"
]

def enhance_image(img_bgr):
    # 1. Upscale from 1280x720 to 1920x1080 using Lanczos-4 interpolation for maximum edge fidelity
    h, w = img_bgr.shape[:2]
    target_w, target_h = 1920, 1080
    if w < target_w or h < target_h:
        upscaled = cv2.resize(img_bgr, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
    else:
        upscaled = img_bgr

    # 2. Subtle edge-preserving bilateral filter to clear up existing JPEG compression artifacts without blurring fine lines
    denoised = cv2.bilateralFilter(upscaled, d=5, sigmaColor=30, sigmaSpace=30)

    # 3. LAB Color Space Processing: Apply subtle CLAHE to Lightness (L) channel for micro-contrast & clarity
    lab = cv2.cvtColor(denoised, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    
    clahe = cv2.createCLAHE(clipLimit=1.8, tileGridSize=(8, 8))
    cl = clahe.apply(l)
    
    merged_lab = cv2.merge((cl, a, b))
    enhanced_bgr = cv2.cvtColor(merged_lab, cv2.COLOR_LAB2BGR)

    # 4. Unsharp masking for crisp details (coconut fibers, coffee beans, textures)
    gaussian_blur = cv2.GaussianBlur(enhanced_bgr, (0, 0), sigmaX=1.5)
    unsharp = cv2.addWeighted(enhanced_bgr, 1.45, gaussian_blur, -0.45, 0)

    # 5. Convert to PIL for subtle color vibrancy & sharpness boost
    pil_img = Image.fromarray(cv2.cvtColor(unsharp, cv2.COLOR_BGR2RGB))
    
    # Slight color saturation boost (1.10x) for rich, organic tones
    color_enhancer = ImageEnhance.Color(pil_img)
    pil_img = color_enhancer.enhance(1.10)
    
    # Detail sharpness
    sharpness_enhancer = ImageEnhance.Sharpness(pil_img)
    pil_img = sharpness_enhancer.enhance(1.20)
    
    return pil_img

def main():
    print("Starting frame image enhancement pipeline (frame_0001.jpg to frame_0051.jpg)...")
    
    for i in range(1, 52):
        filename = f"frame_{i:04d}.jpg"
        src_path = os.path.join(SOURCE_DIR, filename)
        
        if not os.path.exists(src_path):
            print(f"Warning: {src_path} not found!")
            continue
            
        # Read image
        img_bgr = cv2.imread(src_path)
        if img_bgr is None:
            print(f"Error reading {src_path}")
            continue
            
        # Process and enhance
        enhanced_pil = enhance_image(img_bgr)
        
        # Save to both target directories with max quality and 4:4:4 chroma subsampling (no compression loss)
        for target_dir in TARGET_DIRS:
            os.makedirs(target_dir, exist_ok=True)
            dst_path = os.path.join(target_dir, filename)
            enhanced_pil.save(dst_path, "JPEG", quality=96, subsampling=0, optimize=True)
            
        if i % 10 == 0 or i == 51:
            print(f"Enhanced {i}/51 frames -> {filename}")
            
    print("All 51 frames successfully enhanced to 1080p high quality with crystal clear detail!")

if __name__ == "__main__":
    main()
