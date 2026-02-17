"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

function CaseLine({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-3">
      <div className="text-[11px] font-medium text-white/55 dark:text-zinc-500">
        {k}
      </div>
      <div className="text-sm text-white/85 dark:text-zinc-700">{v}</div>
    </div>
  );
}

function BlurMock({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border transition-colors duration-300",
        "border-white/12 bg-white/5",
        "dark:border-zinc-200 dark:bg-zinc-50"
      )}
    >
      <div className="aspect-[16/10] w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-zinc-200 dark:via-white dark:to-white" />
          <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl dark:bg-emerald-500/10" />
          <div className="absolute right-[-30px] top-[-20px] h-28 w-28 rounded-full bg-zinc-200/20 blur-3xl dark:bg-zinc-400/20" />
          <div className="absolute inset-0 backdrop-blur-[10px]" />
        </div>

        <div className="relative p-4">
          <div className="h-2.5 w-24 rounded-full bg-white/25 dark:bg-zinc-300" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg bg-white/15 dark:bg-zinc-200" />
            <div className="h-10 rounded-lg bg-white/10 dark:bg-zinc-100" />
            <div className="h-10 rounded-lg bg-white/15 dark:bg-zinc-200" />
          </div>
          <div className="mt-3 h-24 rounded-xl bg-white/10 dark:bg-zinc-100" />
          <div className="mt-3 flex gap-2">
            <div className="h-6 w-20 rounded-full bg-white/15 dark:bg-zinc-200" />
            <div className="h-6 w-16 rounded-full bg-white/10 dark:bg-zinc-100" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-2 text-[11px] text-white/65 dark:border-zinc-200 dark:text-zinc-600">
        {label}
      </div>
    </div>
  );
}

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
                <h3 className="text-base font-semibold">Güibbo</h3>
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

          {/* ✅ Case study layer */}
          <div
            className={cn(
              "mt-6 rounded-2xl border p-4 sm:p-5 transition-colors duration-300",
              "border-white/12 bg-white/5",
              "dark:border-zinc-200 dark:bg-zinc-50"
            )}
          >
            <div className="text-xs font-medium text-white/55 dark:text-zinc-500">
              Case study
            </div>

            <div className="mt-3 grid gap-4">
              <CaseLine
                k="Outcome"
                v="Standardized practice workflows and reduced manual review via structured AI feedback + reporting."
              />
              <CaseLine
                k="Role"
                v="Owner/Creator • Product + Full-stack Engineering"
              />
              <CaseLine
                k="Scope"
                v="Dashboards, live transcription pipeline, AI evaluation/reporting flows, and production deployment foundations."
              />
            </div>
          </div>

          {/* ✅ Blur screenshots (premium) */}
          <div className="mt-6">
            <div className="text-xs font-medium text-white/55 dark:text-zinc-500">
              Screenshots (blurred)
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <BlurMock label="Guibbo — Dashboard" />
              <BlurMock label="Guibbo — Session / Transcription" />
              <BlurMock label="Guibbo — Reporting" />
            </div>
            <div className="mt-3 text-xs text-white/55 dark:text-zinc-500">
              Private build — full walkthrough available on request.
            </div>
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
          caseStudy={{
            outcome:
              "Faster review loops by converting long text into consistent, readable feedback outputs.",
            role: "Product + Engineering",
            scope: "Prompting + output schema, UI flow, reusable report components.",
          }}
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
          caseStudy={{
            outcome:
              "Accelerated UI delivery across products by standardizing patterns + components.",
            role: "UX/UI + Engineering",
            scope: "Component library, layout patterns, tokens, docs conventions.",
          }}
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
          caseStudy={{
            outcome:
              "Reduced setup time for MVPs by reusing proven auth + API scaffolding.",
            role: "Engineering",
            scope:
              "Auth flows, middleware, API structure, env configuration, deploy-ready patterns.",
          }}
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
  caseStudy: { outcome: string; role: string; scope: string };
};

function ProjectCard({
  title,
  badge,
  description,
  items,
  tags,
  href,
  caseStudy,
}: CardProps) {
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

      {/* ✅ Mini case study */}
      <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Case study
        </div>
        <div className="mt-3 grid gap-3">
          <div className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-3">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Outcome
            </div>
            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              {caseStudy.outcome}
            </div>
          </div>
          <div className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-3">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Role
            </div>
            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              {caseStudy.role}
            </div>
          </div>
          <div className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-3">
            <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              Scope
            </div>
            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              {caseStudy.scope}
            </div>
          </div>
        </div>
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