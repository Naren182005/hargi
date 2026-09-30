"use client";

import React from "react";
import Image from "next/image";

export const Footer3D: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0f5132] text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-10 w-36">
              <Image
                src="/hargi-logo.png"
                alt="HaRGi"
                width={150}
                height={48}
                className="object-contain object-left filter brightness-0 invert"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans max-w-sm">
              Premium exporter of natural agro products from India. We pride ourselves on farm-fresh sourcing,
              hygienic processing, and reliable global delivery.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Products Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Get In Touch */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div>
                <span className="block text-[10px] uppercase font-bold text-white/60 tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+917779955393"
                  className="text-white hover:text-emerald-200 font-semibold transition-colors"
                >
                  +91 77799 55393
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-bold text-white/60 tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:info@hagitechsol.com"
                  className="text-white hover:text-emerald-200 font-semibold transition-colors"
                >
                  info@hagitechsol.com
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-bold text-white/60 tracking-wider">
                  Location
                </span>
                <span className="text-white font-medium">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
