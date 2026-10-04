import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";

const COLUMNS = [
  {
    title: "Systems Integration",
    body: "We connect enterprise applications, cloud infrastructure, data and workflows into resilient technology ecosystems.",
  },
  {
    title: "AI-Native Product Studio",
    body: "We design and engineer products where AI isn't an add-on — it is part of the product architecture.",
  },
  {
    title: "AI Engineering Lab",
    body: "We experiment with emerging models, agents, interfaces and intelligent systems before they become mainstream.",
  },
];

export function WhatWeAre() {
  return (
    <Section dark>
      <SectionLabel dark>What we are</SectionLabel>
      <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
        <RevealLines lines={["Part Systems Integrator.", "Part Product Studio.", "Part AI Lab."]} />
      </h2>
      <Reveal delay={0.2} className="mt-8">
        <p className="max-w-prose text-lead text-text-invert/70">
          One engineering partner for enterprise technology and artificial intelligence.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-px overflow-hidden border border-line-dark md:grid-cols-3">
        {COLUMNS.map((col, i) => (
          <Reveal
            key={col.title}
            delay={i * 0.1}
            className="bg-ink p-8 outline outline-1 outline-line-dark md:p-10"
          >
            <span className="font-mono text-label text-accent">0{i + 1}</span>
            <h3 className="mt-6 text-h3 font-semibold tracking-tight">{col.title}</h3>
            <p className="mt-4 text-text-invert/65">{col.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
