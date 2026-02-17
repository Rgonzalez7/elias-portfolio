"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[90px] mx-auto max-w-5xl px-5 py-10 sm:py-12">
      {/* top separator (strong) */}
      <div className="mb-8 h-px w-full bg-zinc-200/70 dark:bg-zinc-800" />

      <Reveal>
        {/* ✅ Inverted panel: black in light, white in dark */}
        <div
          className={cn(
            "rounded-2xl border p-6 sm:p-8 transition-colors duration-300",
            "border-zinc-900 bg-zinc-950 text-white",
            "dark:border-zinc-200 dark:bg-white dark:text-zinc-900"
          )}
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Left: narrative */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight">About</h2>

              <p
                className={cn(
                  "mt-2 transition-colors duration-300",
                  "text-white/75",
                  "dark:text-zinc-600"
                )}
              >
                I build clean, production-ready products with fast iteration — from MVP scope to scalable systems.
              </p>

              <div
                className={cn(
                  "mt-5 space-y-4 text-sm leading-relaxed transition-colors duration-300",
                  "text-white/75",
                  "dark:text-zinc-600"
                )}
              >
                <p>
                  I’m a full-stack engineer with a background in systems engineering and education. I build SaaS
                  products that prioritize clarity, usability, and scalable architecture—especially in learning,
                  automation, and AI-assisted workflows.
                </p>
                <p>
                  I’m comfortable across the stack (frontend, backend, databases, integrations) and I work best in
                  fast-moving environments where product and engineering meet.
                </p>
              </div>

              {/* Stack chips (inverted) */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React / Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind",
                  "REST APIs",
                  "AI integrations",
                ].map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs transition-colors duration-300",
                      "border-white/15 bg-white/10 text-white/85",
                      "dark:border-zinc-200 dark:bg-zinc-50 dark:text-zinc-700"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: “bridge cards” */}
            <div className="grid gap-3">
              {/* Card 1 */}
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
                  What I optimize for
                </div>

                <div
                  className={cn(
                    "mt-2 space-y-2 text-sm transition-colors duration-300",
                    "text-white/85",
                    "dark:text-zinc-700"
                  )}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Fast shipping with clear scope</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Clean UX + maintainable architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Production reliability (deploy, hardening)</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={cn(
                  "rounded-2xl border p-5 transition-colors duration-300",
                  "border-white/15 bg-white/5",
                  "dark:border-zinc-200 dark:bg-zinc-50"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div
                      className={cn(
                        "text-xs font-medium transition-colors duration-300",
                        "text-white/55",
                        "dark:text-zinc-500"
                      )}
                    >
                      Typical engagement
                    </div>
                    <div className="mt-1 text-sm font-medium">From MVP to Production</div>
                  </div>

                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300",
                      "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
                      "dark:border-emerald-200 dark:bg-emerald-50 dark:text-emerald-700"
                    )}
                  >
                    Fast + clean
                  </span>
                </div>

                <div
                  className={cn(
                    "mt-3 grid gap-2 text-sm transition-colors duration-300",
                    "text-white/85",
                    "dark:text-zinc-700"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={cn("transition-colors duration-300", "text-white/55", "dark:text-zinc-500")}>
                      MVP sprint
                    </span>
                    <span className="font-medium">10–21 days</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className={cn("transition-colors duration-300", "text-white/55", "dark:text-zinc-500")}>
                      Product foundations
                    </span>
                    <span className="font-medium">10–21 days</span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className={cn("transition-colors duration-300", "text-white/55", "dark:text-zinc-500")}>
                      Scale hardening
                    </span>
                    <span className="font-medium">as needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* bottom separator (strong) */}
      <div className="mt-10 h-px w-full bg-zinc-200/70 dark:bg-zinc-800" />
    </section>
  );
}