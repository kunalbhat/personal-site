"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import HeaderGreeting from "../Components/HeaderGreeting";

export default function AppHeader() {
  const ref = useRef(null);

  // 1) Publish header height -> --header-h
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const set = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );

    set(); // seed on mount

    const ro = new ResizeObserver(set);
    ro.observe(el);

    window.addEventListener("resize", set);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", set);
    };
  }, []);

  // 2) Fade-on-scroll (restored)
  const prefersReduced = useReducedMotion();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (prefersReduced) {
      setOpacity(1);
      return;
    }

    let ticking = false;
    const START = 0; // px where fade begins
    const END = 50; // px where it's fully faded

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const t = Math.min(
          Math.max((y - START) / Math.max(END - START, 1), 0),
          1
        );
        setOpacity(1 - t);
        ticking = false;
      });
    };

    onScroll(); // initialize once
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  return (
    <header
      ref={ref}
      className="app-header fixed left-0 right-0 top-0 z-50 w-full p-4 md:p-12"
      style={{ opacity }}
    >
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <HeaderGreeting />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
