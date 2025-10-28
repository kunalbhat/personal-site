"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Drop-in replacement for HeaderGreeting
 * - Face icon grows in with a gentle overshoot and settles
 * - Re-animates on page mount and on theme toggle (window 'theme:toggle')
 * - Text fades in softly
 *
 * NOTE: For best results, make your face SVG use fill="currentColor"
 * so it automatically matches --fg in light/dark. If not, your global
 * .dark img[src$=".svg"] { filter: invert(1) } rule will still work.
 */
export default function HeaderGreeting({
  name = "Kunal Bhat",
  className = "",
  faceSrc = "../images/icon-face-id.svg", // update path if needed
}) {
  const reduce = useReducedMotion();
  const [bump, setBump] = useState(0); // increments to retrigger animation

  // Animate on mount
  useEffect(() => setBump((b) => b + 1), []);

  // Animate again when theme toggles (ThemeToggle should dispatch this)
  useEffect(() => {
    const reanimate = () => setBump((b) => b + 1);
    window.addEventListener("theme:toggle", reanimate);
    return () => window.removeEventListener("theme:toggle", reanimate);
  }, []);

  // Gentle, iOS-like pop with small overshoot (spring settles it)
  const iconTransition = reduce
    ? { duration: 1, ease: [0.25, 1, 0.5, 1] }
    : { type: "spring", stiffness: 220, damping: 18, mass: 0.8 };

  return (
    <div
      className={[
        "flex items-center gap-2 sm:gap-3 text-[var(--fg)]",
        className,
      ].join(" ")}
      aria-live="polite"
    >
      {/* Face icon pop-in */}
      <motion.span
        key={bump}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={iconTransition}
        className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center"
        aria-hidden="true"
        style={{ color: "var(--fg)" }}
      >
        {/* If you prefer next/image, swap to it; <img> keeps it simple */}
        <img src={faceSrc} alt="" className="h-full w-full" />
      </motion.span>

      {/* Name text fade-in */}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
        className="font-sans font-bold text-base sm:text-lg leading-none text-[var(--muted,inherit)]"
      >
        {name}
      </motion.span>
    </div>
  );
}