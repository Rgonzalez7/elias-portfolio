// src/lib/auth-edge.ts
import { jwtVerify } from "jose";

export type UserRole = "admin" | "user";

export type JwtPayload = {
  sub: string;
  email: string;
  role: UserRole;
};

export const AUTH_COOKIE = "auth_token";

function getSecret() {
  const s = process.env.JWT_SECRET || "";
  if (!s) throw new Error("Missing JWT_SECRET env var");
  return new TextEncoder().encode(s);
}

export async function verifyTokenEdge(token: string): Promise<JwtPayload> {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as unknown as JwtPayload;
}