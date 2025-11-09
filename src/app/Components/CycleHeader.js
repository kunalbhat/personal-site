"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function RotatingTitle() {
  const words = ["designer", "engineer", "manager", "researcher"];
  const LONGEST = "researcher"; // used for width reservation
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="text-6xl md:text-8xl font-headline leading-tight">
      Kunal is a product{" "}
      {/* Reserve space for the longest word so layout never reflows */}
      <span
        aria-live="polite"
        className="inline-block align-baseline relative whitespace-nowrap w-[11ch] min-w-[11ch] h-[1em]"
        /* 11ch = length of “researcher” + a little buffer */
      >
        {/* Hidden sizing ghost so the container height/width are stable */}
        <span className="invisible">{LONGEST}</span>

        <AnimatePresence mode="wait">
          <motion.span
            key={words[i]}
            className="absolute left-0 top-0"
            initial={{ opacity: 0, y: "0.35em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-0.35em" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
