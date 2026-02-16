"use client";

import Reveal from "@/components/Reveal";

type Service = {
  tier: "Starter" | "Pro" | "Premium";
  price: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
};

const SERVICES: Service[] = [
  {
    tier: "Starter",
    price: "$1,500",
    title: "AI Document Assistant",
    subtitle: "Perfect for validating an idea fast",
    bullets: [
      "Basic RAG system",
      "PDF upload",
      "Chat with your documents",
      "Semantic search",
      "Simple deployment",
    ],
    ctaLabel: "Validate my idea →",
    ctaHref: "#contact",
    badge: "Fast",
  },
  {
    tier: "Pro",
    price: "$2,500",
    title: "AI Knowledge SaaS",
    subtitle: "For early-stage products and real users",
    bullets: [
      "User authentication",
      "Chat history",
      "Smart document filters",
      "Basic roles & permissions",
      "Clean, modern UI",
      "Production-ready deployment",
    ],
    ctaLabel: "Build my MVP →",
    ctaHref: "#contact",
    badge: "Popular",
  },
  {
    tier: "Premium",
    price: "$4,000–$6,000",
    title: "Custom AI Platform",
    subtitle: "For serious founders building scalable AI products",
    bullets: [
      "Advanced RAG pipelines",
      "Usage analytics & metrics",
      "Automated workflows",
      "Multi-tenant architecture",
      "Fully custom UI",
      "Scalable, production-grade system",
    ],
    ctaLabel: "Let’s build →",
    ctaHref: "#contact",
    badge: "For founders",
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
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      {tier}
    </span>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">Services</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          Fixed-scope packages to ship fast, clean, production-ready AI products.
        </p>
      </Reveal>

      <div className="mt-7 sm:mt-8 grid gap-4 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Reveal key={s.tier} delay={60}>
            <article
              className={[
                "h-full rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-950",
                "transition-transform duration-200 will-change-transform",
                "hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <TierPill tier={s.tier} />
                {s.badge ? (
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                    {s.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-4">
                <div className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  {s.price}
                </div>
                <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  {s.subtitle}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={s.ctaHref}
                  className={[
                    "inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium",
                    s.tier === "Pro"
                      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                      : "border border-zinc-300 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900",
                    "transition-colors duration-200",
                  ].join(" ")}
                >
                  {s.ctaLabel}
                </a>

                <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  Typical delivery: 10–21 days (scope-dependent).
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}