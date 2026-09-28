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

    src_files = sorted(glob.glob(os.path.join(SRC_DIR, "*.jpg")))
    print(f"Found {len(src_files)} user source images in {SRC_DIR}.")
    if not src_files:
        raise ValueError(f"No source images found in {SRC_DIR}")

    # Load all source images into numpy arrays (RGB)
    source_images = []
    for f in src_files:
        img = Image.open(f).convert("RGB")
        if img.size != (TARGET_W, TARGET_H):
            img = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
        source_images.append(np.array(img, dtype=np.float32))

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
