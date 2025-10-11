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

  // Tailwind blue-500
  const blue = "59,130,246"; // #3B82F6

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="grid-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduce ? 0.1 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[1000] pointer-events-none"
          style={{
            // clear blue baseline grid
            backgroundImage: `
              repeating-linear-gradient(
                to bottom,
                rgba(${blue},0.18) 0,
                rgba(${blue},0.18) 1px,
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
                      // vertical column guides
                      background: `linear-gradient(
                        to right,
                        rgba(${blue},0.35),
                        rgba(${blue},0.35)
                      )`,
                      backgroundSize: "1px 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right top",
                    }}
                  >
                    {/* left edge */}
                    {i === 0 && (
                      <div
                        className="absolute left-0 top-0 h-full"
                        style={{ width: 1, background: `rgba(${blue},0.35)` }}
                      />
                    )}

                    {showLabels && (
                      <div
                        className="absolute top-2 left-2 text-[10px] font-medium tracking-wide select-none"
                        style={{
                          color: `rgba(${blue},0.9)`,
                          padding: "2px 6px",
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
