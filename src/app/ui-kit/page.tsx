"use client";

import { useState } from "react";
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
import Stat from "@/components/ui/Stat";
import Tabs from "@/components/ui/Tabs";
import Table from "@/components/ui/Table";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";

export default function UIKitPage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      {/* ✅ Main nav */}
      <SiteHeader />

      <Container className="py-10 sm:py-14">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard UI Kit</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              Reusable components for clean dashboards (cards, stats, tabs, tables, modals, empty states).
            </p>
          </div>
          <div className="sm:pt-1">
            <Badge variant="success">Open source</Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Active users" value="1,248" hint="+12% this week" />
          <Stat label="Completion rate" value="87%" hint="Stable" />
          <Stat label="Avg. session" value="14m" hint="Healthy" />
        </div>

        {/* Tabs + actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* ✅ Tabs: wrap-safe */}
          <div className="w-full sm:w-auto">
            <Tabs
              items={[
                { key: "overview", label: "Overview" },
                { key: "table", label: "Table" },
                { key: "empty", label: "Empty" },
              ]}
              value={tab}
              onChange={setTab}
            />
          </div>

          {/* ✅ Actions: stack en mobile */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-2">
            <Button className="w-full sm:w-auto" variant="outline" onClick={() => setOpen(true)}>
              Open modal
            </Button>
            <Button className="w-full sm:w-auto">Primary action</Button>
          </div>
        </div>

        {/* Content */}
        {tab === "overview" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card className="transition-transform duration-200 hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]">
              <CardHeader>
                <div>
                  <CardTitle>Card</CardTitle>
                  <CardDescription>Used for sections, modules, and dashboard blocks.</CardDescription>
                </div>
                <Badge>Neutral</Badge>
              </CardHeader>

              <div className="text-sm text-zinc-700 dark:text-zinc-200">
                Apple-ish rhythm: tight title, soft secondary, strong spacing.
              </div>

              <CardFooter className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                <Button className="w-full sm:w-auto" variant="ghost">
                  Secondary
                </Button>
                <Button className="w-full sm:w-auto" variant="outline">
                  Outline
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Role patterns</CardTitle>
                  <CardDescription>Admin / user / viewer patterns via layout + permissions.</CardDescription>
                </div>
              </CardHeader>
              <div className="text-sm text-zinc-700 dark:text-zinc-200">
                Esto lo hacemos con layouts + guards + “capabilities” (te lo estructuro luego).
              </div>
            </Card>
          </div>
        ) : null}

        {tab === "table" ? (
          <div className="mt-6">
            {/* ✅ Table wrapper por si tu Table internamente no controla overflow */}
            <div className="overflow-x-auto">
              <Table
                columns={["Name", "Role", "Status"]}
                rows={[
                  ["Elias", "Admin", <Badge key="1" variant="success">Active</Badge>],
                  ["Student A", "User", <Badge key="2">Pending</Badge>],
                  ["Viewer B", "Viewer", <Badge key="3">Read-only</Badge>],
                ]}
              />
            </div>
          </div>
        ) : null}

        {tab === "empty" ? (
          <div className="mt-6">
            <EmptyState
              title="No projects yet"
              description="Create your first item to start tracking progress and metrics."
              action={<Button onClick={() => setOpen(true)}>Create</Button>}
            />
          </div>
        ) : null}

        <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
          This is a clean modal: ESC closes, backdrop closes, consistent spacing.
        </Modal>
      </Container>
    </main>
  );
}