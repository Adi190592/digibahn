import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";
import { STUDIO_PROCESS } from "@/lib/content";

export function Studio() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel>AI Product Studio</SectionLabel>
          <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
            <RevealLines lines={["From idea", "to intelligent product."]} />
          </h2>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          <p className="text-lead text-text-primary/75">
            We design, prototype, engineer and scale AI-native products.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-px border border-line sm:grid-cols-2 lg:grid-cols-3">
        {STUDIO_PROCESS.map((step, i) => (
          <Reveal
            as="li"
            key={step.index}
            delay={(i % 3) * 0.08}
            className="group relative bg-paper p-8 outline outline-1 outline-line transition-colors hover:bg-ink hover:text-text-invert"
          >
            <span className="font-mono text-label text-accent">{step.index}</span>
            <h3 className="mt-6 text-h3 font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm text-text-muted group-hover:text-text-invert/60">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.2} className="mt-12">
        <p className="text-h3 font-medium tracking-tight">
          Strategy shouldn&rsquo;t end in slides.{" "}
          <span className="text-accent">We build.</span>
        </p>
      </Reveal>
    </Section>
  );
}
