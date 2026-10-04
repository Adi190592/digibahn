import { Reveal, RevealLines } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section";
import { ArchitectureStack } from "@/components/visuals/architecture-stack";

export function Infrastructure() {
  return (
    <section className="bg-ink py-section text-text-invert">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel dark>System architecture</SectionLabel>
            <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
              <RevealLines lines={["Intelligence needs", "infrastructure."]} />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-text-invert/65">
              AI doesn&rsquo;t float above the enterprise. It operates across six layers — from the
              interfaces people use down to the infrastructure everything runs on. We engineer the
              connective tissue between them.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <ArchitectureStack />
        </Reveal>
      </div>
    </section>
  );
}
