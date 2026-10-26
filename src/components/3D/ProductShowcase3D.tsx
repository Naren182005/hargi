"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { HARGI_ALL_PRODUCTS, HarGiCatalogItem } from "@/data/hargiProductsData";

interface ProductCard3DProps {
  product: HarGiCatalogItem;
  index: number;
}

const ProductCard3D: React.FC<ProductCard3DProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div className="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl border border-neutral-200/80 flex flex-col transition-all duration-300 transform hover:-translate-y-2 p-4 sm:p-5 h-full">
        {/* Product Image + Category Badge */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-inner">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#0f5132] px-3.5 py-1 rounded-full border border-neutral-200 shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#0f5132] font-sans tracking-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#495057] leading-relaxed font-sans mt-2 min-h-[40px]">
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
    </motion.div>
  );
};

export const ProductShowcase3D: React.FC = () => {
  return (
    <section
      id="products-catalog"
      style={{ backgroundColor: "#f4f8f4" }}
      className="relative w-full pt-20 sm:pt-28 pb-24 sm:pb-36 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 text-[#212529] overflow-hidden"
    >
      <div className="w-full max-w-[1500px] mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-10 xl:gap-12 gap-y-10 sm:gap-y-14">
          {HARGI_ALL_PRODUCTS.map((product, index) => (
            <ProductCard3D key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
