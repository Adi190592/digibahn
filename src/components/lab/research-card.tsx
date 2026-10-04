import type { Research } from "@/lib/content";

const STATUS_STYLES: Record<Research["status"], string> = {
  Released: "text-accent border-accent/50",
  Production: "text-accent border-accent/50",
  Experimental: "text-text-invert/80 border-line-dark",
  Research: "text-text-invert/80 border-line-dark",
  Prototype: "text-text-invert/80 border-line-dark",
};

export function ResearchCard({ project }: { project: Research }) {
  return (
    <article className="group flex h-full flex-col border border-line-dark bg-ink p-8 transition-colors duration-500 hover:bg-[#0d0d0d]">
      <div className="flex items-center justify-between">
        <span className={`node-chip ${STATUS_STYLES[project.status]}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
          {project.status}
        </span>
        <span className="font-mono text-label uppercase text-text-invert/40">{project.area}</span>
      </div>

      <h3 className="mt-8 text-h3 font-semibold tracking-tight text-text-invert">
        {project.title}
      </h3>
      <p className="mt-4 flex-1 text-sm text-text-invert/60">{project.description}</p>

      <div className="mt-8 border-t border-line-dark pt-5">
        <p className="mb-3 font-mono text-label uppercase text-text-invert/40">Technology</p>
        <div className="flex flex-wrap gap-2">
          {project.technology.map((t) => (
            <span key={t} className="node-chip node-chip-dark">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-6 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-invert/40">
        <span className="transition-colors group-hover:text-accent">Repository ↗</span>
        <span className="transition-colors group-hover:text-accent">Paper ↗</span>
      </div>
    </article>
  );
}
