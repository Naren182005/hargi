"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Play,
  ArrowUpRight,
  Bot,
  Terminal,
  ShieldCheck,
  Sparkles,
  Code2,
  ExternalLink,
  Cpu,
  Layers,
} from "lucide-react";
import { PORTFOLIO_DATA, Project, ProjectType } from "@/data/portfolio";
import { ProjectModal } from "@/components/UI/ProjectModal";
import { usePortfolioMode } from "@/context/ModeContext";

// 3D Interactive Project Card with Hover Glare & Parallax
const ProjectCard: React.FC<{
  project: Project;
  idx: number;
  onSelect: (p: Project) => void;
  className?: string;
}> = ({ project, idx, onSelect, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isAI = project.type === "ai" || project.type === "video";

  // Interactive 3D Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 220 };
  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
    setGlarePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div ref={cardRef} className={`relative [perspective:1200px] ${className}`}>
      <motion.div
        layout
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: shouldReduceMotion ? 0 : mouseRotateX,
          rotateY: shouldReduceMotion ? 0 : mouseRotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
        className={`group relative flex h-full flex-col justify-between rounded-2xl border p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          isAI
            ? "border-red-500/25 bg-neutral-950/75 hover:border-red-500/70 hover:shadow-[0_20px_60px_rgba(255,34,0,0.22)]"
            : "border-cyan-500/25 bg-neutral-950/75 hover:border-cyan-400/70 hover:shadow-[0_20px_60px_rgba(0,229,255,0.20)]"
        }`}
      >
        {/* Dynamic 3D Glare Reflection Layer */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(600px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.20), transparent 45%)`,
          }}
        />

        <div className="relative z-20 [transform:translateZ(18px)]">
          {/* Meta Header */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-5">
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

          {/* Title with subtle hover lift */}
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3.5 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-neutral-400 font-light leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
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
                <span className="truncate">{metric}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="relative z-20 [transform:translateZ(22px)] flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
          <button
            onClick={() => onSelect(project)}
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
    </div>
  );
};

export const Projects: React.FC = () => {
  const { mode } = usePortfolioMode();
  const [filter, setFilter] = useState<"all" | "ai" | "code">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Pinned Horizontal Showcase scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal translation across all cards
  // Smooth scroll glide from 0% to -66%
  const x = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "-52%"]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const progressBar = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

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
      id="projects"
      ref={targetRef}
      className="relative z-20 bg-[#050505] min-h-screen"
    >
      {/* ============================================================ */}
      {/* DESKTOP: Pinned Horizontal Showcase (h-[280vh])              */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[280vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-10 xl:px-18 py-14">
          {/* Background Parallax Radial Glow */}
          <motion.div
            style={{ x: glowX }}
            className="pointer-events-none absolute top-1/3 left-1/3 h-[600px] w-[900px] rounded-full bg-brand-orange/10 blur-[170px]"
          />

          {/* Section Header with Masked Text Reveal */}
          <div className="relative z-30 max-w-7xl w-full mx-auto flex items-end justify-between gap-8 pb-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>04 / Selected AI & Engineering Works</span>
              </div>

              {/* Masked Title Reveal */}
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl xl:text-6xl font-black tracking-tight text-white uppercase font-display"
                >
                  Featured <span className="text-gradient-orange">Projects.</span>
                </motion.h2>
              </div>

              <p className="max-w-xl text-sm text-neutral-400 font-light leading-relaxed">
                Production-ready AI agents on Hugging Face, real-time Computer Vision proctoring systems, and robust full-stack applications.
              </p>
            </div>

            {/* Filter Tabs & Scroll Progress Bar */}
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 p-1.5 backdrop-blur-md">
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

              {/* Scroll Track Progress Bar */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                <span>SCROLL HORIZONTAL</span>
                <div className="h-1 w-24 rounded-full bg-neutral-800 overflow-hidden">
                  <motion.div style={{ width: progressBar }} className="h-full bg-gradient-to-r from-brand-orange to-cyan-400" />
                </div>
              </div>
            </div>
          </div>

            {/* Horizontal Cards Glide Track */}
          <div className="relative z-20 flex-1 flex items-center overflow-hidden">
            <motion.div
              style={{ x: shouldReduceMotion ? "0%" : x }}
              className="flex gap-8 pl-4 pr-32"
            >
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <div key={project.id} className="w-[580px] xl:w-[620px] flex-shrink-0">
                    <ProjectCard
                      project={project}
                      idx={idx}
                      onSelect={(p) => setSelectedCaseStudy(p)}
                    />
                  </div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET: Smooth Vertical Flow (No Pin Trap)          */}
      {/* ============================================================ */}
      <div className="block lg:hidden px-6 py-20 sm:px-12">
        <div className="relative mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>04 / Selected AI & Engineering Works</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
              Featured <span className="text-gradient-orange">Projects.</span>
            </h2>

            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Production-ready AI agents on Hugging Face, real-time Computer Vision proctoring systems, and robust full-stack applications.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-medium ${
                  filter === "all" ? "bg-brand-orange text-white" : "border border-white/10 text-neutral-400"
                }`}
              >
                All ({PORTFOLIO_DATA.projects.length})
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-medium ${
                  filter === "ai" ? "bg-red-600 text-white" : "border border-white/10 text-neutral-400"
                }`}
              >
                AI & Vision
              </button>
              <button
                onClick={() => setFilter("code")}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-medium ${
                  filter === "code" ? "bg-cyan-500 text-black font-semibold" : "border border-white/10 text-neutral-400"
                }`}
              >
                Full Stack
              </button>
            </div>
          </div>

          {/* Cards Stack */}
          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  idx={idx}
                  onSelect={(p) => setSelectedCaseStudy(p)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
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
