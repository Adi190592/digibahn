import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/reveal";

export function CtaBand({
  eyebrow = "Let's build",
  lines,
  body,
  action = { label: "Start the conversation", href: "/contact" },
}: {
  eyebrow?: string;
  lines: string[];
  body?: string;
  action?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-line bg-paper py-section">
      <div className="shell">
        <p className="eyebrow mb-8">{eyebrow}</p>
        <h2 className="text-display-sm font-semibold tracking-tight">
          <RevealLines lines={lines} />
        </h2>
        {body && (
          <Reveal delay={0.2} className="mt-8">
            <p className="max-w-prose text-lead text-text-primary/75">{body}</p>
          </Reveal>
        )}
        <Reveal delay={0.3} className="mt-12">
          <Link href={action.href} className="btn-primary btn-arrow text-base">
            {action.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
