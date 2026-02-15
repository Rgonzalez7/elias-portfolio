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
        const r = await fetch("/api/auth/me", { cache: "no-store" });
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

  const hasUser = (me as any)?.ok !== false && Boolean((me as any)?.user);

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <SiteHeader />

      <Container className="py-8 sm:py-14">
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle>Dashboard</CardTitle>
                  <CardDescription>Protected route + cookie-based JWT session.</CardDescription>
                </div>
                <div className="sm:pt-1">
                  <Badge variant="success">Protected</Badge>
                </div>
              </div>
            </CardHeader>

            {/* Body */}
            <div className="mt-4">
              {loading ? (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-200">
                  Loading...
                </div>
              ) : (me as any)?.ok === false ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300">
                  {(me as any)?.error || "Failed to load session."}
                </div>
              ) : (me as any)?.user ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="grid gap-3">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Name</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {(me as any).user.name}
                      </span>
                    </div>

                    <div className="h-[1px] bg-zinc-200/70 dark:bg-zinc-800/70" />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100 break-all sm:break-normal">
                        {(me as any).user.email}
                      </span>
                    </div>

                    <div className="h-[1px] bg-zinc-200/70 dark:bg-zinc-800/70" />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Role</span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">
                        {(me as any).user.role}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-200">
                  No user found. (If you see this, middleware might not be redirecting.)
                </div>
              )}
            </div>

            {/* Footer */}
            <CardFooter className="mt-5">
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/projects/auth-starter")}
                  className="w-full sm:w-auto"
                >
                  Back to starter
                </Button>

                <Button
                  onClick={logout}
                  className="w-full sm:w-auto"
                  disabled={!hasUser && !loading}
                >
                  Logout
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </main>
  );
}