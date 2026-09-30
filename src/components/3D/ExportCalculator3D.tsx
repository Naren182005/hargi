"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HARGI_COMPANY_DATA } from "@/data/hargiData";
import {
  Calculator,
  Box,
  Ship,
  Scale,
  Package,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  HelpCircle,
} from "lucide-react";

export const ExportCalculator3D: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("Organic Virgin Coconut Oil");
  const [tonnage, setTonnage] = useState<number>(20);
  const [containerType, setContainerType] = useState<"20ft" | "40ft" | "lcl">("20ft");
  const [packagingType, setPackagingType] = useState<string>("25kg Multi-Layer Bags / Drums");
  const [destinationPort, setDestinationPort] = useState<string>("Jebel Ali (Dubai, UAE)");
  const [buyerName, setBuyerName] = useState<string>("");
  const [buyerEmail, setBuyerEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Dynamic calculations
  const estimatedBags = Math.round((tonnage * 1000) / 25);
  const estimatedPallets = Math.ceil(tonnage / 1.1);
  const estLeadDays =
    destinationPort.includes("Dubai") || destinationPort.includes("Singapore")
      ? "4 - 7 Days"
      : destinationPort.includes("Rotterdam")
      ? "18 - 22 Days"
      : destinationPort.includes("New York")
      ? "24 - 28 Days"
      : "14 - 18 Days";

  const handleGenerateRFQ = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = `Hello HarGi Agro Products,\n\nI am requesting an Export Quotation for:\n- Product: ${selectedProduct}\n- Quantity: ${tonnage} Metric Tons\n- Container: ${containerType.toUpperCase()}\n- Packaging: ${packagingType}\n- Destination Port: ${destinationPort}\n- Buyer Contact: ${buyerName} (${buyerEmail})\n\nPlease provide CIF/FOB pricing and technical COA specifications.`;

    // Open WhatsApp
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917779955393?text=${encoded}`, "_blank");
  };

  return (
    <section id="rfq-calculator" className="relative py-24 sm:py-32 bg-background border-t border-brand-emerald/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gold/30 bg-surface-card backdrop-blur-md mb-4 shadow-glow-gold">
            <Calculator className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold">
              Live Export Freight &amp; RFQ Engine
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl">
            Interactive Export Volume &amp;{" "}
            <span className="text-gradient-gold">Quotation Calculator.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-sans">
            Customize your import requirements, estimate container utilization, and receive a formal
            CIF / FOB proforma quotation tailored to your destination seaport.
          </p>
        </div>

        {/* 3D Interactive Console */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Form Controls */}
          <form
            onSubmit={handleGenerateRFQ}
            className="lg:col-span-7 rounded-3xl border border-brand-emerald/25 bg-surface-card p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                  1. Select Agro Commodity:
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white font-sans text-sm focus:border-brand-emerald focus:outline-none transition-colors"
                >
                  <option value="Organic Virgin Coconut Oil">Organic Virgin Coconut Oil (Cold-Pressed)</option>
                  <option value="High-Fat Desiccated Coconut">High-Fat Desiccated Coconut Flakes</option>
                  <option value="Traditional Cane Jaggery Powder">Traditional Cane Jaggery Powder (Chemical-Free)</option>
                  <option value="Handcrafted Jaggery Blocks">Handcrafted Jaggery Blocks / Karupatti</option>
                  <option value="Tellicherry Black Pepper TGSEB">Tellicherry Black Pepper (TGSEB Grade)</option>
                  <option value="Alleppey Green Cardamom 8mm+">Alleppey Green Cardamom (8mm+ Extra Bold)</option>
                  <option value="Single-Origin Arabica Coffee AAA">Single-Origin Arabica Coffee (Plantation AAA)</option>
                  <option value="Raw & Roasted Superfood Seeds & Nuts">Raw &amp; Roasted Superfood Seeds &amp; Nuts</option>
                </select>
              </div>

              {/* Tonnage Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-300 mb-2">
                  <span className="uppercase font-bold">2. Desired Order Quantity:</span>
                  <span className="text-brand-lime font-bold text-sm">{tonnage} Metric Tons (MT)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={tonnage}
                  onChange={(e) => setTonnage(Number(e.target.value))}
                  className="w-full accent-brand-emerald h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                  <span>1 MT (Trial)</span>
                  <span>20 MT (1x 20ft FCL)</span>
                  <span>50 MT</span>
                  <span>100+ MT (Commercial Bulk)</span>
                </div>
              </div>

              {/* Container & Packing Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    3. Container Mode:
                  </label>
                  <select
                    value={containerType}
                    onChange={(e) => setContainerType(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white font-sans text-sm focus:border-brand-emerald focus:outline-none"
                  >
                    <option value="20ft">20ft FCL (Up to 20 MT)</option>
                    <option value="40ft">40ft High Cube (Up to 28 MT)</option>
                    <option value="lcl">LCL Palletized Shipment (&lt; 10 MT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    4. Destination Port:
                  </label>
                  <select
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-white font-sans text-sm focus:border-brand-emerald focus:outline-none"
                  >
                    <option value="Jebel Ali (Dubai, UAE)">Jebel Ali (Dubai, UAE)</option>
                    <option value="Port of Rotterdam (Netherlands)">Port of Rotterdam (Netherlands)</option>
                    <option value="Port of New York / New Jersey (USA)">Port of New York / NJ (USA)</option>
                    <option value="Port of Singapore">Port of Singapore</option>
                    <option value="Tokyo / Yokohama Port (Japan)">Tokyo / Yokohama (Japan)</option>
                    <option value="Port of Sydney (Australia)">Port of Sydney (Australia)</option>
                    <option value="Jeddah Islamic Port (Saudi Arabia)">Jeddah Islamic Port (KSA)</option>
                    <option value="Other International Port">Other International Port</option>
                  </select>
                </div>
              </div>

              {/* Buyer Information Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name / Company:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Global Foods Trading Ltd"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-white font-sans text-sm focus:border-brand-emerald focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. buyer@company.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-elevated border border-white/10 text-white font-sans text-sm focus:border-brand-emerald focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Form Submit */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-brand-emerald via-emerald-600 to-green-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-glow-green hover:scale-[1.02] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Proforma RFQ via WhatsApp &amp; Desk</span>
              </button>
            </div>
          </form>

          {/* Right Column: 3D Cargo Manifest & Spec Estimation Visualizer */}
          <div className="lg:col-span-5 rounded-3xl border border-brand-gold/30 bg-surface-card p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-gold font-bold">
                  <Box className="w-4 h-4" />
                  <span>3D CARGO MANIFEST ESTIMATOR</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">HARGI-SPEC v3.2</span>
              </div>

              {/* Cargo Live Breakdown */}
              <div className="mt-6 space-y-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-400">Gross Export Weight:</span>
                  <span className="text-brand-lime font-bold text-sm">{tonnage * 1000} KG ({tonnage} MT)</span>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-400">Estimated Packages:</span>
                  <span className="text-white font-bold text-sm">~{estimatedBags.toLocaleString()} Units</span>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-400">Standard Pallet Count:</span>
                  <span className="text-white font-bold text-sm">~{estimatedPallets} Pallets</span>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-400">Sea Lead Time:</span>
                  <span className="text-brand-gold font-bold text-sm">{estLeadDays}</span>
                </div>

                <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-400">Loading Sea Port:</span>
                  <span className="text-white font-bold text-xs">VOC Port (Tuticorin) / Cochin</span>
                </div>
              </div>

              {/* Compliance Pack Included */}
              <div className="mt-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Complimentary Export Documentation:
                </div>
                <div className="space-y-1.5 text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0" />
                    <span>Certificate of Origin &amp; APEDA Invoice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0" />
                    <span>Phytosanitary &amp; Methyl Bromide Fumigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime flex-shrink-0" />
                    <span>Independent SGS / Bureau Veritas COA on demand</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-neutral-400">
                Direct Inquiries:{" "}
                <a href="mailto:info@hagitechsol.com" className="text-brand-lime hover:underline font-bold">
                  info@hagitechsol.com
                </a>{" "}
                •{" "}
                <a href="tel:+917779955393" className="text-brand-gold hover:underline font-bold">
                  +91 77799 55393
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
