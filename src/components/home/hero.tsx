import Link from "next/link";
import { SITE } from "@/lib/site";
import { IntelligenceField } from "@/components/visuals/intelligence-field";
import { RevealLines, Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24">
      {/* Ambient intelligence network */}
      <IntelligenceField className="pointer-events-none absolute inset-0 h-full w-full text-ink/70 opacity-[0.9]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-paper/30 to-paper" />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow mb-8">{SITE.descriptor}</p>
        </Reveal>

        <h1 className="max-w-[18ch] text-display font-semibold">
          <RevealLines lines={["Engineering", "the AI-Native", "Enterprise."]} />
        </h1>

        <Reveal delay={0.3} className="mt-8 max-w-prose">
          <p className="text-lead text-text-primary/80">
            We integrate enterprise technology, engineer intelligent systems and build AI-native
            products that help organizations evolve for the AI era.
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link href="/capabilities" className="btn-primary btn-arrow text-base">
            Explore our capabilities
          </Link>
          <Link href="/contact" className="btn-primary link-underline text-base text-text-muted hover:text-accent">
            Start a conversation →
          </Link>
        </Reveal>
      </div>

      <div className="shell relative mt-24 hidden items-center justify-between border-t border-line pt-5 md:flex">
        <span className="font-mono text-label uppercase text-text-muted">
          Integrate · Modernize · Intelligence · Engineer
        </span>
        <span className="font-mono text-label uppercase text-text-muted">Scroll to explore ↓</span>
      </div>
    </section>
  );
}
