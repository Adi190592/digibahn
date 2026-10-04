"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ARCHITECTURE_LAYERS } from "@/lib/content";

export function ArchitectureStack() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical flow line */}
      <div className="pointer-events-none absolute bottom-6 left-[calc(1.5rem+1px)] top-6 w-px bg-line-dark md:left-[calc(2.5rem+1px)]">
        {!reduce && (
          <motion.span
            className="absolute left-0 top-0 h-16 w-px bg-accent"
            animate={{ y: ["0%", "1400%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <ul className="space-y-px">
        {ARCHITECTURE_LAYERS.map((layer, i) => {
          const isActive = active === i;
          return (
            <li key={layer.title}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className={[
                  "group relative grid grid-cols-[3rem,1fr] items-start gap-4 border border-line-dark/60 bg-ink px-5 py-6 transition-colors duration-300 md:grid-cols-[5rem,14rem,1fr] md:gap-6 md:px-8",
                  isActive ? "border-accent/60 bg-[#0d0d0d]" : "",
                ].join(" ")}
              >
                <span className="relative z-10 font-mono text-[0.7rem] text-accent">
                  {layer.index}
                </span>
                <span
                  className={[
                    "text-h3 font-semibold tracking-tight transition-colors",
                    isActive ? "text-text-invert" : "text-text-invert/85",
                  ].join(" ")}
                >
                  {layer.title}
                </span>
                <div className="col-span-2 mt-3 flex flex-wrap gap-2 md:col-span-1 md:mt-1">
                  {layer.nodes.map((node) => (
                    <span
                      key={node}
                      className={[
                        "node-chip node-chip-dark transition-colors duration-300",
                        isActive ? "border-accent/50 text-accent" : "",
                      ].join(" ")}
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
