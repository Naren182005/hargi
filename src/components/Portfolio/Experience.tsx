"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Trophy, ChevronRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Experience: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"experience" | "education" | "certifications" | "achievements">("experience");

  return (
    <section
      id="experience"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5 text-brand-orange" />
            <span>07 / Journey & Accolades</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
            Experience & <span className="text-gradient-orange">Milestones.</span>
          </h2>
          <p className="max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
            From training enterprise computer vision models at Payoda Technologies to national hackathon championships and academic excellence.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-6 mb-10">
          <button
            onClick={() => setActiveSection("experience")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all ${
              activeSection === "experience"
                ? "bg-brand-orange text-white shadow-[0_0_20px_rgba(255,77,0,0.5)]"
                : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setActiveSection("education")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all ${
              activeSection === "education"
                ? "bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveSection("achievements")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all ${
              activeSection === "achievements"
                ? "bg-amber-500 text-black font-semibold shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white"
            }`}
          >
            <Trophy className="h-3.5 w-3.5" />
            <span>Hackathons & Awards</span>
          </button>

          <button
            onClick={() => setActiveSection("certifications")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all ${
              activeSection === "certifications"
                ? "bg-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white"
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            <span>Certifications</span>
          </button>
        </div>

        {/* Tab 1: Experience */}
        {activeSection === "experience" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="md:w-1/3">
                  <span className="inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono text-brand-orange">
                    {exp.period}
                  </span>
                  <div className="mt-2 text-xs font-mono text-neutral-300 font-medium">{exp.studio}</div>
                </div>

                <div className="md:w-2/3 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-between">
                    <span>{exp.role}</span>
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Education */}
        {activeSection === "education" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-mono text-cyan-400">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{edu.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">{edu.degree}</h3>
                  <p className="text-sm text-neutral-300 font-mono">{edu.institution}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">Academic Score:</span>
                  <span className="text-sm font-bold font-mono text-cyan-400">{edu.score}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Achievements & Hackathons */}
        {activeSection === "achievements" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Trophy className="h-4 w-4" />
                    <span className="text-xs font-mono font-bold uppercase">{ach.year}</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{ach.title}</h3>
                <div className="text-xs font-mono font-semibold text-amber-300">{ach.award}</div>
                <p className="text-xs text-neutral-400 leading-relaxed">{ach.detail}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 4: Certifications */}
        {activeSection === "certifications" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{cert.issuer}</span>
                    </span>
                    <span>{cert.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-white pt-1">{cert.title}</h3>
                </div>
                <div className="text-[11px] font-mono text-neutral-500">Verified Credential</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
