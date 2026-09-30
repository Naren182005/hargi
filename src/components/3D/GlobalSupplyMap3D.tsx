"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HARGI_COMPANY_DATA, ExportRoute } from "@/data/hargiData";
import {
  Globe,
  Ship,
  Navigation,
  Clock,
  CheckCircle2,
  Anchor,
  ShieldCheck,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Compass,
} from "lucide-react";
import Image from "next/image";

export const GlobalSupplyMap3D: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<ExportRoute>(
    HARGI_COMPANY_DATA.exportDestinations[0]
  );

  return (
    <section id="global-supply" className="relative py-24 sm:py-32 bg-background border-t border-brand-emerald/10 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/products/export-ship.jpg"
          alt="Global Cargo Shipping"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-surface-card backdrop-blur-md mb-4 shadow-glow-green">
            <Globe className="w-3.5 h-3.5 text-brand-lime" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lime">
              Worldwide Logistics & Export Network
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl">
            Serving Global Buyers{" "}
            <span className="text-gradient-green">Beyond Borders.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-sans">
            Seamless multimodal shipping from key South Indian deep-water seaports to 28+ international
            maritime destinations with full customs, phytosanitary, and fumigation documentation.
          </p>
        </div>

        {/* Interactive Supply Network Console */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Route Selector Pills */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-1 flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-lime" />
              Select International Maritime Corridor:
            </div>

            {HARGI_COMPANY_DATA.exportDestinations.map((route) => {
              const isSelected = activeRoute.id === route.id;
              return (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(route)}
                  className={`relative p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "border-brand-emerald bg-surface-elevated shadow-glow-green scale-[1.02]"
                      : "border-white/10 bg-surface-card hover:border-brand-emerald/40 hover:bg-surface-elevated/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? "bg-brand-emerald/20 text-brand-lime"
                          : "bg-surface-card text-neutral-400"
                      }`}
                    >
                      <Anchor className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold font-display text-white">
                        {route.destination}
                      </div>
                      <div className="text-xs font-mono text-neutral-400">{route.region}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        route.status === "Express Route"
                          ? "bg-brand-emerald/20 text-brand-lime border border-brand-emerald/40"
                          : "bg-brand-gold/20 text-brand-gold border border-brand-gold/40"
                      }`}
                    >
                      {route.status}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      ⏱ {route.leadTimeDays}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: 3D Telemetry & Live Sea Route Dispatch Card */}
          <div className="lg:col-span-7 rounded-3xl border border-brand-emerald/30 bg-surface-card backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-emerald/10 rounded-full blur-[90px] pointer-events-none" />

            <div>
              {/* Route Top Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-lime">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
                  </span>
                  <span>MARITIME FREIGHT TELEMETRY: ONLINE</span>
                </div>

                <div className="text-xs font-mono text-neutral-400">
                  ORIGIN: <span className="text-white font-bold">SOUTH INDIA (VOC / COCHIN)</span>
                </div>
              </div>

              {/* Active Route Focus Card */}
              <div className="mt-6">
                <div className="text-2xl sm:text-3xl font-black font-display text-white">
                  {activeRoute.destination}
                </div>
                <div className="text-sm font-mono text-brand-gold mt-1">
                  Corridor: {activeRoute.region} • Direct Deep-Water Sea Lanes
                </div>
              </div>

              {/* Transit & Compliance Telemetry Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-brand-lime" />
                    Sea Transit Lead
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-1">
                    {activeRoute.leadTimeDays}
                  </div>
                  <div className="text-[10px] font-sans text-brand-lime mt-0.5">Port-to-Port</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    Quarantine Status
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-1">
                    100% Cleared
                  </div>
                  <div className="text-[10px] font-sans text-neutral-400 mt-0.5">Fumigated & APEDA</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-neutral-400">
                    <Ship className="w-3.5 h-3.5 text-brand-emerald" />
                    Container Modes
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white mt-1">
                    20ft / 40ft FCL
                  </div>
                  <div className="text-[10px] font-sans text-neutral-400 mt-0.5">Reefer & Dry Cargo</div>
                </div>
              </div>

              {/* Primary Cargo Shipped */}
              <div className="mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  High-Demand Agro Commodities on this Route:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeRoute.primaryProducts.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30 text-xs font-mono font-medium text-brand-lime flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Indian Exit Ports */}
              <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/5">
                <div className="text-xs font-mono text-neutral-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>
                    Dispatched from: <strong className="text-white">VOC Port (Tuticorin)</strong>,{" "}
                    <strong className="text-white">Cochin Port Trust</strong>, &amp;{" "}
                    <strong className="text-white">Chennai Port (CCCL)</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-neutral-400">
                Custom packaging, bill of lading &amp; phytosanitary certificates provided.
              </div>

              <a
                href="#rfq-calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-emerald to-green-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-glow-green hover:scale-105 transition-all cursor-pointer"
              >
                <span>Calculate Freight &amp; RFQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
