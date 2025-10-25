"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

function getGreeting(date = new Date()) {
  const h = date.getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function isDay(date = new Date()) {
  const h = date.getHours();
  return h >= 6 && h < 18;
}

export default function HeaderGreeting({
  name,
  className = "",
  sunSrc = "/images/icon-sun.svg",
  moonSrc = "/images/icon-moon.svg",
}) {
  const prefersReduced = useReducedMotion();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const greeting = useMemo(() => getGreeting(now), [now]);
  const day = useMemo(() => isDay(now), [now]);
  const iconSrc = day ? sunSrc : moonSrc;
  const iconAlt = day ? "Sun" : "Moon";

  // 🌄 come-from-below or above animation
  const iconVariants = {
    initial: {
      y: day ? 30 : -30, // below if day (sun rises), above if night (moon drops)
      opacity: 0,
      scale: 0.9,
    },
    enter: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: {
      y: day ? -30 : 30, // reverse direction when switching
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 6 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.1 },
    },
  };

  return (
    <div
      className={[
        "flex items-center gap-2 sm:gap-3 text-[var(--fg)]",
        className,
      ].join(" ")}
      aria-live="polite"
    >
      <div className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={day ? "sun" : "moon"}
            variants={iconVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={24}
              height={24}
              className="h-full w-full"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.span
        variants={textVariants}
        initial="initial"
        animate="enter"
        className="text-sm sm:text-base leading-none text-[var(--muted,inherit)]"
      >
        {greeting}
        {/* {name ? `, ${name.split(" ")[0]}` : ""} */}
      </motion.span>
    </div>
  );
}
