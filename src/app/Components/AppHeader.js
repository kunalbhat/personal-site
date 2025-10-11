"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import { motion, LayoutGroup, useReducedMotion } from "framer-motion";
import { useGridOverlay } from "./GridOverlayProvider";

export default function AppHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const { toggle, visible } = useGridOverlay();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 50; // px to fully fade out

      const newOpacity =
        scrollY <= fadeStart
          ? 1
          : scrollY >= fadeEnd
          ? 0
          : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="app-header fixed grid grid-cols-3 w-full justify-between p-8 items-center"
      style={{ opacity }}
    >
      <div className="w-full flex justify-left">
        <span className="logo font-bold text-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kunal-bhat-avatar.jpg"
              alt="Kunal Bhat"
              width={48}
              height={48}
              className="rounded-full inline-block mr-2 h-12 w-12 bg-neutral-100"
            />
            <span className="hidden md:inline-block">Kunal Bhat</span>
          </Link>
        </span>
      </div>
      <div className="w-full flex justify-center">
        <LayoutGroup id="top-nav">
          <ul className="app-menu rounded-full justify-center items-center flex gap-4 w-fit">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="relative inline-flex isolate">
                  {/* Sliding pill background */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={
                        reduce
                          ? { duration: 0.12 }
                          : { type: "spring", stiffness: 520, damping: 40 }
                      }
                      className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white shadow-sm"
                    />
                  )}

                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative z-10 px-5 py-3 rounded-full font-bold transition-colors
                      ${
                        isActive
                          ? "text-white dark:text-black"
                          : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>
      </div>
      <div className="w-full flex items-center justify-end gap-2">
        {/* Grid button near Dark Mode */}
        <button
          onClick={toggle}
          className={`rounded-full px-3 py-2 text-sm font-medium transition
            ${
              visible
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:opacity-90"
            }`}
          aria-pressed={visible}
          title="Toggle grid (⌘/Ctrl+G)"
        >
          Grid
        </button>

        {mounted ? (
          <DarkModeToggle />
        ) : (
          <div className="w-12 h-12 animate-pulse rounded-full bg-neutral-100" />
        )}
      </div>
    </header>
  );
}
