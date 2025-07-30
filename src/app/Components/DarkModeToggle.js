"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false); // Prevent SSR mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`h-16 w-16 flex items-center justify-center bg-neutral-100 rounded-full text-sm transition-colors duration-300
        ${
          isDark
            ? `hover:bg-slate-800`
            : `hover:bg-purple-50 hover:border-purple-200`
        }
    `}
    >
      {isDark ? (
        <Image
          src="/images/icon-sun.svg"
          width="24"
          height="24"
          alt="Light mode"
          className="dark:invert"
        />
      ) : (
        <Image
          src="/images/icon-moon.svg"
          width="24"
          height="24"
          alt="Dark mode"
        />
      )}
    </button>
  );
}
