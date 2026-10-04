"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section, SectionLabel } from "@/components/ui/section";
import { Reveal, RevealLines } from "@/components/motion/reveal";
import { AGENT_CAPABILITIES } from "@/lib/content";

const SYSTEMS = ["CRM", "ERP", "EMAIL", "DATA", "KNOWLEDGE", "WORKFLOWS"];

export function Agentic() {
  const reduce = useReducedMotion();

  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Agentic enterprise</SectionLabel>
          <h2 className="mt-10 text-display-sm font-semibold tracking-tight">
            <RevealLines lines={["The enterprise", "is becoming", "agentic."]} />
          </h2>
          <Reveal delay={0.2} className="mt-8">
            <p className="max-w-prose text-text-primary/75">
              Tomorrow&rsquo;s enterprise applications will not only store information. They will
              reason, act and collaborate. We engineer secure enterprise AI agents capable of
              operating across business systems, data and workflows.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {AGENT_CAPABILITIES.map((c) => (
              <span key={c} className="node-chip">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Agent diagram */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative aspect-square w-full border border-line bg-paper p-4 dot-grid-light">
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
              {/* Customer -> Agent */}
              <line x1="200" y1="40" x2="200" y2="170" stroke="#D9D9D4" strokeWidth="1" />
              <circle cx="200" cy="40" r="4" fill="#111111" />
              <text
                x="200"
                y="26"
                textAnchor="middle"
                className="font-mono"
                fontSize="11"
                letterSpacing="1.5"
                fill="#777777"
              >
                CUSTOMER
              </text>

              {/* Agent core */}
              <circle cx="200" cy="200" r="30" fill="#4C6FFF" fillOpacity="0.1" stroke="#4C6FFF" />
              <circle cx="200" cy="200" r="6" fill="#4C6FFF" />
              <text
                x="200"
                y="250"
                textAnchor="middle"
                className="font-mono"
                fontSize="11"
                letterSpacing="1.5"
                fill="#4C6FFF"
              >
                AI AGENT
              </text>

              {/* Systems around the agent */}
              {SYSTEMS.map((s, i) => {
                const angle = (Math.PI * 2 * i) / SYSTEMS.length + Math.PI / 2;
                const r = 150;
                const x = 200 + Math.cos(angle) * r;
                const y = 200 + Math.sin(angle) * r * 0.62 + 40;
                return (
                  <g key={s}>
                    <line x1="200" y1="200" x2={x} y2={y} stroke="#D9D9D4" strokeWidth="1" />
                    {!reduce && (
                      <motion.circle
                        r="3"
                        fill="#4C6FFF"
                        initial={{ cx: 200, cy: 200 }}
                        animate={{ cx: [200, x, 200], cy: [200, y, 200] }}
                        transition={{
                          duration: 2.4,
                          delay: i * 0.4,
                          repeat: Infinity,
                          repeatDelay: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    <circle cx={x} cy={y} r="4" fill="#111111" />
                    <text
                      x={x}
                      y={y - 12}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="10"
                      letterSpacing="1"
                      fill="#777777"
                    >
                      {s}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
