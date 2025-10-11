"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroHeading({
  text,
  as: Tag = "h1",
  balance = true,
  minSize = "4.2rem",
  fluidSize = "9vw",
  maxSize = "9rem",
  weightClass = "font-semibold",
  lineHeight = "0.95",
  stagger = 0.08,
  delay = 0.05,
  duration = 0.9,
  y = 16,
  className = "",
  // 👇 theme-aware default colors; override if you want
  colorClass = "text-neutral-900 dark:text-yellow-50",
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

  // FM v11 dynamic motion component
  const MotionTag = motion.create ? motion.create(Tag) : motion(Tag);

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      className={[
        colorClass, // 🎨 theme-aware color
        weightClass,
        balance ? "[text-wrap:balance]" : "",
        "leading-none tracking-normal",
        "selection:bg-neutral-900/10 selection:text-inherit",
        "dark:selection:bg-white/15",
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
