"use client";

import React from "react";
import { motion } from "framer-motion";
import { HARGI_COMPANY_DATA } from "@/data/hargiData";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  Microscope,
  Sparkles,
  Lock,
} from "lucide-react";

export const CertificationsAndQuality: React.FC = () => {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-background border-t border-brand-emerald/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-emerald/30 bg-surface-card backdrop-blur-md mb-4 shadow-glow-green">
            <Award className="w-3.5 h-3.5 text-brand-lime" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lime">
              Verified Export Accreditations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl">
            Compliance, Purity &amp;{" "}
            <span className="text-gradient-green">International Standards.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-sans">
            HarGi Agro Products Private Limited maintains strict adherence to global food safety
            regulations, backed by statutory certifications from the Government of India.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HARGI_COMPANY_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-emerald/20 hover:border-brand-emerald/60 transition-all hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-brand-emerald/15 border border-brand-emerald/30 text-brand-lime">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-surface-elevated text-brand-gold border border-brand-gold/30">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white">{cert.name}</h3>
                <p className="text-sm text-neutral-300 mt-2 font-sans leading-relaxed">{cert.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-brand-lime">
                <CheckCircle2 className="w-4 h-4" />
                <span>Statutory Export Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab Testing Guarantee Banner */}
        <div className="mt-12 rounded-3xl border border-brand-lime/25 bg-gradient-to-r from-surface-card via-surface-elevated to-surface-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-brand-emerald/20 border border-brand-emerald/40 text-brand-lime flex-shrink-0">
              <Microscope className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                Comprehensive Independent Lab Analysis (COA)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                Every commercial container consignment comes with an exhaustive Certificate of Analysis
                detailing moisture, pesticide-free assay, volatile oil contents, and microbiological safety.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-brand-lime/40 bg-brand-emerald/20 text-brand-lime font-mono text-xs font-bold uppercase tracking-wider hover:bg-brand-emerald hover:text-white transition-all cursor-pointer whitespace-nowrap"
          >
            Request Sample COA
          </a>
        </div>
      </div>
    </section>
  );
};
