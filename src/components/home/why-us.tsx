import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";
import { WHY_US } from "@/lib/content";

export function WhyUs() {
  return (
    <Section>
      <SectionLabel>Why us</SectionLabel>
      <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
        <RevealLines lines={["Built differently", "for a different era."]} />
      </h2>

      <div className="mt-16 grid gap-px border border-line md:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 3) * 0.08}
            className="bg-paper p-8 outline outline-1 outline-line md:p-10"
          >
            <h3 className="font-mono text-label uppercase text-accent">{item.title}</h3>
            <p className="mt-5 text-h3 font-medium tracking-tight text-text-primary/85">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
