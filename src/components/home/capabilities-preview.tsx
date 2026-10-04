import Link from "next/link";
import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";
import { CAPABILITIES } from "@/lib/content";
import { CapabilityCard } from "@/components/capabilities/capability-card";

export function CapabilitiesPreview() {
  return (
    <Section id="capabilities">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
            <RevealLines lines={["From infrastructure", "to intelligence."]} />
          </h2>
        </div>
        <Reveal>
          <Link href="/capabilities" className="btn-primary btn-arrow text-sm">
            All capabilities
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px md:grid-cols-2 xl:grid-cols-3">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.slug} delay={(i % 3) * 0.08}>
            <CapabilityCard capability={cap} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
