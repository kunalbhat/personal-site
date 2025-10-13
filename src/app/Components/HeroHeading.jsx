"use client";
import React, { useMemo, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function HeroHeading({
  /** original props */
  text,
  as: Tag = "h1",
  balance = true,
  minSize = "4.2rem",
  fluidSize = "8vw",
  maxSize = "8rem",
  weightClass = "font-semibold",
  lineHeight = "0.95",
  stagger = 0.08,
  delay = 0.05,
  duration = 0.9,
  y = 16,
  className = "",
  colorClass = "text-neutral-900 dark:text-yellow-50",

  /** new: shrink-on-scroll controls */
  shrinkOnScroll = true, // toggle effect
  scrollStart = 0, // px from top to start shrinking
  scrollEnd = 320, // px where it reaches min scale
  scaleFrom = 1, // starting scale
  scaleTo = 0.82, // ending scale
  fadeTo = 0.85, // final opacity at scrollEnd (1 = no fade)
  disableBelow = 0, // e.g. 768 to disable on small screens
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

  const baseStyle = {
    lineHeight,
    fontSize: `clamp(${minSize}, ${fluidSize}, ${maxSize})`,
  };
  const motionStyle = effectEnabled
    ? { scale, opacity, ...baseStyle }
    : baseStyle;

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      className={[
        colorClass,
        weightClass,
        balance ? "[text-wrap:balance]" : "",
        "leading-none tracking-normal",
        "selection:bg-neutral-900/10 selection:text-inherit dark:selection:bg-white/15",
        className,
      ].join(" ")}
      style={motionStyle}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline">
          <motion.span
            variants={word}
            className="inline-block will-change-transform"
          >
            {w}
          </motion.span>
          {i < words.length - 1 && <span aria-hidden="true"> </span>}
        </span>
      ))}
    </MotionTag>
  );
}
