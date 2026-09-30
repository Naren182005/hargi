"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/CanvasScroller/ScrollyCanvas";
import { HarGiOverlay } from "@/components/CanvasScroller/HarGiOverlay";
import { Preloader } from "@/components/CanvasScroller/Preloader";
import { CompanyVision3D } from "@/components/3D/CompanyVision3D";
import { ProductShowcase3D } from "@/components/3D/ProductShowcase3D";
import { Contact3D } from "@/components/3D/Contact3D";

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

        {/* Section 3: Products (61 Agro Products with Search & Categories) */}
        <section id="products" className="relative w-full">
          <ProductShowcase3D />
        </section>

        {/* Section 4: Contact (Direct Contact Desk, Business Hours & Inquiry Form) */}
        <section id="contact" className="relative w-full">
          <Contact3D />
        </section>
      </div>
    </>
  );
}
