"use client";
import { createContext, useContext, useEffect, useState } from "react";

const GridCtx = createContext(null);

export function GridOverlayProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible((v) => !v);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  // ⌘/Ctrl + G hotkey
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "g") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <GridCtx.Provider value={{ visible, toggle, show, hide }}>
      {children}
    </GridCtx.Provider>
  );
}

export function useGridOverlay() {
  const ctx = useContext(GridCtx);
  if (!ctx)
    throw new Error("useGridOverlay must be used within GridOverlayProvider");
  return ctx;
}
