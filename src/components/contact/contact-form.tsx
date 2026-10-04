"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EXPLORING = [
  "AI Transformation",
  "AI Agents",
  "AI Product Development",
  "Enterprise Integration",
  "Automation",
  "Data & Cloud",
  "Other",
];

const FIELD =
  "w-full border-b border-line bg-transparent py-4 text-lead text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent";
const LABEL = "font-mono text-label uppercase text-text-muted";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired in this build — capture intent client-side.
    setSubmitted(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-line p-10"
          >
            <p className="eyebrow mb-6 text-accent">Received</p>
            <h2 className="text-h2 font-semibold tracking-tight">Let&rsquo;s build.</h2>
            <p className="mt-4 max-w-prose text-text-primary/75">
              Thanks — your message is captured. This is a demonstration build, so nothing is sent
              to a server. Wire this form to your preferred backend or CRM to go live.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn-primary link-underline mt-8 text-sm"
            >
              ← Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10"
          >
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="name" className={LABEL}>
                  Name
                </label>
                <input id="name" name="name" required className={FIELD} placeholder="Your name" />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className={LABEL}>
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={FIELD}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="company" className={LABEL}>
                Company
              </label>
              <input id="company" name="company" className={FIELD} placeholder="Company" />
            </div>

            <div className="space-y-3">
              <label htmlFor="exploring" className={LABEL}>
                What are you exploring?
              </label>
              <select id="exploring" name="exploring" className={`${FIELD} appearance-none`}>
                {EXPLORING.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className={LABEL}>
                Tell us about the challenge
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${FIELD} resize-none`}
                placeholder="What are you trying to build?"
              />
            </div>

            <button type="submit" className="btn-primary btn-arrow text-base">
              Start the conversation
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
