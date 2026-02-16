"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";

type FormState = "idle" | "sending" | "success" | "error";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

type ContactPrefillPayload = {
  kind: "service" | "product";
  name: string;
  price?: string;
  badge?: string;
  bullets?: string[]; // ✅ por si luego mandas bullets también
};

function buildPrefillMessage(p: ContactPrefillPayload) {
  const header =
    p.kind === "service"
      ? `Hi Elias — I'm interested in the Service: ${p.name}${p.price ? ` (${p.price})` : ""}.`
      : `Hi Elias — I'm interested in the Product MVP: ${p.name}${p.price ? ` (${p.price})` : ""}.`;

  const badge = p.badge ? `\nTag: ${p.badge}` : "";

  const bullets =
    p.bullets && p.bullets.length
      ? `\n\nIncluded / notes:\n${p.bullets.map((b) => `- ${b}`).join("\n")}`
      : "";

  return `${header}${badge}${bullets}

Goal:
- 

Timeline:
- 

Must-have features:
- 

Nice-to-have:
- 

Notes:
- `;
}

export default function ContactSection() {
  // ✅ si esto te causó hydration mismatch antes, cámbialo a useMemo como hiciste en page.tsx
  const year = useMemo(() => new Date().getFullYear(), []);

  const [state, setState] = useState<FormState>("idle");
  const [err, setErr] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  // ✅ Listen to selections from Services/Products
  useEffect(() => {
    function onPrefill(e: Event) {
      const ce = e as CustomEvent<ContactPrefillPayload>;
      const payload = ce.detail;
      if (!payload?.name) return;

      const nextMsg = buildPrefillMessage(payload);

      setFields((prev) => {
        const hasUserMessage = prev.message.trim().length > 0;
        const message = hasUserMessage
          ? `${prev.message.trim()}\n\n---\n${nextMsg}`
          : nextMsg;

        const budget =
          prev.budget.trim().length === 0 && payload.price ? payload.price : prev.budget;

        return { ...prev, message, budget };
      });

      setState("idle");
      setErr("");
    }

    window.addEventListener("contact:prefill", onPrefill as EventListener);
    return () =>
      window.removeEventListener("contact:prefill", onPrefill as EventListener);
  }, []);

  const canSubmit = useMemo(() => {
    if (state === "sending") return false;
    if (!fields.name.trim()) return false;
    if (!isEmail(fields.email)) return false;
    if (fields.message.trim().length < 10) return false;
    return true;
  }, [fields, state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");

    if (!canSubmit) {
      setErr("Please fill name, a valid email, and a message (10+ chars).");
      setState("error");
      return;
    }

    try {
      setState("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send message.");
      }

      setState("success");
      setFields({ name: "", email: "", message: "", budget: "" });
    } catch (e: any) {
      setState("error");
      setErr(e?.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
      {/* separator */}
      <div className="mb-8 h-px w-full bg-zinc-200/70 dark:bg-zinc-800" />

      <Reveal>
        <div
          className={cn(
            "rounded-2xl border p-6 transition-colors duration-300",
            // ✅ invert theme for premium contrast:
            // Light mode: dark card
            "border-zinc-200 bg-zinc-950 text-white",
            // Dark mode: light card
            "dark:border-zinc-800 dark:bg-white dark:text-zinc-900"
          )}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Let’s build something.
              </h2>
              <p
                className={cn(
                  "mt-2 transition-colors duration-300",
                  // light mode on dark card
                  "text-white/70",
                  // dark mode on light card
                  "dark:text-zinc-600"
                )}
              >
                Tell me what you’re building. I’ll reply with next steps and a clear plan.
              </p>
            </div>

            <a
              href="mailto:rmngzps@gmail.com"
              className={cn(
                "mt-3 sm:mt-0 text-sm font-medium transition-colors duration-200 hover:underline",
                "text-white/90 hover:text-white",
                "dark:text-zinc-900 dark:hover:text-zinc-900"
              )}
            >
              Prefer email? rmngzps@gmail.com →
            </a>
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className={cn(
                    "mb-1 block text-sm font-medium",
                    "text-white/90",
                    "dark:text-zinc-900"
                  )}
                >
                  Name
                </label>
                <input
                  value={fields.name}
                  onChange={(e) =>
                    setFields((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className={cn(
                    "h-11 w-full rounded-xl border px-4 text-sm outline-none transition-colors duration-200",

                    // ✅ light mode (dark form)
                    "border-white/10 bg-black text-white placeholder:text-white/35",
                    "focus:ring-2 focus:ring-white/15",

                    // ✅ dark mode (light form)
                    "dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:placeholder:text-zinc-400",
                    "dark:focus:ring-zinc-200"
                  )}
                />
              </div>

              <div>
                <label
                  className={cn(
                    "mb-1 block text-sm font-medium",
                    "text-white/90",
                    "dark:text-zinc-900"
                  )}
                >
                  Email
                </label>
                <input
                  value={fields.email}
                  onChange={(e) =>
                    setFields((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                  inputMode="email"
                  className={cn(
                    "h-11 w-full rounded-xl border px-4 text-sm outline-none transition-colors duration-200",

                    "border-white/10 bg-black text-white placeholder:text-white/35",
                    "focus:ring-2 focus:ring-white/15",

                    "dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:placeholder:text-zinc-400",
                    "dark:focus:ring-zinc-200"
                  )}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  className={cn(
                    "mb-1 block text-sm font-medium",
                    "text-white/90",
                    "dark:text-zinc-900"
                  )}
                >
                  Budget (optional)
                </label>
                <input
                  value={fields.budget}
                  onChange={(e) =>
                    setFields((p) => ({ ...p, budget: e.target.value }))
                  }
                  placeholder="e.g. $2k–$5k"
                  className={cn(
                    "h-11 w-full rounded-xl border px-4 text-sm outline-none transition-colors duration-200",

                    "border-white/10 bg-black text-white placeholder:text-white/35",
                    "focus:ring-2 focus:ring-white/15",

                    "dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:placeholder:text-zinc-400",
                    "dark:focus:ring-zinc-200"
                  )}
                />
              </div>

              <div className="sm:flex sm:items-end">
                <div
                  className={cn(
                    "text-xs transition-colors duration-300",
                    "text-white/55",
                    "dark:text-zinc-500"
                  )}
                >
                  Typical reply: within 24–48h. If urgent, email me directly.
                </div>
              </div>
            </div>

            <div>
              <label
                className={cn(
                  "mb-1 block text-sm font-medium",
                  "text-white/90",
                  "dark:text-zinc-900"
                )}
              >
                Message
              </label>
              <textarea
                value={fields.message}
                onChange={(e) =>
                  setFields((p) => ({ ...p, message: e.target.value }))
                }
                placeholder="What are you building? What’s the goal, timeline, and must-have features?"
                rows={6}
                className={cn(
                  "w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors duration-200",

                  "border-white/10 bg-black text-white placeholder:text-white/35",
                  "focus:ring-2 focus:ring-white/15",

                  "dark:border-zinc-200 dark:bg-white dark:text-zinc-900 dark:placeholder:text-zinc-400",
                  "dark:focus:ring-zinc-200"
                )}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit}
                className={cn(
                  "inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full px-6 text-sm font-medium transition-colors duration-200",
                  state === "success"
                    ? "bg-emerald-600 text-white"
                    : cn(
                        // ✅ invert CTA to match inverted card
                        "bg-white text-zinc-900 hover:bg-zinc-200",
                        "dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                      ),
                  !canSubmit
                    ? cn(
                        "opacity-50 cursor-not-allowed",
                        "hover:bg-white dark:hover:bg-zinc-900"
                      )
                    : ""
                )}
              >
                {state === "sending"
                  ? "Sending…"
                  : state === "success"
                  ? "Sent ✓"
                  : "Send message →"}
              </button>

              {state === "error" && err ? (
                <div className="text-sm text-rose-400 dark:text-rose-600">
                  {err}
                </div>
              ) : state === "success" ? (
                <div className="text-sm text-emerald-300 dark:text-emerald-700">
                  Message sent. I’ll get back to you soon.
                </div>
              ) : (
                <div
                  className={cn(
                    "text-xs transition-colors duration-300",
                    "text-white/55",
                    "dark:text-zinc-500"
                  )}
                >
                  By sending, you agree to be contacted back via email.
                </div>
              )}
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}