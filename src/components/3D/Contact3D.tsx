"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const Contact3D: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    productInterest: "Coconut Products",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `New Export Inquiry for HarGi Agro Products:\n- Name: ${formData.name}\n- Company: ${formData.company}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Country: ${formData.country}\n- Product Interest: ${formData.productInterest}\n- Message: ${formData.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917779955393?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-emerald/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Get In Touch with <span className="text-gradient-green">HarGi Agro Products</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-sans">
            Connect directly with our global trade desk for inquiries, quotations, or sample requests.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Details specified by user */}
          <div className="lg:col-span-5 rounded-3xl border border-brand-emerald/25 bg-surface-card p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  HarGi Agro Products
                </h3>
                <p className="text-xs font-mono text-brand-sprout uppercase tracking-wider mt-1">
                  Global Agro Products Exporter
                </p>
              </div>

              {/* Direct Phone */}
              <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 space-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-emerald/20 text-brand-lime">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400">Direct Contact</div>
                    <a
                      href="tel:+917779955393"
                      className="text-lg font-bold font-mono text-white hover:text-brand-lime transition-colors"
                    >
                      +91 77799 55393
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Enquiries */}
              <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 space-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-400">General Enquiries</div>
                    <a
                      href="mailto:info@hagitechsol.com"
                      className="text-base sm:text-lg font-bold font-mono text-brand-lime hover:underline transition-colors"
                    >
                      info@hagitechsol.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase text-brand-sprout font-bold">
                  <Clock className="w-4 h-4 text-brand-lime" />
                  <span>Business Hours</span>
                </div>
                <div className="space-y-1 text-xs font-mono text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Mon – Sat:</span>
                    <span className="font-semibold text-white">9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Sunday:</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/917779955393"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Commercial Export Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-surface-card p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold font-display text-white">
              Send an Export Inquiry
            </h3>
            <p className="text-xs text-neutral-400 font-sans mt-1">
              Fill out this form and our commercial export manager will reach back within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Vance"
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Foods Trading Ltd"
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. United Kingdom, UAE, USA"
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Product Interest *
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full rounded-xl bg-surface-elevated border border-white/10 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-brand-lime"
                  >
                    <option value="Coconut Products">Coconut Products</option>
                    <option value="Indian Coffee">Indian Coffee</option>
                    <option value="Indian Spices & Salt">Indian Spices &amp; Salt</option>
                    <option value="Jaggery Varieties">Jaggery Varieties</option>
                    <option value="Nuts & Dried Fruits">Nuts &amp; Dried Fruits</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Message / Quantity Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify target quantity, packing preference, or questions..."
                  className="w-full rounded-xl bg-surface-elevated border border-white/10 p-3 text-xs font-mono text-white focus:outline-none focus:border-brand-lime resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-emerald via-emerald-600 to-green-600 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-glow-green hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Export Inquiry</span>
              </button>

              {submitted && (
                <p className="text-center text-xs font-mono text-brand-lime pt-2">
                  ✓ Opening direct trade inquiry on WhatsApp...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
