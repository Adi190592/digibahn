import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  /** Add generous vertical section padding */
  padded?: boolean;
};

export function Section({ children, id, className = "", dark = false, padded = true }: SectionProps) {
  return (
    <section
      id={id}
      className={[
        dark ? "bg-ink text-text-invert" : "",
        padded ? "py-section" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`inline-block h-1.5 w-1.5 ${dark ? "bg-accent" : "bg-accent"}`} aria-hidden />
      <span className={`eyebrow ${dark ? "text-text-invert/60" : ""}`}>{children}</span>
    </div>
  );
}
