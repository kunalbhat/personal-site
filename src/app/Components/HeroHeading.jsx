"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Animated, responsive hero heading with balanced wrapping and word-stagger.
 *
 * Props:
 *  - text        (string, required)
 *  - as          (string) tag name, e.g. "h1" | "h2" …  default: "h1"
 *  - balance     (bool)   enable CSS text-wrap: balance default: true
 *  - minSize     (string) clamp() min font-size           default: "2.25rem"
 *  - fluidSize   (string) clamp() fluid vw                default: "9vw"
 *  - maxSize     (string) clamp() max font-size           default: "7rem"
 *  - weightClass (string) Tailwind weight class           default: "font-semibold"
 *  - lineHeight  (string|number)                          default: "0.95"
 *  - stagger     (number) seconds between words           default: 0.06
 *  - delay       (number) initial delay                   default: 0.05
 *  - duration    (number) per-word duration               default: 0.55
 *  - y           (number) initial translateY px           default: 16
 *  - className   (string) extra classes
 */
export default function HeroHeading({
  text,
  as: Tag = "h1",
  balance = true,
  minSize = "2.25rem",
  fluidSize = "9vw",
  maxSize = "7rem",
  weightClass = "font-semibold",
  lineHeight = "0.95",
  stagger = 0.06,
  delay = 0.05,
  duration = 1.2,
  y = 16,
  className = "",
}) {
  const words = String(text ?? "")
    .trim()
    .split(/\s+/);
  const ease = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration, ease } },
  };

  // ✅ motion.create() replaces deprecated motion()
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      className={[
        weightClass,
        balance ? "[text-wrap:balance]" : "",
        "leading-none tracking-normal",
        className,
      ].join(" ")}
      style={{
        lineHeight,
        fontSize: `clamp(${minSize}, ${fluidSize}, ${maxSize})`,
      }}
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
