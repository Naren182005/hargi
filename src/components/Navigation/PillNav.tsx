"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

export interface PillNavItem {
  label: string;
  id?: string;
  href?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  activeId?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onItemClick?: (item: PillNavItem) => void;
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  activeId,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#0f5132",
  pillColor = "transparent",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#212529",
  onItemClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? "#212529";
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        if (w === 0 || h === 0) return;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (typeof document !== "undefined" && (document as any).fonts?.ready) {
      (document as any).fonts.ready.then(layout).catch(() => {});
    }

    if (initialLoadAnimation) {
      const navItems = navItemsRef.current;
      if (navItems) {
        gsap.fromTo(
          navItems,
          { opacity: 0, y: -4 },
          { opacity: 1, y: 0, duration: 0.5, ease }
        );
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
      tlRefs.current.forEach((tl) => tl?.kill());
      activeTweenRefs.current.forEach((tw) => tw?.kill());
    };
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleClick = (item: PillNavItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  const cssVars: React.CSSProperties = {
    ["--base" as any]: baseColor,
    ["--pill-bg" as any]: pillColor,
    ["--hover-text" as any]: hoveredPillTextColor,
    ["--pill-text" as any]: resolvedPillTextColor,
  };

  return (
    <div className={`pill-nav-wrapper ${className}`} style={cssVars}>
      <nav className="pill-nav" aria-label="Primary">
        <div className="pill-nav-items" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const isActive =
                (activeHref && item.href === activeHref) ||
                (activeId && item.id === activeId);

              return (
                <li key={item.id || item.href || `item-${i}`} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    className={`pill${isActive ? " is-active" : ""}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    onClick={() => handleClick(item)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PillNav;
