"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useGridOverlay } from "./GridOverlayProvider";

export default function GridOverlay({
  columns = 12,
  gutter = 24,
  baseline = 24,
  showLabels = true,
}) {
  const { visible } = useGridOverlay();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="grid-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduce ? 0.1 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[1000] pointer-events-none mix-blend-difference"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.35) 0,
                rgba(255,255,255,0.35) 1px,
                transparent 1px,
                transparent ${baseline}px
              )
            `,
          }}
        >
          <div className="h-full">
            <div className="h-full max-w-8xl mx-auto w-full px-6">
              <div className="h-full flex" style={{ gap: `${gutter}px` }}>
                {Array.from({ length: columns }).map((_, i) => (
                  <div
                    key={i}
                    className="relative flex-1 h-full"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.28), rgba(255,255,255,0.28))",
                      backgroundSize: "1px 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right top",
                    }}
                  >
                    {i === 0 && (
                      <div
                        className="absolute left-0 top-0 h-full"
                        style={{
                          width: 1,
                          background: "rgba(255,255,255,0.28)",
                        }}
                      />
                    )}
                    {showLabels && (
                      <div
                        className="absolute top-2 left-2 text-[10px] font-medium tracking-wide text-white/90 select-none"
                        style={{
                          padding: "2px 6px",
                          borderRadius: 999,
                          background: "rgba(0,0,0,0.4)",
                        }}
                      >
                        {i + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
