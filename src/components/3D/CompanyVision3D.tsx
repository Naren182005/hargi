"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/UI/ScrollStack";
import {
  Award,
  Wrench,
  Rocket,
  Gem,
  Sprout,
  ShieldCheck,
  Globe2,
  Recycle,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Factory,
} from "lucide-react";

export const CompanyVision3D: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full py-12 sm:py-16 text-[#212529]"
    >
      {/* ============================================================ */}
      {/* 1. Top Section Header (as in screenshot)                    */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f5132]/10 text-[#0f5132] text-xs font-semibold uppercase tracking-wider">
          <Leaf className="w-3.5 h-3.5" />
          <span>About HarGi Agro</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f5132] font-sans">
          HarGi Agro Products
        </h2>
        <p className="text-base sm:text-lg font-bold text-[#14532d] font-sans max-w-3xl mx-auto">
          Premium Coconut Products from the Heart of Tamil Nadu – Pure, Sustainable, Globally Trusted
        </p>
        <p className="text-xs sm:text-sm text-[#6c757d] font-sans">
          Exporting nature&apos;s finest coconut derivatives to discerning buyers worldwide.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. ScrollStack Interactive Deck                              */}
      {/* ============================================================ */}
      <ScrollStack
        itemDistance={60}
        itemScale={0.035}
        itemStackDistance={24}
        stackPosition="18%"
        scaleEndPosition="8%"
        baseScale={0.9}
        rotationAmount={0.8}
        blurAmount={0}
        useWindowScroll={true}
      >
        {/* STACK CARD 1: Who We Are & Core Strengths */}
        <ScrollStackItem itemClassName="border border-emerald-900/10 shadow-lg bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15803d]">
                <Sprout className="w-4 h-4" />
                <span>Our Heritage &amp; Roots</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f5132] font-sans">
                Who We Are
              </h3>
              <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                <strong className="text-[#212529] font-semibold">HarGi Agro Products Private Limited</strong> is a premium,
                export-focused agro enterprise rooted in Tamil Nadu, India&apos;s coconut heartland. We partner
                directly with vetted local farmers to source the freshest coconuts, process them in
                state-of-the-art facilities, and deliver world-class products.
              </p>
              <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                Our portfolio spans Virgin Coconut Oil (VCO), Desiccated Coconut, Coconut Milk &amp; Cream, Copra,
                Cocopeat, and Activated Carbon — with complete farm-to-port traceability.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#f4f8f4] rounded-2xl p-5 sm:p-6 border border-emerald-900/10 space-y-3">
              <h4 className="text-sm font-bold text-[#0f5132] font-sans uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#15803d]" />
                <span>Our Core Strengths</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#374151] font-sans">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#15803d]">🌾</span>
                  <span>Direct farm-to-factory ethical sourcing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#0f5132]">⚖️</span>
                  <span>ISO, FSSAI, Halal, Kosher &amp; FDA-compliant</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#0284c7]">🚢</span>
                  <span>Serving 20+ countries with fast logistics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#16a34a]">♻️</span>
                  <span>Zero-waste coconut utilization &amp; green practices</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollStackItem>

        {/* STACK CARD 2: Purpose & Ambition (Mission & Vision) */}
        <ScrollStackItem itemClassName="border border-emerald-900/10 shadow-lg bg-white">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15803d]">
                <Rocket className="w-4 h-4" />
                <span>Foundational Philosophy</span>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-[#0f5132] rounded-full border border-emerald-200">
                Purpose &amp; Ambition
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="bg-[#f4f8f4] rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#15803d] border-y border-r border-emerald-900/5 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#15803d]" />
                  <h4 className="text-lg font-bold text-[#0f5132] font-sans">
                    Our Mission
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                  To supply sustainably sourced, premium-quality coconut derivatives to global markets — empowering
                  Tamil Nadu farming communities, championing eco-conscious practices, and promoting wellness globally.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-[#f4f8f4] rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#0f5132] border-y border-r border-emerald-900/5 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#0f5132]" />
                  <h4 className="text-lg font-bold text-[#0f5132] font-sans">
                    Our Vision
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                  To establish HarGi Agro as the most trusted Indian name in premium coconut exports — recognized
                  worldwide for uncompromised purity, supply consistency, and sustainability leadership.
                </p>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* STACK CARD 3: Why Global Buyers Choose HarGi Agro */}
        <ScrollStackItem itemClassName="border border-emerald-900/10 shadow-lg bg-white">
          <div className="space-y-5">
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15803d]">
                <Award className="w-4 h-4" />
                <span>Global Advantage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f5132] font-sans">
                Why Global Buyers Choose HarGi Agro
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#f4f8f4] rounded-2xl p-4 text-center border border-emerald-900/5 flex flex-col items-center space-y-2">
                <span className="text-2xl">🏆</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#0f5132] font-sans">
                  Certified Excellence
                </h4>
                <p className="text-[11px] text-[#6c757d] leading-relaxed font-sans">
                  ISO, FSSAI, FDA, Halal, Kosher compliance for frictionless global customs entry.
                </p>
              </div>

              <div className="bg-[#f4f8f4] rounded-2xl p-4 text-center border border-emerald-900/5 flex flex-col items-center space-y-2">
                <span className="text-2xl">🛠️</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#0f5132] font-sans">
                  Custom Solutions
                </h4>
                <p className="text-[11px] text-[#6c757d] leading-relaxed font-sans">
                  Bulk shipments, private labelling, and custom export packing per buyer specs.
                </p>
              </div>

              <div className="bg-[#f4f8f4] rounded-2xl p-4 text-center border border-emerald-900/5 flex flex-col items-center space-y-2">
                <span className="text-2xl">🚀</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#0f5132] font-sans">
                  Global Reliability
                </h4>
                <p className="text-[11px] text-[#6c757d] leading-relaxed font-sans">
                  On-time maritime delivery, complete export documentation, and dedicated trade desk.
                </p>
              </div>

              <div className="bg-[#f4f8f4] rounded-2xl p-4 text-center border border-emerald-900/5 flex flex-col items-center space-y-2">
                <span className="text-2xl">💎</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#0f5132] font-sans">
                  Direct Best Value
                </h4>
                <p className="text-[11px] text-[#6c757d] leading-relaxed font-sans">
                  Direct farm-to-factory model eliminates middleman margins with transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* STACK CARD 4: Committed to a Greener Tomorrow & CTA */}
        <ScrollStackItem itemClassName="border border-emerald-900/10 shadow-lg bg-[#155724] text-white">
          <div className="space-y-5 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">
              <Recycle className="w-3.5 h-3.5 text-emerald-300" />
              <span>100% Circular Agro Economy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-white">
              Committed to a Greener Tomorrow
            </h3>

            <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-sans max-w-2xl mx-auto">
              Sustainability is at our core. We practice responsible farming, rainwater harvesting, solar-powered
              processing, and full utilization of the coconut palm — turning husks into cocopeat, shells into activated
              carbon, and minimizing waste to near zero.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToContact}
                style={{ backgroundColor: "#4d7c0f" }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm hover:bg-[#3f670c] transition-all shadow-md cursor-pointer border-none"
              >
                <span>Ready to Partner? Send Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};
