import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/ui/cta";
import { CASE_STUDIES } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Systems we've engineered — AI platforms, agentic operations, legacy modernization and intelligent automation across enterprise industries.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        titleLines={["Systems we've", "engineered."]}
        lead="Engineering project records, not marketing cards. The problem, the architecture, the technology and the outcome."
      />

      <div className="shell py-section">
        <ul className="space-y-px">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal as="li" key={cs.id} delay={(i % 2) * 0.08}>
              <article className="group grid gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-1">
                  <span className="font-mono text-label text-accent">PROJECT {cs.id}</span>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-mono text-label uppercase text-text-muted">{cs.industry}</p>
                  <h2 className="mt-4 text-h2 font-semibold tracking-tight">{cs.title}</h2>
                  <p className="mt-5 max-w-prose text-text-primary/75">{cs.problem}</p>
                </div>

                <div className="lg:col-span-6 lg:pl-8">
                  <div className="border-t border-line pt-5">
                    <p className="mb-3 font-mono text-label uppercase text-text-muted">Technology</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.technology.map((t) => (
                        <span key={t} className="node-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 border-t border-line pt-5">
                    <p className="mb-3 font-mono text-label uppercase text-text-muted">Outcome</p>
                    <p className="text-h3 font-medium tracking-tight text-text-primary/85">
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <CtaBand
        lines={["Your system", "could be next."]}
        action={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
