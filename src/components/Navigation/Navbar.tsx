"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { PillNav } from "./PillNav";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  // ScrollSpy to track active section in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Full-Width Solid White Top Header */}
      <header
        style={{ backgroundColor: "#ffffff" }}
        className="fixed top-0 left-0 right-0 z-[100] w-full bg-white border-b border-neutral-200 shadow-sm transition-all"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-22 flex items-center justify-between">
          {/* Left Brand: HaRGi Logo with Subtitle below */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex flex-col items-start justify-center group cursor-pointer text-left bg-transparent border-none p-0 focus:outline-none"
          >
            <div className="relative h-10 sm:h-12 w-36 sm:w-44 flex items-center justify-start">
              <Image
                src="/hargi-logo.png"
                alt="HaRGi Logo"
                width={200}
                height={64}
                className="object-contain object-left h-full w-auto transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
            <span className="text-[10px] sm:text-[11.5px] text-[#556070] font-sans tracking-tight leading-none mt-1 font-normal whitespace-nowrap text-left">
              Premium Agro Products Exporter from India
            </span>
          </button>

          {/* Right Navigation Links with PillNav Effect */}
          <div className="hidden md:block">
            <PillNav
              items={navItems.map((item) => ({
                label: item.label,
                id: item.id,
                onClick: () => scrollToSection(item.id),
              }))}
              activeId={activeSection}
              baseColor="#0f5132"
              pillColor="transparent"
              pillTextColor="#212529"
              hoveredPillTextColor="#ffffff"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-[#0f5132] rounded-lg hover:bg-neutral-100 transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ backgroundColor: "#ffffff" }}
              className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 shadow-lg flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 px-4 rounded-xl text-left font-sans text-base transition-colors border-none cursor-pointer font-medium ${
                    activeSection === item.id
                      ? "bg-[#0f5132] text-white"
                      : "text-neutral-800 hover:bg-neutral-50 hover:text-[#0f5132] bg-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
