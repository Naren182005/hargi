// Built using Hyperiux Vault: https://vault.hyperiux.com

"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const DEFAULT_CARDS: StackSpreadCard[] = [
  // 1: Top-left spices
  {
    item: { src: "/products/green-cardamom.jpg", alt: "Premium Green Cardamom", label: "Green Cardamom" },
    stackOffset: { x: -8, y: -10 },
    stackRotate: -18,
    target: { x: -22, y: -32, rotate: -6, scale: 0.88, w: 18, h: 24 },
    targetSm: { x: -22, y: -40 },
    z: 2,
  },
  // 2: Top-right coffee
  {
    item: { src: "/products/specialty-coffee.png", alt: "Specialty Indian Coffee", label: "Specialty Coffee" },
    stackOffset: { x: 14, y: -10 },
    stackRotate: 20,
    target: { x: 30, y: -28, rotate: 6, scale: 0.9, w: 19, h: 28 },
    targetSm: { x: 22, y: -40 },
    z: 3,
  },
  // 3: Mid-left black pepper
  {
    item: { src: "/products/black-pepper.jpg", alt: "Malabar Black Pepper", label: "Black Pepper" },
    stackOffset: { x: -16, y: 0 },
    stackRotate: -4,
    target: { x: -35, y: -2, rotate: -4, scale: 0.88, w: 17, h: 28 },
    targetSm: { x: -22, y: -19 },
    z: 4,
  },
  // 4: Top-centre turmeric
  {
    item: { src: "/products/turmeric.png", alt: "Pure Indian Turmeric", label: "Pure Turmeric" },
    stackOffset: { x: 1, y: -10 },
    stackRotate: -2,
    target: { x: 6, y: -32, rotate: 2, scale: 0.85, w: 22, h: 26 },
    targetSm: { x: 22, y: -19 },
    z: 5,
  },
  // 5: Mid-right coconuts
  {
    item: { src: "/products/coconut.jpg", alt: "Fresh Whole Coconuts", label: "Fresh Coconuts" },
    stackOffset: { x: 18, y: 1 },
    stackRotate: 6,
    target: { x: 36, y: 4, rotate: 5, scale: 0.88, w: 18, h: 28 },
    targetSm: { x: -22, y: 20 },
    z: 6,
  },
  // 6: Bottom-left coco peat
  {
    item: { src: "/products/coco-peat-blocks.jpg", alt: "5kg Coco Peat Blocks", label: "Coco Peat Blocks" },
    stackOffset: { x: -6, y: 10 },
    stackRotate: 6,
    target: { x: -24, y: 32, rotate: -3, scale: 0.9, w: 20, h: 25 },
    targetSm: { x: 22, y: 20 },
    z: 7,
  },
  // 7: Bottom-centre cashews
  {
    item: { src: "/products/cashew-nuts.jpg", alt: "Export Grade Cashews", label: "Premium Cashews" },
    stackOffset: { x: 8, y: 7 },
    stackRotate: 3,
    target: { x: 2, y: 34, rotate: 2, scale: 0.9, w: 20, h: 25 },
    targetSm: { x: -22, y: 40 },
    z: 8,
  },
  // 8: Bottom-right cinnamon & cloves
  {
    item: { src: "/products/cinnamon.png", alt: "Ceylon Cinnamon", label: "Ceylon Cinnamon" },
    stackOffset: { x: 20, y: 12 },
    stackRotate: -7,
    target: { x: 28, y: 32, rotate: -5, scale: 0.88, w: 17, h: 22 },
    targetSm: { x: 22, y: 40 },
    z: 9,
  },
];

// ---------------------------------------------------------------------------
// Mechanism
// ---------------------------------------------------------------------------

// Scroll progress where the cluster starts scattering and where it finishes.
const SCATTER_START = 0.12;
const SCATTER_END = 0.9;

const PARALLAX_X = 2.6;
const PARALLAX_Y = 2.2;
const PARALLAX_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };
const parallaxDepth = (i: number, total: number) =>
  total <= 1 ? 1 : 0.55 + (i / (total - 1)) * 0.75;

const DEFAULT_SUB = "Hand-picked, organically nurtured, and globally exported with unparalleled purity and freshness.";

const RESPONSIVE = {
  desktop: {
    scale: null as number | null,
    small: false,
    colX: null as number | null,
    card: null as { w: number; h: number } | null,
  },
  small: {
    scale: 0.72,
    small: true,
    colX: 22,
    card: { w: 40, h: 20 },
  },
};

function useResponsive() {
  const [r, setR] = useState(RESPONSIVE.desktop);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const read = () => setR(mq.matches ? RESPONSIVE.small : RESPONSIVE.desktop);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  return r;
}

function usePointerParallax(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, PARALLAX_SPRING);
  const y = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) return;

    if (!active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    const onMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    const onLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active, enabled, rawX, rawY]);

  return { x, y };
}

export interface StackSpreadItem {
  src: string;
  alt?: string;
  label?: string;
}

export interface StackSpreadTarget {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  w: number;
  h: number;
}

export interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  /** final x/y (vw/vh) for tablet + mobile; falls back to `target` */
  targetSm?: { x: number; y: number };
  /** angle while clustered */
  stackRotate?: number;
  /** offset while clustered (vw/vh) */
  stackOffset?: { x: number; y: number };
  /** paint order, higher on top */
  z?: number;
}

function Card({
  card,
  progress,
  reduce,
  clusterRotation,
  scaleMul,
  isSmall,
  colX,
  fixedCard,
  stackScale,
  cardRadius,
  pointer,
  depth,
}: {
  card: StackSpreadCard;
  progress: MotionValue<number>;
  reduce: boolean | null;
  clusterRotation: boolean;
  scaleMul: number | null;
  isSmall: boolean;
  colX: number | null;
  fixedCard: { w: number; h: number } | null;
  stackScale: number;
  cardRadius: number;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  depth: number;
}) {
  const { item, target } = card;

  const flat = reduce === true;
  const stackRotate = flat ? 0 : clusterRotation ? card.stackRotate ?? 0 : 0;
  const stackOffset = card.stackOffset ?? { x: 0, y: 0 };
  const restScale = scaleMul ?? target.scale ?? 1;

  const sm = isSmall && card.targetSm ? card.targetSm : null;
  const endX = sm
    ? colX != null
      ? Math.sign(sm.x) * colX
      : sm.x
    : target.x;
  const endY = sm ? sm.y : target.y;
  const endRotate = flat || isSmall ? 0 : target.rotate;

  const translate = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, px, py]: number[]) => {
      const tx = stackOffset.x + (endX - stackOffset.x) * p;
      const ty = stackOffset.y + (endY - stackOffset.y) * p;
      const drift = depth * p;
      const dx = tx - px * PARALLAX_X * drift;
      const dy = ty - py * PARALLAX_Y * drift;
      return `calc(-50% + ${dx}vw) calc(-50% + ${dy}vh)`;
    },
  );
  const rotate = useTransform(progress, [0, 1], [stackRotate, endRotate]);
  const scale = useTransform(progress, [0, 1], [stackScale, restScale]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 will-change-transform shadow-2xl transition-shadow"
      style={{
        width: `${fixedCard ? fixedCard.w : target.w}vw`,
        height: `${fixedCard ? fixedCard.h : target.h}vh`,
        zIndex: card.z ?? 1,
        translate,
        rotate,
        scale,
      }}
    >
      <CardFace item={item} cardRadius={cardRadius} />
    </motion.div>
  );
}

function CardFace({
  item,
  cardRadius,
}: {
  item: StackSpreadItem;
  cardRadius: number;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden max-md:rounded-[4vw] group border border-white/20 bg-neutral-900"
      style={{ borderRadius: `${cardRadius}px` }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {item.label && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2 sm:p-3 text-white text-[11px] sm:text-xs font-medium tracking-wide">
          {item.label}
        </div>
      )}
    </div>
  );
}

interface StackSpreadStageProps {
  cards?: StackSpreadCard[];
  title?: ReactNode;
  subtitle?: ReactNode;
  scrollLength?: number;
  bgColor?: string;
  clusterRotation?: boolean;
  stackScale?: number;
  cardRadius?: number;
  textColor?: string;
  textFadeStart?: number;
  showScrollHint?: boolean;
}

export function StackSpreadStage({
  cards = DEFAULT_CARDS,
  title,
  subtitle,
  scrollLength = 280,
  bgColor = "#f4f8f4",
  clusterRotation = true,
  stackScale = 0.82,
  cardRadius = 16,
  textColor = "#0f5132",
  textFadeStart = 0.25,
  showScrollHint = true,
}: StackSpreadStageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scale: scaleMul, small: isSmall, colX, card: fixedCard } =
    useResponsive();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(
    scrollYProgress,
    [0, SCATTER_START, SCATTER_END, 1],
    [0, 0, 1, 1],
  );

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => {
    setSpread((was) => (was ? p > 0.985 : p >= 0.999));
  });
  const parallaxEnabled = reduce !== true && !isSmall;
  const pointer = usePointerParallax(spread, parallaxEnabled);

  const noScale = reduce === true;
  const copyOpacity = useTransform(progress, [textFadeStart, textFadeStart + 0.35], [0, 1]);
  const copyScale = useTransform(progress, [textFadeStart, 0.9], [0.88, 1]);

  const hintOpacity = useTransform(progress, [0, SCATTER_START], [1, 0]);

  return (
    <section
      ref={wrapRef}
      className="relative w-full"
      style={{ height: `${scrollLength}vh`, backgroundColor: bgColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* centre text */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-6 text-center max-md:px-8"
          style={{
            opacity: copyOpacity,
            scale: noScale ? 1 : copyScale,
          }}
        >
          {title ? (
            <div className="w-full text-center">{title}</div>
          ) : (
            <h2
              className="w-full whitespace-pre-line text-[4.2vw] font-extrabold leading-tight tracking-tight max-md:text-[8vw] font-sans drop-shadow-sm"
              style={{ color: textColor }}
            >
              Nature&apos;s Finest:
              <br />
              <span className="text-[#2d6a4f] font-light">
                Premium Agro Exports
              </span>
            </h2>
          )}
          {subtitle ? (
            <div className="w-full text-center">{subtitle}</div>
          ) : (
            <p
              className="mt-[1.2vw] w-full max-w-[50ch] text-[1.1vw] leading-relaxed tracking-normal max-md:mt-3 max-md:text-[3.5vw] text-[#495057]"
            >
              {DEFAULT_SUB}
            </p>
          )}
        </motion.div>

        {/* scattering cards */}
        <div className="absolute inset-0 z-10">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              progress={progress}
              reduce={reduce}
              clusterRotation={clusterRotation}
              scaleMul={scaleMul}
              isSmall={isSmall}
              colX={colX}
              fixedCard={fixedCard}
              stackScale={stackScale}
              cardRadius={cardRadius}
              pointer={pointer}
              depth={parallaxEnabled ? parallaxDepth(i, cards.length) : 0}
            />
          ))}
        </div>

        {/* scroll hint */}
        {showScrollHint && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-20 flex flex-col items-center gap-[0.6vh] text-[0.85vw] font-semibold uppercase tracking-[0.25em] max-md:bottom-6 max-md:gap-1 max-md:text-[2.8vw]"
            style={{ color: textColor, opacity: hintOpacity }}
          >
            <span>Scroll to Explore</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce max-md:h-[4vw] max-md:w-[4vw]"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export interface StackSpreadProps {
  cards?: StackSpreadCard[];
  title?: ReactNode;
  subtitle?: ReactNode;
  scrollLength?: number;
  bgColor?: string;
  clusterRotation?: boolean;
  stackScale?: number;
  cardRadius?: number;
  textColor?: string;
  textFadeStart?: number;
  showScrollHint?: boolean;
}

export default function StackSpread({
  cards = DEFAULT_CARDS,
  title,
  subtitle,
  scrollLength = 280,
  bgColor = "#f4f8f4",
  clusterRotation = true,
  stackScale = 0.82,
  cardRadius = 16,
  textColor = "#0f5132",
  textFadeStart = 0.25,
  showScrollHint = true,
}: StackSpreadProps) {
  return (
    <StackSpreadStage
      cards={cards}
      title={title}
      subtitle={subtitle}
      scrollLength={scrollLength}
      bgColor={bgColor}
      clusterRotation={clusterRotation}
      stackScale={stackScale}
      cardRadius={cardRadius}
      textColor={textColor}
      textFadeStart={textFadeStart}
      showScrollHint={showScrollHint}
    />
  );
}
