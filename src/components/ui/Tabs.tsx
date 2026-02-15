"use client";

import { useState } from "react";
import { cn } from "./cn";

export type TabItem = { key: string; label: string };

type Props = {
  items: TabItem[];
  value?: string;
  onChange?: (key: string) => void;
  className?: string;
};

export default function Tabs({ items, value, onChange, className }: Props) {
  const [internal, setInternal] = useState(items[0]?.key ?? "");
  const active = value ?? internal;

  function setTab(k: string) {
    onChange?.(k);
    if (value === undefined) setInternal(k);
  }

  return (
    <div className={cn("inline-flex rounded-full border border-zinc-200 p-1 dark:border-zinc-800", className)}>
      {items.map((t) => {
        const isOn = t.key === active;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={cn(
              "h-9 rounded-full px-4 text-sm font-medium transition-colors duration-200",
              isOn
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900"
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}