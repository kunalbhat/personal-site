"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeCtx = createContext({ theme: "light", setTheme: () => {} });
export const useAppTheme = () => useContext(ThemeCtx);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("theme changed to", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
