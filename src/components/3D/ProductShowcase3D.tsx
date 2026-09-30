"use client";

import React from "react";
import { HARGI_ALL_PRODUCTS } from "@/data/hargiProductsData";

export const ProductShowcase3D: React.FC = () => {
  return (
    <section
      id="products-catalog"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full pt-20 sm:pt-28 pb-20 sm:pb-32 px-6 sm:px-12 lg:px-16 text-[#212529]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Product Grid with Wide & Noticeable Spacing Between Each Image Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-12 sm:gap-y-16">
          {HARGI_ALL_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-200/70 flex flex-col transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Product Image + Category Badge */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#0f5132] px-3.5 py-1 rounded-full border border-neutral-200 shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0f5132] font-sans tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans mt-2 min-h-[38px]">
                    {product.description}
                  </p>
                </div>

                {/* Feature Bullet Checklist */}
                <div className="border-t border-neutral-100 pt-4 space-y-2">
                  {product.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#495057] font-sans">
                      <span className="text-[#15803d] text-xs font-black leading-tight flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-tight text-xs text-[#4b5563] font-medium">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
