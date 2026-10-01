"use client";

import React from "react";
import {
  Phone,
  Sparkles,
} from "lucide-react";

export const Footer3D: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white font-sans">
      {/* ============================================================ */}
      {/* 1. Ultra-Smooth Gradient Wave Blend (Transitions from #f4f8f4) */}
      {/* ============================================================ */}
      <div className="relative w-full bg-[#f4f8f4] -mb-1">
        {/* Soft atmospheric gradient glow leading into the curve */}
        <div className="h-16 sm:h-24 w-full bg-gradient-to-b from-[#f4f8f4] via-[#f4f8f4]/90 to-[#25523e]/20 pointer-events-none" />

        {/* Multi-layered organic SVG wave for smooth organic blending into #25523e */}
        <div className="relative w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 sm:h-24 md:h-32 text-[#25523e]"
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background wave layer */}
            <path
              d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,117.3C672,96,768,64,864,64C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,180L1392,180C1344,180,1248,180,1152,180C1056,180,960,180,864,180C768,180,672,180,576,180C480,180,384,180,288,180C192,180,96,180,48,180L0,180Z"
              fill="#25523e"
              fillOpacity="0.3"
            />
            {/* Midtone wave layer */}
            <path
              d="M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,90.7C840,85,960,107,1080,117.3C1200,128,1320,128,1380,128L1440,128L1440,180L1380,180C1320,180,1200,180,1080,180C960,180,840,180,720,180C600,180,480,180,360,180C240,180,120,180,60,180L0,180Z"
              fill="#25523e"
              fillOpacity="0.65"
            />
            {/* Foreground wave matching #25523e */}
            <path
              d="M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,144C672,149,768,139,864,128C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,180L1392,180C1344,180,1248,180,1152,180C1056,180,960,180,864,180C768,180,672,180,576,180C480,180,384,180,288,180C192,180,96,180,48,180L0,180Z"
              fill="#25523e"
            />
          </svg>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. Main Footer Body with Theme Color #25523e                 */}
      {/* ============================================================ */}
      <div className="relative bg-[#25523e] pt-4 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
        {/* Subtle Ambient Light Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 -right-32 w-96 h-96 bg-[#4d7c0f]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">
          {/* CTA Banner: Clean Seamless Text & Action Row */}
          <div className="py-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2.5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Ready to Source Premium South Indian Agro Products?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                  Connect directly with our export trade desk for APEDA-certified bulk shipments, 
                  custom packaging, and competitive container freight pricing.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap gap-3 items-center justify-start lg:justify-end">
                <a
                  href="https://wa.me/917779955393?text=Hello%20HarGi%20Agro%20Team,%20I%20would%20like%20to%20request%20an%20export%20quotation%20for%20agro%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#4d7c0f] hover:bg-[#3f6212] text-white font-bold text-xs sm:text-sm shadow-lg shadow-black/25 hover:shadow-black/40 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20"
                >
                  <Sparkles className="w-4 h-4 text-[#bef264]" />
                  <span>Request Export RFQ</span>
                </a>

                <a
                  href="tel:+917779955393"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm transition-all duration-300 hover:border-white/40"
                >
                  <Phone className="w-4 h-4 text-[#bef264]" />
                  <span>+91 77799 55393</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Copyright Bar */}
          <div className="pt-2 flex items-center justify-center text-xs sm:text-sm text-white font-medium text-center">
            <p className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] tracking-wide">
              © {new Date().getFullYear()} <span className="text-white font-bold">HarGi Agro Products Private Limited</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
