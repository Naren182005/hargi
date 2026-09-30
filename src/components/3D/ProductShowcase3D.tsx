"use client";

import React, { useState, useMemo } from "react";
import { HARGI_ALL_PRODUCTS } from "@/data/hargiProductsData";
import { Search, X } from "lucide-react";

export const ProductShowcase3D: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All Products",
    "Coconut Products",
    "Indian Coffee",
    "Indian Spices & Salt",
    "Jaggery Varieties",
    "Nuts & Dried Fruits",
  ];

  const filteredProducts = useMemo(() => {
    return HARGI_ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="products"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#212529]"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ============================================================ */}
        {/* Header                                                       */}
        {/* ============================================================ */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f5132] font-sans">
            Nature&apos;s Finest: Premium Agro Exports
          </h2>
          <p className="text-xs sm:text-sm text-[#495057] font-sans leading-relaxed">
            Unearth the vibrant flavors and unparalleled purity of nature&apos;s finest treasures. From the rich
            heritage of aromatic Indian spices to world-class coconut derivatives, every hand-picked product is a
            testament to our commitment to uncompromising quality and global excellence.
          </p>
        </div>

        {/* ============================================================ */}
        {/* Search Bar                                                  */}
        {/* ============================================================ */}
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, e.g. 'Coffee', 'Turmeric'..."
              className="w-full bg-white border border-neutral-200 text-[#212529] placeholder-[#9ca3af] rounded-full px-6 py-2.5 text-xs sm:text-sm shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-[#15803d]/20 focus:border-[#15803d] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1 cursor-pointer bg-transparent border-none"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* Category Filter Tabs                                        */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#15803d] text-white border-[#15803d] shadow-sm font-semibold"
                    : "bg-white text-[#495057] border-neutral-200 hover:border-[#15803d] hover:text-[#15803d]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* Product Grid (3 Columns on Desktop)                         */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 pt-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Product Image + Category Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-[#15803d] px-2.5 py-0.5 rounded-full border border-neutral-200/80 shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0f5132] font-sans">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#6c757d] leading-relaxed font-sans mt-1 min-h-[32px]">
                    {product.description}
                  </p>
                </div>

                {/* Feature Bullet Checklist */}
                <div className="border-t border-neutral-100 pt-3 space-y-1.5">
                  {product.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#495057] font-sans">
                      <span className="text-[#15803d] text-xs font-bold leading-tight flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-tight text-[11px] sm:text-xs text-[#4b5563]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 mt-8 max-w-md mx-auto p-6">
            <Search className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-[#212529]">No agro products matched your search</p>
            <p className="text-xs text-neutral-500 mt-1">Try searching for other terms like &quot;Coconut&quot;, &quot;Spices&quot;, or &quot;Coffee&quot;.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Products");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-1.5 rounded-full bg-[#15803d] text-white text-xs font-semibold cursor-pointer border-none"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

