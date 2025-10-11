"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
              className="rounded-full inline-block mr-2 h-16 w-16 p-2 bg-neutral-100"
            />
            <span className="hidden md:inline-block">Kunal Bhat</span>
          </Link>
        </span>
      </div>
      <div className="w-full flex justify-center">
        <ul className="app-menu rounded-full justify-center items-center flex space-x-4 w-fit">
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
