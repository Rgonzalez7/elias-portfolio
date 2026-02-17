"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export default function HeroSection() {
  const proofItems = [
    {
      k: "Systems shipped",
      v: "Live transcription • AI evaluation • RAG knowledge bases",
    },
    {
      k: "Stack",
      v: "Next/React • Node/Express • MongoDB • Vercel/Fly",
    },
    {
      k: "Speed",
      v: "Delivery in 10–21 days (most builds)",
    },
    {
      k: "Domain",
      v: "EdTech • internal tools • service operations",
    },
  ];

  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-12 pb-12 sm:pt-20 sm:pb-14">
      <div className="relative overflow-hidden">
        {/* glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className={cn(
              "absolute right-[-80px] top-[-60px]",
              "h-[260px] w-[260px] sm:h-[280px] sm:w-[280px]",
              "rounded-full bg-zinc-200/70 blur-3xl",
              "dark:bg-zinc-800/40"
            )}
          />
          <div
            className={cn(
              "absolute right-[60px] top-[110px]",
              "sm:right-[120px] sm:top-[120px]",
              "h-[200px] w-[200px] sm:h-[220px] sm:w-[220px]",
              "rounded-full bg-emerald-200/40 blur-3xl",
              "dark:bg-emerald-900/20"
            )}
          />
        </div>

        {/* ✅ IMPORTANT: no mx-auto + no max-w-3xl wrapper here.
            We keep everything inside the same page container so it aligns with Projects cards */}
        <div className="text-center sm:text-right">
          <Reveal>
            <div
              className={cn(
                "mb-5 inline-flex items-center gap-2 rounded-full",
                "border border-zinc-200 bg-white/70 px-3 py-1",
                "text-xs font-medium text-zinc-600",
                "dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300",
                "transition-colors duration-300"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Available for remote — Full-Stack / AI workflows</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-6xl">
              Building AI-powered SaaS products with clean UX and real-world workflows.
            </h1>

            <p
              className={cn(
                "mt-4 sm:mt-5",
                "text-base sm:text-lg leading-relaxed",
                "text-zinc-600 dark:text-zinc-300",
                "transition-colors duration-300"
              )}
            >
              Full-stack engineer building scalable apps and practical AI tooling—focused on speed,
              clarity, and product execution.
            </p>

            {/* ✅ Proof strip aligned to container width */}
            <div className="mt-6 sm:mt-7">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {proofItems.map((item) => (
                  <div
                    key={item.k}
                    className={cn(
                      "rounded-2xl border p-4 text-left transition-colors duration-300",
                      "border-zinc-200 bg-zinc-50",
                      "dark:border-zinc-800 dark:bg-zinc-900/40"
                    )}
                  >
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {item.k}
                    </div>
                    <div className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
                Built for production: clean handoff, scalable architecture, and real workflows.
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <a
                href="#projects"
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center rounded-full px-6",
                  "sm:w-auto",
                  "bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-800",
                  "dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
                  "transition-colors duration-200"
                )}
              >
                View Projects
              </a>

              <a
                href="#contact"
                className={cn(
                  "inline-flex h-11 w-full items-center justify-center rounded-full px-6",
                  "sm:w-auto",
                  "border border-zinc-300 bg-transparent text-sm font-medium text-zinc-900 hover:bg-zinc-50",
                  "dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900",
                  "transition-colors duration-200"
                )}
              >
                Contact
              </a>

              <div
                className={cn(
                  "mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2",
                  "sm:mt-0 sm:ml-1 sm:justify-end",
                  "text-sm text-zinc-600 dark:text-zinc-300",
                  "transition-colors duration-300"
                )}
              >
                <a
                  className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                  href="https://github.com/rgonzalez7"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                  href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                  href="mailto:rmngzps@gmail.com"
                >
                  Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}