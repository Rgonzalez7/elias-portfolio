"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tabs from "@/components/ui/Tabs";
import Modal from "@/components/ui/Modal";

type FrameworkKey = "cbt" | "humanistic" | "psychodynamic";

type FeedbackResponse = {
  ok: boolean;
  framework: FrameworkKey;
  meta?: {
    wordCount?: number;
    model?: string;
  };
  report: {
    strengths: string[];
    gaps: string[];
    suggestions: string[];
    overallLevel: "Beginner" | "Intermediate" | "Advanced";
    reformulation: string;
  };
  markdown: string;
};

const FRAMEWORKS: { key: FrameworkKey; label: string; blurb: string }[] = [
  { key: "cbt", label: "CBT", blurb: "Claridad, estructura, preguntas, hipótesis y plan." },
  { key: "humanistic", label: "Humanistic", blurb: "Empatía, congruencia, reflejo emocional, presencia." },
  { key: "psychodynamic", label: "Psychodynamic", blurb: "Patrones, defensa, transferencia y significado." },
];

const SAMPLE_TEXT = `Therapist: Thanks for being here today. What feels most present for you?
Client: I feel anxious all the time. Like something bad is going to happen.
Therapist: When does it feel strongest?
Client: Mostly at night. My mind races. I can't stop thinking.
Therapist: What do you notice in your body when that happens?
Client: Tight chest and I start checking my phone, refreshing...`;

// helper
function wc(s: string) {
  return (s || "").trim().split(/\s+/).filter(Boolean).length;
}

export default function AIFeedbackMiniToolPage() {
  const [tab, setTab] = useState<"tool" | "schema" | "examples">("tool");

  // framework segmented
  const [framework, setFramework] = useState<FrameworkKey>("cbt");

  // input
  const [text, setText] = useState<string>(SAMPLE_TEXT);

  // results
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string>("");
  const [data, setData] = useState<FeedbackResponse | null>(null);

  // modals
  const [openJson, setOpenJson] = useState(false);
  const [openMd, setOpenMd] = useState(false);

  const wordCount = useMemo(() => wc(text), [text]);
  const canRun = wordCount >= 30 && !loading;

  async function run() {
    setErr("");
    setLoading(true);
    setData(null);

    try {
      const res = await fetch("/api/ai-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ framework, text }),
      });

      const json = (await res.json()) as FeedbackResponse;

      if (!res.ok || !json?.ok) {
        throw new Error((json as any)?.error || "Failed to generate feedback.");
      }

      setData(json);
    } catch (e: any) {
      setErr(e?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      {/* ✅ Main nav */}
      <SiteHeader />

      <Container className="py-8 sm:py-14">
        {/* Header (mobile-first) */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight">AI Feedback Mini-Tool</h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Lightweight tool that turns raw session text into structured, actionable feedback.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "OpenAI API", "Prompting", "UI/UX", "Markdown/JSON"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:pt-1">
            <Badge variant="success">Open source</Badge>
          </div>
        </div>

        {/* Tabs top */}
        <div className="mt-7">
          <Tabs
            items={[
              { key: "tool", label: "Tool" },
              { key: "schema", label: "Schema" },
              { key: "examples", label: "Examples" },
            ]}
            value={tab}
            onChange={(k) => setTab(k as any)}
          />
        </div>

        {/* TOOL */}
        {tab === "tool" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Input */}
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Input</CardTitle>
                  <CardDescription>Paste the session text. The tool will output a structured report.</CardDescription>
                </div>
                <Badge>Text</Badge>
              </CardHeader>

              {/* Framework segmented (no <select>) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {FRAMEWORKS.map((f) => {
                  const active = f.key === framework;

                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setFramework(f.key)}
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                        "max-w-full",
                        !active &&
                          "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900",
                        active &&
                          "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
                      ].join(" ")}
                    >
                      <span className="font-medium">{f.label}</span>

                      <span
                        className={[
                          "text-xs hidden sm:inline transition-opacity",
                          active
                            ? "opacity-80 text-white dark:text-zinc-700"
                            : "opacity-70 text-zinc-600 dark:text-zinc-400",
                        ].join(" ")}
                      >
                        {f.blurb}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste session transcript..."
                  className="min-h-[220px] sm:min-h-[260px] w-full rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed
                             text-zinc-900 outline-none transition-colors
                             focus:border-zinc-400
                             dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
                />
                <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{wordCount} words</span>
                  <span className={wordCount < 30 ? "text-rose-600 dark:text-rose-400" : ""}>
                    {wordCount < 30 ? "Add more text (min ~30 words)" : "Ready"}
                  </span>
                </div>
              </div>

              {err ? (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  {err}
                </div>
              ) : null}

              <CardFooter className="mt-5">
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
                  <Button variant="outline" onClick={() => setText(SAMPLE_TEXT)} className="w-full sm:w-auto">
                    Load sample
                  </Button>
                  <Button onClick={run} disabled={!canRun} className="w-full sm:w-auto">
                    {loading ? "Analyzing..." : "Run analysis"}
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Output */}
            <Card className="h-fit">
              <CardHeader>
                <div>
                  <CardTitle>Output</CardTitle>
                  <CardDescription>Structured JSON + export-friendly Markdown.</CardDescription>
                </div>
                <Badge variant={data ? "success" : undefined}>{data ? "Generated" : "Waiting"}</Badge>
              </CardHeader>

              {!data ? (
                <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                  Run analysis to see strengths, gaps, suggestions and a reformulation aligned to the selected framework.
                </div>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-sm font-semibold">Overall level</div>
                      <div className="sm:pt-0">
                        <Badge variant="success">{data.report.overallLevel}</Badge>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <span className="font-medium">Reformulation:</span>{" "}
                      <span className="opacity-90">{data.report.reformulation}</span>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                      <div className="text-sm font-semibold">Strengths</div>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                        {data.report.strengths.map((x, i) => (
                          <li key={i}>• {x}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                      <div className="text-sm font-semibold">Gaps</div>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                        {data.report.gaps.map((x, i) => (
                          <li key={i}>• {x}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                      <div className="text-sm font-semibold">Suggestions</div>
                      <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                        {data.report.suggestions.map((x, i) => (
                          <li key={i}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2 pt-1">
                    <Button variant="outline" onClick={() => setOpenJson(true)} className="w-full sm:w-auto">
                      View JSON
                    </Button>
                    <Button variant="outline" onClick={() => setOpenMd(true)} className="w-full sm:w-auto">
                      View Markdown
                    </Button>
                  </div>

                  <div className="text-xs text-zinc-500 dark:text-zinc-400 break-words">
                    {data.meta?.model ? <>Model: {data.meta.model} • </> : null}
                    Framework: {data.framework}
                    {typeof data.meta?.wordCount === "number" ? <> • Words: {data.meta.wordCount}</> : null}
                  </div>
                </div>
              )}
            </Card>
          </div>
        ) : null}

        {/* SCHEMA */}
        {tab === "schema" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Response shape</CardTitle>
                  <CardDescription>Consistent object you can store/export.</CardDescription>
                </div>
                <Badge>JSON</Badge>
              </CardHeader>

              <pre className="mt-4 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{`{
  ok: true,
  framework: "cbt" | "humanistic" | "psychodynamic",
  meta: { wordCount?: number, model?: string },
  report: {
    strengths: string[],
    gaps: string[],
    suggestions: string[],
    overallLevel: "Beginner" | "Intermediate" | "Advanced",
    reformulation: string
  },
  markdown: string
}`}
              </pre>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Why both JSON + Markdown?</CardTitle>
                  <CardDescription>Fast UX now + clean export later.</CardDescription>
                </div>
              </CardHeader>

              <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                <p>
                  • <span className="font-medium">JSON</span> = ideal para guardar en DB, versionar y renderizar UI.
                </p>
                <p>
                  • <span className="font-medium">Markdown</span> = ideal para copiar/pegar, PDF, Notion, Docs.
                </p>
                <p>
                  • Mantienes un pipeline limpio:{" "}
                  <span className="font-medium">Text → JSON → UI + Export</span>.
                </p>
              </div>
            </Card>
          </div>
        ) : null}

        {/* EXAMPLES */}
        {tab === "examples" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Use cases</CardTitle>
                  <CardDescription>Where this fits in real workflows.</CardDescription>
                </div>
                <Badge>Product</Badge>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Evaluar sesiones (estudiante/coach) en segundos.</li>
                <li>• Reporte consistente para revisiones del profesor.</li>
                <li>• Export ready: PDF/Notion/Docs sin rehacer formato.</li>
                <li>• Framework switch: misma sesión, distinta lente clínica.</li>
              </ul>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Quality knobs</CardTitle>
                  <CardDescription>Options you can add next.</CardDescription>
                </div>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Long context chunking (si la transcripción es muy larga).</li>
                <li>• Scoring por criterios (rapport, preguntas abiertas, encuadre...).</li>
                <li>• “Evidence quotes”: citar fragmentos del texto que justifican cada punto.</li>
                <li>• Guardar historial por sesión/usuario.</li>
              </ul>
            </Card>
          </div>
        ) : null}

        {/* Modals */}
        <Modal open={openJson} onClose={() => setOpenJson(false)} title="JSON output">
          <pre className="whitespace-pre-wrap break-words text-xs text-zinc-800 dark:text-zinc-100">
            {data ? JSON.stringify(data, null, 2) : "—"}
          </pre>
        </Modal>

        <Modal open={openMd} onClose={() => setOpenMd(false)} title="Markdown output">
          <pre className="whitespace-pre-wrap break-words text-xs text-zinc-800 dark:text-zinc-100">
            {data?.markdown ?? "—"}
          </pre>
        </Modal>
      </Container>
    </main>
  );
}