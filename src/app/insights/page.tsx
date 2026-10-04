import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { InsightsList } from "@/components/insights/insights-list";
import { CtaBand } from "@/components/ui/cta";
import { INSIGHTS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Intelligence / Notes",
  description:
    "Engineering notes on enterprise AI, agents, architecture and the shift to AI-native systems.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Intelligence / Notes"
        titleLines={["Notes from the", "AI-native frontier."]}
        lead="Engineering notes, not thought-leadership. What we're learning building intelligent systems that reach production."
      />
      <InsightsList insights={INSIGHTS} />
      <CtaBand
        lines={["Have a harder", "problem in mind?"]}
        action={{ label: "Start the conversation", href: "/contact" }}
      />
    </>
  );
}
