"use client";

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from "react";
import { useScroll, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";

interface ScrollyContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollyContext = createContext<ScrollyContextType | null>(null);

export const useScrolly = () => {
  const ctx = useContext(ScrollyContext);
  return ctx;
};

interface ScrollyCanvasProps {
  totalFrames?: number;
  onProgressUpdate?: (progress: number) => void;
  onLoadingProgress?: (loaded: number, total: number) => void;
  children?: React.ReactNode | ((scrollYProgress: MotionValue<number>) => React.ReactNode);
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
  totalFrames = 51,
  onProgressUpdate,
  onLoadingProgress,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);

  // Framer Motion scroll tracking over the 400vh container
  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Inertia spring smoothing for buttery 60-120 FPS glide without discrete wheel jumps
  const smoothProgress = useSpring(rawScrollProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.22,
    restDelta: 0.0001,
  });

  // Render a specific frame with object-fit: cover math
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Clamp index
    const clampedIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));
    const img = imagesRef.current[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      // If current frame isn't loaded yet, find closest loaded frame to prevent blank screen
      let fallbackImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[clampedIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          fallbackImg = prev;
          break;
        }
        const next = imagesRef.current[clampedIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          fallbackImg = next;
          break;
        }
      }
      if (fallbackImg) {
        drawImageCover(ctx, canvas, fallbackImg);
      }
      return;
    }

    drawImageCover(ctx, canvas, img);
  }, [totalFrames]);

  // Object-fit: cover calculation helper
  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const w = canvas.width;
    const h = canvas.height;
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;

    if (imgW === 0 || imgH === 0) return;

    const imgAspect = imgW / imgH;
    const canvasAspect = w / h;

    let renderW = w;
    let renderH = h;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than image: scale to canvas width
      renderW = w;
      renderH = w / imgAspect;
      offsetY = (h - renderH) / 2;
    } else {
      // Canvas is taller than image: scale to canvas height
      renderH = h;
      renderW = h * imgAspect;
      offsetX = (w - renderW) / 2;
    }

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, imgW, imgH, offsetX, offsetY, renderW, renderH);
  };

  // Resize canvas with devicePixelRatio scaling
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    }

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all 51 brand images into memory
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
    let loadedCounter = 0;

    const getFramePath = (index: number) => {
      const padded = String(index + 1).padStart(4, "0");
      return `/sequence/frame_${padded}.jpg`;
    };

    // Priority load: frame 0 first for instant paint
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      loadedCounter++;
      setIsFirstFrameLoaded(true);
      handleResize();
      renderFrame(0);
      onLoadingProgress?.(loadedCounter, totalFrames);

      // Then load remaining 50 frames progressively
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          imagesRef.current[i] = img;
          loadedCounter++;
          onLoadingProgress?.(loadedCounter, totalFrames);

          if (currentFrameRef.current === i) {
            renderFrame(i);
          }
        };
      }
    };

    firstImg.onerror = () => {
      console.error("Failed to load initial frame:", getFramePath(0));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, handleResize, renderFrame, onLoadingProgress]);

  // Subscribe to Framer Motion spring-smoothed scroll changes
  useMotionValueEvent(smoothProgress, "change", (latestProgress) => {
    onProgressUpdate?.(latestProgress);

    // Map 0 -> 1 to frame index 0 -> totalFrames - 1
    const frameIndex = Math.max(0, Math.min(Math.round(latestProgress * (totalFrames - 1)), totalFrames - 1));

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      animationFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(frameIndex);
      });
    }
  });

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative h-[450vh] w-full bg-background"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block h-full w-full object-cover"
          style={{
            backgroundColor: "#030705",
            opacity: isFirstFrameLoaded ? 1 : 0.4,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Cinematic Vignette & Edge Blending into background */}
        <div className="canvas-vignette absolute inset-0 z-[5]" />

        {/* Subtle emerald glow accent that breathes with the background */}
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-brand-emerald/10 blur-[140px]" />

        {/* Narrative Parallax Overlay sitting at z-10 with smoothed scroll progress */}
        <ScrollyContext.Provider value={{ scrollYProgress: smoothProgress }}>
          <div className="absolute inset-0 z-10">
            {typeof children === "function" ? children(smoothProgress) : children}
          </div>
        </ScrollyContext.Provider>
      </div>
    </div>
  );
};

