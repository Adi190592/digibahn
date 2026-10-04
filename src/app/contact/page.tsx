import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "What are you trying to build? Start a conversation about AI transformation, agents, products, integration, automation, data and cloud.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        titleLines={["What are you", "trying to build?"]}
      />

      <div className="shell py-section">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 border-t border-line pt-8 lg:border-none lg:pt-0">
              <div>
                <p className="eyebrow mb-4">Direct</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-h3 font-medium tracking-tight hover:text-accent"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-4">Elsewhere</p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-text-primary/80 hover:text-accent"
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-text-primary/80 hover:text-accent"
                    >
                      GitHub ↗
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow mb-4">What to expect</p>
                <p className="max-w-prose text-sm text-text-muted">
                  No sales funnel. You&rsquo;ll talk to engineers and architects who can tell you
                  quickly whether — and how — we can help.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
