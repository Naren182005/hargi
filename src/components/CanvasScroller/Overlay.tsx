"use client";

import React from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowDown, Sparkles, Bot, Terminal, Layers, Cpu, Code2, Network } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useScrolly } from "./ScrollyCanvas";

interface OverlayProps {
  scrollYProgress?: MotionValue<number>;
  onOpenVideo?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({
  scrollYProgress: propScroll,
}) => {
  const context = useScrolly();
  const { scrollYProgress: fallbackScroll } = useScroll();
  const scrollYProgress = propScroll || context?.scrollYProgress || fallbackScroll;

  // Section 1: Hero (0% to ~22%)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 0.9, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  // Section 2: AI & Deep Learning World (25% to ~48%)
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.44, 0.50],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.22, 0.32, 0.44, 0.50],
    [60, 0, 0, -60]
  );

  // Section 3: Full Stack & Automation World (52% to ~74%)
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.50, 0.56, 0.70, 0.76],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.50, 0.58, 0.70, 0.76],
    [60, 0, 0, -60]
  );

  // Section 4: Autonomous Synthesis Climax (78% to ~98%)
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.76, 0.82, 0.94, 0.99],
    [0, 1, 1, 0]
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.76, 0.84, 0.94, 0.99],
    [70, 0, 0, -40]
  );
  const s4Scale = useTransform(scrollYProgress, [0.80, 0.92], [0.95, 1]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-full w-full pointer-events-none select-none">
      {/* ============================================================ */}
      {/* SECTION 1: 0% Scroll - NAREN KG (AI & Automation Hero)       */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-between py-12 md:py-16 px-6 text-center"
      >
        {/* Top spacer for clean vertical balance */}
        <div className="pt-6" />

        {/* Center Editorial Title */}
        <div className="max-w-4xl space-y-4 my-auto">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-red-600 via-brand-orange to-cyan-400 mt-1 opacity-90" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-2xl md:text-3xl font-light text-neutral-200">
            <span className="text-gradient-fire font-bold">AI / ML DEVELOPER</span>
            <span className="text-neutral-500">×</span>
            <span className="text-cyan-400 font-bold">AUTOMATION ENGINEER</span>
          </div>

          <p className="mx-auto max-w-xl text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
            {PORTFOLIO_DATA.hero.tagline} — {PORTFOLIO_DATA.hero.subtagline}
          </p>

          {/* Quick Tools Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {/* AI Tools */}
            {PORTFOLIO_DATA.hero.aiSkills.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-red-400"
              >
                {s.name}
              </span>
            ))}
            <span className="text-neutral-600 text-xs hidden sm:inline">|</span>
            {/* Code & Automation Tools */}
            {PORTFOLIO_DATA.hero.codeSkills.map((s) => (
              <span
                key={s.name}
                className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-400"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            Scroll to explore neural universe
          </span>
          <div className="relative h-10 w-6 rounded-full border border-white/20 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-brand-orange shadow-[0_0_8px_#ff4d00]"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 2: ~30% Scroll - AI & Deep Learning Discipline (Left)*/}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-red-400 backdrop-blur-md">
            <Bot className="h-3.5 w-3.5" />
            <span>01 / Deep Learning & Computer Vision</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            TURNING DATA <br />
            <span className="text-gradient-fire">INTO INTELLIGENCE.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl">
            Designing real-time Computer Vision models and Agentic AI architectures. From in-flight behavioral proctoring with gaze & lip-sync tracking at Payoda Technologies to 5+ deployed Hugging Face agents.
          </p>

          {/* Mini Neural Inference Flow Graphic */}
          <div className="glass-card rounded-xl p-4 border border-red-500/20 max-w-lg space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-red-400">
                <Network className="h-3 w-3" />
                <span>REAL-TIME INFERENCE STREAM [ &lt;25ms ]</span>
              </span>
              <span>AGENTS: 5+ PROD</span>
            </div>
            {/* Neural Layer Indicators */}
            <div className="h-4 bg-neutral-900 rounded flex gap-1 p-0.5 overflow-hidden">
              <div className="h-full w-1/4 bg-red-600/80 rounded-sm" title="PyTorch Backbone" />
              <div className="h-full w-2/5 bg-brand-orange/80 rounded-sm" title="YOLO / MediaPipe" />
              <div className="h-full w-1/3 bg-amber-500/80 rounded-sm" title="LangGraph State" />
            </div>
            {/* Real-time Tensor Stream Visualizer */}
            <div className="h-3 bg-neutral-900 rounded flex gap-0.5 p-0.5 items-center overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  style={{ height: `${(i % 5 + 2) * 20}%` }}
                  className="w-1 bg-cyan-500/60 rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              <span>Gaze Tracking & Lip-Sync AI</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span>LangChain & LangGraph Agents</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-mono text-neutral-200">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>Chroma DB RAG Vectors</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 3: ~60% Scroll - Automation & Full Stack (Right)     */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 text-right"
      >
        <div className="max-w-2xl space-y-6 flex flex-col items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Terminal className="h-3.5 w-3.5" />
            <span>02 / Automation & Full Stack Systems</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            BUILDING AUTONOMOUS <br />
            <span className="text-cyan-400">SCALABLE WORKFLOWS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl text-right">
            High-performance backend architectures, microservices, and autonomous n8n workflows. Python, FastAPI, Angular, PostgreSQL, MongoDB, and vector stores integrated seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2">
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Code2 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">FastAPI & Python</span>
              </div>
              <p className="text-[11px] text-neutral-400">Async high-throughput endpoints, Pydantic validation & ML model serving.</p>
            </div>
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Terminal className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">n8n & Multi-DB</span>
              </div>
              <p className="text-[11px] text-neutral-400">PostgreSQL, MongoDB, Chroma DB vectors, and autonomous webhook automation.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 4: ~85% Scroll - The Autonomous Synthesis (Center)  */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-black/70 px-4 py-1.5 backdrop-blur-lg">
            <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange">
              03 / Complete AI & Automation Synergy
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            AUTONOMOUS MIND. <br />
            <span className="text-gradient-orange">SCALABLE FUTURE.</span>
          </h2>

          <p className="mx-auto max-w-xl text-base sm:text-lg text-neutral-300 font-light">
            Whether training neural architectures, deploying multi-agent swarms, or automating enterprise operations — I deliver production-ready intelligence.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-brand-orange px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_35px_rgba(255,34,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Bot className="h-4 w-4" />
              <span>Explore AI & Vision Works</span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_35px_rgba(0,229,255,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:border-cyan-400 active:scale-95"
            >
              <Terminal className="h-4 w-4" />
              <span>Explore Automation & Code</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
