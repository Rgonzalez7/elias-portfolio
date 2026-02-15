"use client";

import { useEffect } from "react";
import { cn } from "./cn";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ open, onClose, title, children, className }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <button
        aria-label="Close modal backdrop"
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl",
          "dark:border-zinc-800 dark:bg-zinc-950",
          className
        )}
      >
        {title ? <h3 className="text-base font-semibold tracking-tight">{title}</h3> : null}
        <div className={cn(title ? "mt-4" : "", "text-sm text-zinc-700 dark:text-zinc-200")}>
          {children}
        </div>
      </div>
    </div>
  );
}