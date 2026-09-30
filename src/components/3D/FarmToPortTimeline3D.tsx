"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HARGI_COMPANY_DATA } from "@/data/hargiData";
import {
  Leaf,
  ShieldCheck,
  FlaskConical,
  Ship,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from "lucide-react";

export const FarmToPortTimeline3D: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [
    <Leaf key="0" className="w-6 h-6" />,
    <ShieldCheck key="1" className="w-6 h-6" />,
    <FlaskConical key="2" className="w-6 h-6" />,
    <Ship key="3" className="w-6 h-6" />,
  ];

  const stepDetails = [
    {
      step: "01",
      title: "Direct Sustainable Farm Sourcing",
      subtitle: "Fair-trade partnerships across South India agricultural valleys",
      bullets: [
        "Direct procurement from Pollachi coconut belts & Western Ghat spice slopes",
        "Fair remuneration ensuring financial stability for generational farming families",
        "Rigorous raw produce pre-selection before dispatch to processing hubs",
      ],
      metric: "450+ Partner Acres",
      metricLabel: "Under Fair-Trade Stewardship",
    },
    {
      step: "02",
      title: "Hygienic Clean-Room Processing",
      subtitle: "ISO 22000 & HACCP compliant handling protocols",
      bullets: [
        "Dust-free stainless steel optical sorting, grading, and de-stoning machines",
        "Cold-press extraction below 42°C to preserve bioactive medium-chain triglycerides",
        "Low-temperature dehumidified solar drying for zero nutrition loss",
      ],
      metric: "100% Stainless Steel",
      metricLabel: "Food-Grade Clean Room Lines",
    },
    {
      step: "03",
      title: "Rigorous Analytical Lab Testing",
      subtitle: "Comprehensive chromatographic & microbiological assay",
      bullets: [
        "Gas chromatography testing for volatile essential oils & purity index",
        "Aflatoxin, pesticide residue, and heavy metal screening (NABL compliant)",
        "Moisture balancing strictly held under export quarantine limits",
      ],
      metric: "0.0% Adulteration",
      metricLabel: "Guaranteed Laboratory Purity",
    },
    {
      step: "04",
      title: "Vacuum Packaging & Global Port Dispatch",
      subtitle: "Multi-barrier moisture packaging & sea-freight logistics",
      bullets: [
        "Multi-wall Kraft paper bags with PE food liners & nitrogen-flushed retail tins",
        "Phytosanitary inspection and containerized fumigation compliance",
        "Real-time refrigerated and dry container dispatch from VOC & Cochin seaports",
      ],
      metric: "28+ Nations",
      metricLabel: "Active Global Maritime Delivery",
    },
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-background border-t border-brand-emerald/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-emerald/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-surface-card backdrop-blur-md mb-4 shadow-glow-green">
            <Cpu className="w-3.5 h-3.5 text-brand-lime" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lime">
              Quality Assurance Pipeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl">
            From South Indian Soil, <br />
            <span className="text-gradient-green">To International Seaports.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-sans">
            Our end-to-end traceability guarantees uncompromised quality, strict hygienic standards,
            and complete export regulatory compliance at every phase.
          </p>
        </div>

        {/* 3D Interactive Pipeline Stepper */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HARGI_COMPANY_DATA.processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-56 ${
                  isActive
                    ? "border-brand-emerald bg-surface-elevated shadow-glow-green scale-105"
                    : "border-white/10 bg-surface-card hover:border-brand-emerald/40 hover:bg-surface-elevated/70"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-brand-lime">
                      {step.step}
                    </span>
                    <div
                      className={`p-2.5 rounded-2xl ${
                        isActive
                          ? "bg-brand-emerald/20 text-brand-lime"
                          : "bg-surface text-neutral-400"
                      }`}
                    >
                      {icons[idx]}
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-display text-white mt-4 line-clamp-2">
                    {step.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-4">
                  <span className="text-[11px] font-mono text-brand-gold font-bold uppercase">
                    {step.badge}
                  </span>
                  <span className="text-xs text-neutral-400">{isActive ? "Active View" : "Explore →"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed 3D Telemetry Window */}
        <div className="mt-8 rounded-3xl border border-brand-emerald/30 bg-surface-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/20 border border-brand-emerald/40 text-brand-lime text-xs font-mono font-bold uppercase mb-3">
                Phase {stepDetails[activeStepIndex].step} Specification
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-white">
                {stepDetails[activeStepIndex].title}
              </h3>

              <p className="text-sm font-mono text-brand-gold mt-1">
                {stepDetails[activeStepIndex].subtitle}
              </p>

              <div className="mt-6 space-y-3">
                {stepDetails[activeStepIndex].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric Capsule */}
            <div className="lg:col-span-4 rounded-2xl bg-surface-elevated border border-brand-emerald/20 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg">
              <Sparkles className="w-8 h-8 text-brand-gold mb-3 animate-pulse" />
              <div className="text-3xl sm:text-4xl font-black font-mono text-gradient-green">
                {stepDetails[activeStepIndex].metric}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 mt-2 font-bold">
                {stepDetails[activeStepIndex].metricLabel}
              </div>
              <div className="mt-6 text-[11px] font-mono text-neutral-400">
                Verified with APEDA &amp; ISO 22000 Export Traceability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
