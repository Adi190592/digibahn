import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/ui/cta";
import { INDUSTRIES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const FRAMEWORK = [
  { step: "01", title: "Industry challenges", body: "The operational and competitive pressures specific to your sector." },
  { step: "02", title: "AI opportunities", body: "Where intelligence creates measurable advantage, not novelty." },
  { step: "03", title: "Technology architecture", body: "The integration, data and model architecture that makes it real." },
  { step: "04", title: "Potential solutions", body: "Agents, automation and products mapped to concrete workflows." },
  { step: "05", title: "Case studies", body: "Evidence from systems we've engineered in comparable environments." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        titleLines={["Engineering intelligence", "across industries."]}
        lead="We engineer intelligent systems where they meet real operational constraints — security, compliance, legacy estates and scale."
      />

      <Section>
        <div className="grid gap-px border border-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((industry, i) => (
            <Reveal
              key={industry.slug}
              delay={(i % 5) * 0.05}
              className="group flex min-h-[9rem] flex-col justify-between bg-paper p-7 outline outline-1 outline-line transition-colors hover:bg-ink hover:text-text-invert"
            >
              <span className="font-mono text-label text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-h3 font-semibold tracking-tight">{industry.name}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section dark>
        <p className="eyebrow mb-10 text-text-invert/50">How we approach every industry</p>
        <ol className="grid gap-px border border-line-dark md:grid-cols-5">
          {FRAMEWORK.map((f, i) => (
            <Reveal
              as="li"
              key={f.step}
              delay={i * 0.08}
              className="bg-ink p-7 outline outline-1 outline-line-dark"
            >
              <span className="font-mono text-label text-accent">{f.step}</span>
              <h3 className="mt-6 text-h3 font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-text-invert/60">{f.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        lines={["Intelligence, engineered", "for your sector."]}
        action={{ label: "Start the conversation", href: "/contact" }}
      />
    </>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Engineering intelligence across BFSI, manufacturing, healthcare, retail, logistics, energy, government, education, technology and professional services.",
  path: "/industries",
});
