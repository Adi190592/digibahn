"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

type Node = { id: string; label: string; x: number; y: number };

// Deterministic layout (viewBox 0 0 1000 620) — avoids hydration mismatch.
const NODES: Node[] = [
  { id: "data", label: "DATA", x: 150, y: 150 },
  { id: "cloud", label: "CLOUD", x: 500, y: 90 },
  { id: "erp", label: "ERP", x: 850, y: 160 },
  { id: "crm", label: "CRM", x: 820, y: 420 },
  { id: "apps", label: "APPLICATIONS", x: 180, y: 430 },
  { id: "models", label: "MODELS", x: 500, y: 320 },
  { id: "agents", label: "AGENTS", x: 640, y: 510 },
  { id: "people", label: "PEOPLE", x: 330, y: 540 },
];

// Connections, each drawn from one node to another.
const EDGES: [string, string][] = [
  ["data", "models"],
  ["cloud", "models"],
  ["erp", "models"],
  ["crm", "agents"],
  ["apps", "models"],
  ["models", "agents"],
  ["agents", "people"],
  ["models", "people"],
  ["data", "apps"],
  ["cloud", "erp"],
  ["crm", "models"],
];

function byId(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function IntelligenceField({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const gid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 1000 620"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id={`glow-${gid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4C6FFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4C6FFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => {
        const na = byId(a);
        const nb = byId(b);
        const d = `M ${na.x} ${na.y} L ${nb.x} ${nb.y}`;
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="currentColor"
              strokeOpacity={0.12}
              strokeWidth={1}
            />
            {!reduce && (
              <motion.path
                d={d}
                stroke="#4C6FFF"
                strokeWidth={1.25}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
                transition={{
                  duration: 6,
                  times: [0, 0.3, 0.7, 1],
                  delay: i * 0.6,
                  repeat: Infinity,
                  repeatDelay: EDGES.length * 0.25,
                  ease: "easeInOut",
                }}
              />
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <g key={n.id}>
          {!reduce && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={28}
              fill={`url(#glow-${gid})`}
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <circle cx={n.x} cy={n.y} r={4} fill="#4C6FFF" />
          <circle cx={n.x} cy={n.y} r={9} stroke="currentColor" strokeOpacity={0.25} />
          <text
            x={n.x}
            y={n.y + 30}
            textAnchor="middle"
            className="font-mono"
            fontSize="12"
            letterSpacing="1.5"
            fill="currentColor"
            fillOpacity={0.45}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
