"use client";

import { useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

type MeResponse =
  | { ok: true; user: null }
  | { ok: true; user: { id: string; name: string; email: string; role: string } }
  | { ok: false; error?: string };

export default function DashboardPage() {
  const [me, setMe] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/auth/me");
        const j = (await r.json()) as MeResponse;
        setMe(j);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <SiteHeader />
      <Container className="py-14">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>Protected route + cookie-based JWT session.</CardDescription>
            </div>
            <Badge variant="success">Protected</Badge>
          </CardHeader>

          {loading ? (
            <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">Loading...</div>
          ) : (me as any)?.ok === false ? (
            <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
              {(me as any)?.error || "Failed to load session."}
            </div>
          ) : (me as any)?.user ? (
            <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <div>
                <span className="font-medium">Name:</span> {(me as any).user.name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {(me as any).user.email}
              </div>
              <div>
                <span className="font-medium">Role:</span> {(me as any).user.role}
              </div>
            </div>
          ) : (
            <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              No user found. (If you see this, middleware might not be redirecting.)
            </div>
          )}

          <CardFooter className="mt-5">
            <Button variant="outline" onClick={() => (window.location.href = "/projects/auth-starter")}>
              Back to starter
            </Button>
            <Button onClick={logout}>Logout</Button>
          </CardFooter>
        </Card>
      </Container>
    </main>
  );
}