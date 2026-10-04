import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";
import { TECH_ECOSYSTEM } from "@/lib/content";

export function Ecosystem() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel>Technology ecosystem</SectionLabel>
          <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
            <RevealLines lines={["Technology agnostic.", "Outcome obsessed."]} />
          </h2>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          <p className="text-sm text-text-muted">
            Technologies our engineering team works with. We do not imply formal partnerships —
            architecture comes before vendor preference.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {TECH_ECOSYSTEM.map((group, i) => (
          <Reveal
            key={group.category}
            delay={i * 0.05}
            className="grid grid-cols-1 gap-4 py-7 md:grid-cols-[10rem,1fr] md:gap-8"
          >
            <span className="font-mono text-label uppercase text-accent">{group.category}</span>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-h3 font-medium tracking-tight text-text-primary/80 transition-colors hover:text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
