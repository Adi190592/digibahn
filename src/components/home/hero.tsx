import Link from "next/link";
import { SITE } from "@/lib/site";
import { IntelligenceField } from "@/components/visuals/intelligence-field";
import { RevealLines, Reveal } from "@/components/motion/reveal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24">
      {/* Ambient intelligence network — confined to the right, faded behind the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] md:block lg:w-[55%]"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 42%, #000 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, #000 42%, #000 100%)",
        }}
      >
        <IntelligenceField className="h-full w-full text-ink/60 opacity-70" />
      </div>
      {/* Legibility scrim over the text column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper from-35% via-paper/80 to-transparent"
      />

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
