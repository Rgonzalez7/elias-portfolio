"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "@/app/ThemeToggle";

type ProjectItem = {
  label: string;
  href: string;
  description?: string;
};

const PROJECTS: ProjectItem[] = [
  { label: "Dashboard UI Kit", href: "/ui-kit" },
  { label: "IA Feedback Mini-Tool", href: "/projects/ai-feedback" },
  { label: "Auth + Starter", href: "/projects/auth-starter" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ timer para que NO se cierre instantáneo
  const closeTimer = useRef<number | null>(null);

  const projectsActive = useMemo(() => {
    return PROJECTS.some((p) => isActive(pathname, p.href));
  }, [pathname]);

  function cancelClose() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();
    // ✅ pequeño delay para “dar chance”
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  }

  // Close dropdown on outside click / esc
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Mobile "projects" panel
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur
                 dark:border-zinc-800/70 dark:bg-zinc-950/75 transition-colors duration-300"
    >
      <div className="mx-auto flex max-w-5xl items-center px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight transition-opacity duration-200 hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900 transition-colors duration-300">
            EG
          </span>
          <span>Elias Gonzalez</span>
        </Link>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-5 text-right">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            {/* Portfolio */}
            <Link
              href="/"
              className={[
                "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                pathname === "/" ? "text-zinc-900 dark:text-white" : "",
              ].join(" ")}
            >
              <span className="relative">
                Portfolio
                {pathname === "/" ? (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                ) : null}
              </span>
            </Link>

            {/* ✅ Projects dropdown (NO se cierra por gap) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpen(true);
              }}
              onMouseLeave={() => {
                // ✅ cierre con delay (no instantáneo)
                scheduleClose();
              }}
            >
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                className={[
                  "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                  projectsActive ? "text-zinc-900 dark:text-white" : "",
                ].join(" ")}
              >
                <span className="relative inline-flex items-center gap-1">
                  Projects
                  <span className="text-[10px] translate-y-[1px] opacity-70">▾</span>
                  {projectsActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                  ) : null}
                </span>
              </button>

              {/* ✅ “Bridge” invisible para cubrir el gap entre botón y menú */}
              <div
                aria-hidden="true"
                className={[
                  "absolute left-0 right-0 top-full h-4",
                  open ? "block" : "hidden",
                ].join(" ")}
              />

              {open ? (
                <div
                  role="menu"
                  // ✅ quitamos mt-3 y usamos top + padding bridge (o mt-2) para evitar gap
                  className="absolute right-0 top-full mt-2 w-[260px] rounded-2xl border border-zinc-200 bg-white/95 p-2
                             shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur
                             dark:border-zinc-800 dark:bg-zinc-950/95"
                  onMouseEnter={() => {
                    // si entras al panel, cancelas el cierre
                    cancelClose();
                  }}
                  onMouseLeave={() => {
                    // si sales del panel, cierras con delay
                    scheduleClose();
                  }}
                >
                  {PROJECTS.map((p) => {
                    const active = isActive(pathname, p.href);
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className={[
                          "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                          "hover:bg-zinc-100 dark:hover:bg-zinc-900",
                          active ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white" : "",
                        ].join(" ")}
                      >
                        <span className="font-medium">{p.label}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">↗</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* ✅ Contact */}
            {onHome ? (
              <a
                href="#contact"
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
              >
                Contact
              </a>
            ) : (
              <Link
                href="/#contact"
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
              >
                Contact
              </Link>
            )}
          </nav>

          {/* Mobile actions */}
          <div className="sm:hidden flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-medium
                         text-zinc-900 transition-colors duration-200 hover:bg-zinc-50
                         dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              Portfolio
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setMobileProjectsOpen((v) => !v)}
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-medium
                           text-zinc-900 transition-colors duration-200 hover:bg-zinc-50
                           dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
              >
                Projects <span className="ml-1 text-[10px] opacity-70">▾</span>
              </button>

              {mobileProjectsOpen ? (
                <div
                  className="absolute right-0 mt-2 w-[240px] rounded-2xl border border-zinc-200 bg-white/95 p-2
                             shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)] backdrop-blur
                             dark:border-zinc-800 dark:bg-zinc-950/95"
                >
                  {PROJECTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMobileProjectsOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100
                                 dark:text-white dark:hover:bg-zinc-900"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-medium
                         text-zinc-900 transition-colors duration-200 hover:bg-zinc-50
                         dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              Contact
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}