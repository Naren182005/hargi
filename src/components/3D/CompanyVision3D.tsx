"use client";

import React from "react";
import { motion } from "framer-motion";
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
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#212529]"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* ============================================================ */}
        {/* 1. Header                                                    */}
        {/* ============================================================ */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f5132] font-sans">
            HarGi Agro Products
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#14532d] font-sans">
            Premium Coconut Products from the Heart of Tamil Nadu – Pure, Sustainable, Globally Trusted
          </p>
          <p className="text-xs sm:text-sm text-[#6c757d] font-sans">
            Exporting nature&apos;s finest coconut derivatives to discerning buyers worldwide.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. Who We Are & Core Strengths                              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Who We Are text */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f5132] font-sans">
              Who We Are
            </h3>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed font-sans">
              <strong className="text-[#212529] font-semibold">HarGi Agro Products Private Limited</strong> is a premium,
              export-focused agro enterprise rooted in Tamil Nadu, India&apos;s coconut heartland. We partner
              directly with vetted local farmers to source the freshest coconuts, process them in
              state-of-the-art, hygienic facilities, and deliver world-class products that meet stringent
              international standards.
            </p>
            <p className="text-sm sm:text-base text-[#495057] leading-relaxed font-sans">
              Our portfolio spans high-demand items: Virgin Coconut Oil (VCO), Desiccated Coconut, Coconut Milk
              &amp; Cream, Copra, Cocopeat, Activated Carbon from shells, and more — all with full traceability
              from farm to port.
            </p>
          </div>

          {/* Right: Our Core Strengths Card */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-neutral-100 space-y-4">
            <h4 className="text-lg font-bold text-[#0f5132] font-sans">
              Our Core Strengths
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#374151] font-sans">
              <li className="flex items-center gap-3">
                <span className="text-base text-[#15803d]">🌾</span>
                <span>Direct farm-to-factory sourcing</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base text-[#0f5132]">⚖️</span>
                <span>ISO, FSSAI, Halal, Kosher &amp; FDA-compliant</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base text-[#0284c7]">🚢</span>
                <span>Serving 20+ countries with reliable logistics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base text-[#16a34a]">♻️</span>
                <span>Zero-waste coconut utilization &amp; eco-practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. Our Purpose & Ambition (Mission & Vision)                */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0f5132] font-sans">
            Our Purpose &amp; Ambition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border-l-4 border-l-[#15803d] border-y border-r border-neutral-100 space-y-3">
              <h4 className="text-xl font-bold text-[#0f5132] font-sans">
                Mission
              </h4>
              <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                To supply sustainably sourced, premium-quality coconut products to global markets — empowering
                Tamil Nadu farmers, championing eco-conscious methods, and promoting natural wellness
                worldwide.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border-l-4 border-l-[#15803d] border-y border-r border-neutral-100 space-y-3">
              <h4 className="text-xl font-bold text-[#0f5132] font-sans">
                Vision
              </h4>
              <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                To establish HarGi Agro as the premier Indian name in premium coconut exports — recognized
                globally for unmatched quality, ethical sourcing, sustainability leadership, and community
                upliftment.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. Why Global Buyers Choose HarGi Agro                      */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0f5132] font-sans">
            Why Global Buyers Choose HarGi Agro
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 flex flex-col items-center space-y-3">
              <span className="text-3xl">🏆</span>
              <h4 className="text-base font-bold text-[#0f5132] font-sans">
                Certified Excellence
              </h4>
              <p className="text-xs text-[#6c757d] leading-relaxed font-sans">
                Full compliance with ISO, FSSAI, FDA, Halal, Kosher — ensuring seamless entry into any market.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 flex flex-col items-center space-y-3">
              <span className="text-3xl">🛠️</span>
              <h4 className="text-base font-bold text-[#0f5132] font-sans">
                Custom Solutions
              </h4>
              <p className="text-xs text-[#6c757d] leading-relaxed font-sans">
                Bulk shipments, private label, retail packaging, and tailored formulations to match your exact
                needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 flex flex-col items-center space-y-3">
              <span className="text-3xl">🚀</span>
              <h4 className="text-base font-bold text-[#0f5132] font-sans">
                Global Reliability
              </h4>
              <p className="text-xs text-[#6c757d] leading-relaxed font-sans">
                On-time delivery, complete export documentation, sea/air freight support, and dedicated logistics
                partners.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 flex flex-col items-center space-y-3">
              <span className="text-3xl">💎</span>
              <h4 className="text-base font-bold text-[#0f5132] font-sans">
                Best Value
              </h4>
              <p className="text-xs text-[#6c757d] leading-relaxed font-sans">
                Direct sourcing eliminates middlemen — delivering superior quality at competitive, transparent
                pricing.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. Committed to a Greener Tomorrow (Green Banner)           */}
        {/* ============================================================ */}
        <div
          style={{ backgroundColor: "#155724" }}
          className="rounded-2xl p-8 sm:p-10 text-white text-center shadow-md space-y-4"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-white">
            Committed to a Greener Tomorrow
          </h3>
          <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-sans max-w-3xl mx-auto">
            Sustainability is at our core. We practice responsible farming, rainwater harvesting, solar-powered
            processing where possible, and full utilization of the coconut palm — turning husks into cocopeat,
            shells into activated carbon and charcoal, and minimizing waste to near zero.
          </p>
          <p className="text-xs sm:text-sm font-bold text-white font-sans pt-1">
            Choose HarGi Agro — where premium quality supports people, planet, and progress.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 6. Ready to Partner with Excellence? CTA                    */}
        {/* ============================================================ */}
        <div className="text-center space-y-3 pt-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0f5132] font-sans">
            Ready to Partner with Excellence?
          </h3>
          <p className="text-xs sm:text-sm text-[#6c757d] font-sans">
            Contact us today for samples, quotations, or to discuss your specific requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={scrollToContact}
              style={{ backgroundColor: "#4d7c0f" }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-sm cursor-pointer border-none"
            >
              <span>Get in Touch →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

