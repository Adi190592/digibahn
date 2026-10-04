import Link from "next/link";
import type { Capability } from "@/lib/content";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <Link
      href={`/capabilities/${capability.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden border border-line bg-paper p-8 transition-colors duration-500 ease-editorial hover:border-text-primary md:p-10"
    >
      {/* accent sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
      />

      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-label text-accent">{capability.index}</span>
          <span className="font-mono text-label uppercase text-text-muted transition-colors group-hover:text-accent">
            Capability
          </span>
        </div>
        <h3 className="mt-8 text-h3 font-semibold tracking-tight">{capability.title}</h3>
        <p className="mt-3 max-w-[32ch] text-text-primary/70">{capability.statement}</p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap gap-2">
          {capability.services.slice(0, 5).map((s) => (
            <span key={s} className="node-chip">
              {s}
            </span>
          ))}
          {capability.services.length > 5 && (
            <span className="node-chip border-accent/40 text-accent">
              +{capability.services.length - 5}
            </span>
          )}
        </div>
        <span className="btn-primary btn-arrow mt-8 text-sm group-hover:text-accent">
          View capability
        </span>
      </div>
    </Link>
  );
}
