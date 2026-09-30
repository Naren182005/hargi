"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/CanvasScroller/ScrollyCanvas";
import { HarGiOverlay } from "@/components/CanvasScroller/HarGiOverlay";
import { Preloader } from "@/components/CanvasScroller/Preloader";
import { CompanyVision3D } from "@/components/3D/CompanyVision3D";
import { ProductShowcase3D } from "@/components/3D/ProductShowcase3D";
import { Contact3D } from "@/components/3D/Contact3D";
import StackSpread from "@/components/UI/stack-spread";
import ScrollVelocity from "@/components/UI/ScrollVelocity";

export default function HomePage() {
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 51;

  return (
    <>
      {/* 1. 3D Sequence Preloader */}
      <Preloader loaded={loadedFrames} total={totalFrames} />

      {/* Main Continuous Single-Page Flow with Top Header Navigation */}
      <div className="w-full pt-20 sm:pt-24">
        {/* Section 1: Home (3D Scrolly Canvas) */}
        <section id="home" className="relative w-full">
          <ScrollyCanvas
            totalFrames={totalFrames}
            onLoadingProgress={(loaded) => setLoadedFrames(loaded)}
          >
            <HarGiOverlay />
          </ScrollyCanvas>
        </section>

        {/* Section 2: About (HarGi Agro Products Story, Strengths & Purpose) */}
        <section id="about" className="relative w-full">
          <CompanyVision3D />
        </section>

        {/* Dynamic Velocity Marquee Ribbon 1 */}
        <div className="py-6 bg-[#f4f8f4] overflow-hidden border-y border-[#0f5132]/5">
          <ScrollVelocity
            texts={[
              "HARGI AGRO PRODUCTS • SOURCED FROM SOUTH INDIA • 100% PURE & ORGANIC •",
              "COCONUT DERIVATIVES • TRADITIONAL JAGGERY • INDIAN SPICES • SPECIALTY COFFEE •",
            ]}
            velocity={60}
            className="text-[#0f5132]/15 font-black uppercase text-3xl sm:text-5xl lg:text-6xl tracking-widest font-sans"
          />
        </div>

        {/* Section 3: Products (Interactive Stack Spread Showcase + Catalog Grid) */}
        <section id="products" className="relative w-full">
          <StackSpread />
          <ProductShowcase3D />
        </section>

        {/* Dynamic Velocity Marquee Ribbon 2 */}
        <div className="py-6 bg-[#f4f8f4] overflow-hidden border-y border-[#0f5132]/5">
          <ScrollVelocity
            texts={[
              "GLOBAL MARITIME EXPORT • WORLDWIDE SHIPPING • APEDA CERTIFIED •",
              "RELIABLE BULK SUPPLY • 24/7 TRADE DESK • TAMIL NADU INDIA •",
            ]}
            velocity={50}
            className="text-[#0f5132]/15 font-black uppercase text-3xl sm:text-5xl lg:text-6xl tracking-widest font-sans"
          />
        </div>

        {/* Section 4: Contact (Direct Contact Desk, Business Hours & Inquiry Form) */}
        <section id="contact" className="relative w-full">
          <Contact3D />
        </section>
      </div>
    </>
  );
}
