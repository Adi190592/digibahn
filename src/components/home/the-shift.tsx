import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { SHIFT_LINES } from "@/lib/content";

export function TheShift() {
  return (
    <Section>
      <SectionLabel>The shift</SectionLabel>
      <Reveal className="mt-10">
        <h2 className="max-w-[16ch] text-h1 font-semibold">Enterprise technology is changing.</h2>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <ul className="lg:col-span-7">
          {SHIFT_LINES.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 0.08} className="border-t border-line py-6">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-label text-text-muted">0{i + 1}</span>
                <span className="text-h2 font-medium tracking-tight text-text-primary/85">
                  {line}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.3} className="border-t border-line py-6">
            <div className="flex items-baseline gap-5">
              <span className="font-mono text-label text-accent">04</span>
              <span className="text-h2 font-semibold tracking-tight text-accent">
                AI will connect intelligence.
              </span>
            </div>
          </Reveal>
        </ul>

        <Reveal delay={0.2} className="lg:col-span-5 lg:pt-6">
          <p className="max-w-prose text-lead text-text-primary/75">
            The next generation of enterprises will not simply use AI tools. Intelligence will
            become embedded across applications, workflows, data and decision-making.
          </p>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.1em] text-text-muted">
            We help organizations engineer that transition.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
