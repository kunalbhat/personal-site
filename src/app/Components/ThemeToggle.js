"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle({
  className = "",
  sunSrc = "/images/icon-sun.svg",
  moonSrc = "/images/icon-moon.svg",
}) {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light"); // default

  // --- on mount, sync with localStorage or OS ---
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    setMounted(true);
  }, []);

  // --- toggle handler ---
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  // --- motion variants for rising / falling ---
  const iconVariants = {
    initial: (isLight) => ({
      y: isLight ? 30 : -30,
      opacity: 0,
      scale: 0.9,
    }),
    enter: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReduced ? 0 : 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (isLight) => ({
      y: isLight ? -30 : 30,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: prefersReduced ? 0 : 1.0,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  if (!mounted) return null; // avoid SSR mismatch

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Activate dark mode" : "Activate light mode"}
      className={[
        "relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-full cursor-pointer",
        "flex items-center justify-center select-none",
        "transition-colors duration-300 hover:bg-[var(--hover-bg,rgba(0,0,0,0.05))]",
        className,
      ].join(" ")}
    >
      <AnimatePresence mode="wait" custom={isLight}>
        <motion.div
          key={isLight ? "sun" : "moon"}
          custom={isLight}
          variants={iconVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={isLight ? sunSrc : moonSrc}
            alt={isLight ? "Sun icon" : "Moon icon"}
            width={24}
            height={24}
            className="h-8 w-8 sm:h-6 sm:w-6"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
