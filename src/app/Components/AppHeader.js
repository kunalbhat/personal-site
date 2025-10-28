// AppHeader.jsx
"use client";
import { useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import HeaderGreeting from "../Components/HeaderGreeting";

export default function AppHeader() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // seed a default
    document.documentElement.style.setProperty(
      "--header-h",
      `${el.offsetHeight}px`
    );

    // keep it in sync on resize/content changes
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );
    });
    ro.observe(el);

    // also update on window resize for safety
    const onR = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );
    };
    window.addEventListener("resize", onR);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onR);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="app-header fixed left-0 right-0 top-0 z-50 w-full p-4 md:p-12"
    >
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <HeaderGreeting />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
