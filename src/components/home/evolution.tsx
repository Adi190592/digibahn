"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { EVOLUTION_STAGES } from "@/lib/content";

export function Evolution() {
  const reduce = useReducedMotion();

  return (
    <Section dark>
      <SectionLabel dark>Enterprise evolution model</SectionLabel>
      <Reveal className="mt-10">
        <h2 className="max-w-[18ch] text-h1 font-semibold tracking-tight">
          Where are you in your AI evolution?
        </h2>
      </Reveal>

      <div className="relative mt-20">
        {/* connecting track */}
        <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line-dark lg:block">
          <motion.span
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            whileInView={reduce ? undefined : { width: "100%" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <ol className="grid gap-y-12 lg:grid-cols-5 lg:gap-x-6">
          {EVOLUTION_STAGES.map((stage, i) => (
            <Reveal as="li" key={stage.index} delay={i * 0.1} className="relative lg:pr-4">
              <span className="relative z-10 block h-3.5 w-3.5 rounded-full border border-accent bg-ink">
                <span className="absolute inset-1 rounded-full bg-accent" />
              </span>
              <span className="mt-6 block font-mono text-label text-accent">{stage.index}</span>
              <h3 className="mt-3 text-h3 font-semibold tracking-tight">{stage.title}</h3>
              <p className="mt-2 text-sm text-text-invert/60">{stage.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.2} className="mt-20 flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-lead text-text-invert/70">
          We help organizations move across this entire journey.
        </p>
        <Link href="/contact" className="btn-invert btn-arrow shrink-0 text-base">
          Assess your AI readiness
        </Link>
      </Reveal>
    </Section>
  );
}
