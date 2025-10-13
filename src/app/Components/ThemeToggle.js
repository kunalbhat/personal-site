"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme, cycle } = useTheme();
  const [open, setOpen] = useState(false);
  const themeList = useMemo(() => THEMES.map((t) => t.id), []);

  return (
    <div className="relative">
      {/* Main button: solid dot reflects CURRENT theme via CSS var */}
      <button
        onClick={cycle}
        onContextMenu={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)]/70 ring-1 ring-[var(--border)] backdrop-blur transition hover:ring-[var(--fg)]/15"
        title="Click to cycle themes. Right-click to choose."
      >
        <span
          aria-hidden
          className="h-4 w-4 rounded-full ring-1 ring-black/10 dark:ring-white/20"
          style={{ background: "var(--toggle-color)" }}
        />
      </button>

      {/* Dropdown menu with per-option dot, using scoped theme vars */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute right-0 mt-2 w-60 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur p-1 shadow-lg"
          >
            {themeList.map((id) => {
              const t = THEMES.find((x) => x.id === id) || { id, label: id };
              const active = theme === id;
              return (
                <button
                  key={id}
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setTheme(id);
                    setOpen(false);
                  }}
                  className={`w-full rounded-xl px-3 py-2.5 flex items-center justify-between gap-3 transition
                    ${
                      active
                        ? "bg-[var(--bg)] ring-1 ring-[var(--border)]"
                        : "hover:bg-[var(--bg)]/60"
                    }`}
                >
                  {/* Scope theme vars for preview dot */}
                  <span className="theme-scope" data-theme={id}>
                    <span
                      aria-hidden
                      className="inline-block h-3.5 w-3.5 rounded-full align-middle ring-1 ring-black/10 dark:ring-white/20"
                      style={{ background: "var(--toggle-color)" }}
                    />
                  </span>
                  <span className="text-sm flex-1 text-left">{t.label}</span>
                  {active && <span className="text-xs opacity-70">Active</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
