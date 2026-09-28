"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight, Bot, Terminal, ShieldCheck, Sparkles, Code2, ExternalLink, Cpu } from "lucide-react";
import { PORTFOLIO_DATA, Project, ProjectType } from "@/data/portfolio";
import { ProjectModal } from "@/components/UI/ProjectModal";
import { usePortfolioMode } from "@/context/ModeContext";

export const Projects: React.FC = () => {
  const { mode } = usePortfolioMode();
  const [filter, setFilter] = useState<"all" | "ai" | "code">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress animation behavior (smooth offset-to-natural settlement)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.7], [shouldReduceMotion ? 0 : 50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.6], [shouldReduceMotion ? 1 : 0.2, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.7], [shouldReduceMotion ? 1 : 0.97, 1]);

  const gridY = useTransform(scrollYProgress, [0.15, 0.9], [shouldReduceMotion ? 0 : 60, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.15, 0.8], [shouldReduceMotion ? 1 : 0.25, 1]);

  // Sync filter when global mode changes
  useEffect(() => {
    if (mode === "ai" || mode === "video") setFilter("ai");
    else if (mode === "code") setFilter("code");
    else setFilter("all");
  }, [mode]);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai") return p.type === "ai" || p.type === "video";
    return p.type === "code";
  });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-20 min-h-screen bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-orange/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
          className="mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>04 / Selected AI & Engineering Works</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
                Featured <span className="text-gradient-orange">Projects.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Production-ready AI agents on Hugging Face, real-time Computer Vision proctoring systems, and robust full-stack applications.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 p-1.5 backdrop-blur-md">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "all"
                    ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(255,77,0,0.4)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                All Works ({PORTFOLIO_DATA.projects.length})
              </button>

              <button
                onClick={() => setFilter("ai")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "ai"
                    ? "bg-red-600 text-white shadow-[0_0_15px_rgba(255,34,0,0.5)]"
                    : "text-neutral-400 hover:text-red-400"
                }`}
              >
                <Bot className="h-3 w-3" />
                <span>AI & Deep Learning</span>
              </button>

              <button
                onClick={() => setFilter("code")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all ${
                  filter === "code"
                    ? "bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                    : "text-neutral-400 hover:text-cyan-400"
                }`}
              >
                <Terminal className="h-3 w-3" />
                <span>Full-Stack & Automations</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Card Grid */}
        <motion.div
          layout
          style={{ y: gridY, opacity: gridOpacity }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isAI = project.type === "ai" || project.type === "video";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 ${
                    isAI
                      ? "border-red-500/20 bg-neutral-950/60 hover:border-red-500/60 hover:shadow-[0_0_45px_rgba(255,34,0,0.2)]"
                      : "border-cyan-500/20 bg-neutral-950/60 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(0,229,255,0.18)]"
                  }`}
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-6">
                      <span className="flex items-center gap-2">
                        <span
                          className={`font-bold ${
                            isAI ? "text-red-500" : "text-cyan-400"
                          }`}
                        >
                          [{project.year}]
                        </span>
                        <span>{project.client}</span>
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px]">
                        {isAI ? "AI / ML" : "FULL STACK"}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-orange mb-2">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4 group-hover:text-neutral-100">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlight Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 text-xs font-mono text-neutral-300 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                        >
                          <ShieldCheck
                            className={`h-3.5 w-3.5 flex-shrink-0 ${
                              isAI ? "text-red-500" : "text-cyan-400"
                            }`}
                          />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-neutral-900/60 px-2.5 py-1 text-[11px] font-mono text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/10">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="flex items-center gap-2 text-xs font-mono font-semibold text-white hover:text-brand-orange transition-colors"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-300 hover:border-brand-orange hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-neutral-300 hover:border-cyan-400 hover:text-white transition-colors"
                        >
                          <Code2 className="h-3 w-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <ProjectModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
};
