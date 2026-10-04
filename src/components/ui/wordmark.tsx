import { SITE } from "@/lib/site";

/**
 * Typographic wordmark. The square mark is a 6-row stack that echoes the
 * site's "intelligence layer" metaphor — the top layer rendered in accent.
 */
export function Wordmark({ invert = false }: { invert?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span
        aria-hidden
        className="flex h-5 w-5 flex-col justify-between"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={[
              "block h-[1.5px] w-full origin-left transition-colors",
              i === 0 ? "bg-accent" : invert ? "bg-text-invert/70" : "bg-text-primary",
            ].join(" ")}
            style={{ width: `${100 - i * 10}%` }}
          />
        ))}
      </span>
      <span
        className={[
          "text-[1.05rem] font-semibold tracking-[-0.02em]",
          invert ? "text-text-invert" : "text-text-primary",
        ].join(" ")}
      >
        {SITE.name}
      </span>
    </span>
  );
}
