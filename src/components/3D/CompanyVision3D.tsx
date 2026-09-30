"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Recycle,
  Award,
  Building2,
} from "lucide-react";
import PixelSwap from "@/components/UI/PixelSwap";

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
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ============================================================ */}
        {/* 1. Header                                                    */}
        {/* ============================================================ */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f5132] font-sans">
            HarGi Agro Products
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#14532d] font-sans">
            Premium Coconut Products from the Heart of Tamil Nadu – Pure, Sustainable, Globally Trusted
          </p>
          <p className="text-xs sm:text-sm text-[#6c757d] font-sans leading-relaxed">
            Exporting nature&apos;s finest coconut derivatives to discerning buyers worldwide with full farm-to-port traceability.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. Who We Are & Core Strengths                              */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left: Who We Are text */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-9 shadow-md border border-neutral-200/80 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0f5132]">
                <Building2 className="w-4 h-4 text-[#15803d]" />
                <span>Company Overview</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f5132] font-sans">
                Who We Are
              </h3>
              <p className="text-sm text-[#495057] leading-relaxed font-sans">
                <strong className="text-[#212529] font-semibold">HarGi Agro Products Private Limited</strong> is a premium,
                export-focused agro enterprise rooted in Tamil Nadu, India&apos;s coconut heartland. We partner
                directly with vetted local farmers to source the freshest coconuts, process them in
                state-of-the-art, hygienic facilities, and deliver world-class products that meet stringent
                international standards.
              </p>
              <p className="text-sm text-[#495057] leading-relaxed font-sans">
                Our portfolio spans high-demand items: Virgin Coconut Oil (VCO), Desiccated Coconut, Coconut Milk
                &amp; Cream, Copra, Cocopeat, Activated Carbon from shells, and more — all with full traceability
                from farm to port.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-[#6c757d]">
              <span>📍 Tamil Nadu, India</span>
              <span>🚢 Worldwide Export Hub</span>
            </div>
          </div>

          {/* Right: Our Core Strengths Card */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-9 shadow-md border border-neutral-200/80 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0f5132]">
                <Award className="w-4 h-4 text-[#15803d]" />
                <span>Key Highlights</span>
              </div>
              <h4 className="text-2xl font-bold text-[#0f5132] font-sans">
                Our Core Strengths
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm text-[#374151] font-sans">
                <li className="flex items-start gap-3.5">
                  <span className="text-xl leading-none">🌾</span>
                  <div>
                    <strong className="block text-[#212529] font-semibold">Direct farm-to-factory sourcing</strong>
                    <span className="text-xs text-[#6c757d]">Freshly harvested coconuts from vetted farmers</span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-xl leading-none">⚖️</span>
                  <div>
                    <strong className="block text-[#212529] font-semibold">Certified International Compliance</strong>
                    <span className="text-xs text-[#6c757d]">ISO, FSSAI, Halal, Kosher &amp; US-FDA compliant</span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-xl leading-none">🚢</span>
                  <div>
                    <strong className="block text-[#212529] font-semibold">Serving 20+ countries</strong>
                    <span className="text-xs text-[#6c757d]">On-time logistics &amp; direct sea freight routes</span>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="text-xl leading-none">♻️</span>
                  <div>
                    <strong className="block text-[#212529] font-semibold">Zero-waste utilization</strong>
                    <span className="text-xs text-[#6c757d]">Eco-friendly processing across every coconut part</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. Purpose & Ambition (Mission & Vision)                    */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#0f5132] font-sans">
            Our Purpose &amp; Ambition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-l-[#15803d] border-y border-r border-neutral-200/80 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#0f5132] text-xs font-bold">
                <span>🎯 Mission</span>
              </div>
              <h4 className="text-xl font-bold text-[#0f5132] font-sans">
                Sustainable Sourcing &amp; Farmer Empowerment
              </h4>
              <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans">
                To supply sustainably sourced, premium-quality coconut products to global markets — empowering
                Tamil Nadu farmers, championing eco-conscious methods, and promoting natural wellness
                worldwide.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-l-[#15803d] border-y border-r border-neutral-200/80 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#0f5132] text-xs font-bold">
                <span>🌟 Vision</span>
              </div>
              <h4 className="text-xl font-bold text-[#0f5132] font-sans">
                Premier Indian Name in Coconut Exports
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-neutral-200/80 flex flex-col items-center space-y-3">
              <span className="text-3xl">🏆</span>
              <h4 className="text-base font-bold text-[#0f5132] font-sans">
                Certified Excellence
              </h4>
              <p className="text-xs text-[#6c757d] leading-relaxed font-sans">
                Full compliance with ISO, FSSAI, FDA, Halal, Kosher — ensuring seamless entry into any market.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-neutral-200/80 flex flex-col items-center space-y-3">
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
            <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-neutral-200/80 flex flex-col items-center space-y-3">
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
            <div className="bg-white rounded-3xl p-6 text-center shadow-md border border-neutral-200/80 flex flex-col items-center space-y-3">
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
        {/* 5. Interactive Value Transformation (PixelSwap Component)    */}
        {/* ============================================================ */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f5132] font-sans">
              The HarGi Value Transformation
            </h3>
            <p className="text-xs sm:text-sm text-[#6c757d] font-sans">
              Hover or click the interactive showcase card below to see our farm-to-global export pixel transition!
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-neutral-200/80 bg-white">
            <PixelSwap
              aspectRatio="16 / 9"
              pixelSize={54}
              gap={1}
              pixelRadius={8}
              pixelScale={0.3}
              duration={1200}
              pixelDuration={400}
              pattern="diagonal"
              randomness={0.15}
              fade={true}
              trigger="hover"
              firstContent={
                <div className="w-full h-full bg-gradient-to-br from-[#0f5132] via-[#15803d] to-[#065f46] text-white p-8 sm:p-12 flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Phase 1: Ethical Farm Sourcing
                    </span>
                    <span className="text-xs text-white/80 font-mono">Tamil Nadu Roots</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                      🌾 Pure Farm-to-Factory Harvest
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                      Sourced directly from 100+ partner farming families in Tamil Nadu&apos;s coconut heartland. 
                      Every coconut is handpicked, ethically paid, and nurtured with sustainable agriculture.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-white/90 border-t border-white/20 pt-4">
                    <span>🌱 100% Organic &amp; Chemical Free</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-200 animate-pulse">
                      Hover / Click to See Global Processing ➔
                    </span>
                  </div>
                </div>
              }
              secondContent={
                <div className="w-full h-full bg-gradient-to-br from-[#1e3a8a] via-[#0284c7] to-[#0f766e] text-white p-8 sm:p-12 flex flex-col justify-between select-none">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      Phase 2: Global Export Delivery
                    </span>
                    <span className="text-xs text-cyan-200 font-mono">20+ Countries Worldwide</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                      🚢 Certified Global Agro Portfolio
                    </h4>
                    <p className="text-xs sm:text-sm text-cyan-100 max-w-2xl leading-relaxed">
                      Processed in automated hygienic facilities into Virgin Coconut Oil, Desiccated High-Fat Coconut, 
                      Low-EC Cocopeat blocks, and shell Activated Carbon — meeting ISO, FSSAI, Halal &amp; US-FDA standards.
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-white/90 border-t border-white/20 pt-4">
                    <span>⚡ Complete Zero-Waste Utilization</span>
                    <span className="text-cyan-200 font-medium">✓ Global Logistics Ready</span>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6. Committed to a Greener Tomorrow (Green Banner)           */}
        {/* ============================================================ */}
        <div
          style={{ backgroundColor: "#155724" }}
          className="rounded-3xl p-8 sm:p-10 text-white text-center shadow-lg space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
            <Recycle className="w-3.5 h-3.5" />
            <span>Zero-Waste Sustainability</span>
          </div>
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
        {/* 7. Ready to Partner with Excellence? CTA                    */}
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md cursor-pointer border-none"
            >
              <span>Get in Touch →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
