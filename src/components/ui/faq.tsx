"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section";

type Item = { q: string; a: string };

export function FaqSection({
  eyebrow = "Answers",
  title,
  items,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  items: Item[];
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-ink text-text-invert" : ""} border-t border-line py-section`}>
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel dark={dark}>{eyebrow}</SectionLabel>
            <h2 className="mt-8 text-h1 font-semibold tracking-tight">{title}</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-line">
              {items.map((item, i) => (
                <FaqRow key={item.q} item={item} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqRow({ item, index }: { item: Item; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const reduce = useReducedMotion();

  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="flex items-baseline gap-4">
            <span className="font-mono text-label text-accent">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-h3 font-medium tracking-tight">{item.q}</span>
          </span>
          <span
            className={`mt-1 shrink-0 font-mono text-xl leading-none transition-transform duration-300 ${
              open ? "rotate-45 text-accent" : ""
            }`}
            aria-hidden
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-8 pl-10 text-text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
