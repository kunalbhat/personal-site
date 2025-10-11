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
import DarkModeToggle from "./DarkModeToggle";

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
      className="app-header fixed left-0 right-0 top-0 z-50 w-full px-4 md:px-8 py-4 md:py-6"
      style={{ opacity }}
    >
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        {/* Left: brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/kunal-bhat-avatar.jpg"
            alt="Kunal Bhat"
            width={40}
            height={40}
            className="rounded-full bg-neutral-100 h-10 w-10"
          />
          <span className="hidden sm:inline font-semibold">Kunal Bhat</span>
        </Link>

        {/* Center: desktop nav */}
        <LayoutGroup id="top-nav">
          <ul className="hidden md:flex gap-4 rounded-full px-2 py-1">
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href} className="relative inline-flex isolate">
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={
                        reduce
                          ? { duration: 0.12 }
                          : { type: "spring", stiffness: 520, damping: 40 }
                      }
                      className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white"
                    />
                  )}
                  <Link
                    href={href}
                    className={`relative z-10 px-4 py-2 rounded-full font-semibold transition-colors
                      ${
                        active
                          ? "text-white dark:text-black"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        {/* Right: toggles + hamburger */}
        <div className="flex items-center gap-2">
          {mounted ? (
            <DarkModeToggle />
          ) : (
            <div className="w-10 h-10 animate-pulse rounded-full bg-neutral-100" />
          )}

          {/* Hamburger visible on mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
          >
            <span className="sr-only">Menu</span>
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
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
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
