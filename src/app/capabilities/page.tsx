import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { CapabilityCard } from "@/components/capabilities/capability-card";
import { CtaBand } from "@/components/ui/cta";
import { CAPABILITIES, PILLARS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Capabilities",
  description:
    "From infrastructure to intelligence. AI transformation, AI engineering, enterprise integration, product engineering, data & cloud and intelligent automation.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        titleLines={["From infrastructure", "to intelligence."]}
        lead="Six capabilities that take an organization from existing enterprise technology to an AI-native architecture — integrated, modernized and intelligent."
      />

      {/* Pillars */}
      <Section padded>
        <div className="grid gap-px border border-line md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.index}
              delay={(i % 4) * 0.06}
              className="bg-paper p-8 outline outline-1 outline-line"
            >
              <span className="font-mono text-label text-accent">{p.index}</span>
              <h2 className="mt-5 text-h3 font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-3 text-sm text-text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section padded={false} className="pb-section">
        <div className="grid gap-px md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.slug} delay={(i % 3) * 0.08}>
              <CapabilityCard capability={cap} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        lines={["Where are you in your", "AI evolution?"]}
        body="Start with an AI readiness assessment and a clear architecture for what comes next."
        action={{ label: "Assess your AI readiness", href: "/contact" }}
      />
    </>
  );
}
