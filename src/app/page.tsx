"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";
import EditorialGrid from "@/components/EditorialGrid";
import SiteHeader from "@/components/SiteHeader";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // ✅ evita hydration mismatch con Date()
  const year = useMemo(() => new Date().getFullYear(), []);

  // ✅ activar grid con ?grid=1
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShowGrid(params.get("grid") === "1");
  }, []);

  return (
    <main
      className={cn(
        "min-h-screen overflow-x-hidden",
        "bg-white text-zinc-900",
        "dark:bg-zinc-950 dark:text-zinc-100",
        "transition-colors duration-300"
      )}
    >
      <EditorialGrid enabled={showGrid} />

      <SiteHeader />

      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-5xl px-5 pt-12 pb-12 sm:pt-20 sm:pb-14"
      >
        <div className="relative overflow-hidden">
          {/* glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
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

          {/* content */}
          <div className="mx-auto max-w-3xl text-center sm:ml-auto sm:text-right">
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
                Building AI-powered SaaS products with clean UX and real-world
                workflows.
              </h1>

              <p
                className={cn(
                  "mt-4 sm:mt-5 mx-auto sm:ml-auto max-w-2xl",
                  "text-base sm:text-lg leading-relaxed",
                  "text-zinc-600 dark:text-zinc-300",
                  "transition-colors duration-300"
                )}
              >
                Full-stack engineer building scalable apps and practical AI
                tooling—focused on speed, clarity, and product execution.
              </p>
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

      <ProjectsSection />

      {/* About (Bridge between Projects → Services) */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
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
                      <div className="mt-1 text-sm font-medium">
                        From MVP to Production
                      </div>
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

      <ServicesSection />
      <ProductsSection />

      {/* ✅ Contact real (form + resend ya lo tienes) */}
      <ContactSection />

      <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm tracking-wide text-zinc-500 dark:text-zinc-400 text-right transition-colors duration-300">
        © {year} Elias Gonzalez
      </footer>
    </main>
  );
}