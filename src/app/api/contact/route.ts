import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // importante en algunos deploys
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  budget?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function clamp(s: string, max: number) {
  const t = (s || "").trim();
  if (t.length <= max) return t;
  return t.slice(0, max);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    if (!to || !from) {
      return NextResponse.json(
        { error: "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => null)) as Payload | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    // Basic validation + limits
    const name = clamp(body.name ?? "", 80);
    const email = clamp(body.email ?? "", 120);
    const budget = clamp(body.budget ?? "", 60);
    const message = clamp(body.message ?? "", 5000);

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Small anti-abuse: block obvious bots
    const ua = req.headers.get("user-agent") || "unknown";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBudget = escapeHtml(budget || "—");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    const subject = `New message from eliasgonzalez.io — ${name}`;

    // Email to you
    const sendToOwner = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email, // ✅ responder directo al usuario
      text: [
        `New contact form submission`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget || "—"}`,
        `IP: ${ip}`,
        `User-Agent: ${ua}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
          <h2 style="margin:0 0 12px 0;">New contact form submission</h2>
          <div style="margin:0 0 6px 0;"><b>Name:</b> ${safeName}</div>
          <div style="margin:0 0 6px 0;"><b>Email:</b> ${safeEmail}</div>
          <div style="margin:0 0 6px 0;"><b>Budget:</b> ${safeBudget}</div>
          <div style="margin:0 0 14px 0; color:#666; font-size:12px;">
            IP: ${escapeHtml(ip)} · UA: ${escapeHtml(ua)}
          </div>
          <div style="padding:14px; border:1px solid #e5e7eb; border-radius:12px; background:#fafafa;">
            <div style="font-weight:600; margin-bottom:8px;">Message</div>
            <div style="line-height:1.5;">${safeMessage}</div>
          </div>
        </div>
      `,
    });

    // Optional auto reply to user (recommended)
    const autoReplyOn = String(process.env.CONTACT_SEND_AUTOREPLY || "").toLowerCase() === "true";
    let autoReplyId: string | undefined;

    if (autoReplyOn) {
      const auto = await resend.emails.send({
        from,
        to: email,
        subject: "Got it — I’ll reply soon",
        replyTo: to, // si el usuario responde, te llega a ti
        text: [
          `Hi ${name},`,
          ``,
          `Thanks for reaching out. I received your message and I’ll reply with next steps shortly.`,
          ``,
          `— Elias`,
        ].join("\n"),
        html: `
          <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.6;">
            <p style="margin:0 0 10px 0;">Hi ${safeName},</p>
            <p style="margin:0 0 10px 0;">
              Thanks for reaching out. I received your message and I’ll reply with next steps shortly.
            </p>
            <p style="margin:0;">— Elias</p>
          </div>
        `,
      });

      autoReplyId = (auto as any)?.data?.id;
    }

    const ownerId = (sendToOwner as any)?.data?.id;

    return NextResponse.json(
      { ok: true, id: ownerId, autoReplyId: autoReplyId || null },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unexpected error." },
      { status: 500 }
    );
  }
}