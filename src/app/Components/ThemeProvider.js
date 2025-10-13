"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** Add/remove ids here to change available themes */
export const THEMES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "high-contrast", label: "High contrast" },
  { id: "colorblind", label: "Color-blind" },
];

const STORAGE_KEY = "site-theme";
const ThemeCtx = createContext(null);

function applyTheme(themeId) {
  const root = document.documentElement;

  // 1) data-theme drives your CSS variables
  root.setAttribute("data-theme", themeId);

  // 2) Tailwind dark variant
  if (themeId === "dark") root.classList.add("dark");
  else root.classList.remove("dark");

  // 3) (Optional) meta theme-color to match the UI
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    requestAnimationFrame(() => {
      const cs = getComputedStyle(root);
      const color =
        cs.getPropertyValue("--toggle-color").trim() ||
        cs.getPropertyValue("--bg").trim() ||
        "#ffffff";
      meta.setAttribute("content", color);
    });
  }
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");

  // initial load
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && THEMES.some((t) => t.id === stored)) {
        setThemeState(stored);
        applyTheme(stored);
        return;
      }
    } catch {}
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setThemeState(initial);
    applyTheme(initial);
  }, []);

  const setTheme = (id) => {
    setThemeState(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {}
    applyTheme(id);
  };

  const cycle = () => {
    const idx = Math.max(
      0,
      THEMES.findIndex((t) => t.id === theme)
    );
    const next = THEMES[(idx + 1) % THEMES.length].id;
    setTheme(next);
  };

  const value = useMemo(() => ({ theme, setTheme, cycle }), [theme]);

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
};
