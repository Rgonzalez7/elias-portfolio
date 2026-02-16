"use client";

import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

type Service = {
  tier: "Starter" | "Pro" | "Premium";
  price: string;
  title: string;
  subtitle: string;
  bullets: string[];
  upgrades: string[]; // ✅ upsells elegantes
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
};

const SERVICES: Service[] = [
  {
    tier: "Starter",
    price: "From $3,500",
    title: "Discovery + Blueprint Sprint",
    subtitle:
      "For founders who want clarity first — strategy, scope, UX plan, and an execution-ready blueprint.",
    bullets: [
      "Product scope + priorities (what matters now)",
      "User flows + UX wireframe direction",
      "Technical plan (stack, data model, API map)",
      "Delivery plan + milestones",
      "Risk list + tradeoffs (no surprises)",
    ],
    upgrades: [
      "Clickable prototype (Figma)",
      "Branding polish + UI kit starter",
      "Investor / stakeholder deck-ready summary",
    ],
    ctaLabel: "Design my blueprint →",
    ctaHref: "#contact",
    badge: "Best first step",
  },
  {
    tier: "Pro",
    price: "From $6,500",
    title: "MVP Build Engagement",
    subtitle:
      "A clean, production-minded MVP — designed for real users, real feedback, and fast iteration.",
    bullets: [
      "Auth + core flows (2–4 key workflows)",
      "Dashboard + CRUD (as needed)",
      "One integration (email/payments/maps) baseline",
      "Deployment + env hardening",
      "Handoff docs + next-steps roadmap",
    ],
    upgrades: [
      "Second integration (Stripe, Twilio, etc.)",
      "Admin analytics + events tracking",
      "Role-based permissions expansion",
    ],
    ctaLabel: "Build my MVP →",
    ctaHref: "#contact",
    badge: "Most popular",
  },
  {
    tier: "Premium",
    price: "From $10k+",
    title: "Scale-Ready Product Build",
    subtitle:
      "For teams who need reliability and structure — architecture for growth, observability, and clean ops.",
    bullets: [
      "Roles & permissions (policy-ready)",
      "Analytics + KPI definitions + instrumentation",
      "Background jobs / automations",
      "Architecture for scale (multi-tenant optional)",
      "Hardening: performance, security, monitoring",
      "Polished UX + reusable component patterns",
    ],
    upgrades: [
      "Multi-tenant + billing model",
      "RAG/AI features + evaluation loop",
      "SLA-minded monitoring + incident playbook",
    ],
    ctaLabel: "Plan my build →",
    ctaHref: "#contact",
    badge: "For teams",
  },
];

function TierPill({ tier }: { tier: Service["tier"] }) {
  const styles =
    tier === "Starter"
      ? "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
      : tier === "Pro"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300"
      : "border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100";

  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium", styles)}>
      {tier}
    </span>
  );
}

function buildServicePrefillMessage(s: Service) {
  const bullets = s.bullets.map((b) => `- ${b}`).join("\n");
  const upgrades = s.upgrades.map((u) => `- ${u}`).join("\n");

  return [
    `Hi Elias,`,
    ``,
    `I'm interested in the service: ${s.title}`,
    `Indicative budget: ${s.price} (scope-dependent)`,
    s.badge ? `Tag: ${s.badge}` : null,
    ``,
    `What I'm looking for (baseline):`,
    bullets,
    ``,
    `Optional upgrades I'm considering:`,
    upgrades,
    ``,
    `Goal:`,
    `-`,
    ``,
    `Timeline:`,
    `-`,
    ``,
    `Notes / requirements:`,
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

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      <div className="mb-8 h-px w-full bg-zinc-100 dark:bg-zinc-900" />

      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">Engagements</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          Product-architected engagements — built for clarity, speed, and production-grade delivery.
        </p>
      </Reveal>

      <div className="mt-7 sm:mt-8 grid gap-4 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Reveal key={s.tier} delay={60}>
            <article
              className={cn(
                "h-full flex flex-col",
                "rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-950",
                "transition-transform duration-200 will-change-transform",
                "hover:-translate-y-[2px]",
                "hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]",
                "dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <TierPill tier={s.tier} />
                {s.badge ? (
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                    {s.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {s.price}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    Typical delivery • 10–21 days
                  </div>
                </div>

                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  {s.subtitle}
                </p>
              </div>

              <ul
                className={cn(
                  "mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300",
                  "flex-1",
                  "min-h-[132px] sm:min-h-[132px] lg:min-h-[132px]"
                )}
              >
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-5">
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  Add-ons
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.upgrades.slice(0, 3).map((u) => (
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
                <a
                  href={s.ctaHref}
                  onClick={() =>
                    fireContactPrefill({
                      kind: "service",
                      name: s.title,
                      price: s.price,
                      badge: s.badge,
                      bullets: s.bullets,
                      message: buildServicePrefillMessage(s),
                    })
                  }
                  className={cn(
                    "inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium",
                    s.tier === "Pro"
                      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                      : "border border-zinc-300 text-zinc-900 hover:bg-white dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900",
                    "transition-colors duration-200"
                  )}
                >
                  {s.ctaLabel}
                </a>

                <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  We’ll confirm scope on a short call and send a clean execution plan.
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}