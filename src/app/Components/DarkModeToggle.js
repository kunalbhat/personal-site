import { useEffect, useState } from "react";
import Image from "next/image";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    // Safe to access localStorage now
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

    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  if (!mounted) return null; // Avoid mismatches during SSR

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 border dark:border-yellow-50 rounded-full text-sm fixed top-4 right-4"
    >
      {isDark ? (
        <Image
          src="/images/icon-sunrise.svg"
          width="24"
          height="24"
          alt="Light mode"
          className="dark:invert"
        />
      ) : (
        <Image
          src="/images/icon-sunset.svg"
          width="24"
          height="24"
          alt="Dark mode"
        />
      )}
    </button>
  );
}
