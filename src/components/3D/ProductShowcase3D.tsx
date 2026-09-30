"use client";

import React from "react";
import { HARGI_ALL_PRODUCTS } from "@/data/hargiProductsData";

export const ProductShowcase3D: React.FC = () => {
  return (
    <section
      id="products-catalog"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-[#212529]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Product Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {HARGI_ALL_PRODUCTS.map((product) => (
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
      </div>
    </section>
  );
};
