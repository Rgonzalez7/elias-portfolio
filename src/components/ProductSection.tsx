"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

type Product = {
  name: string;
  startingAt: string;
  subtitle: string;
  bullets: string[];
  upgrades: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  badge?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Client Portal Foundation",
    startingAt: "From $6,500 (scope-dependent)",
    subtitle:
      "A production-grade client portal foundation — designed around real operations, permissions, and clean UX.",
    bullets: [
      "Auth + roles (admin / client / team) with secure guardrails",
      "Admin dashboard + client views aligned to workflows",
      "Workflow-ready CRUD (projects, cases, tasks, users)",
      "Audit trail + lightweight metrics for accountability",
      "Production deployment + handoff docs + rollout checklist",
    ],
    upgrades: [
      "Advanced permissions matrix + policy rules",
      "Multi-tenant architecture (brands/teams) + tenant isolation",
      "Analytics events + KPI dashboard (tracking-ready)",
      "Automations/background jobs (reminders, workflows, syncs)",
    ],
    primaryCtaLabel: "Launch this foundation →",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Build something similar →",
    secondaryCtaHref: "#contact",
    badge: "Most requested",
  },
  {
    name: "Booking + Payments Foundation",
    startingAt: "From $7,500 (scope-dependent)",
    subtitle:
      "A conversion-focused scheduling + payments foundation — built for reliability, clarity, and revenue workflows.",
    bullets: [
      "Availability rules + booking flow (service-first UX)",
      "Stripe payments + invoices/receipts + webhooks",
      "Client booking portal + admin management dashboard",
      "Email notifications + reminders (baseline automations)",
      "Deployment + monitoring-ready setup",
    ],
    upgrades: [
      "SMS reminders (Twilio) + no-show reduction flows",
      "Subscriptions, deposits, refunds, promo codes",
      "Multi-staff scheduling + capacity logic",
      "Post-booking automations + follow-ups + CRM sync",
    ],
    primaryCtaLabel: "Launch this foundation →",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Build something similar →",
    secondaryCtaHref: "#contact",
    badge: "Fast ROI",
  },
  {
    name: "AI Knowledge Base Foundation",
    startingAt: "From $9,500 (scope-dependent)",
    subtitle:
      "A secure internal knowledge foundation — AI chat, semantic search, and controlled access for teams.",
    bullets: [
      "Document ingestion (PDFs + structured files) with permissions",
      "AI chat over private knowledge with retrieval guardrails",
      "Semantic search + filters for speed and trust",
      "Access control (roles/teams) + audit-friendly patterns",
      "Secure deployment with environment hardening",
    ],
    upgrades: [
      "Advanced RAG pipeline + citations + eval loop",
      "Workspaces / multi-tenant teams + admin controls",
      "Usage analytics + cost controls + rate limiting",
      "Automated ingestion workflows (email/drive sync optional)",
    ],
    primaryCtaLabel: "Launch this foundation →",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Build something similar →",
    secondaryCtaHref: "#contact",
    badge: "AI-ready",
  },
];

function buildPrefillMessage(p: Product) {
  const bullets = p.bullets.map((b) => `- ${b}`).join("\n");
  const upgrades = p.upgrades.map((u) => `- ${u}`).join("\n");

  return [
    `Hi Elias,`,
    ``,
    `I'm interested in building something similar to: ${p.name}`,
    `Indicative budget: ${p.startingAt}`,
    p.badge ? `Tag: ${p.badge}` : null,
    ``,
    `Baseline (core foundation):`,
    bullets,
    ``,
    `Upgrades I'm considering:`,
    upgrades,
    ``,
    `Goal:`,
    `-`,
    ``,
    `Timeline:`,
    `-`,
    ``,
    `Must-have requirements:`,
    `-`,
    ``,
    `Nice-to-have:`,
    `-`,
  ]
    .filter(Boolean)
    .join("\n");
}

function fireContactPrefill(payload: {
  kind: "service" | "product";
  name: string;
  price?: string;
  badge?: string;
  bullets?: string[];
  message?: string;
}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("contact:prefill", { detail: payload }));
}

export default function ProductsSection() {
  return (
    <section id="products" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      <div className="mb-8 h-px w-full bg-zinc-200/70 dark:bg-zinc-800" />

      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">Product Foundations</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          Architected foundations for MVPs — built to ship fast today and scale clean tomorrow.
        </p>
      </Reveal>

      <div className="mt-7 sm:mt-8 grid gap-4 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <Reveal key={p.name} delay={60}>
            <article
              className={cn(
                "h-full flex flex-col",
                "rounded-2xl border border-zinc-200 p-6",
                "bg-white dark:bg-zinc-950",
                "dark:border-zinc-800",
                "transition-transform duration-200 will-change-transform",
                "hover:-translate-y-[2px]",
                "hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.70)]"
              )}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                  Foundation
                </span>

                {p.badge ? (
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300">
                    {p.badge}
                  </span>
                ) : null}
              </div>

              <div>
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {p.startingAt}
                </div>
                <h3 className="mt-1 text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  {p.subtitle}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-800">
                  Delivery: 10–21 days
                </span>
                <span className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-800">
                  Infra: Vercel/Fly-ready
                </span>
                <span className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-800">
                  Built for: real users
                </span>
              </div>

              <ul
                className={cn(
                  "mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300",
                  "flex-1",
                  "min-h-[132px] sm:min-h-[132px] lg:min-h-[132px]"
                )}
              >
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-5">
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  Upgrade paths
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.upgrades.slice(0, 3).map((u) => (
                    <span
                      key={u}
                      className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="grid gap-2">
                  <a
                    href={p.primaryCtaHref}
                    className={cn(
                      "inline-flex h-11 w-full items-center justify-center rounded-full",
                      "bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800",
                      "dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
                      "transition-colors duration-200"
                    )}
                  >
                    {p.primaryCtaLabel}
                  </a>

                  <a
                    href={p.secondaryCtaHref}
                    onClick={() =>
                      fireContactPrefill({
                        kind: "product",
                        name: p.name,
                        price: p.startingAt,
                        badge: p.badge,
                        bullets: p.bullets,
                        message: buildPrefillMessage(p),
                      })
                    }
                    className={cn(
                      "inline-flex h-11 w-full items-center justify-center rounded-full",
                      "border border-zinc-300 bg-transparent px-6 text-sm font-medium text-zinc-900 hover:bg-zinc-50",
                      "dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900",
                      "transition-colors duration-200"
                    )}
                  >
                    {p.secondaryCtaLabel}
                  </a>
                </div>

                <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  Pricing reflects scope, integrations, and reliability requirements.
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}