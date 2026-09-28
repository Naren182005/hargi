"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Sparkles, X, ZoomIn, CheckCircle, Flame, Users, IndianRupee, ShieldCheck, ArrowUpRight } from "lucide-react";
import ScrollVelocity from "@/components/UI/ScrollVelocity";

export interface HackathonItem {
  id: string;
  title: string;
  badge: string;
  award: string;
  year: string;
  image: string;
  highlights: string[];
  team: string[];
  story: string;
  statsLabel: string;
  statsValue: string;
  accentColor: string;
}

export const HACKATHON_DATA: HackathonItem[] = [
  {
    id: "hack-it-on-25",
    title: "HACK IT ON '25",
    badge: "1st Place Winner 🥇",
    award: "Championship Trophy & Direct Internship Offers",
    year: "2025",
    image: "/hackathons/hack_it_on_winner.png",
    highlights: [
      "Secured 1st Place Championship",
      "Awarded Prestigious Internship Offers",
      "Winner's Trophy from Sri Eshwar College of Engineering",
    ],
    team: ["Naren K G (III AIML)", "Sujithraja R (III AIML)", "Darsan V (III CSE)", "Ajay Shashtivel M K (II AIML)", "Deepak P (II AIML)"],
    story: "Clinched the 1st Place Championship at HACK IT ON '25 after an intensive 24-hour sprint. Developed an advanced AI/ML automation solution that impressed industry judges with its real-time inference speed and scalable architecture, leading to direct internship offers and the championship trophy.",
    statsLabel: "Placement & Recognition",
    statsValue: "1st Place & Internships",
    accentColor: "#ff4d00",
  },
  {
    id: "startuptn-hackathon",
    title: "StartupTN HACKATHON",
    badge: "Ranked 5th Statewide 🏆",
    award: "₹10 Lakh Seed Fund Grant & TN Startup Card",
    year: "2025",
    image: "/hackathons/startuptn_rank5.png",
    highlights: [
      "₹10,00,000 (10 Lakh) Seed Fund Received",
      "Tamil Nadu Startup Recognition Card (TN CARD)",
      "₹25,000 AWS Cloud Credits",
      "Complimentary Patent Filing & Startup Registration",
    ],
    team: ["Naren KG (III AIML)", "Sujithraja R", "Ajay Shashtivel M K", "Darsan V", "Deepak P"],
    story: "Ranked 5th Place statewide at the prestigious Government of Tamil Nadu StartupTN Hackathon. Awarded a monumental ₹10 Lakh Seed Fund grant, official TN Startup Card, ₹25,000 in AWS Cloud Infrastructure credits, plus full government backing for startup registration and patent filing.",
    statsLabel: "Seed Funding Secured",
    statsValue: "₹10 Lakhs",
    accentColor: "#00e5ff",
  },
  {
    id: "festronix-2025",
    title: "FESTRONIX HACKATHON 2025",
    badge: "3rd Place Winner 🥉",
    award: "Cash Prize of ₹10,000 & Technical Recognition",
    year: "2025",
    image: "/hackathons/festronix_3rd.png",
    highlights: [
      "3rd Place Among Top 50 Finalist Teams",
      "₹10,000 Cash Prize",
      "Honored for Engineering Innovation",
    ],
    team: ["Naren K.G (III Year AIML)", "Sujithra R", "Ajay Shashtivel M.K", "Deepak P"],
    story: "Competed against 50 elite shortlisted engineering teams at FESTRONIX 2025. Built an intelligent automated system integrating computer vision and rapid API pipelines, bagging 3rd place on the podium along with a ₹10,000 cash prize.",
    statsLabel: "Podium Finish",
    statsValue: "Top 3 / ₹10,000",
    accentColor: "#f59e0b",
  },
  {
    id: "hackathrone",
    title: "HACKATHRONE",
    badge: "Top 10 Finalist 🎖️",
    award: "Certificate of Excellence (1500+ Teams)",
    year: "2025",
    image: "/hackathons/hackathrone_top10.png",
    highlights: [
      "Top 10 Finish After Multiple Competitive Rounds",
      "Competed Against 1,500+ Registered Teams Nationwide",
      "Official Certificate of Excellence Awarded",
    ],
    team: ["Naren K G (III AIML)", "Sujithraja R", "Darsan V", "Ajay Shashtivel M K", "Deepak P"],
    story: "Battled through multi-stage technical screening and live coding elimination rounds among 1,500+ teams nationwide to secure a Top 10 national ranking at HACKATHRONE, earning a Certificate of Excellence from Sri Eshwar College of Engineering.",
    statsLabel: "National Field",
    statsValue: "Top 10 / 1500+ Teams",
    accentColor: "#10b981",
  },
];

export const HackathonShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<HackathonItem | null>(null);

  return (
    <section
      id="hackathons"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 backdrop-blur-md">
            <Trophy className="h-3.5 w-3.5" />
            <span>Championships & Venture Grants</span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-display leading-[1.05]"
            >
              Hackathon <span className="text-gradient-orange">Victories.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed"
          >
            From ₹10 Lakh government seed funding to 1st place hackathon championships among 1,500+ teams. Click any photo to expand the verified victory poster and story.
          </motion.p>
        </div>

        {/* Dynamic Velocity Marquee Banner */}
        <div className="py-2 overflow-hidden border-y border-white/5 bg-gradient-to-r from-amber-500/5 via-orange-500/10 to-amber-500/5 rounded-2xl backdrop-blur-sm">
          <ScrollVelocity
            texts={[
              "7× HACKATHON CHAMPION • 5 CONTINUOUS WIN STREAK • ₹10 LAKH SEED FUND •",
              "STARTUPTN 5TH RANK • HACK IT ON '25 WINNER • FESTRONIX '24 PODIUM •"
            ]}
            velocity={30}
            className="text-white/20 hover:text-amber-400/50 transition-colors font-mono tracking-widest font-extrabold uppercase text-xl sm:text-3xl md:text-4xl py-1"
          />
        </div>

        {/* 4-Card Grid with Posters & Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HACKATHON_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card group rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500 bg-[#080808]/90"
            >
              {/* Poster Image Container */}
              <div
                onClick={() => setSelectedImage(item)}
                className="relative h-72 sm:h-96 w-full overflow-hidden bg-black/60 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 rounded-full border border-black/50 bg-black/80 px-3.5 py-1 text-xs font-mono font-bold text-amber-400 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5" />
                  <span>{item.badge}</span>
                </div>

                <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/80 p-2 text-white hover:bg-brand-orange transition-colors">
                  <ZoomIn className="h-4 w-4" />
                </div>

                {/* Bottom Bar overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="text-amber-300 font-bold">{item.statsValue}</span>
                  <span className="text-[11px] text-neutral-400">Click to expand poster ↗</span>
                </div>
              </div>

              {/* Story & Details Content */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between border-t border-white/10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="text-brand-orange font-bold">[{item.year}]</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px]">
                      Sri Eshwar College of Engineering
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono font-semibold text-amber-400">
                    {item.award}
                  </div>

                  {/* The Story Behind the Win */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-brand-orange font-bold mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>The Story Behind The Win:</span>
                    </div>
                    <p>{item.story}</p>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Key Accolades & Impact:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.highlights.map((hl, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs font-mono text-neutral-300 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High-Resolution Poster Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-amber-500/40 bg-[#090909] p-6 sm:p-8 shadow-[0_0_80px_rgba(245,158,11,0.25)] flex flex-col md:flex-row gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/80 p-2 text-neutral-400 hover:text-white hover:border-amber-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Full Poster Image View */}
              <div className="md:w-1/2 flex items-center justify-center bg-black/70 rounded-xl p-2 border border-white/10">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Narrative Breakdown */}
              <div className="md:w-1/2 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400 font-bold">
                    <Trophy className="h-3.5 w-3.5" />
                    <span>{selectedImage.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedImage.title}
                  </h3>

                  <p className="text-xs font-mono text-amber-300 font-semibold">
                    {selectedImage.award}
                  </p>

                  <div className="border-t border-white/10 pt-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Event Summary & Story:
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {selectedImage.story}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      Key Recognitions:
                    </h4>
                    {selectedImage.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-brand-orange" />
                      <span>Winning Team Roster:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedImage.team.map((member, mIdx) => (
                        <span
                          key={mIdx}
                          className="rounded-md border border-white/10 bg-neutral-900 px-2 py-0.5 text-[11px] font-mono text-neutral-300"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full rounded-full bg-gradient-to-r from-amber-500 to-brand-orange py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:scale-[1.02]"
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
