"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HARGI_ALL_PRODUCTS, HarGiCatalogItem } from "@/data/hargiProductsData";

interface ProductCard3DProps {
  product: HarGiCatalogItem;
  index: number;
}

const ProductCard3D: React.FC<ProductCard3DProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Inertia spring physics for buttery smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const colIndex = index % 3; // 0 = Left (Cumin), 1 = Center (Coco Peat), 2 = Right (Black Pepper)

  // 1. Left Column: Drifts towards the LEFT (-X) with subtle 3D outward rotation
  const leftX = useTransform(smoothProgress, [0, 0.45, 1], [30, 0, -80]);
  const leftRotateY = useTransform(smoothProgress, [0, 0.45, 1], [4, 0, -8]);
  const leftRotateZ = useTransform(smoothProgress, [0, 0.45, 1], [1.5, 0, -3]);

  // 2. Center Column: Floats UP (-Y) with elevated 3D scale
  const centerY = useTransform(smoothProgress, [0, 0.45, 1], [50, 0, -90]);
  const centerScale = useTransform(smoothProgress, [0, 0.45, 1], [0.96, 1, 1.03]);

  // 3. Right Column: Drifts towards the RIGHT (+X) with subtle 3D outward rotation
  const rightX = useTransform(smoothProgress, [0, 0.45, 1], [-30, 0, 80]);
  const rightRotateY = useTransform(smoothProgress, [0, 0.45, 1], [-4, 0, 8]);
  const rightRotateZ = useTransform(smoothProgress, [0, 0.45, 1], [-1.5, 0, 3]);

  // Apply column-specific 3D transform properties
  const motionStyle =
    colIndex === 0
      ? { x: leftX, rotateY: leftRotateY, rotateZ: leftRotateZ }
      : colIndex === 1
      ? { y: centerY, scale: centerScale }
      : { x: rightX, rotateY: rightRotateY, rotateZ: rightRotateZ };

  return (
    <motion.div
      ref={cardRef}
      style={motionStyle}
      className="will-change-transform [transform-style:preserve-3d]"
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
      className="relative w-full pt-20 sm:pt-28 pb-24 sm:pb-36 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-[#212529] overflow-hidden [perspective:1400px]"
    >
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Product Grid with 3D Scroll Physics & Huge Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 sm:gap-x-20 lg:gap-x-28 xl:gap-x-36 gap-y-16 sm:gap-y-24 [transform-style:preserve-3d]">
          {HARGI_ALL_PRODUCTS.map((product, index) => (
            <ProductCard3D key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
