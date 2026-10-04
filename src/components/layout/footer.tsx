import Link from "next/link";
import { SITE } from "@/lib/site";
import { RevealLines } from "@/components/motion/reveal";

const FOOTER_NAV: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Capabilities",
    links: [
      { label: "AI Transformation", href: "/capabilities/ai-transformation" },
      { label: "AI Engineering", href: "/capabilities/ai-engineering" },
      { label: "Enterprise Integration", href: "/capabilities/enterprise-integration" },
      { label: "Product Engineering", href: "/capabilities/product-engineering" },
      { label: "Data & Cloud", href: "/capabilities/data-and-cloud" },
      { label: "Intelligent Automation", href: "/capabilities/intelligent-automation" },
    ],
  },
  {
    heading: "Studio & Lab",
    links: [
      { label: "AI Lab", href: "/ai-lab" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: SITE.social.linkedin },
      { label: "GitHub", href: SITE.social.github },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-text-invert">
      <div className="shell py-section">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8 text-text-invert/50">Next architecture</p>
            <h2 className="text-display-sm font-semibold tracking-tight">
              <RevealLines
                lines={["Your enterprise", "is ready for its", "next architecture."]}
              />
            </h2>
            <Link href="/contact" className="btn-invert btn-arrow mt-10 text-base">
              Let&rsquo;s engineer it
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow mb-5 text-text-invert/40">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="link-underline text-sm text-text-invert/75 hover:text-text-invert"
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-label uppercase text-text-invert/50">{SITE.name}</span>
            <span className="text-sm text-text-invert/50">{SITE.descriptor}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-invert/40">
            <a href={`mailto:${SITE.email}`} className="hover:text-text-invert">
              {SITE.email}
            </a>
            <Link href="/legal/privacy" className="hover:text-text-invert">
              Privacy
            </Link>
            <span>&copy; {year} {SITE.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
