"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Reveal from "@/components/Reveal";
import EditorialGrid from "@/components/EditorialGrid";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  const year = new Date().getFullYear();

  // ✅ activar grid con ?grid=1
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setShowGrid(params.get("grid") === "1");
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <EditorialGrid enabled={showGrid} />

      {/* ✅ Shared header */}
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-5 pt-20 pb-14">
        <div className="relative">
          {/* micro blur glow (behind) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute right-[-80px] top-[-60px] h-[280px] w-[280px] rounded-full bg-zinc-200/70 blur-3xl
                        dark:bg-zinc-800/40"
            />
            <div
              className="absolute right-[120px] top-[120px] h-[220px] w-[220px] rounded-full bg-emerald-200/40 blur-3xl
                        dark:bg-emerald-900/20"
            />
          </div>

          {/* content */}
          <div className="ml-auto max-w-3xl text-right">
            <Reveal>
              {/* Availability line */}
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600
                          dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300 transition-colors duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Available for remote — Full-Stack / AI workflows</span>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Building AI-powered SaaS products with clean UX and real-world workflows.
              </h1>

              <p className="mt-5 ml-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                Full-stack engineer building scalable apps and practical AI tooling—focused on speed,
                clarity, and product execution.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
                <a
                  href="#projects"
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white
                            transition-colors duration-200 hover:bg-zinc-800
                            dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900
                            transition-colors duration-200 hover:bg-zinc-50
                            dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
                >
                  Contact
                </a>

                <div className="mt-2 sm:mt-0 sm:ml-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300 justify-end">
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

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-5 py-12">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
            A selection of work focused on SaaS, AI workflows, and product-driven engineering.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Featured: Guibbo */}
          <article
            className="rounded-2xl border border-zinc-200 p-7 sm:p-6 dark:border-zinc-800 dark:bg-zinc-950
                       transition-transform duration-200 will-change-transform
                       hover:-translate-y-[2px]
                       hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]
                       dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold">Guibbo</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  AI-powered education & training platform for psychology students and educators.
                </p>
              </div>

              <span
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700
                           dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
              >
                Private
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              <li>• Real-time transcription with automated AI feedback</li>
              <li>• Role-based dashboards (admin, professor, student)</li>
              <li>• Clinical workflows, evaluations, and reporting</li>
              <li>• Built for MVP speed with scalable architecture</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Tailwind", "AI APIs"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:rmngzps@gmail.com?subject=Guibbo%20Demo%20Request"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
              >
                Request demo
              </a>
            </div>
          </article>

          {/* AI Feedback Mini-Tool */}
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-transform duration-200 will-change-transform hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]">
            <div className="mb-3 flex justify-end">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-400 transition-colors duration-300">
                Open source
              </span>
            </div>

            <h3 className="text-base font-semibold">AI Feedback Mini-Tool</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Lightweight tool that turns raw session text into structured, actionable feedback.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              <li>• Text → structured report (strengths, gaps, suggestions)</li>
              <li>• Configurable framework (CBT, Humanistic, Psychodynamic)</li>
              <li>• Clean formatting for review + export-ready sections</li>
              <li>• Designed for speed: minimal UI, clear results</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "OpenAI API", "Prompting", "UI/UX", "Markdown/JSON"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:rmngzps@gmail.com?subject=AI%20Feedback%20Mini-Tool%20Demo"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
              >
                Request demo
              </a>
            </div>
          </article>

          {/* Dashboard UI Kit */}
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-transform duration-200 will-change-transform hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]">
            <div className="mb-3 flex justify-end">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-400 transition-colors duration-300">
                Open source
              </span>
            </div>

            <h3 className="text-base font-semibold">Dashboard UI Kit</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              A reusable component system for clean, fast dashboards—built for real workflows.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              <li>• Cards, stats, tabs, tables, modals, empty states</li>
              <li>• Consistent spacing + Apple-ish typography rhythm</li>
              <li>• Responsive by default with accessible tap targets</li>
              <li>• Patterns for role-based apps (admin / user / viewer)</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Tailwind", "Design System", "Accessibility", "Responsive UI"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* ✅ UPDATED: go to /ui-kit */}
              <Link
                href="/ui-kit"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
              >
                View components
              </Link>
            </div>
          </article>

          {/* Auth + API Starter */}
          <article className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-transform duration-200 will-change-transform hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]">
            <div className="mb-3 flex justify-end">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-400 transition-colors duration-300">
                Open source
              </span>
            </div>

            <h3 className="text-base font-semibold">Auth + API Starter</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Clean full-stack starter for MVPs: auth, protected routes, and production-ready API patterns.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              <li>• JWT auth + protected routes (client + server)</li>
              <li>• REST API structure (controllers/services/middleware)</li>
              <li>• Env-first configuration + sensible defaults</li>
              <li>• Ready for deployment (Vercel + Fly.io-style setup)</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "JWT", "REST"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/rgonzalez7"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
              >
                See repo
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-12">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
        </Reveal>

        <div className="mt-4 w-full space-y-4 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          <p>
            I’m a full-stack engineer with a background in systems engineering and education. I build SaaS
            products that prioritize clarity, usability, and scalable architecture—especially in learning,
            automation, and AI-assisted workflows.
          </p>
          <p>
            I’m comfortable across the stack (frontend, backend, databases, integrations) and I work best in
            fast-moving environments where product and engineering meet.
          </p>
          <p className="text-sm">
            <span className="text-zinc-900 font-medium dark:text-white transition-colors duration-300">
              Core stack:
            </span>{" "}
            JavaScript, React, Node.js, Express, MongoDB, Tailwind, REST APIs, AI integrations.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-12">
        <Reveal>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-colors duration-300">
            <h2 className="text-xl font-semibold tracking-tight">Let’s build something.</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              If you’re hiring for a remote role or need help building an MVP, feel free to reach out.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:rmngzps@gmail.com"
                className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800
                           dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200
                           transition-colors duration-200"
              >
                Email me
              </a>
              <a
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
                href="https://github.com/rgonzalez7"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
                href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 pb-10 text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          © {year} Elias Gonzalez
        </footer>
      </section>
    </main>
  );
}