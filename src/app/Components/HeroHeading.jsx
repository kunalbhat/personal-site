"use client";
import React, { useMemo, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function HeroHeading({
  /** content */
  text,
  as: Tag = "h1",
  balance = true,

  lineHeight = "1",

  /** weight + classes */
  weightClass = "font-normal",
  className = "leading-loose",

  /** animations */
  stagger = 0.08,
  delay = 0.05,
  duration = 0.9,
  y = 32,

  /** scroll shrink */
  shrinkOnScroll = false,
  scrollStart = 0,
  scrollEnd = 320,
  scaleFrom = 1,
  scaleTo = 0.82,
  fadeTo = 0.85,
  disableBelow = 0,

  /** size preset */
  sizeVariant = "lg", // 'lg' | 'sm'

  /** NEW: theme-aware color variant */
  colorVariant = "fg", // 'fg' | 'accent' | 'muted' | 'inverse' | 'accent2' | 'accent3'
}) {
  const words = String(text ?? "")
    .trim()
    .split(/\s+/);
  const ease = [0.22, 1, 0.36, 1];

  const container = useMemo(
    () => ({
      hidden: {},
      show: { transition: { staggerChildren: stagger, delayChildren: delay } },
    }),
    [stagger, delay]
  );

  const word = useMemo(
    () => ({
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    }),
    [y, duration]
  );

  // Framer Motion v11 dynamic component helper
  const MotionTag = motion.create ? motion.create(Tag) : motion(Tag);

  // ===== Scroll-driven transforms =====
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Optional: disable on small screens
  const [wideEnough, setWideEnough] = useState(true);
  useEffect(() => {
    if (!disableBelow) return;
    const check = () => setWideEnough(window.innerWidth >= disableBelow);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [disableBelow]);

  const effectEnabled = shrinkOnScroll && !prefersReduced && wideEnough;

  const scale = useTransform(
    scrollY,
    [scrollStart, scrollEnd],
    [scaleFrom, scaleTo]
  );
  const opacity = useTransform(
    scrollY,
    [scrollStart, scrollStart + (scrollEnd - scrollStart) * 0.6],
    [1, fadeTo]
  );

  const motionStyle = effectEnabled
    ? { scale, opacity, lineHeight }
    : { lineHeight };

  // ===== theme-aware colors via CSS variables
  const textClassFor = (variant) => {
    switch (variant) {
      case "accent":
        return "text-[var(--accent)]";
      case "muted":
        return "text-[var(--muted)]";
      case "inverse":
        return "text-[var(--bg)]"; // useful on accent blocks
      case "accent2":
        return "text-[var(--accent-2)]";
      case "accent3":
        return "text-[var(--accent-3)]";
      case "fg":
      default:
        return "text-[var(--fg)]";
    }
  };

  // selection colors with safe fallbacks
  const selectionBg = "selection:bg-[var(--selection-bg,rgba(0,0,0,0.08))]";
  const selectionFg = "selection:text-[var(--selection-fg,currentColor)]";

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      className={[
        textClassFor(colorVariant),
        weightClass,
        balance ? "[text-wrap:balance]" : "",
        "tracking-normal leading-tight",
        selectionBg,
        selectionFg,
        "text-6xl sm:text-7xl md:text-7xl lg:text-8xl max-w-6xl",
        className,
      ].join(" ")}
      style={motionStyle}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline">
          <motion.span
            className="inline-block will-change-transform"
            variants={word}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && <span aria-hidden="true"> </span>}
        </span>
      ))}
    </MotionTag>
  );
}
