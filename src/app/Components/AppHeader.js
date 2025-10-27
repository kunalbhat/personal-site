"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import { useGridOverlay } from "./GridOverlayProvider";
import HeaderGreeting from "./HeaderGreeting";

export default function AppHeader() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const { toggle, visible } = useGridOverlay();

  useEffect(() => setMounted(true), []);

  // fade-on-scroll effect
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const start = 0;
      const end = 50;
      setOpacity(
        y <= start ? 1 : y >= end ? 0 : 1 - (y - start) / (end - start)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="app-header fixed left-0 right-0 top-0 z-50 w-full p-8 md:p-12"
      style={{ opacity }}
    >
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        {/* Left: brand / greeting */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <HeaderGreeting
            name="Kunal"
            sunSrc="/images/icon-face-id.svg"
            moonSrc="/images/icon-face-id.svg"
            className="pr-1"
          />
        </Link>

        {/* Right: theme toggle */}
        {mounted ? (
          <ThemeToggle />
        ) : (
          <div className="w-10 h-10 animate-pulse rounded-full" />
        )}
      </div>
    </header>
  );
}
