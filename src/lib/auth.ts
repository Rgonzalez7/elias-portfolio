// src/lib/auth.ts
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";

export type UserRole = "admin" | "user";

export type JwtPayload = {
  sub: string;
  email: string;
  role: UserRole;
};

const JWT_SECRET = (process.env.JWT_SECRET || "") as Secret;
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"];

if (!JWT_SECRET) throw new Error("Missing JWT_SECRET env var");

export const AUTH_COOKIE = "auth_token";

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}