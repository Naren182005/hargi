"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, MapPin, Calendar, Sparkles, X, ZoomIn, CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA, InternationalProjectItem } from "@/data/portfolio";

export const InternationalProjects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<InternationalProjectItem | null>(null);

  return (
    <section
      id="international-projects"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[500px] w-[800px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Globe className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '12s' }} />
            <span>Global Academic Exchange & Immersion</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            International <span className="text-cyan-400">Projects.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Representing Sri Eshwar College of Engineering on the global stage. From international research at Telkom University (GLOW 2025) to faculty mentorship and cross-border tech prototyping.
          </p>
        </div>

        {/* 5-Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.internationalProjects.map((item, idx) => {
            const isFeatured = idx === 0; // First item (GLOW 2025 Banner) takes full width on 2-col or spans nicely
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`glass-card group rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-all duration-500 bg-[#080808]/90 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Photo Container */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className={`relative w-full overflow-hidden bg-black/60 cursor-pointer ${
                    isFeatured ? "h-80 sm:h-96" : "h-72 sm:h-80"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 rounded-full border border-cyan-500/40 bg-black/80 px-3 py-1 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{item.badge}</span>
                  </div>

                  <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 p-2 text-white hover:bg-cyan-500 hover:text-black transition-colors">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Bottom Gradient overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                    <span className="text-[11px] text-neutral-400">Expand photo ↗</span>
                  </div>
                </div>

                {/* Details & Story */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between border-t border-white/10">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span className="text-cyan-400 font-bold">{item.period}</span>
                      <span className="truncate max-w-[200px] text-right text-neutral-400">{item.program}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>

                    {/* Story paragraph */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3" />
                        <span>Immersion Narrative:</span>
                      </div>
                      <p>{item.story}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-neutral-900/80 px-2 py-0.5 text-[10px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Modal Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-cyan-500/40 bg-[#090909] p-6 sm:p-8 shadow-[0_0_80px_rgba(0,229,255,0.25)] flex flex-col md:flex-row gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/80 p-2 text-neutral-400 hover:text-white hover:border-cyan-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Photo View */}
              <div className="md:w-1/2 flex items-center justify-center bg-black/70 rounded-xl p-2 border border-white/10">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Story Breakdown */}
              <div className="md:w-1/2 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-400 font-bold">
                    <Globe className="h-3.5 w-3.5" />
                    <span>{selectedItem.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedItem.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                    <span className="text-cyan-300 font-semibold">{selectedItem.location}</span>
                    <span>•</span>
                    <span>{selectedItem.period}</span>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      International Exchange Details:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {selectedItem.story}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      Core Pillars:
                    </h4>
                    {selectedItem.tags.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full rounded-full bg-cyan-500 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-cyan-400 hover:scale-[1.02]"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
