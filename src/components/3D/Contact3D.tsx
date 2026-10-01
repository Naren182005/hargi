"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock, ArrowRight, Sparkles } from "lucide-react";
import { FlowingMenu } from "@/components/UI/FlowingMenu";
import PixelCard from "@/components/UI/PixelCard";
import BorderGlow from "@/components/UI/BorderGlow";

export const Contact3D: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `New Export Inquiry for HarGi Agro Products:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Requirement: ${formData.requirement}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917779955393?text=${encoded}`, "_blank");
  };

  const flowingMenuItems = [
    {
      link: "tel:+917779955393",
      text: "Direct Trade Call",
      image: "/products/coconut.jpg",
    },
    {
      link: "https://wa.me/917779955393",
      text: "WhatsApp Desk",
      image: "/products/green-cardamom.jpg",
    },
    {
      link: "mailto:info@hagitechsol.com",
      text: "Email Inquiries",
      image: "/products/specialty-coffee.png",
    },
    {
      link: "#products-catalog",
      text: "61+ Agro Products",
      image: "/products/black-pepper.jpg",
    },
  ];

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-[#212529]"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f5132] font-sans">
            Contact Us
          </h2>
          <p className="text-xs sm:text-sm text-[#495057] font-sans leading-relaxed">
            We&apos;re here to help with your bulk coconut product requirements. Reach out today for quotes,
            samples, or partnership opportunities.
          </p>
        </div>

        {/* Split Card Container with BorderGlow */}
        <BorderGlow
          edgeSensitivity={35}
          glowColor="145 80 50"
          backgroundColor="#ffffff"
          borderRadius={24}
          glowRadius={40}
          glowIntensity={1.2}
          coneSpread={28}
          animated={true}
          colors={["#10b981", "#84cc16", "#059669"]}
          className="max-w-4xl mx-auto shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full bg-white rounded-3xl overflow-hidden">
            {/* Left Column: Forest Green Info Box with Interactive Pixel Shimmer */}
            <div className="lg:col-span-5 relative">
              <PixelCard
                variant="default"
                colors="#ffffff,#a7f3d0,#4ade80,#10b981,#34d399"
                speed={45}
                gap={7}
                className="w-full h-full bg-[#0f5132] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden rounded-none"
              >
                {/* Decorative Subtle Background Circles */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 -right-12 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

                <div className="space-y-8 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold font-sans tracking-tight text-white">
                      HarGi Agro Products
                    </h3>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <a
                        href="tel:+917779955393"
                        className="text-base font-bold text-white hover:text-emerald-200 transition-colors block"
                      >
                        +91 77799 55393
                      </a>
                      <div className="text-xs text-white/70 mt-0.5">Direct Contact</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <a
                        href="mailto:info@hagitechsol.com"
                        className="text-sm font-semibold text-white hover:text-emerald-200 transition-colors block break-all"
                      >
                        info@hagitechsol.com
                      </a>
                      <div className="text-xs text-white/70 mt-0.5">General Enquiries</div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Business Hours</div>
                      <div className="text-xs text-white/80 mt-1">
                        Mon – Sat: 9:00 AM – 6:00 PM IST
                      </div>
                      <div className="text-xs text-white/80">Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>

            {/* Right Column: Clean White Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#212529] font-sans mb-6">
                Send Your Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#495057] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full rounded-xl bg-[#f8fafc] border border-neutral-200 px-4 py-2.5 text-xs text-[#212529] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f5132]/20 focus:border-[#0f5132] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#495057] mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email Address"
                    className="w-full rounded-xl bg-[#f8fafc] border border-neutral-200 px-4 py-2.5 text-xs text-[#212529] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f5132]/20 focus:border-[#0f5132] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#495057] mb-1.5">
                    Your Phone Number (With Country Code)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9xxxxxxxxx"
                    className="w-full rounded-xl bg-[#f8fafc] border border-neutral-200 px-4 py-2.5 text-xs text-[#212529] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f5132]/20 focus:border-[#0f5132] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#495057] mb-1.5">
                    Your Requirement (Product, Quantity, Destination Country, Etc.) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Tell us about your requirement..."
                    className="w-full rounded-xl bg-[#f8fafc] border border-neutral-200 p-3 text-xs text-[#212529] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f5132]/20 focus:border-[#0f5132] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#4d7c0f] hover:bg-[#3f6212] text-white font-semibold text-xs transition-all shadow-sm hover:shadow cursor-pointer border-none mt-2"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {submitted && (
                  <p className="text-center text-xs font-semibold text-[#0f5132] pt-2">
                    ✓ Opening direct WhatsApp trade chat...
                  </p>
                )}
              </form>
            </div>
          </div>
        </BorderGlow>

        {/* ============================================================ */}
        {/* Interactive 3D Flowing Menu Component for Fast Trade Reach    */}
        {/* ============================================================ */}
        <div className="space-y-4 max-w-4xl mx-auto pt-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f5132]">
            <Sparkles className="w-4 h-4 text-[#15803d]" />
            <span>Interactive Quick Trade &amp; Export Channels</span>
          </div>

          <div className="h-[360px] sm:h-[400px] w-full rounded-3xl shadow-lg border border-neutral-200/80 overflow-hidden bg-white">
            <FlowingMenu
              items={flowingMenuItems}
              speed={14}
              textColor="#0f5132"
              bgColor="#ffffff"
              marqueeBgColor="#0f5132"
              marqueeTextColor="#ffffff"
              borderColor="rgba(15, 81, 50, 0.12)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
