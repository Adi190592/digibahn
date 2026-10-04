import { Hero } from "@/components/home/hero";
import { TheShift } from "@/components/home/the-shift";
import { WhatWeAre } from "@/components/home/what-we-are";
import { CapabilitiesPreview } from "@/components/home/capabilities-preview";
import { Evolution } from "@/components/home/evolution";
import { Infrastructure } from "@/components/home/infrastructure";
import { SignatureScroll } from "@/components/visuals/signature-scroll";
import { Studio } from "@/components/home/studio";
import { LabPreview } from "@/components/home/lab-preview";
import { Agentic } from "@/components/home/agentic";
import { Ecosystem } from "@/components/home/ecosystem";
import { WhyUs } from "@/components/home/why-us";
import { Philosophy } from "@/components/home/philosophy";
import { FaqSection } from "@/components/ui/faq";
import { CtaBand } from "@/components/ui/cta";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { FAQ } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <Hero />
      <TheShift />
      <WhatWeAre />
      <CapabilitiesPreview />
      <Evolution />
      <Infrastructure />
      <SignatureScroll />
      <Studio />
      <LabPreview />
      <Agentic />
      <Ecosystem />
      <WhyUs />
      <Philosophy />
      <FaqSection
        eyebrow="Intelligence / Notes"
        title="Understanding the AI-native enterprise"
        items={FAQ}
      />
      <CtaBand
        eyebrow="Let's build"
        lines={["The AI era doesn't need", "another IT vendor.", "It needs a new kind of", "engineering partner."]}
        action={{ label: "Let's build", href: "/contact" }}
      />
    </>
  );
}
