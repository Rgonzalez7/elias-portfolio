"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

type Item = {
  k: string;
  v: string;
};

const ITEMS: Item[] = [
  { k: "Frontend", v: "React • Next.js • Tailwind • Design systems" },
  { k: "Backend", v: "Node.js • Express • REST APIs • Auth patterns" },
  { k: "Data", v: "MongoDB • schemas • pipelines • audit-ready models" },
  { k: "AI", v: "LLMs • RAG • transcription • eval pipelines" },
  { k: "AI Simulation", v: "Clinical patient simulation • role-play flows • scoring" },
  { k: "Infra", v: "Vercel • Fly.io • env hardening • production deploys" },
];

export default function SystemsBar() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-10 sm:py-12">

      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Production stack & systems
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              What I build with — end-to-end, designed for real workflows.
            </p>
          </div>

          <div className="hidden sm:block text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
            Built for speed • reliability • clarity
          </div>
        </div>

        {/* Full-width bar */}
        <div
          className={cn(
            "mt-6 rounded-2xl border p-3",
            "border-zinc-200 bg-white/70",
            "dark:border-zinc-800 dark:bg-zinc-950/60",
            "transition-colors duration-300"
          )}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {ITEMS.map((item) => (
              <div
                key={item.k}
                className={cn(
                  "flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3",
                  "sm:w-auto sm:flex-1",
                  "border-zinc-200 bg-zinc-50",
                  "dark:border-zinc-800 dark:bg-zinc-900/40",
                  "transition-colors duration-300"
                )}
              >
                <div className="min-w-[92px] text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {item.k}
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-white">
                  {item.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300 sm:text-right">
            Clean handoff • scalable architecture • production-grade delivery
          </div>
        </div>
      </Reveal>
    </section>
  );
}