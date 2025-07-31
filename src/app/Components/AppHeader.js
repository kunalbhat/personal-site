"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

export default function AppHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

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
      className="app-header fixed grid grid-cols-3 w-full justify-between px-8 py-6 items-center"
      style={{ opacity }}
    >
      <div className="w-full flex justify-left">
        <span className="logo font-bold text-xl">
          <Link href="/">
            Kunal Bhat &ndash; <span>Product Designer</span>
          </Link>
        </span>
      </div>
      <div className="w-full flex justify-center">
        <ul className="app-menu bg-neutral-100 dark:bg-neutral-800 rounded-full justify-center items-center flex space-x-4 px-4 py-5 w-fit">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-5 py-3 rounded-full font-bold ${
                    isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-inner-2xl"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex justify-end">
        {/* Conditionally render DarkModeToggle or a placeholder */}
        {mounted ? (
          <DarkModeToggle />
        ) : (
          <div className="w-16 h-16 animate-pulse rounded-full bg-neutral-100" />
        )}
      </div>
    </header>
  );
}
