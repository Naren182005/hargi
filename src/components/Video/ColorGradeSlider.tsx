"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sliders, Sparkles, Bot, Eye, Scan, Target, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ColorGradeSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="vision-demo" className="relative z-20 bg-[#050505] px-6 py-20 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange backdrop-blur-md">
            <Scan className="h-3.5 w-3.5" />
            <span>Payoda Technologies ML & Computer Vision Lab</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
            AI Neural <span className="text-gradient-orange">Perception Layer.</span>
          </h3>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            {PORTFOLIO_DATA.visionDemo.description}
          </p>
        </div>

        {/* Comparison Frame Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative h-[340px] sm:h-[480px] md:h-[560px] w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_0_50px_rgba(255,77,0,0.15)] cursor-ew-resize select-none"
        >
          {/* Layer 1: AI Neural Perception Layer (Full Width) */}
          <div className="absolute inset-0">
            <img
              src="/sequence/frame_100.webp"
              alt="AI Neural Perception Layer"
              className="h-full w-full object-cover brightness-105 contrast-110"
            />
            {/* AI HUD Overlays & Bounding Boxes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Neural Bounding Box 1: Face Landmark / Gaze Tracking */}
            <div className="absolute top-1/4 left-1/3 w-36 sm:w-48 h-40 sm:h-56 border-2 border-brand-orange/80 rounded-lg p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(255,77,0,0.4)]">
              <div className="flex items-center justify-between text-[10px] font-mono bg-black/80 px-1.5 py-0.5 rounded text-brand-orange border border-brand-orange/40">
                <span>GAZE_TRACKING</span>
                <span>99.2%</span>
              </div>
              {/* Target reticle */}
              <div className="mx-auto my-auto flex items-center justify-center">
                <Target className="h-8 w-8 text-brand-orange/70 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="text-[9px] font-mono text-cyan-300 bg-black/80 px-1 rounded">
                LIP_SYNC: SYNCHRONIZED
              </div>
            </div>

            {/* Neural Bounding Box 2: Object / Mobile Phone Detection Sentinel */}
            <div className="absolute bottom-1/4 right-1/4 w-28 sm:w-36 h-28 sm:h-36 border-2 border-red-500/80 rounded-lg p-1.5 flex flex-col justify-between shadow-[0_0_20px_rgba(255,34,0,0.4)]">
              <div className="flex items-center justify-between text-[9px] font-mono bg-black/80 px-1 py-0.5 rounded text-red-400 border border-red-500/40">
                <span>DEVICE_DETECTOR</span>
                <span>CLEAR</span>
              </div>
              <div className="text-[9px] font-mono text-neutral-400 text-center">
                PERSON_COUNT: 1
              </div>
            </div>

            {/* Graded / AI Active Badge */}
            <div className="absolute top-6 right-6 rounded-full border border-brand-orange/50 bg-black/80 px-4 py-1.5 text-xs font-mono font-semibold text-brand-orange backdrop-blur-md shadow-lg flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-ping" />
              <span>{PORTFOLIO_DATA.visionDemo.afterLabel}</span>
            </div>
          </div>

          {/* Layer 2: RAW Camera Input (Clipped to slider position) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative h-full w-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
              <img
                src="/sequence/frame_100.webp"
                alt="RAW Camera Input"
                style={{
                  filter: "grayscale(0.4) contrast(0.85) brightness(0.9)",
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* Raw Input Badge */}
            <div className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/80 px-4 py-1.5 text-xs font-mono font-semibold text-neutral-300 backdrop-blur-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
              <span>{PORTFOLIO_DATA.visionDemo.beforeLabel}</span>
            </div>
          </div>

          {/* Divider Handle Line */}
          <div
            className="absolute inset-y-0 z-10 w-1 bg-white shadow-[0_0_15px_#fff]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-orange text-white shadow-[0_0_20px_#ff4d00]">
              <Sliders className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="mt-4 flex items-center justify-between text-xs font-mono text-neutral-400 px-2">
          <span>← RAW SENSOR STREAM</span>
          <span className="hidden sm:inline">DRAG SLIDER TO INSPECT REAL-TIME INFERENCE</span>
          <span>NEURAL MESH OVERLAY →</span>
        </div>
      </div>
    </section>
  );
};
