import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section";
import { RESEARCH_PROJECTS } from "@/lib/content";
import { ResearchCard } from "@/components/lab/research-card";

export function LabPreview() {
  return (
    <section className="bg-ink py-section text-text-invert">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel dark>AI Engineering Lab</SectionLabel>
            <h2 className="mt-10 text-h1 font-semibold tracking-tight">AI Engineering Lab</h2>
            <p className="mt-5 max-w-prose text-lead text-text-invert/65">
              Exploring what enterprises will deploy next. Our lab explores emerging technologies
              before they become enterprise standards.
            </p>
          </div>
          <Reveal>
            <Link href="/ai-lab" className="btn-invert btn-arrow text-sm">
              Enter the lab
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px md:grid-cols-2 xl:grid-cols-3">
          {RESEARCH_PROJECTS.slice(0, 3).map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ResearchCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
