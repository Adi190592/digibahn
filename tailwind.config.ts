import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        paper: "#F4F3EF",
        "text-primary": "#111111",
        "text-invert": "#F5F5F2",
        "text-muted": "#777777",
        line: "#D9D9D4",
        "line-dark": "#2A2A28",
        accent: "#4C6FFF",
        "accent-soft": "rgba(76, 111, 255, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale
        display: ["clamp(3.25rem, 9vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2.5rem, 6.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.25rem, 5.5vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        h2: ["clamp(1.75rem, 3.5vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.125rem, 1.6vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        label: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        shell: "1600px",
        prose: "68ch",
      },
      spacing: {
        gutter: "clamp(1.25rem, 5vw, 6.25rem)",
        section: "clamp(6rem, 14vw, 12.5rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        "dash-flow": {
          to: { strokeDashoffset: "-1000" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 3.2s ease-in-out infinite",
        "dash-flow": "dash-flow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
