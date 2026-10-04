"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

const SYSTEMS = ["APPLICATIONS", "DATABASES", "CLOUD", "APIs", "PEOPLE", "WORKFLOWS"];

// Node positions on a 1000x560 stage.
const POS: Record<string, { x: number; y: number }> = {
  APPLICATIONS: { x: 170, y: 170 },
  DATABASES: { x: 500, y: 120 },
  CLOUD: { x: 830, y: 180 },
  APIs: { x: 820, y: 400 },
  PEOPLE: { x: 190, y: 410 },
  WORKFLOWS: { x: 500, y: 450 },
};
const CENTER = { x: 500, y: 290 };

function Phase({
  progress,
  range,
  children,
  className = "",
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  return (
    <motion.div style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function SystemNode({
  progress,
  label,
  index,
}: {
  progress: MotionValue<number>;
  label: string;
  index: number;
}) {
  const p = POS[label];
  const opacity = useTransform(progress, [0.1 + index * 0.015, 0.2 + index * 0.015], [0, 1]);
  return (
    <motion.g style={{ opacity }}>
      <circle cx={p.x} cy={p.y} r={5} fill="#F5F5F2" />
      <circle cx={p.x} cy={p.y} r={11} stroke="#F5F5F2" strokeOpacity={0.3} />
      <text
        x={p.x}
        y={p.y - 20}
        textAnchor="middle"
        className="font-mono"
        fontSize="12"
        letterSpacing="1.5"
        fill="#F5F5F2"
        fillOpacity={0.6}
      >
        {label}
      </text>
    </motion.g>
  );
}

export function SignatureScroll() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const connect = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const agentPulse = useTransform(scrollYProgress, [0.55, 0.75], [0.9, 1.1]);
  const centerOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  if (reduce) {
    return (
      <section className="bg-ink py-section text-text-invert">
        <div className="shell">
          <p className="eyebrow mb-10 text-text-invert/50">The signature moment</p>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 text-h3 font-semibold">Enterprise</p>
              <div className="flex flex-wrap gap-2">
                {SYSTEMS.map((s) => (
                  <span key={s} className="node-chip node-chip-dark">
                    {s}
                  </span>
                ))}
                <span className="node-chip border-accent/60 text-accent">AI MODELS</span>
                <span className="node-chip border-accent/60 text-accent">AI AGENTS</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-h2 font-semibold tracking-tight">
                Your technology stack just became intelligent.
              </p>
              <p className="mt-4 text-text-invert/60">Welcome to the AI-native enterprise.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={ref} className="relative h-[320vh] bg-ink text-text-invert">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />

        <div className="shell relative flex h-full flex-col justify-center">
          <Phase
            progress={scrollYProgress}
            range={[0, 0.06, 0.16, 0.22]}
            className="absolute left-gutter top-1/2 z-10 -translate-y-1/2"
          >
            <p className="eyebrow mb-4 text-text-invert/50">The signature moment</p>
            <h2 className="text-display-sm font-semibold tracking-tight">Enterprise.</h2>
          </Phase>

          <svg
            viewBox="0 0 1000 560"
            className="relative mx-auto h-full max-h-[70vh] w-full"
            aria-hidden
          >
            {SYSTEMS.map((s) => {
              const p = POS[s];
              return (
                <motion.line
                  key={`l-${s}`}
                  x1={p.x}
                  y1={p.y}
                  x2={CENTER.x}
                  y2={CENTER.y}
                  stroke="#4C6FFF"
                  strokeWidth={1.25}
                  style={{ pathLength: connect, opacity: connect }}
                />
              );
            })}

            {SYSTEMS.map((s, i) => (
              <SystemNode key={s} progress={scrollYProgress} label={s} index={i} />
            ))}

            <motion.g style={{ opacity: centerOpacity }}>
              <motion.circle
                cx={CENTER.x}
                cy={CENTER.y}
                r={34}
                fill="#4C6FFF"
                fillOpacity={0.12}
                stroke="#4C6FFF"
                style={{ scale: agentPulse }}
              />
              <circle cx={CENTER.x} cy={CENTER.y} r={7} fill="#4C6FFF" />
              <text
                x={CENTER.x}
                y={CENTER.y + 56}
                textAnchor="middle"
                className="font-mono"
                fontSize="13"
                letterSpacing="2"
                fill="#4C6FFF"
              >
                AI MODELS · AGENTS
              </text>
            </motion.g>
          </svg>

          <Phase
            progress={scrollYProgress}
            range={[0.78, 0.9, 1, 1]}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-ink px-gutter text-center"
          >
            <p className="eyebrow mb-6 text-accent">AI-native</p>
            <h2 className="max-w-4xl text-display-sm font-semibold tracking-tight">
              Your technology stack just became intelligent.
            </h2>
            <p className="mt-6 text-lead text-text-invert/60">
              Welcome to the AI-native enterprise.
            </p>
          </Phase>
        </div>
      </div>
    </div>
  );
}
