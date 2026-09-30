"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import Image from "next/image";

interface PreloaderProps {
  loaded: number;
  total: number;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({
  loaded,
  total,
  onComplete,
}) => {
  const [isDone, setIsDone] = useState(false);
  const percentage = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));

  useEffect(() => {
    // When at least 20% loaded or 10 frames
    if (percentage >= 20 || loaded >= 10) {
      const timer = setTimeout(() => {
        setIsDone(true);
        onComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [percentage, loaded, onComplete]);

  // Fail-safe dismiss after 2.0 seconds regardless
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 2000);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-background p-8 md:p-14 select-none pointer-events-none"
        >
          {/* Top Brand Bar */}
          <div className="w-full flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400">
            <span className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-brand-lime animate-pulse" />
              HARGI AGRO PRODUCTS PVT LTD
            </span>
            <span className="text-brand-lime font-mono">3D SCROLL SEQUENCE</span>
          </div>

          {/* Center Progress Counter */}
          <div className="flex flex-col items-center gap-6 my-auto">
            <div className="relative h-12 w-36 mb-2">
              <Image
                src="/hargi-logo.png"
                alt="HarGi Agro"
                fill
                className="object-contain filter brightness-110 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                priority
              />
            </div>

            <div className="relative">
              <span className="text-7xl sm:text-9xl font-extrabold font-display tracking-tighter text-white">
                {Math.max(percentage, 10)}
              </span>
              <span className="text-xl sm:text-2xl font-mono text-brand-lime ml-1 font-bold">
                %
              </span>
            </div>

            <div className="w-64 sm:w-80 h-1 bg-surface-elevated rounded-full overflow-hidden border border-brand-emerald/20">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-emerald via-emerald-400 to-brand-lime shadow-glow-green"
                style={{ width: `${Math.max(percentage, 10)}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 tracking-wider">
              <span>INITIALIZING 3D EXPORT MATRIX</span>
              <span>•</span>
              <span className="text-brand-lime font-mono">
                {loaded}/{total} 3D FRAMES
              </span>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>NATURAL AGRO PRODUCTS • SOURCED WITH CARE</span>
            <span>60-120 FPS FLUID GLIDE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

