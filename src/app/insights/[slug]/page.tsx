import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/ui/cta";
import { INSIGHTS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { JsonLd, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS.find((i) => i.slug === slug);
  if (!post) return buildMetadata({ title: "Insight" });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = INSIGHTS.find((i) => i.slug === slug);
  if (!post) notFound();

  const idx = INSIGHTS.findIndex((i) => i.slug === post.slug);
  const next = INSIGHTS[(idx + 1) % INSIGHTS.length];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    articleSection: post.category,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.domain}/insights/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <PageHeader
        eyebrow={`${post.category} · ${post.readingTime}`}
        titleLines={[post.title]}
      />

      <article className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-4 font-mono text-label uppercase text-text-muted">
              <p>Published</p>
              <p className="text-text-primary">{post.date}</p>
              <p className="pt-4">Category</p>
              <p className="text-accent">{post.category}</p>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal>
              <p className="text-lead text-text-primary/85">{post.excerpt}</p>
            </Reveal>

            <div className="mt-10 space-y-6 text-text-primary/75">
              <p>
                Most enterprises already run on a dense estate of applications, data platforms and
                integrations. The arrival of capable models doesn&rsquo;t replace that estate — it
                adds a new layer on top of it. The engineering question is how intelligence
                observes, reasons about and acts across systems that were never designed for it.
              </p>
              <h2 className="pt-6 text-h2 font-semibold tracking-tight text-text-primary">
                The architecture is the strategy
              </h2>
              <p>
                It is tempting to treat AI adoption as a procurement exercise. In practice the
                difference between a demo and a deployed system is almost entirely architectural:
                access control, grounding, evaluation, observability and the integration surface
                that lets a model act safely on real data.
              </p>
              <blockquote className="border-l-2 border-accent pl-6 text-h3 font-medium tracking-tight text-text-primary">
                Software executes. AI reasons. The enterprise needs both — engineered together.
              </blockquote>
              <h2 className="pt-6 text-h2 font-semibold tracking-tight text-text-primary">
                What reaches production
              </h2>
              <p>
                Systems that reach production share a few traits: they are grounded in authoritative
                data, they are observable enough to debug, they fail safely, and they respect the
                permissions and governance the organization already enforces. Everything else is a
                prototype.
              </p>
            </div>

            <Reveal delay={0.1} className="mt-16 border-t border-line pt-8">
              <p className="eyebrow mb-4">Next</p>
              <Link
                href={`/insights/${next.slug}`}
                className="link-underline text-h3 font-semibold tracking-tight hover:text-accent"
              >
                {next.title} →
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      <CtaBand
        lines={["Turning ideas into", "production systems."]}
        action={{ label: "Start the conversation", href: "/contact" }}
      />
    </>
  );
}
