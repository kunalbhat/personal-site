"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  LayoutGroup,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useGridOverlay } from "./GridOverlayProvider";

import HeaderGreeting from "../Components/HeaderGreeting";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggle, visible } = useGridOverlay();

  useEffect(() => setMounted(true), []);

  // existing fade-on-scroll (keep yours if you like)
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const h = () => {
      const y = window.scrollY,
        start = 0,
        end = 50;
      setOpacity(
        y <= start ? 1 : y >= end ? 0 : 1 - (y - start) / (end - start)
      );
    };
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className="app-header fixed left-0 right-0 top-0 z-50 w-full p-4 md:p-12"
      style={{ opacity }}
    >
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        {/* Left: brand */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-colors hover:opacity-90"
        >
          {/* <Image
            src="/images/kunal-bhat-avatar.jpg"
            alt="Kunal Bhat"
            width={40}
            height={40}
            className="rounded-full h-10 w-10 border border-[var(--border)] bg-[var(--surface)] object-cover"
          /> */}
          <HeaderGreeting
            name="Kunal"
            sunSrc="/images/icon-sun.svg"
            moonSrc="/images/icon-moon.svg"
            className="pr-1"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          {mounted ? (
            <ThemeToggle />
          ) : (
            <div className="w-12 h-12 animate-pulse rounded-full" />
          )}

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
          >
            <div className="space-y-1.5">
              <div className="h-0.5 w-5 bg-current" />
              <div className="h-0.5 w-5 bg-current" />
              <div className="h-0.5 w-5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* dim background */}
            <motion.div
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black md:hidden"
            />
            {/* slide panel */}
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed left-0 right-0 top-16 mx-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 backdrop-blur p-2"
            >
              {navItems.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold
                      ${
                        active
                          ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                          : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                  >
                    {label}
                    {active && (
                      <span className="text-xs opacity-70">Current</span>
                    )}
                  </Link>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
