"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Bot, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Story", href: "#scrolly-section" },
    { label: "Projects", href: "#projects" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Terminal", href: "#terminal" },
    { label: "International Project", href: "#international-projects" },
    { label: "Journey", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full border px-4 sm:px-6 py-2 transition-all duration-500 max-w-6xl w-full ${
          scrolled
            ? "border-white/15 bg-neutral-950/85 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-black/45 backdrop-blur-md"
        }`}
      >
        {/* Brand: NAREN KG */}
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-brand-orange transition-colors flex-shrink-0"
        >
          <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
          <span className="font-display tracking-tight text-sm sm:text-base font-extrabold text-white">
            NAREN KG
          </span>
        </a>

        {/* Single Unified Role Capsule Badge */}
        <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-neutral-900/80 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(255,77,0,0.15)] flex-shrink-0">
          <Bot className="h-3.5 w-3.5 text-brand-orange animate-pulse" />
          <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-200 whitespace-nowrap">
            AI / ML DEVELOPER & AUTOMATION ENGINEER
          </span>
        </div>

        {/* Desktop Links with International Project */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs font-mono text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-brand-orange whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls: Contact CTA (Audio Button Removed) */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-red-600 to-brand-orange px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,77,0,0.3)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pointer-events-auto absolute top-18 left-4 right-4 rounded-2xl border border-white/15 bg-neutral-950/95 p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center md:hidden"
        >
          {/* Mobile Role Badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-orange/30 bg-neutral-900/80 py-1.5 px-3 mb-2">
            <Bot className="h-3.5 w-3.5 text-brand-orange" />
            <span className="text-[10px] font-mono font-bold text-white tracking-wider">
              AI / ML & AUTOMATION ENGINEER
            </span>
          </div>

          <div className="flex flex-col gap-3 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-neutral-300 hover:text-brand-orange"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 rounded-full bg-brand-orange py-2 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg"
          >
            Get In Touch
          </a>
        </motion.div>
      )}
    </header>
  );
};
