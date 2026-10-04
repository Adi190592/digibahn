import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description: `How ${SITE.name} handles information submitted through this website.`,
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" titleLines={["Privacy."]} />
      <div className="shell py-section">
        <div className="max-w-prose space-y-6 text-text-primary/75">
          <p className="text-lead text-text-primary/85">
            This is a placeholder privacy statement for a demonstration build. Replace it with your
            organization&rsquo;s reviewed privacy policy before going live.
          </p>
          <h2 className="pt-6 text-h3 font-semibold tracking-tight text-text-primary">
            Information we collect
          </h2>
          <p>
            If you submit the contact form, we may receive the name, email, company and message you
            provide. In this build the form does not transmit data to a server.
          </p>
          <h2 className="pt-6 text-h3 font-semibold tracking-tight text-text-primary">How we use it</h2>
          <p>
            Submitted information would be used only to respond to your enquiry and would not be
            sold or shared beyond what is necessary to reply.
          </p>
          <h2 className="pt-6 text-h3 font-semibold tracking-tight text-text-primary">Contact</h2>
          <p>
            Questions about privacy can be sent to{" "}
            <a href={`mailto:${SITE.email}`} className="link-underline text-accent">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
