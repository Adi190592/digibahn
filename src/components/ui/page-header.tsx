import type { ReactNode } from "react";
import { Reveal, RevealLines } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  titleLines,
  lead,
  meta,
  children,
}: {
  eyebrow: string;
  titleLines: string[];
  lead?: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line pb-16 pt-36 md:pt-44">
      <div className="dot-grid-light absolute inset-0 opacity-50" aria-hidden />
      <div className="shell relative">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden />
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <h1 className="mt-10 max-w-[20ch] text-display-sm font-semibold tracking-tight">
          <RevealLines lines={titleLines} />
        </h1>

        {lead && (
          <Reveal delay={0.2} className="mt-8">
            <p className="max-w-prose text-lead text-text-primary/75">{lead}</p>
          </Reveal>
        )}

        {meta && (
          <Reveal delay={0.3} className="mt-10">
            <p className="font-mono text-label uppercase text-text-muted">{meta}</p>
          </Reveal>
        )}

        {children}
      </div>
    </header>
  );
}
