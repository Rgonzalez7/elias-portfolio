"use client";

import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tabs from "@/components/ui/Tabs";

type MeResponse =
  | { ok: true; user: null }
  | { ok: true; user: { id: string; name: string; email: string; role: string } }
  | { ok: false; error?: string };

type AuthResponse =
  | { ok: true; user: { id: string; name: string; email: string; role: string } }
  | { ok: false; error?: string };

function pretty(obj: any) {
  try {
    return JSON.stringify(obj, null, 2);
  } catch {
    return String(obj);
  }
}

export default function AuthStarterPage() {
  const [tab, setTab] = useState<"overview" | "api" | "env" | "deploy" | "demo">(
    "overview"
  );

  // Demo state
  const [name, setName] = useState("Elias");
  const [email, setEmail] = useState("elias@example.com");
  const [password, setPassword] = useState("Password123!");

  const [busy, setBusy] = useState(false);
  const [demoErr, setDemoErr] = useState<string>("");
  const [me, setMe] = useState<MeResponse | null>(null);
  const [last, setLast] = useState<any>(null);

  const tabs = useMemo(
    () => [
      { key: "overview", label: "Overview" },
      { key: "api", label: "API patterns" },
      { key: "env", label: "Env setup" },
      { key: "deploy", label: "Deploy" },
      { key: "demo", label: "Live demo" },
    ],
    []
  );

  async function call(endpoint: string, body?: any, method = "POST") {
    setDemoErr("");
    setBusy(true);
    setLast(null);

    try {
      const r = await fetch(endpoint, {
        method,
        headers: body ? { "Content-Type": "application/json" } : undefined,
        body: body ? JSON.stringify(body) : undefined,
      });

      const j = await r.json().catch(() => ({}));
      setLast({ endpoint, status: r.status, body: j });

      if (!r.ok || j?.ok === false) {
        throw new Error(j?.error || `Request failed (${r.status})`);
      }

      return j;
    } catch (e: any) {
      setDemoErr(e?.message || "Unknown error");
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function register() {
    const j = (await call("/api/auth/register", { name, email, password })) as AuthResponse | null;
    if (j?.ok) await getMe();
  }

  async function login() {
    const j = (await call("/api/auth/login", { email, password })) as AuthResponse | null;
    if (j?.ok) await getMe();
  }

  async function getMe() {
    setDemoErr("");
    setBusy(true);
    setLast(null);

    try {
      const r = await fetch("/api/auth/me", { method: "GET" });
      const j = (await r.json().catch(() => ({}))) as MeResponse;
      setLast({ endpoint: "/api/auth/me", status: r.status, body: j });
      setMe(j);
      if (!r.ok || (j as any)?.ok === false) {
        throw new Error((j as any)?.error || `Request failed (${r.status})`);
      }
      return j;
    } catch (e: any) {
      setDemoErr(e?.message || "Unknown error");
      setMe(null);
      return null;
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await call("/api/auth/logout", undefined, "POST");
    setMe(null);
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <SiteHeader />

      <Container className="py-14">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Auth + API Starter</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              A clean full-stack starter for MVPs: auth, protected routes, and production-ready API patterns.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Next.js", "JWT", "REST", "httpOnly cookies", "Protected routes"].map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          <Badge variant="success">Open source</Badge>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <Tabs items={tabs} value={tab} onChange={(k) => setTab(k as any)} />
        </div>

        {/* OVERVIEW */}
        {tab === "overview" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>What you get</CardTitle>
                  <CardDescription>A real starter that you can extend without rewriting everything.</CardDescription>
                </div>
                <Badge>Features</Badge>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• JWT auth + protected routes (client + server)</li>
                <li>• Clean API structure (route handlers + shared server libs)</li>
                <li>• Consistent error shape + safe defaults</li>
                <li>• Env-first configuration (local/preview/prod)</li>
                <li>• Ready for Vercel deployment</li>
              </ul>

              <CardFooter className="mt-5">
                <Button variant="outline" onClick={() => setTab("env")}>
                  Configure env
                </Button>
                <Button onClick={() => setTab("demo")}>Open live demo</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Folder structure</CardTitle>
                  <CardDescription>App Router layout that stays clean as your project grows.</CardDescription>
                </div>
                <Badge>Structure</Badge>
              </CardHeader>

              <pre className="mt-4 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{`/src
  /app
    /api
      /auth
        /register/route.ts
        /login/route.ts
        /me/route.ts
        /logout/route.ts
    /projects/auth-starter/page.tsx
    /dashboard/page.tsx
  /lib
    auth.ts
    db.ts
  /models
    User.ts`}
              </pre>

              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                Want it as a monorepo later? Easy: split backend into a separate app.
              </div>
            </Card>
          </div>
        ) : null}

        {/* API PATTERNS */}
        {tab === "api" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Endpoints</CardTitle>
                  <CardDescription>Minimal auth surface for most MVPs.</CardDescription>
                </div>
                <Badge>REST</Badge>
              </CardHeader>

              <pre className="mt-4 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{`POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/me         (protected)
POST   /api/auth/logout     (optional)
`}
              </pre>

              <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-200">
                The <span className="font-medium">/me</span> endpoint is the key: it hydrates the client with the current user.
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Security building blocks</CardTitle>
                  <CardDescription>Baseline that won’t fall apart in production.</CardDescription>
                </div>
                <Badge>Security</Badge>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• JWT verify + attach user</li>
                <li>• httpOnly cookie session (recommended)</li>
                <li>• Role/capability checks (optional)</li>
                <li>• Safe error responses (no secrets leaked)</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                Want “enterprise”: add refresh tokens + rotation + device sessions.
              </div>
            </Card>
          </div>
        ) : null}

        {/* ENV */}
        {tab === "env" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Environment variables</CardTitle>
                  <CardDescription>Set these locally (.env.local) and in Vercel (Preview + Production).</CardDescription>
                </div>
                <Badge>.env</Badge>
              </CardHeader>

              <pre className="mt-4 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{`JWT_SECRET=super_long_random_secret
JWT_EXPIRES_IN=7d
AUTH_COOKIE_NAME=auth_token

# Optional (if you use DB)
MONGO_URI=mongodb+srv://...

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000`}
              </pre>

              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                In Vercel: <span className="font-medium">Project → Settings → Environment Variables</span>.
              </div>

              <CardFooter className="mt-5">
                <Button variant="outline" onClick={() => setTab("deploy")}>
                  Deploy guide
                </Button>
                <Button onClick={() => setTab("demo")}>Try demo</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>TypeScript tip</CardTitle>
                  <CardDescription>Avoid “jsonwebtoken has implicit any” warnings.</CardDescription>
                </div>
                <Badge>TS</Badge>
              </CardHeader>

              <pre className="mt-4 overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{`npm i -D @types/jsonwebtoken`}
              </pre>

              <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-200">
                Restart your dev server after installing types.
              </div>
            </Card>
          </div>
        ) : null}

        {/* DEPLOY */}
        {tab === "deploy" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Deploy setup</CardTitle>
                  <CardDescription>Deploy as a Next.js app (API + UI together).</CardDescription>
                </div>
                <Badge>Vercel</Badge>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Import repo into Vercel</li>
                <li>• Add env vars for Preview and Production</li>
                <li>• Keep secrets out of git (.env.local ignored)</li>
                <li>• If using DB: configure Atlas network access</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-200">
                Production cookies should be <span className="font-medium">secure</span> (HTTPS).
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Production checklist</CardTitle>
                  <CardDescription>The minimum to avoid surprises.</CardDescription>
                </div>
                <Badge>Checklist</Badge>
              </CardHeader>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Password hashing (bcrypt)</li>
                <li>• JWT expiration policy</li>
                <li>• Logout clears cookie</li>
                <li>• Rate-limit auth endpoints (optional)</li>
                <li>• Logs / request ids (optional)</li>
              </ul>

              <CardFooter className="mt-5">
                <Button variant="outline" onClick={() => setTab("overview")}>
                  Back to overview
                </Button>
                <Button onClick={() => setTab("demo")}>Open demo</Button>
              </CardFooter>
            </Card>
          </div>
        ) : null}

        {/* DEMO */}
        {tab === "demo" ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
            {/* Actions */}
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Live auth demo</CardTitle>
                  <CardDescription>
                    Register → Login → Check session → Visit the protected dashboard.
                  </CardDescription>
                </div>
                <Badge variant={me && (me as any)?.user ? "success" : undefined}>
                  {me && (me as any)?.user ? "Authenticated" : "Guest"}
                </Badge>
              </CardHeader>

              <div className="mt-4 grid gap-3">
                <div>
                  <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                    Name
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none
                               focus:border-zinc-400
                               dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                    Email
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none
                               focus:border-zinc-400
                               dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
                    placeholder="email@domain.com"
                  />
                </div>

                <div>
                  <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-1">
                    Password
                  </div>
                  <input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none
                               focus:border-zinc-400
                               dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
                    placeholder="••••••••"
                  />
                </div>

                {demoErr ? (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                    {demoErr}
                  </div>
                ) : null}
              </div>

              <CardFooter className="mt-5 flex flex-wrap gap-2">
                <Button variant="outline" onClick={register} disabled={busy}>
                  {busy ? "Working..." : "Register"}
                </Button>
                <Button onClick={login} disabled={busy}>
                  {busy ? "Working..." : "Login"}
                </Button>
                <Button variant="outline" onClick={getMe} disabled={busy}>
                  {busy ? "Working..." : "Check session (/me)"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/dashboard")}
                  disabled={busy}
                >
                  Go to dashboard
                </Button>
                <Button onClick={logout} disabled={busy}>
                  Logout
                </Button>
              </CardFooter>

              <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                Tip: If you register with the same email twice, your API should return a friendly error.
              </div>
            </Card>

            {/* Status */}
            <Card className="h-fit">
              <CardHeader>
                <div>
                  <CardTitle>Session status</CardTitle>
                  <CardDescription>Current user returned by /api/auth/me.</CardDescription>
                </div>
                <Badge variant={me && (me as any)?.user ? "success" : undefined}>
                  {me && (me as any)?.user ? "User" : "None"}
                </Badge>
              </CardHeader>

              <div className="mt-4">
                {me && (me as any)?.user ? (
                  <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                    <div>
                      <span className="font-medium">Name:</span> {(me as any).user.name}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span> {(me as any).user.email}
                    </div>
                    <div>
                      <span className="font-medium">Role:</span> {(me as any).user.role}
                    </div>
                    <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400">
                      If this is populated, cookies + JWT verification are working.
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-zinc-600 dark:text-zinc-300">
                    No authenticated user yet. Use Register/Login, then check session.
                  </div>
                )}
              </div>

              <div className="mt-5">
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-2">
                  Last response
                </div>
                <pre className="max-h-[320px] overflow-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
{last ? pretty(last) : "—"}
                </pre>
              </div>
            </Card>
          </div>
        ) : null}
      </Container>
    </main>
  );
}