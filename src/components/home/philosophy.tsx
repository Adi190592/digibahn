"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Philosophy() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-ink py-section text-text-invert">
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="shell relative text-center">
        <motion.p
          className="text-display-sm font-semibold tracking-tight text-text-invert/50"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Don&rsquo;t add AI
          <br />
          to your enterprise.
        </motion.p>

        <motion.p
          className="mt-14 text-display-sm font-semibold tracking-tight"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Build an enterprise
          <br />
          that <span className="text-accent">understands AI.</span>
        </motion.p>

        <motion.p
          className="mx-auto mt-14 max-w-prose text-lead text-text-invert/60"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          That is the difference between adopting AI and becoming AI-native.
        </motion.p>
      </div>
    </section>
  );
}
