"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Globe2, Sparkles, ShieldCheck, ArrowRight, Anchor, Leaf, Compass, Box } from "lucide-react";
import Image from "next/image";

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<"network" | "biosphere" | "particles">("network");
  const [fps, setFps] = useState<number>(60);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030705, 0.025);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 26);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x064e3b, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x22c55e, 2.5);
    dirLight1.position.set(15, 20, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.8);
    dirLight2.position.set(-15, -10, -10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x4ade80, 3, 50);
    pointLight.position.set(0, 0, 12);
    scene.add(pointLight);

    // 5. 3D Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Central Wireframe / Dot Sphere (Earth)
    const globeRadius = 7.5;
    const globeGeom = new THREE.SphereGeometry(globeRadius, 48, 48);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x042f1a,
      roughness: 0.6,
      metalness: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const globeMesh = new THREE.Mesh(globeGeom, globeMat);
    globeGroup.add(globeMesh);

    // Inner Glowing Core Sphere
    const innerGeom = new THREE.SphereGeometry(globeRadius * 0.94, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x022c16,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    globeGroup.add(innerMesh);

    // Outer Atmosphere Glow
    const atmosGeom = new THREE.SphereGeometry(globeRadius * 1.05, 32, 32);
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const atmosMesh = new THREE.Mesh(atmosGeom, atmosMat);
    globeGroup.add(atmosMesh);

    // 6. Global Trade Nodes (South India Hub -> Global Ports)
    const latLngToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // South India Origin (Hub)
    const southIndia = { lat: 11.0, lng: 77.0, name: "HarGi South India Hub" };
    const hubPos = latLngToVector3(southIndia.lat, southIndia.lng, globeRadius);

    // Glowing Hub Marker
    const hubGeom = new THREE.SphereGeometry(0.35, 16, 16);
    const hubMat = new THREE.MeshBasicMaterial({ color: 0x4ade80 });
    const hubMesh = new THREE.Mesh(hubGeom, hubMat);
    hubMesh.position.copy(hubPos);
    globeGroup.add(hubMesh);

    // Hub Pulsing Ring
    const ringGeom = new THREE.RingGeometry(0.4, 0.7, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.position.copy(hubPos);
    ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(ringMesh);

    // Destinations
    const destinations = [
      { lat: 25.2, lng: 55.3, name: "Dubai, UAE" },
      { lat: 51.9, lng: 4.5, name: "Rotterdam, EU" },
      { lat: 40.7, lng: -74.0, name: "New York, USA" },
      { lat: 1.35, lng: 103.8, name: "Singapore" },
      { lat: 35.6, lng: 139.7, name: "Tokyo, JP" },
      { lat: -33.8, lng: 151.2, name: "Sydney, AU" },
      { lat: 24.7, lng: 46.7, name: "Riyadh, KSA" },
      { lat: 53.5, lng: 10.0, name: "Hamburg, DE" },
    ];

    // Create 3D Curved Bezier Arcs for Trade Routes
    const createArc = (start: THREE.Vector3, end: THREE.Vector3, colorHex: number) => {
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const distance = start.distanceTo(end);
      mid.normalize().multiplyScalar(globeRadius + distance * 0.35);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.75,
        linewidth: 2,
      });
      return new THREE.Line(geom, mat);
    };

    destinations.forEach((dest, idx) => {
      const destPos = latLngToVector3(dest.lat, dest.lng, globeRadius);

      // Node Marker
      const nodeGeom = new THREE.SphereGeometry(0.2, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0xf59e0b : 0x22c55e,
      });
      const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
      nodeMesh.position.copy(destPos);
      globeGroup.add(nodeMesh);

      // Arc Line
      const arc = createArc(hubPos, destPos, idx % 2 === 0 ? 0xf59e0b : 0x10b981);
      globeGroup.add(arc);
    });

    // 7. Floating 3D Floating Agro Prisms & Seed Particles
    const particleCount = 750;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    const colorEmerald = new THREE.Color(0x22c55e);
    const colorGold = new THREE.Color(0xf59e0b);
    const colorLime = new THREE.Color(0x86efac);

    for (let i = 0; i < particleCount; i++) {
      const r = 9 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      particleScales[i] = Math.random() * 2.5 + 0.8;

      const chosenColor = Math.random() > 0.6 ? colorGold : Math.random() > 0.3 ? colorEmerald : colorLime;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute("scale", new THREE.BufferAttribute(particleScales, 1));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 8. 3D Floating Organic Octahedrons & Polyhedra
    const polyGroup = new THREE.Group();
    const polyGeom = new THREE.OctahedronGeometry(0.5, 0);
    const polyMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });

    for (let i = 0; i < 14; i++) {
      const mesh = new THREE.Mesh(polyGeom, polyMat);
      const angle = (i / 14) * Math.PI * 2;
      const dist = 11 + (i % 3) * 2;
      mesh.position.set(Math.cos(angle) * dist, (Math.sin(i) * 6) - 1, Math.sin(angle) * dist);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      polyGroup.add(mesh);
    }
    scene.add(polyGroup);

    // 9. Interactive Mouse Parallax & Smooth Rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 10. Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // 11. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Globe auto-rotation & parallax damping
      if (isRotating) {
        globeGroup.rotation.y += 0.0035;
      }
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.3;

      globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.03;
      globeGroup.position.x = mouseX * 0.8;
      globeGroup.position.y = mouseY * 0.5;

      // Particle subtle rotation
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

      // Polyhedra floating
      polyGroup.children.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.015;
        mesh.position.y += Math.sin(elapsedTime * 1.5 + index) * 0.01;
      });

      // Pulse hub ring
      const scale = 1 + Math.sin(elapsedTime * 4) * 0.25;
      ringMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      globeGeom.dispose();
      globeMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating]);

  return (
    <div className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto"
      />

      {/* Radial Gradient Vignette */}
      <div className="absolute inset-0 z-15 canvas-vignette pointer-events-none" />

      {/* Hero Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center pointer-events-none">
        {/* Brand Pre-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-emerald/40 bg-surface-card backdrop-blur-xl shadow-glow-green mb-6"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-brand-emerald animate-ping" />
          <span className="text-xs font-mono font-semibold tracking-wider text-brand-lime uppercase">
            Global Agro Export Corridor • India to 28+ Nations
          </span>
        </motion.div>

        {/* Main 3D Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white max-w-5xl leading-[1.08]"
        >
          Natural Agro Products, <br />
          <span className="text-gradient-green drop-shadow-[0_0_35px_rgba(34,197,94,0.4)]">
            Sourced with Care.
          </span>
        </motion.h1>

        {/* Subtitle & Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl font-sans leading-relaxed"
        >
          HarGi Agro Products Private Limited delivers export-grade{" "}
          <span className="text-brand-lime font-semibold">Organic Coconut Derivatives</span>,{" "}
          <span className="text-brand-gold font-semibold">Traditional Golden Jaggery</span>,{" "}
          <span className="text-brand-emerald font-semibold">Authentic Indian Spices</span>, and{" "}
          <span className="text-brand-sprout font-semibold">Single-Origin Coffee</span> directly from South Indian
          plantations to international buyers worldwide.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-emerald via-emerald-600 to-green-600 text-white font-mono font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:shadow-[0_0_45px_rgba(34,197,94,0.7)] hover:scale-105 transition-all cursor-pointer"
          >
            <span>Explore 3D Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#rfq-calculator"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-brand-lime/30 bg-surface-card text-neutral-200 font-mono text-sm tracking-wider hover:border-brand-emerald hover:text-white hover:bg-surface-elevated transition-all backdrop-blur-lg cursor-pointer"
          >
            <Box className="w-4 h-4 text-brand-gold" />
            <span>Interactive RFQ Calculator</span>
          </a>

          <a
            href="#global-supply"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-black/40 text-neutral-300 font-mono text-sm tracking-wider hover:border-brand-emerald/50 hover:text-white transition-all backdrop-blur-md cursor-pointer"
          >
            <Globe2 className="w-4 h-4 text-brand-lime" />
            <span>Global Export Routes</span>
          </a>
        </motion.div>

        {/* 3D Floating Interactive HUD Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl w-full pointer-events-auto"
        >
          {[
            { label: "Direct Sourcing", val: "100%", sub: "Farm-to-Port", color: "text-brand-lime" },
            { label: "Global Reach", val: "28+", sub: "Export Nations", color: "text-brand-emerald" },
            { label: "Certifications", val: "APEDA & FSSAI", sub: "ISO 22000 Ready", color: "text-brand-gold" },
            { label: "Annual Volume", val: "12,500+ MT", sub: "Bulk & Retail", color: "text-white" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center border border-brand-emerald/20 hover:border-brand-emerald/50 transition-all hover:scale-[1.02]"
            >
              <div className={`text-xl sm:text-2xl lg:text-3xl font-black font-display ${stat.color}`}>
                {stat.val}
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-sans text-neutral-400">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* 3D Scene Controls HUD in Bottom Right */}
        <div className="mt-8 flex items-center gap-3 text-xs font-mono text-neutral-400 pointer-events-auto">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-surface-card hover:border-brand-emerald text-neutral-300 hover:text-white transition-colors"
          >
            <Compass className={`w-3.5 h-3.5 text-brand-lime ${isRotating ? "animate-spin-slow" : ""}`} />
            <span>{isRotating ? "3D Rotation: ON" : "3D Rotation: PAUSED"}</span>
          </button>
          <span className="hidden sm:inline text-neutral-500">•</span>
          <span className="hidden sm:inline">Drag to inspect 3D Earth & Trade Arcs</span>
        </div>
      </div>
    </div>
  );
};
