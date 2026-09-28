"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/CanvasScroller/ScrollyCanvas";
import { Overlay } from "@/components/CanvasScroller/Overlay";
import { Preloader } from "@/components/CanvasScroller/Preloader";
import { Projects } from "@/components/Portfolio/Projects";
import { HackathonShowcase } from "@/components/Portfolio/HackathonShowcase";
import { DeveloperTerminal } from "@/components/Code/DeveloperTerminal";
import { InternationalProjects } from "@/components/Portfolio/InternationalProjects";
import { Philosophy } from "@/components/Portfolio/Philosophy";
import { Experience } from "@/components/Portfolio/Experience";
import { Contact } from "@/components/Portfolio/Contact";
import { Footer } from "@/components/Portfolio/Footer";

export default function HomePage() {
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 180;

  return (
    <>
      {/* 2K Neural Sequence Preloader */}
      <Preloader loaded={loadedFrames} total={totalFrames} />

      {/* Scrollytelling 500vh Sticky Canvas & AI Parallax Overlay */}
      <ScrollyCanvas
        totalFrames={totalFrames}
        onLoadingProgress={(loaded) => setLoadedFrames(loaded)}
      >
        <Overlay />
      </ScrollyCanvas>

      {/* AI, Deep Learning & Full-Stack Projects */}
      <Projects />

      {/* Signature Module 1: Hackathons & Startup Victories Showcase */}
      <div id="hackathons">
        <HackathonShowcase />
      </div>

      {/* Signature Module 2: Interactive Developer Terminal */}
      <div id="terminal">
        <DeveloperTerminal />
      </div>

      {/* Signature Module 3: International Projects & Global Immersion Gallery */}
      <div id="international-projects">
        <InternationalProjects />
      </div>

      {/* Engineering Ethos & Impact Stats */}
      <Philosophy />

      {/* Journey, Education, Hackathons & Certifications */}
      <Experience />

      {/* Contact NAREN KG */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
