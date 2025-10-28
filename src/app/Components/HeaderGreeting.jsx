"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function HeaderGreeting({
  name = "Kunal Bhat",
  className = "",
  faceSrc = "../images/icon-face-id.svg",
}) {
  const reduce = useReducedMotion();
  const [bump, setBump] = useState(0);

  // replay on mount + theme toggle
  useEffect(() => setBump((b) => b + 1), []);
  useEffect(() => {
    const reanimate = () => setBump((b) => b + 1);
    window.addEventListener("theme:toggle", reanimate);
    return () => window.removeEventListener("theme:toggle", reanimate);
  }, []);

  // Icon motion (slow + exaggerated)
  const POP_DURATION = 2.1;
  const EASE = [0.16, 1, 0.3, 1];

  const iconInitial = reduce
    ? { opacity: 0, scale: 0.8 }
    : { opacity: 0, scale: 0.3 };
  const iconAnimate = reduce
    ? { opacity: 1, scale: 1 }
    : { opacity: [0, 1, 1, 1, 1], scale: [0.3, 1.18, 0.94, 1.04, 1.0] };
  const iconTransition = reduce
    ? { duration: 0.35, ease: EASE }
    : {
        duration: POP_DURATION,
        times: [0, 0.6, 0.82, 0.94, 1],
        ease: EASE,
        delay: 0.05,
      };

  // Text timing: start after ~62% of icon timeline
  const TEXT_DELAY_RATIO = 0.62;
  const textDelay = reduce ? 0.12 : 0.05 + POP_DURATION * TEXT_DELAY_RATIO; // aligns with icon delay
  const textDuration = reduce ? 0.35 : Math.min(POP_DURATION * 0.45, 0.8); // smooth but not sluggish

  return (
    <div
      className={[
        "flex items-center gap-2 sm:gap-3 text-[var(--fg)]",
        className,
      ].join(" ")}
      aria-live="polite"
    >
      {/* Face icon */}
      <motion.span
        key={bump}
        initial={iconInitial}
        animate={iconAnimate}
        transition={iconTransition}
        className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center"
        aria-hidden="true"
        style={{ color: "var(--fg)" }}
      >
        <img src={faceSrc} alt="Face ID icon" className="h-full w-full" />
      </motion.span>

      {/* Name: follows the icon */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: textDuration, ease: EASE, delay: textDelay }}
        className="font-sans font-bold text-base sm:text-lg leading-none text-[var(--fg,inherit)]"
      >
        {name}
      </motion.span>
    </div>
  );
}
