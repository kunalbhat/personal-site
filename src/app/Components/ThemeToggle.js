"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme, cycle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Primary button (click to cycle, long-press/caret to open menu) */}
      <button
        onClick={cycle}
        onContextMenu={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
        aria-label="Change theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        title="Tap to cycle themes. Hold to open menu."
      >
        {/* simple glyph that follows tokens */}
        <div className="grid grid-cols-2 gap-0.5 p-1">
          <span className="h-3 w-3 rounded-sm bg-[var(--accent)]" />
          <span className="h-3 w-3 rounded-sm bg-[var(--fg)]/70" />
          <span className="h-3 w-3 rounded-sm bg-[var(--surface)]" />
          <span className="h-3 w-3 rounded-sm bg-[var(--border)]" />
        </div>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur p-1 shadow-lg"
          >
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`w-full text-left rounded-xl px-3 py-2.5 flex items-center justify-between
                  ${
                    theme === t.id
                      ? "bg-[var(--bg)]"
                      : "hover:bg-[var(--bg)]/60"
                  }`}
              >
                <span>{t.label}</span>
                {theme === t.id && (
                  <span className="text-xs opacity-70">Active</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
