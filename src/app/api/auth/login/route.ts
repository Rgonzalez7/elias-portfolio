import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

// DEMO store (debe ser el mismo del register)
const USERS = (globalThis as any).__DEMO_USERS__ || new Map();
(globalThis as any).__DEMO_USERS__ = USERS;

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as { email: string; password: string };

    if (!email || !password) return jsonError("Missing email/password.");

    const normEmail = email.toLowerCase().trim();
    const user = [...USERS.values()].find((u: any) => u.email === normEmail);

    if (!user || user.password !== password) {
      return jsonError("Invalid credentials.", 401);
    }

    const token = signToken({ sub: user.id, email: user.email, role: user.role });

    const res = NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });

    res.cookies.set({
      name: process.env.AUTH_COOKIE_NAME || "auth_token",
      value: token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}