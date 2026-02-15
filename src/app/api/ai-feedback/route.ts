import { NextResponse } from "next/server";

export const runtime = "nodejs";

type FrameworkKey = "cbt" | "humanistic" | "psychodynamic";
type OverallLevel = "Beginner" | "Intermediate" | "Advanced";

type Report = {
  strengths: string[];
  gaps: string[];
  suggestions: string[];
  overallLevel: OverallLevel;
  reformulation: string;
};

function wordCount(s: string) {
  return (s || "").trim().split(/\s+/).filter(Boolean).length;
}

function frameworkPrompt(framework: FrameworkKey) {
  switch (framework) {
    case "cbt":
      return "Use a CBT lens: structure, triggers, thoughts, behaviors, interventions, next steps.";
    case "humanistic":
      return "Use a Humanistic lens: empathy, reflection, congruence, emotion labeling, relational safety.";
    case "psychodynamic":
      return "Use a Psychodynamic lens: patterns, defenses, affect, meaning, transference/countertransference hypotheses.";
  }
}

function buildMarkdown(framework: FrameworkKey, report: Report) {
  return `# AI Feedback (${framework})

## Strengths
${(report.strengths || []).map((x) => `- ${x}`).join("\n")}

## Gaps
${(report.gaps || []).map((x) => `- ${x}`).join("\n")}

## Suggestions
${(report.suggestions || []).map((x) => `- ${x}`).join("\n")}

## Overall level
**${report.overallLevel}**

## Suggested reformulation
${report.reformulation}
`;
}

function normalizeReport(maybe: any): Report | null {
  if (!maybe || typeof maybe !== "object") return null;

  const strengths = Array.isArray(maybe.strengths)
    ? maybe.strengths.filter((x: any) => typeof x === "string")
    : [];
  const gaps = Array.isArray(maybe.gaps) ? maybe.gaps.filter((x: any) => typeof x === "string") : [];
  const suggestions = Array.isArray(maybe.suggestions)
    ? maybe.suggestions.filter((x: any) => typeof x === "string")
    : [];

  const overallLevel = maybe.overallLevel as OverallLevel;
  const okLevel = overallLevel === "Beginner" || overallLevel === "Intermediate" || overallLevel === "Advanced";

  const reformulation = typeof maybe.reformulation === "string" ? maybe.reformulation : "";

  if (!okLevel) return null;
  if (!reformulation) return null;

  return { strengths, gaps, suggestions, overallLevel, reformulation };
}

export async function POST(req: Request) {
  try {
    const { framework, text } = (await req.json()) as { framework: FrameworkKey; text: string };

    const wc = wordCount(text);
    if (!text || wc < 30) {
      return NextResponse.json(
        { ok: false, error: "Please provide at least ~30 words of session text." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // ✅ Mock mode (no key)
    if (!apiKey) {
      const report: Report = {
        strengths: ["Clear opening question to invite sharing.", "Good exploration of body sensations."],
        gaps: ["Needs more specificity on timeline and triggers.", "Could validate emotions more explicitly."],
        suggestions: [
          "Ask for a recent concrete example (last 24–48h).",
          "Reflect feeling + meaning in one sentence, then ask a focused follow-up.",
          "Close with a small agreed next step for the week.",
        ],
        overallLevel: "Intermediate",
        reformulation:
          "It sounds like the anxiety shows up most at night, and your mind races as you try to regain certainty—let’s slow it down and map what happens right before it spikes.",
      };

      return NextResponse.json({
        ok: true,
        framework,
        meta: { wordCount: wc, model: "mock" },
        report,
        markdown: buildMarkdown(framework, report),
      });
    }

    // ✅ Real mode (OpenAI)
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    const system = "You are a clinical skills feedback engine.";
    const user = `
Framework instruction: ${frameworkPrompt(framework)}

Input session text:
"""
${text}
"""

Return JSON with this exact schema:
{
  "strengths": string[],
  "gaps": string[],
  "suggestions": string[],
  "overallLevel": "Beginner" | "Intermediate" | "Advanced",
  "reformulation": string
}

Rules:
- Make items specific and actionable.
- Keep each bullet short (max ~18 words).
- No diagnosis. Focus on communication/intervention skills.
- No extra keys.
`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });

    if (!r.ok) {
      const t = await r.text();
      return NextResponse.json({ ok: false, error: t || "OpenAI error" }, { status: 500 });
    }

    const out = await r.json();
    const content: string | undefined = out?.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json({ ok: false, error: "Empty response from model." }, { status: 500 });
    }

    let parsed: any;
    try {
      parsed = JSON.parse(content);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Model did not return valid JSON. Try again." },
        { status: 500 }
      );
    }

    const report = normalizeReport(parsed);
    if (!report) {
      return NextResponse.json(
        { ok: false, error: "Model returned JSON but not matching the expected schema." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      framework,
      meta: { wordCount: wc, model },
      report,
      markdown: buildMarkdown(framework, report),
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown server error" }, { status: 500 });
  }
}