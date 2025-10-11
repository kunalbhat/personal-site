"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PageContainer({ children, scrollTop = true }) {
  useEffect(() => {
    if (scrollTop) {
      window.scrollTo(0, 0);
    }
  }, [scrollTop]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="px-6 py-12 max-w-8xl mx-auto w-full"
    >
      {children}
    </motion.main>
  );
}
