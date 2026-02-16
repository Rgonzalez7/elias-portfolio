"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          A selection of work focused on SaaS, AI workflows, and product-driven engineering.
        </p>
      </Reveal>

      <div className="mt-7 sm:mt-8 grid gap-4 sm:grid-cols-2">
        {/* ===== Featured: Guibbo ===== */}
        <article
          className={[
            "sm:col-span-2 relative overflow-hidden",
            "rounded-2xl border border-zinc-200 p-6 sm:p-7",
            "bg-zinc-950 text-white",
            "dark:bg-white dark:text-zinc-900 dark:border-zinc-200",
            "transition-transform duration-200 will-change-transform",
            "hover:-translate-y-[2px]",
            "hover:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.55)]",
            "dark:hover:shadow-[0_18px_50px_-28px_rgba(0,0,0,0.25)]",
          ].join(" ")}
        >
          {/* glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute right-[-80px] top-[-90px] h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl dark:bg-zinc-900/10" />
            <div className="absolute right-[80px] top-[120px] h-[220px] w-[220px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/20" />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold">Guibbo</h3>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 dark:border-zinc-200 dark:bg-zinc-50 dark:text-zinc-700">
                  Featured
                </span>
              </div>

              <p className="mt-1 text-sm text-white/75 dark:text-zinc-600">
                AI-powered education & training platform for psychology students and educators.
              </p>
            </div>

            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 dark:border-zinc-200 dark:bg-zinc-50 dark:text-zinc-700">
              Private
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-white/80 dark:text-zinc-700">
            <li>• Real-time transcription with automated AI feedback</li>
            <li>• Role-based dashboards (admin, professor, student)</li>
            <li>• Clinical workflows, evaluations, and reporting</li>
            <li>• Built for MVP speed with scalable architecture</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind", "AI APIs"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 dark:bg-zinc-100 dark:text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:rmngzps@gmail.com?subject=Guibbo%20Demo%20Request"
              className={[
                "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium",
                "bg-white text-zinc-900 hover:bg-zinc-200",
                "dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
                "transition-colors",
              ].join(" ")}
            >
              Request demo →
            </a>

            <a
              href="#services"
              className={[
                "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium",
                "border border-white/20 text-white hover:bg-white/10",
                "dark:border-zinc-300 dark:text-zinc-900 dark:hover:bg-zinc-100",
                "transition-colors",
              ].join(" ")}
            >
              View services →
            </a>
          </div>
        </article>

        {/* ===== AI Feedback ===== */}
        <ProjectCard
          title="AI Feedback Mini-Tool"
          badge="Open source"
          description="Lightweight tool that turns raw session text into structured, actionable feedback."
          items={[
            "Text → structured report (strengths, gaps, suggestions)",
            "Configurable framework (CBT, Humanistic, Psychodynamic)",
            "Clean formatting for review + export-ready sections",
            "Designed for speed: minimal UI, clear results",
          ]}
          tags={["Next.js", "OpenAI API", "Prompting", "UI/UX", "Markdown/JSON"]}
          href="/projects/ai-feedback"
        />

        {/* ===== UI Kit ===== */}
        <ProjectCard
          title="Dashboard UI Kit"
          badge="Open source"
          description="A reusable component system for clean, fast dashboards—built for real workflows."
          items={[
            "Cards, stats, tabs, tables, modals, empty states",
            "Consistent spacing + Apple-ish typography rhythm",
            "Responsive by default with accessible tap targets",
            "Patterns for role-based apps (admin / user / viewer)",
          ]}
          tags={["React", "Tailwind", "Design System", "Accessibility", "Responsive UI"]}
          href="/ui-kit"
        />

        {/* ===== Auth Starter ===== */}
        <ProjectCard
          title="Auth + API Starter"
          badge="Open source"
          description="Clean full-stack starter for MVPs: auth, protected routes, and production-ready API patterns."
          items={[
            "JWT auth + protected routes (client + server)",
            "REST API structure (controllers/services/middleware)",
            "Env-first configuration + sensible defaults",
            "Ready for deployment (Vercel + Fly.io-style setup)",
          ]}
          tags={["Node.js", "Express", "MongoDB", "JWT", "REST"]}
          href="/projects/auth-starter"
        />
      </div>
    </section>
  );
}

/* ===== Reusable Card ===== */

type CardProps = {
  title: string;
  badge: string;
  description: string;
  items: string[];
  tags: string[];
  href: string;
};

function ProjectCard({ title, badge, description, items, tags, href }: CardProps) {
  return (
    <article
      className={[
        "rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800",
        "transition-transform duration-200 will-change-transform",
        "hover:-translate-y-[2px]",
        "hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]",
        "dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]",
      ].join(" ")}
    >
      <div className="mb-3 flex justify-end">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-400">
          {badge}
        </span>
      </div>

      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={href}
          className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors"
        >
          Try it out →
        </Link>
      </div>
    </article>
  );
}