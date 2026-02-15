// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE = process.env.AUTH_COOKIE_NAME || "auth_token";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  const token = req.cookies.get(AUTH_COOKIE)?.value;

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };