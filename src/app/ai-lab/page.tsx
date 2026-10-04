import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ResearchCard } from "@/components/lab/research-card";
import { CtaBand } from "@/components/ui/cta";
import { RESEARCH_AREAS, RESEARCH_PROJECTS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Engineering Lab",
  description:
    "Our AI Engineering Lab explores emerging technologies before they become enterprise standards — agents, multi-agent systems, small language models, enterprise RAG, edge AI and more.",
  path: "/ai-lab",
});

export default function AiLabPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Engineering Lab"
        titleLines={["Exploring what", "enterprises will", "deploy next."]}
        lead="Our AI Engineering Lab explores emerging technologies before they become enterprise standards. Research becomes prototypes. Prototypes become products."
      />

      {/* Research areas */}
      <section className="border-b border-line py-section">
        <div className="shell">
          <p className="eyebrow mb-10">Research areas</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {RESEARCH_AREAS.map((area, i) => (
              <Reveal
                key={area}
                delay={(i % 6) * 0.04}
                as="span"
                className="font-mono text-h3 font-medium tracking-tight text-text-primary/70 transition-colors hover:text-accent"
              >
                / {area}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-ink py-section text-text-invert">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-h1 font-semibold tracking-tight">Active research</h2>
            <p className="font-mono text-label uppercase text-text-invert/40">
              Released · Experimental · Research · Prototype · Production
            </p>
          </div>
          <div className="mt-14 grid gap-px md:grid-cols-2 xl:grid-cols-3">
            {RESEARCH_PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 0.08}>
                <ResearchCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Collaborate"
        lines={["Research becomes", "prototypes. Prototypes", "become products."]}
        body="Working on something at the edge of what's possible? Let's explore it together."
        action={{ label: "Read research / talk to us", href: "/contact" }}
      />
    </>
  );
}
