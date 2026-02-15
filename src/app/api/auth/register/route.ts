import { NextResponse } from "next/server";

const USERS = (globalThis as any).__DEMO_USERS__ || new Map();
(globalThis as any).__DEMO_USERS__ = USERS;

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    if (!name || !email || !password) return jsonError("Missing fields.");

    const normEmail = email.toLowerCase().trim();

    // 🔥 AHORA sí consulta el mismo store global
    const existing = [...USERS.values()].find((u: any) => u.email === normEmail);
    if (existing) return jsonError("Email already registered.", 409);

    const id = crypto.randomUUID();
    USERS.set(id, { id, name, email: normEmail, password, role: "user" });

    return NextResponse.json({
      ok: true,
      user: { id, name, email: normEmail, role: "user" },
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}