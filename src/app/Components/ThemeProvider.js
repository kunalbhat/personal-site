"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const THEMES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "colorblind", label: "Color-blind Safe" },
  { id: "high-contrast", label: "High Contrast" },
];

const ThemeCtx = createContext(null);

export function ThemeProvider({ children, defaultTheme = "light" }) {
  const [theme, setTheme] = useState(defaultTheme);

  // load persisted or system
  useEffect(() => {
    const persisted = localStorage.getItem("theme");
    if (persisted) setTheme(persisted);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // apply + persist
  useEffect(() => {
    const html = document.documentElement;
    // Tailwind dark mode class for `dark:` utilities
    if (theme === "dark" || theme === "high-contrast")
      html.classList.add("dark");
    else html.classList.remove("dark");

    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    cycle: () => {
      const idx = THEMES.findIndex((t) => t.id === theme);
      setTheme(THEMES[(idx + 1) % THEMES.length].id);
    },
  };

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
