"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  ChevronRight,
} from "lucide-react";
import { HARGI_ALL_PRODUCTS, HarGiCatalogItem } from "@/data/hargiProductsData";

// Category metadata with icons & badges
const CATEGORY_META: Record<string, { label: string; mobileLabel: string; icon: string; shortDesc: string }> = {
  All: { label: "All Commodities", mobileLabel: "All", icon: "📦", shortDesc: "Complete 61+ export catalog" },
  "Indian Spices & Salt": { label: "Spices & Salt", mobileLabel: "Spices", icon: "🌶️", shortDesc: "Bold Indian spices & sea salts" },
  "Coconut Products": { label: "Coconut Products", mobileLabel: "Coconut", icon: "🥥", shortDesc: "Raw & processed coconut value-adds" },
  "Indian Coffee": { label: "Indian Coffee", mobileLabel: "Coffee", icon: "☕", shortDesc: "Estate Arabica, Robusta & specialty" },
  "Jaggery Varieties": { label: "Jaggery Varieties", mobileLabel: "Jaggery", icon: "🍯", shortDesc: "Pure unrefined traditional cane sugar" },
  "Nuts & Dried Fruits": { label: "Nuts & Dried Fruits", mobileLabel: "Nuts & Fruits", icon: "🥜", shortDesc: "Premium cashews, raisins & kernels" },
};

export const ProductShowcase3D: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<HarGiCatalogItem>(HARGI_ALL_PRODUCTS[0]);
  const productListRef = useRef<HTMLDivElement>(null);

  // Category list with counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: HARGI_ALL_PRODUCTS.length };
    HARGI_ALL_PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    const categoryKeys = [
      "All",
      "Indian Spices & Salt",
      "Coconut Products",
      "Indian Coffee",
      "Jaggery Varieties",
      "Nuts & Dried Fruits",
    ];

    return categoryKeys.map((key) => ({
      key,
      label: CATEGORY_META[key]?.label || key,
      mobileLabel: CATEGORY_META[key]?.mobileLabel || CATEGORY_META[key]?.label || key,
      icon: CATEGORY_META[key]?.icon || "🌿",
      count: counts[key] || 0,
    }));
  }, []);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return HARGI_ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // If active selected product is not in filtered list, auto-select the first one
  useEffect(() => {
    if (filteredProducts.length > 0) {
      const exists = filteredProducts.some((p) => p.id === selectedProduct.id);
      if (!exists) {
        setSelectedProduct(filteredProducts[0]);
      }
    }
  }, [filteredProducts, selectedProduct.id]);

  // Index of current product in filtered list
  const currentIndex = useMemo(() => {
    return filteredProducts.findIndex((p) => p.id === selectedProduct.id);
  }, [filteredProducts, selectedProduct.id]);

  const [slideDirection, setSlideDirection] = useState<number>(1);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePrev = () => {
    if (filteredProducts.length === 0) return;
    setSlideDirection(-1);
    const nextIdx = currentIndex > 0 ? currentIndex - 1 : filteredProducts.length - 1;
    setSelectedProduct(filteredProducts[nextIdx]);
  };

  const handleNext = () => {
    if (filteredProducts.length === 0) return;
    setSlideDirection(1);
    const nextIdx = currentIndex < filteredProducts.length - 1 ? currentIndex + 1 : 0;
    setSelectedProduct(filteredProducts[nextIdx]);
  };

  // Mobile horizontal swipe handlers (swipe left -> next, swipe right -> prev)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger only if horizontal swipe exceeds 40px and is predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        // Swiped Left -> Next
        handleNext();
      } else {
        // Swiped Right -> Previous
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // WhatsApp Quote Link generator
  const getWhatsAppLink = (product: HarGiCatalogItem) => {
    const text = `Hi HarGi Agro Exports, I am interested in sourcing export grade: ${product.name} (${product.category}).\n\nPlease share specifications, FOB/CIF bulk pricing, and minimum order quantity.`;
    return `https://wa.me/917779955393?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="products-catalog"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-[#212529] overflow-hidden"
    >
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#10b981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#15803d]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] mx-auto space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f5132] font-sans tracking-tight">
            Explore Our 61+ Export Products
          </h2>
          <p className="text-xs sm:text-base text-[#495057] font-sans leading-relaxed">
            Select a commodity category or search directly. Click any product to inspect
            specifications, export grades, and request immediate CIF/FOB quotes.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                  }}
                  className={`relative flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm border ${
                    isActive
                      ? "bg-[#0f5132] text-white border-[#0f5132] shadow-md shadow-[#0f5132]/25"
                      : "bg-white/90 text-[#374151] hover:text-[#0f5132] border-neutral-200/90 hover:border-[#15803d]/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-sm sm:text-base flex-shrink-0">{cat.icon}</span>
                    <span className="truncate">{cat.label}</span>
                  </div>
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-neutral-100 text-[#4b5563]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Split Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ================= LEFT COLUMN: SEARCH + MASTER PRODUCT DIRECTORY ================= */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col bg-white/95 backdrop-blur-xl rounded-[28px] border border-neutral-200/90 shadow-xl overflow-hidden h-[480px] sm:h-[620px] lg:h-[680px]">
            {/* Search Header */}
            <div className="p-4 sm:p-5 border-b border-neutral-100 bg-neutral-50/60 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search products, grades, tags (e.g. Cardamom, Coco Peat)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-neutral-200/90 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0f5132]/20 focus:border-[#0f5132] transition-all font-sans shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium px-1">
                <span>
                  Showing <strong className="text-[#0f5132]">{filteredProducts.length}</strong> commodities
                </span>
                <span className="text-neutral-400">Click to preview in 3D</span>
              </div>
            </div>

            {/* Scrollable Product Directory List */}
            <div
              ref={productListRef}
              className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 divide-y divide-neutral-100/50 scroll-smooth"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#cbd5e1 transparent",
              }}
            >
              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center space-y-2">
                  <Package className="w-8 h-8 mx-auto text-neutral-300" />
                  <p className="text-sm font-semibold text-neutral-600">No commodities found</p>
                  <p className="text-xs text-neutral-400">
                    Try searching for another keyword or switch category.
                  </p>
                </div>
              ) : (
                filteredProducts.map((product, idx) => {
                  const isSelected = product.id === selectedProduct.id;
                  return (
                    <motion.button
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product);
                        if (typeof window !== "undefined" && window.innerWidth < 1024) {
                          document.getElementById("product-spotlight-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-center gap-3.5 group relative ${
                        isSelected
                          ? "bg-gradient-to-r from-[#0f5132]/10 via-[#0f5132]/5 to-transparent border border-[#0f5132]/30 shadow-sm"
                          : "hover:bg-neutral-50/90 border border-transparent"
                      }`}
                    >
                      {/* Active green glow accent strip */}
                      {isSelected && (
                        <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#0f5132] rounded-r-full shadow-sm" />
                      )}

                      {/* Small Product Thumbnail */}
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-200/80 shadow-inner">
                        <img
                          src={product.image}
                          alt={product.name}
                          draggable={false}
                          className="w-full h-full object-cover select-none"
                          loading="lazy"
                        />
                      </div>

                      {/* Product Name & Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-neutral-400">
                            #{String(idx + 1).padStart(2, "0")}
                          </span>
                          <h4
                            className={`text-sm font-bold truncate tracking-tight ${
                              isSelected ? "text-[#0f5132]" : "text-neutral-800 group-hover:text-[#0f5132]"
                            }`}
                          >
                            {product.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-neutral-500 truncate mt-0.5 font-sans">
                          {product.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 text-neutral-300 group-hover:text-[#0f5132] transition-colors">
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? "text-[#0f5132] translate-x-1" : ""
                          }`}
                        />
                      </div>
                    </motion.button>
                  );
                })
              )}
            </div>

            {/* Bottom summary footer */}
            <div className="p-3 border-t border-neutral-100 bg-neutral-50/80 text-center text-[11px] text-neutral-500 font-medium">
              HarGi Global Trade Desk • ISO & APEDA Compliant
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SPOTLIGHT SHOWCASE ================= */}
          <div id="product-spotlight-card" className="order-1 lg:order-2 lg:col-span-7 scroll-mt-24">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative bg-white rounded-[32px] border border-neutral-200/90 shadow-xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[500px] sm:min-h-[620px] lg:h-[680px] touch-pan-y"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProduct.id}
                  initial={{ opacity: 0, x: slideDirection * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -slideDirection * 20 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="flex flex-col h-full justify-between space-y-6"
                >
                  {/* Top Bar: Category badge & Counter controls */}
                  <div className="flex items-center justify-between gap-3 flex-wrap border-b border-neutral-100 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#0f5132]/10 text-[#0f5132] text-xs font-bold px-3 py-1 rounded-full border border-[#0f5132]/20 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#15803d]" />
                        {selectedProduct.category}
                      </span>
                      <span className="hidden sm:inline-block text-[11px] font-semibold text-neutral-400">
                        Export Grade
                      </span>
                    </div>

                    {/* Prev / Next Flippers & Mobile Swipe Hint */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-neutral-400 font-medium sm:hidden bg-neutral-100/80 px-2 py-0.5 rounded-md border border-neutral-200/60">
                        Swipe ⇄
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {currentIndex + 1} / {filteredProducts.length}
                      </span>
                      <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
                        <button
                          onClick={handlePrev}
                          title="Previous product"
                          className="p-1.5 rounded-lg hover:bg-white text-neutral-600 hover:text-[#0f5132] transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={handleNext}
                          title="Next product"
                          className="p-1.5 rounded-lg hover:bg-white text-neutral-600 hover:text-[#0f5132] transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Center Content: Product Image & Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Showcase Image Display - Completely Static & Stable with Touch Pan */}
                    <div className="sm:col-span-6 relative aspect-square sm:aspect-auto sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200/80 shadow-inner border border-neutral-200/80 touch-pan-y">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        draggable={false}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium pointer-events-none">
                        <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                          100% Quality Inspected
                        </span>
                      </div>
                    </div>

                    {/* Product Specifications & Text */}
                    <div className="sm:col-span-6 space-y-4">
                      <div>
                        <div className="text-[11px] font-bold text-[#15803d] uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          Certified Indian Origin
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0f5132] font-sans tracking-tight leading-tight">
                          {selectedProduct.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-2 leading-relaxed">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Tag Checklist */}
                      <div className="space-y-2 border-t border-neutral-100 pt-3">
                        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                          Key Specifications
                        </span>
                        <div className="space-y-1.5">
                          {selectedProduct.tags.map((tag, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-neutral-700 font-sans"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] flex-shrink-0" />
                              <span className="font-medium text-xs text-neutral-600">
                                {tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Triggers */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getWhatsAppLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0f5132] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0f5132]/30 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Inquire on WhatsApp for {selectedProduct.name}
                    </a>

                    <a
                      href="tel:+917779955393"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs sm:text-sm border border-neutral-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0f5132]" />
                      Trade Desk Call
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
