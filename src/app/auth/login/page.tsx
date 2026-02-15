"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit() {
    setErr("");
    setLoading(true);
    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const j = await r.json();
      if (!r.ok || !j.ok) throw new Error(j?.error || "Login failed");
      router.push(next);
    } catch (e: any) {
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <SiteHeader />
      <Container className="py-14">
        <div className="mx-auto max-w-xl">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Login</CardTitle>
                <CardDescription>Access your dashboard (JWT cookie auth).</CardDescription>
              </div>
              <Badge>Auth</Badge>
            </CardHeader>

            <div className="mt-4 grid gap-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none
                           focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none
                           focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
              />

              {err ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  {err}
                </div>
              ) : null}
            </div>

            <CardFooter className="mt-5">
              <Button variant="outline" onClick={() => router.push("/register")}>
                Create account
              </Button>
              <Button onClick={submit} disabled={loading || !email || !password}>
                {loading ? "Signing in..." : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </main>
  );
}