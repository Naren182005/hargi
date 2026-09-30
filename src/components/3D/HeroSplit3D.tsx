"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  Leaf,
  Globe,
  Ship,
  Maximize2,
  TrendingUp,
  Compass,
} from "lucide-react";
import { HARGI_COMPANY_DATA, AgroProduct } from "@/data/hargiData";

interface SplitHeroPillar {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  accentColor: string;
  badge: string;
  stats: { label: string; value: string };
  highlights: string[];
  origin: string;
  ports: string;
}

const PILLARS: SplitHeroPillar[] = [
  {
    id: "coconut",
    category: "COCONUT PRODUCTS",
    title: "Organic Coconut Derivatives",
    subtitle: "Cold-Pressed Virgin Oil & Desiccated Flakes",
    tagline: "Farm-fresh harvest from Pollachi coconut groves",
    image: "/products/coconut.jpg",
    accentColor: "#22c55e",
    badge: "100% Extra Virgin",
    stats: { label: "Purity Index", value: "99.9%" },
    highlights: ["Cold-Pressed Raw Oil", "High-Fat Fine/Medium Flakes", "Eco Shell Charcoal"],
    origin: "Pollachi & Western Ghats",
    ports: "Tuticorin (VOC) & Cochin",
  },
  {
    id: "jaggery",
    category: "TRADITIONAL JAGGERY",
    title: "Traditional Golden Jaggery",
    subtitle: "Pure Cane Cubes, Powder & Palm Karupatti",
    tagline: "Artisanal handcrafted healthy sweetening",
    image: "/products/jaggery.jpg",
    accentColor: "#f59e0b",
    badge: "0% Chemical Bleach",
    stats: { label: "Mineral Purity", value: "100% Natural" },
    highlights: ["No Sodium Hydrosulphite", "Rich in Iron & Calcium", "Vacuum Sealed Export Blocks"],
    origin: "Erode & Salem Belts",
    ports: "Tuticorin & Chennai",
  },
  {
    id: "spices",
    category: "AUTHENTIC SPICES",
    title: "Western Ghats Spices",
    subtitle: "Tellicherry Pepper & Alleppey Cardamom",
    tagline: "The world's most aromatic and pungent spices",
    image: "/products/spices.jpg",
    accentColor: "#10b981",
    badge: "Spices Board Approved",
    stats: { label: "Volatile Oil", value: "> 7.5%" },
    highlights: ["Tellicherry TGSEB Pepper", "Extra Bold 8mm Cardamom", "High-Curcumin Turmeric"],
    origin: "Idukki & Wayanad Hills",
    ports: "Cochin & Nhava Sheva",
  },
  {
    id: "coffee-superfoods",
    category: "COFFEE & SUPERFOODS",
    title: "Specialty Coffee & Nuts",
    subtitle: "Single-Origin Arabica, Chia & Jumbo Cashews",
    tagline: "High-altitude plantations & nutrient-dense seeds",
    image: "/products/coffee.jpg",
    accentColor: "#86efac",
    badge: "Specialty Grade AAA",
    stats: { label: "Altitude / Grade", value: "3,800+ ft" },
    highlights: ["Shade-Grown Arabica AAA", "Black Chia & Golden Flax", "W240 Jumbo Cashews"],
    origin: "Coorg & Chikmagalur",
    ports: "Mangalore & Cochin",
  },
];

export const HeroSplit3D: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>("coconut");
  const bgCanvasRef = useRef<HTMLDivElement>(null);

  // Background 3D ambient particle system
  useEffect(() => {
    if (!bgCanvasRef.current) return;
    const container = bgCanvasRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Particles
    const count = 400;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color(0x22c55e);
    const c2 = new THREE.Color(0xf59e0b);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const chosen = Math.random() > 0.5 ? c1 : c2;
      colors[i * 3] = chosen.r;
      colors[i * 3 + 1] = chosen.g;
      colors[i * 3 + 2] = chosen.b;
    }

    geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.02;
      points.rotation.x = Math.sin(t * 0.05) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[96vh] w-full flex flex-col justify-between bg-background pt-24 pb-8 overflow-hidden">
      {/* Background 3D Ambient WebGL Canvas */}
      <div ref={bgCanvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />

      {/* Top Header & Intro Info */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {/* Top Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-lime/30 bg-surface-card backdrop-blur-xl shadow-glow-green mb-3"
            >
              <Leaf className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-lime">
                HarGi Agro Products Private Limited • Global Exporter
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight"
            >
              Natural Agro Products, <br className="hidden sm:inline" />
              <span className="text-gradient-green">Sourced with Care.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-neutral-300 font-sans max-w-2xl leading-relaxed"
            >
              India’s premier agro export house supplying extra virgin coconut derivatives, traditional
              jaggery, aromatic spices, single-origin coffee, and superfoods directly to international
              distributors and food manufacturers across 28+ nations.
            </motion.p>
          </div>

          {/* Quick Stats Capsule & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#rfq-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-emerald via-emerald-600 to-green-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-glow-green hover:scale-105 transition-all cursor-pointer"
            >
              <span>Instant Export RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#global-supply"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-surface-card hover:border-brand-emerald/40 text-neutral-200 font-mono text-xs tracking-wider transition-all backdrop-blur-md"
            >
              <Ship className="w-4 h-4 text-brand-gold" />
              <span>Maritime Routes</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3D Split Multi-Column Product Hero Deck */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-4">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold mb-3 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand-lime" />
            Select Agro Division to Inspect 3D Portfolio:
          </span>
          <span className="hidden sm:inline text-neutral-500">
            Hover or click to expand category details
          </span>
        </div>

        {/* The Split Container */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-[520px] sm:h-[560px] w-full">
          {PILLARS.map((pillar) => {
            const isActive = activePillarId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                layout
                onClick={() => setActivePillarId(pillar.id)}
                onMouseEnter={() => setActivePillarId(pillar.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 ${
                  isActive
                    ? "flex-[3.2] border-brand-emerald shadow-[0_15px_50px_rgba(34,197,94,0.35)]"
                    : "flex-1 border-white/10 hover:border-brand-emerald/40 hover:bg-surface-elevated/40"
                }`}
              >
                {/* Background Image with Dark Vignette */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-105 brightness-[0.65]" : "scale-100 brightness-[0.35]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030705] via-[#030705]/60 to-transparent" />
                </div>

                {/* Top Pillar Status */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full uppercase backdrop-blur-md border ${
                      isActive
                        ? "bg-brand-emerald/30 border-brand-lime text-brand-sprout"
                        : "bg-black/60 border-white/10 text-neutral-400"
                    }`}
                  >
                    {pillar.category}
                  </span>

                  <span className="text-[11px] font-mono text-brand-gold font-bold backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-lg border border-brand-gold/30">
                    {pillar.badge}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10">
                  <h3
                    className={`font-display font-black text-white transition-all ${
                      isActive ? "text-2xl sm:text-3xl lg:text-4xl leading-tight" : "text-lg sm:text-xl"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-brand-lime font-medium mt-1">
                    {pillar.subtitle}
                  </p>

                  {/* Expanded Information only visible on Active card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 pt-4 border-t border-white/15 space-y-4"
                      >
                        <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed line-clamp-2">
                          {pillar.tagline}
                        </p>

                        {/* Highlights & Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                          <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                            <span className="text-[10px] text-neutral-400 block uppercase">
                              Harvest Origin
                            </span>
                            <span className="text-white font-bold">{pillar.origin}</span>
                          </div>

                          <div className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                            <span className="text-[10px] text-neutral-400 block uppercase">
                              Dispatch Seaports
                            </span>
                            <span className="text-brand-lime font-bold">{pillar.ports}</span>
                          </div>
                        </div>

                        {/* Key Product Offerings */}
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.highlights.map((hl, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-brand-emerald/15 border border-brand-emerald/30 text-brand-lime"
                            >
                              <CheckCircle2 className="w-3 h-3 text-brand-lime" />
                              {hl}
                            </span>
                          ))}
                        </div>

                        {/* CTA button inside active card */}
                        <div className="pt-2 flex items-center gap-3">
                          <a
                            href="#products"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-emerald text-white font-mono font-bold text-xs uppercase tracking-wider shadow-glow-green hover:scale-105 transition-all cursor-pointer"
                          >
                            <span>Explore Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href="#rfq-calculator"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/20 bg-black/50 text-white font-mono text-xs hover:border-brand-emerald transition-colors"
                          >
                            <span>Quick Quote</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Export Highlights Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "APEDA & FSSAI", desc: "Certified Indian Exporter", color: "text-brand-lime" },
            { label: "100% Traceability", desc: "South Indian Direct Farms", color: "text-brand-emerald" },
            { label: "28+ Global Ports", desc: "FCL & LCL Maritime Dispatch", color: "text-brand-gold" },
            { label: "0% Adulteration", desc: "Independent NABL Lab Tested", color: "text-brand-sprout" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-3 sm:p-4 border border-white/5 flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-surface-elevated text-brand-lime">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-xs sm:text-sm font-bold font-mono ${item.color}`}>
                  {item.label}
                </div>
                <div className="text-[11px] font-sans text-neutral-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
