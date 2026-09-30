"use client";

import React from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { useScrolly } from "./ScrollyCanvas";

interface HarGiOverlayProps {
  scrollYProgress?: MotionValue<number>;
}

export const HarGiOverlay: React.FC<HarGiOverlayProps> = ({
  scrollYProgress: propScroll,
}) => {
  const context = useScrolly();
  const { scrollYProgress: fallbackScroll } = useScroll();
  const scrollYProgress = propScroll || context?.scrollYProgress || fallbackScroll;

  // Section 1: Brand Hero (0% to ~24% | Frames 1 - 13)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.24], [1, 0.95, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.24], [0, -70]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.24], [1, 0.95]);

  // Section 2: Coconut & Jaggery Sourcing (26% to ~48% | Frames 14 - 26)
  const s2Opacity = useTransform(scrollYProgress, [0.24, 0.30, 0.44, 0.50], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.24, 0.32, 0.44, 0.50], [50, 0, 0, -50]);

  // Section 3: Western Ghats Spices & Specialty Coffee (50% to ~74% | Frames 27 - 38)
  const s3Opacity = useTransform(scrollYProgress, [0.50, 0.56, 0.70, 0.76], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.50, 0.58, 0.70, 0.76], [50, 0, 0, -50]);

  // Section 4: Global Maritime Export (76% to ~100% | Frames 39 - 51)
  const s4Opacity = useTransform(scrollYProgress, [0.76, 0.82, 0.96, 1.0], [0, 1, 1, 0.95]);
  const s4Y = useTransform(scrollYProgress, [0.76, 0.84, 0.96, 1.0], [60, 0, 0, 0]);

  return (
    <div className="relative h-full w-full pointer-events-none select-none">
      {/* ============================================================ */}
      {/* SECTION 1: 0% - 24% | Brand Launch (Frames 1-14)              */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-between py-16 sm:py-20 px-6 text-center"
      >
        <div className="pt-4" />

        <div className="max-w-4xl space-y-5 my-auto">
          {/* Main Title */}
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight font-display text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
              Natural Agro Products, <br />
              <span className="text-gradient-green">Sourced with Care.</span>
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
            Quality coconut products, traditional jaggery and authentic Indian spices, sourced from South India and prepared for domestic and international markets.
          </p>
        </div>

        {/* Scroll down prompt */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            Scroll to experience 3D sequence
          </span>
          <div className="relative h-9 w-5 rounded-full border border-brand-emerald/40 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-brand-lime shadow-[0_0_8px_#22c55e]"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 2: 26% - 50% | Coconut & Jaggery (Frames 15-27)       */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28 text-left"
      >
        <div className="max-w-2xl space-y-5 pointer-events-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            COLD-PRESSED PURITY &amp; <br />
            <span className="text-gradient-gold">ARTISANAL JAGGERY.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-xl">
            Directly harvested from fertile Pollachi coastal groves and Erode river basins. Extra virgin
            cold-pressed coconut oil, desiccated coconut flakes, and chemical-free cane jaggery blocks
            rich in natural iron and minerals.
          </p>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 3: 50% - 74% | Western Ghats Spices (Frames 28-40)    */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 text-right"
      >
        <div className="max-w-2xl space-y-5 flex flex-col items-end pointer-events-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            AROMATIC SPICES &amp; <br />
            <span className="text-gradient-green">SINGLE-ORIGIN COFFEE.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-xl text-right">
            Prized Tellicherry bold black pepper, Alleppey 8mm green cardamom, and high-curcumin turmeric
            paired with single-origin shade-grown Arabica from Coorg highlands (3,800+ ft altitude).
          </p>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 4: 76% - 100% | Multimodal Sea Export (Frames 41-52)   */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
            FROM SOUTH INDIAN PORTS <br />
            <span className="text-gradient-green">TO 28+ GLOBAL SEAPORTS.</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            Temperature-controlled container dispatch from VOC Port Tuticorin and Cochin Seaport with complete
            phytosanitary, fumigation, and certificate of origin documentation.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
