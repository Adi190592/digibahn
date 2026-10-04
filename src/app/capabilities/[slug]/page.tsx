import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/ui/cta";
import { JsonLd, serviceJsonLd, buildMetadata } from "@/lib/seo";
import { CAPABILITIES } from "@/lib/content";

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = CAPABILITIES.find((c) => c.slug === slug);
  if (!cap) return buildMetadata({ title: "Capability" });
  return buildMetadata({
    title: cap.title,
    description: `${cap.statement} ${cap.services.slice(0, 4).join(", ")} and more.`,
    path: `/capabilities/${cap.slug}`,
  });
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = CAPABILITIES.find((c) => c.slug === slug);
  if (!cap) notFound();

  const others = CAPABILITIES.filter((c) => c.slug !== cap.slug);

  return (
    <>
      <JsonLd
        data={serviceJsonLd(cap.title, cap.statement, `/capabilities/${cap.slug}`)}
      />
      <PageHeader
        eyebrow={`Capability / ${cap.index}`}
        titleLines={[cap.title]}
        lead={cap.statement}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Services</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-line">
              {cap.services.map((s, i) => (
                <Reveal
                  as="li"
                  key={s}
                  delay={(i % 6) * 0.04}
                  className="flex items-baseline gap-5 border-b border-line py-5"
                >
                  <span className="font-mono text-label text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h3 font-medium tracking-tight text-text-primary/85">
                    {s}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Other capabilities */}
      <Section dark>
        <p className="eyebrow mb-10 text-text-invert/50">Continue</p>
        <ul className="grid gap-px border border-line-dark md:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/capabilities/${o.slug}`}
                className="group flex h-full flex-col justify-between bg-ink p-8 outline outline-1 outline-line-dark transition-colors hover:bg-[#0d0d0d]"
              >
                <span className="font-mono text-label text-accent">{o.index}</span>
                <span className="mt-10 text-h3 font-semibold tracking-tight group-hover:text-accent">
                  {o.title} <span aria-hidden>↗</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        lines={["Let's engineer", "your intelligence layer."]}
        action={{ label: "Start the conversation", href: "/contact" }}
      />
    </>
  );
}
