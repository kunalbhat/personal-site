"use client";
import { useEffect, useState } from "react";

// Components
import DarkModeToggle from "./DarkModeToggle";

export default function AppHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="app-header flex justify-between px-8 py-6 items-center">
      <span className="logo font-bold text-xl">
        <a href="/">Kunal Bhat</a>
      </span>

      <ul className="app-menu bg-neutral-100 rounded-full justify-center items-center px-6 py-4 flex gap-12">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      {/* Conditionally render DarkModeToggle or a placeholder */}
      {mounted ? (
        <DarkModeToggle />
      ) : (
        <div className="w-16 h-16 animate-pulse rounded-full bg-neutral-100" />
      )}
    </header>
  );
}
