import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

const USERS = (globalThis as any).__DEMO_USERS__ || new Map();
(globalThis as any).__DEMO_USERS__ = USERS;

export async function GET() {
  try {
    const cookieName = process.env.AUTH_COOKIE_NAME || "auth_token";
    const token = (await cookies()).get(cookieName)?.value;

    if (!token) return NextResponse.json({ ok: true, user: null });

    const payload = verifyToken(token);
    const user = USERS.get(payload.sub);

    if (!user) return NextResponse.json({ ok: true, user: null });

    return NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch {
    return NextResponse.json({ ok: true, user: null });
  }
}