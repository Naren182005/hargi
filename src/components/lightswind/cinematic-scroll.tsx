"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export interface CinematicScrollProps {
  children: React.ReactNode;
  blurLayers?: number;
  blurMax?: number;
  blurSize?: number;
  accentColor?: string;
  showScrollbar?: boolean;
  className?: string;
  contentClassName?: string;
  mode?: "auto" | "window" | "container";
}

export const CinematicScroll: React.FC<CinematicScrollProps> = ({
  children,
  blurLayers = 5,
  blurMax = 20,
  blurSize = 80,
  accentColor = "#15803d",
  showScrollbar = true,
  className = "",
  contentClassName = "",
  mode = "auto",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isWindowMode, setIsWindowMode] = useState(mode === "window");

  useEffect(() => {
    if (mode === "auto") {
      // If no explicit height is given on className or container is full height, default to window scroll
      const isExplicitHeight = /h-\[\d+px\]|h-screen|max-h-/.test(className);
      setIsWindowMode(!isExplicitHeight);
    } else {
      setIsWindowMode(mode === "window");
    }
  }, [mode, className]);

  // Window scroll tracking
  const { scrollYProgress: windowScrollProgress } = useScroll();

  // Container scroll tracking
  const { scrollYProgress: containerScrollProgress } = useScroll({
    container: isWindowMode ? undefined : containerRef,
  });

  const activeProgress = isWindowMode ? windowScrollProgress : containerScrollProgress;

  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const scrollbarThumbTop = useTransform(smoothProgress, [0, 1], ["0%", "85%"]);
  const scrollbarProgressScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  // Generate progressive blur layer styles
  const layers = Array.from({ length: blurLayers }, (_, i) => {
    const step = (i + 1) / blurLayers;
    const blurAmount = Math.round((blurMax / blurLayers) * (i + 1));
    const heightPercent = Math.round(100 - (i * (100 / (blurLayers * 1.5))));
    const zIndex = blurLayers - i;

    return {
      step,
      blurAmount,
      heightPercent,
      zIndex,
    };
  });

  if (isWindowMode) {
    return (
      <div
        className={`relative w-full ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Fixed Progressive Blur Mask */}
        <div
          className="fixed top-0 left-0 right-0 pointer-events-none z-30 select-none overflow-hidden"
          style={{ height: `${blurSize}px` }}
          aria-hidden="true"
        >
          {layers.map((layer, index) => (
            <div
              key={`win-top-blur-${index}`}
              className="absolute top-0 left-0 right-0 w-full"
              style={{
                height: `${layer.heightPercent}%`,
                backdropFilter: `blur(${layer.blurAmount}px)`,
                WebkitBackdropFilter: `blur(${layer.blurAmount}px)`,
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                zIndex: layer.zIndex,
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className={`w-full ${contentClassName}`}>{children}</div>

        {/* Bottom Fixed Progressive Blur Mask */}
        <div
          className="fixed bottom-0 left-0 right-0 pointer-events-none z-30 select-none overflow-hidden"
          style={{ height: `${blurSize}px` }}
          aria-hidden="true"
        >
          {layers.map((layer, index) => (
            <div
              key={`win-bottom-blur-${index}`}
              className="absolute bottom-0 left-0 right-0 w-full"
              style={{
                height: `${layer.heightPercent}%`,
                backdropFilter: `blur(${layer.blurAmount}px)`,
                WebkitBackdropFilter: `blur(${layer.blurAmount}px)`,
                maskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
                zIndex: layer.zIndex,
              }}
            />
          ))}
        </div>

        {/* Fixed Cinematic Scroll Progress Indicator */}
        {showScrollbar && (
          <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-50 pointer-events-none">
            <motion.div
              style={{
                scaleX: scrollbarProgressScale,
                transformOrigin: "left",
                backgroundColor: accentColor,
                boxShadow: `0 0 12px ${accentColor}`,
              }}
              className="w-full h-full"
            />
          </div>
        )}
      </div>
    );
  }

  // Container-bounded mode
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Progressive Blur Masks */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-20 select-none overflow-hidden"
        style={{ height: `${blurSize}px` }}
        aria-hidden="true"
      >
        {layers.map((layer, index) => (
          <div
            key={`top-blur-${index}`}
            className="absolute top-0 left-0 right-0 w-full"
            style={{
              height: `${layer.heightPercent}%`,
              backdropFilter: `blur(${layer.blurAmount}px)`,
              WebkitBackdropFilter: `blur(${layer.blurAmount}px)`,
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              zIndex: layer.zIndex,
            }}
          />
        ))}
      </div>

      {/* Scrollable Viewport */}
      <div
        ref={containerRef}
        className={`w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${contentClassName}`}
      >
        {children}
      </div>

      {/* Bottom Progressive Blur Masks */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 select-none overflow-hidden"
        style={{ height: `${blurSize}px` }}
        aria-hidden="true"
      >
        {layers.map((layer, index) => (
          <div
            key={`bottom-blur-${index}`}
            className="absolute bottom-0 left-0 right-0 w-full"
            style={{
              height: `${layer.heightPercent}%`,
              backdropFilter: `blur(${layer.blurAmount}px)`,
              WebkitBackdropFilter: `blur(${layer.blurAmount}px)`,
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              zIndex: layer.zIndex,
            }}
          />
        ))}
      </div>

      {/* Container Custom Scrollbar Thumb */}
      {showScrollbar && (
        <div
          className={`absolute top-3 right-1.5 bottom-3 w-1.5 rounded-full bg-black/5 dark:bg-white/5 pointer-events-none z-30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-40"
          }`}
        >
          <motion.div
            style={{
              top: scrollbarThumbTop,
              backgroundColor: accentColor,
              boxShadow: `0 0 10px ${accentColor}80`,
            }}
            className="absolute left-0 right-0 h-12 rounded-full cursor-pointer pointer-events-auto"
          />
        </div>
      )}
    </div>
  );
};
