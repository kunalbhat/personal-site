"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageContainer({ children, scrollTop = true }) {
  useEffect(() => {
    if (scrollTop) window.scrollTo(0, 0);
  }, [scrollTop]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ paddingTop: "var(--header-h, 88px)" }}
      className=""
    >
      {children}
    </motion.main>
  );
}
