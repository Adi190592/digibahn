import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/ui/cta";
import { ENGAGEMENTS, WHY_US } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "A team of engineers, architects, designers and AI practitioners building the technology infrastructure for the next generation of enterprises.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        titleLines={["Engineers.", "Architects.", "Builders."]}
        lead="We are a team of engineers, architects, designers and AI practitioners building the technology infrastructure for the next generation of enterprises."
      />

      {/* Philosophy */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Philosophy</p>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <Reveal>
              <p className="text-h2 font-semibold tracking-tight">
                AI represents more than another software category.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-prose text-lead text-text-primary/75">
                It represents a fundamental change in how software is designed, how systems interact
                and how organizations operate.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-prose text-text-primary/70">
                Our mission is to help organizations navigate that transition — by combining
                enterprise technology expertise with AI-native engineering.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section dark>
        <p className="eyebrow mb-10 text-text-invert/50">How we work</p>
        <div className="grid gap-px border border-line-dark md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.06}
              className="bg-ink p-8 outline outline-1 outline-line-dark md:p-10"
            >
              <h3 className="font-mono text-label uppercase text-accent">{item.title}</h3>
              <p className="mt-5 text-h3 font-medium tracking-tight text-text-invert/85">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Engagement model */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Engagement model</p>
            <h2 className="mt-8 text-display-sm font-semibold tracking-tight">Start where you are.</h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-line md:grid-cols-2 xl:grid-cols-4">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal
              key={e.index}
              delay={(i % 4) * 0.06}
              className="flex h-full flex-col bg-paper p-8 outline outline-1 outline-line"
            >
              <span className="font-mono text-label text-accent">{e.index}</span>
              <h3 className="mt-6 text-h3 font-semibold tracking-tight">{e.title}</h3>
              <p className="mt-3 text-sm text-text-muted">{e.audience}</p>
              <ul className="mt-8 space-y-2.5 border-t border-line pt-5">
                {e.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-text-primary/75">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-accent" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        lines={["These are the people", "to rebuild your", "architecture with."]}
        action={{ label: "Start the conversation", href: "/contact" }}
      />
    </>
  );
}
