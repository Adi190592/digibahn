"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Insight } from "@/lib/content";

export function InsightsList({ insights }: { insights: Insight[] }) {
  const reduce = useReducedMotion();
  const categories = ["All", ...Array.from(new Set(insights.map((i) => i.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? insights : insights.filter((i) => i.category === active);

  return (
    <div className="shell py-section">
      {/* Filter */}
      <div className="mb-14 flex flex-wrap gap-x-6 gap-y-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={[
              "font-mono text-label uppercase tracking-[0.12em] transition-colors",
              active === c ? "text-accent" : "text-text-muted hover:text-text-primary",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="border-t border-line">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((insight, i) => (
            <motion.li
              key={insight.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.03 }}
              className="border-b border-line"
            >
              <Link
                href={`/insights/${insight.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <div className="flex items-center gap-5 md:col-span-3">
                  <span className="font-mono text-label uppercase text-accent">
                    {insight.category}
                  </span>
                </div>
                <h2 className="text-h3 font-semibold tracking-tight transition-colors group-hover:text-accent md:col-span-7">
                  {insight.title}
                </h2>
                <div className="flex items-center justify-between font-mono text-label uppercase text-text-muted md:col-span-2 md:justify-end md:gap-4">
                  <span>{insight.readingTime}</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
