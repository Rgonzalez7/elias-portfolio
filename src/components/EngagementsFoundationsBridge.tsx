"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export default function EngagementsFoundationsBridge() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      <Reveal>
        {/* ✅ Inverted panel: black in light, white in dark */}
        <div
          className={cn(
            "rounded-2xl border p-6 sm:p-8 transition-colors duration-300",
            "border-zinc-900 bg-zinc-950 text-white",
            "dark:border-zinc-200 dark:bg-white dark:text-zinc-900"
          )}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Choose your path
              </h2>

              <p
                className={cn(
                  "mt-2 transition-colors duration-300",
                  "text-white/75",
                  "dark:text-zinc-600"
                )}
              >
                Engagements are tailored builds. Foundations are pre-architected starting points.
                Same standards — different starting assumptions.
              </p>

              <div
                className={cn(
                  "mt-4 text-sm space-y-2 transition-colors duration-300",
                  "text-white/80",
                  "dark:text-zinc-600"
                )}
              >
                <div className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <b>Engagements</b>: best when scope is unique or evolving.
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>
                    <b>Foundations</b>: best when you want a proven base + upgrade paths.
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-3">
              {/* Engagements */}
              <div
                className={cn(
                  "rounded-2xl border p-5 transition-colors duration-300",
                  "border-white/15 bg-white/5",
                  "dark:border-zinc-200 dark:bg-zinc-50"
                )}
              >
                <div
                  className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    "text-white/55",
                    "dark:text-zinc-500"
                  )}
                >
                  Engagements include
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {["Discovery", "Architecture", "Custom workflows", "Production deploy", "Roadmap"].map(
                    (t) => (
                      <span
                        key={t}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs transition-colors duration-300",
                          "border-white/15 bg-white/10 text-white/85",
                          "dark:border-zinc-200 dark:bg-white dark:text-zinc-700"
                        )}
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Foundations */}
              <div
                className={cn(
                  "rounded-2xl border p-5 transition-colors duration-300",
                  "border-white/15 bg-white/5",
                  "dark:border-zinc-200 dark:bg-zinc-50"
                )}
              >
                <div
                  className={cn(
                    "text-xs font-medium transition-colors duration-300",
                    "text-white/55",
                    "dark:text-zinc-500"
                  )}
                >
                  Foundations include
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {["Proven baseline", "Fast delivery", "Upgrade paths", "Ops-ready", "Clean handoff"].map(
                    (t) => (
                      <span
                        key={t}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs transition-colors duration-300",
                          "border-white/15 bg-white/10 text-white/85",
                          "dark:border-zinc-200 dark:bg-white dark:text-zinc-700"
                        )}
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div
                className={cn(
                  "text-xs transition-colors duration-300",
                  "text-white/55",
                  "dark:text-zinc-500"
                )}
              >
                Not sure? Start with an Engagement — we can always anchor to a Foundation baseline.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}