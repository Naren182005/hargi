"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Clock, ArrowUp, Leaf } from "lucide-react";
import { useTab } from "@/context/TabContext";

export const Footer3D: React.FC = () => {
  const { setActiveTab } = useTab();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#161412]/90 border-t border-white/10 text-neutral-300 font-sans overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-28">
                <Image
                  src="/hargi-logo.png"
                  alt="HarGi Agro Products"
                  fill
                  className="object-contain filter brightness-110"
                />
              </div>
              <span className="text-xl font-bold font-display text-emerald-400">HarGi Agro</span>
            </div>

            <p className="text-sm text-neutral-300 font-sans max-w-md leading-relaxed">
              <strong className="text-white">HarGi Agro Products Private Limited</strong> is a premium,
              export-focused agro enterprise rooted in Tamil Nadu, India&apos;s coconut heartland. Supplying
              export-grade coconut products, traditional jaggery, and authentic Indian spices worldwide.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-700/40 text-emerald-400 text-xs font-mono">
              <Leaf className="w-3.5 h-3.5" />
              <span>Pure • Sustainable • Globally Trusted</span>
            </div>
          </div>

          {/* Col 3: Navigation Tabs */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
              <li>
                <button
                  onClick={() => {
                    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer bg-transparent border-none p-0"
                >
                  • Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer bg-transparent border-none p-0"
                >
                  • About HarGi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer bg-transparent border-none p-0"
                >
                  • Agro Products Catalog (61 Items)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer bg-transparent border-none p-0"
                >
                  • Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Desk */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+917779955393" className="hover:text-emerald-400 transition-colors font-bold text-white">
                  +91 77799 55393
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@hagitechsol.com" className="hover:text-emerald-400 transition-colors">
                  info@hagitechsol.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} HarGi Agro Products Private Limited. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
