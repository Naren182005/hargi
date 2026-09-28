import os
import glob
import shutil
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
import cv2

SRC_DIR = "./image"
DEST_DIR = "./public/sequence"
TOTAL_OUTPUT_FRAMES = 180
TARGET_W, TARGET_H = 1920, 1080  # Keep high quality full HD 1080p

def remove_old_sequence():
    print(f"Removing old files in {DEST_DIR}...")
    if os.path.exists(DEST_DIR):
        for f in os.listdir(DEST_DIR):
            file_path = os.path.join(DEST_DIR, f)
            if os.path.isfile(file_path):
                os.remove(file_path)
    os.makedirs(DEST_DIR, exist_ok=True)
    print("Old sequence files cleaned successfully.")

def remove_watermark(cv_img):
    """
    Detects and seamlessly inpaints the Gemini sparkle watermark in the bottom-right region.
    """
    h, w, _ = cv_img.shape
    # Bottom right ROI where watermark is located
    y1, y2 = h - 250, h - 40
    x1, x2 = w - 250, w - 40
    
    roi = cv_img[y1:y2, x1:x2]
    gray = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
    
    # Detect the bright watermark star pixels
    thresh = (gray > 65).astype(np.uint8) * 255
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (11, 11))
    dilated = cv2.dilate(thresh, kernel, iterations=3)
    
    mask = np.zeros((h, w), dtype=np.uint8)
    mask[y1:y2, x1:x2] = dilated
    
    # Inpaint using Telea fast marching method
    inpainted = cv2.inpaint(cv_img, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)
    return inpainted

def enhance_image(pil_img):
    # Unsharp mask for crisp facial micro-details & clothing texture
    sharpened = pil_img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=2))
    # Subtle micro-contrast and vibrance
    enhanced = ImageEnhance.Sharpness(sharpened).enhance(1.10)
    enhanced = ImageEnhance.Contrast(enhanced).enhance(1.04)
    enhanced = ImageEnhance.Color(enhanced).enhance(1.03)
    return enhanced

def process():
    remove_old_sequence()

    src_files = sorted(glob.glob(os.path.join(SRC_DIR, "frame_*.jpg")))
    print(f"Found {len(src_files)} user source images in {SRC_DIR}.")
    if not src_files:
        raise ValueError(f"No source images found in {SRC_DIR}")

    # Load all source images, remove watermark, and convert to numpy arrays (RGB)
    source_images = []
    for f in src_files:
        cv_img = cv2.imread(f)
        cleaned_cv = remove_watermark(cv_img)
        # Also overwrite the source file with cleaned version
        cv2.imwrite(f, cleaned_cv)
        
        # Convert BGR to RGB for PIL / numpy interpolation
        rgb_img = cv2.cvtColor(cleaned_cv, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb_img)
        if pil_img.size != (TARGET_W, TARGET_H):
            pil_img = pil_img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
        source_images.append(np.array(pil_img, dtype=np.float32))

    num_sources = len(source_images)
    print(f"Interpolating {num_sources} keyframes to {TOTAL_OUTPUT_FRAMES} buttery-smooth frames...")

    for out_idx in range(TOTAL_OUTPUT_FRAMES):
        # Calculate fractional position in source frames
        if TOTAL_OUTPUT_FRAMES > 1:
            pos = (out_idx / (TOTAL_OUTPUT_FRAMES - 1)) * (num_sources - 1)
        else:
            pos = 0.0

        idx_low = int(pos)
        idx_high = min(idx_low + 1, num_sources - 1)
        weight = pos - idx_low

        # Linear blend between keyframes
        if weight == 0 or idx_low == idx_high:
            blended_np = source_images[idx_low].astype(np.uint8)
        else:
            blended = (1.0 - weight) * source_images[idx_low] + weight * source_images[idx_high]
            blended_np = np.clip(blended, 0, 255).astype(np.uint8)

        blended_pil = Image.fromarray(blended_np)
        final_img = enhance_image(blended_pil)

        frame_num = out_idx + 1
        padded = f"{frame_num:03d}"

        # 1. Save WebP (modern lightweight high quality)
        webp_path = os.path.join(DEST_DIR, f"frame_{padded}.webp")
        final_img.save(webp_path, "WEBP", quality=90, method=4)

        # 2. Save JPG (universal fallback)
        jpg_path = os.path.join(DEST_DIR, f"frame_{padded}.jpg")
        final_img.save(jpg_path, "JPEG", quality=92, subsampling=0)



        if frame_num % 30 == 0 or frame_num == TOTAL_OUTPUT_FRAMES:
            print(f"Generated frame {frame_num}/{TOTAL_OUTPUT_FRAMES}")

    print("All sequence frames created successfully!")

if __name__ == "__main__":
    process()
