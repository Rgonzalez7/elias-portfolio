"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "@/app/ThemeToggle";
import { cn } from "@/lib/cn";

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

  // Desktop dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  // Mobile hamburger
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);

  const projectsActive = useMemo(() => {
    return PROJECTS.some((p) => isActive(pathname, p.href));
  }, [pathname]);

  // Optional: mark products/services/contact active when onHome and hash matches
  const [hash, setHash] = useState("");
  useEffect(() => {
    if (!onHome) return;
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [onHome]);

  const productsActive = onHome && hash === "#products";
  const servicesActive = onHome && hash === "#services";
  const contactActive = onHome && hash === "#contact";

  function cancelClose() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  }

  // Close on route change
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
    setMobileProjectsOpen(false);
  }, [pathname]);

  // Close dropdown/panels on outside click / esc
  useEffect(() => {
    function onDocPointerDown(e: PointerEvent) {
      const t = e.target as Node;

      // Desktop dropdown
      if (open && dropdownRef.current && !dropdownRef.current.contains(t)) {
        setOpen(false);
      }

      // Mobile panel (exclude hamburger)
      if (mobileOpen) {
        const clickedInsidePanel = mobilePanelRef.current?.contains(t) ?? false;
        const clickedHamburger = mobileButtonRef.current?.contains(t) ?? false;

        if (!clickedInsidePanel && !clickedHamburger) {
          setMobileOpen(false);
          setMobileProjectsOpen(false);
        }
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
        setMobileProjectsOpen(false);
      }
    }

    document.addEventListener("pointerdown", onDocPointerDown, true);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("pointerdown", onDocPointerDown, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "border-b border-zinc-200 bg-white",
        "dark:border-zinc-800 dark:bg-zinc-950",
        "transition-colors duration-300"
      )}
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
          <span className="whitespace-nowrap">Elias Gonzalez</span>
        </Link>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            {/* Portfolio */}
            <Link
              href="/"
              className={cn(
                "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                pathname === "/" ? "text-zinc-900 dark:text-white" : ""
              )}
            >
              <span className="relative">
                Portfolio
                {pathname === "/" ? (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                ) : null}
              </span>
            </Link>

            {/* Projects dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpen(true);
              }}
              onMouseLeave={() => {
                scheduleClose();
              }}
            >
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                className={cn(
                  "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                  projectsActive ? "text-zinc-900 dark:text-white" : ""
                )}
              >
                <span className="relative inline-flex items-center gap-1">
                  Projects
                  <span className="text-[10px] translate-y-[1px] opacity-70">▾</span>
                  {projectsActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                  ) : null}
                </span>
              </button>

              {/* bridge */}
              <div
                aria-hidden="true"
                className={cn("absolute left-0 right-0 top-full h-4", open ? "block" : "hidden")}
              />

              {open ? (
                <div
                  role="menu"
                  className={cn(
                    "absolute right-0 top-full mt-2 w-[260px]",
                    "rounded-2xl border border-zinc-200 bg-white p-2",
                    "shadow-[0_16px_40px_-24px_rgba(0,0,0,0.35)]",
                    "dark:border-zinc-800 dark:bg-zinc-950"
                  )}
                  onMouseEnter={() => cancelClose()}
                  onMouseLeave={() => scheduleClose()}
                >
                  {PROJECTS.map((p) => {
                    const active = isActive(pathname, p.href);
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                          "hover:bg-zinc-100 dark:hover:bg-zinc-900",
                          active
                            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white"
                            : ""
                        )}
                      >
                        <span className="font-medium">{p.label}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">↗</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {/* Services */}
            {onHome ? (
              <a
                href="#services"
                className={cn(
                  "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                  servicesActive ? "text-zinc-900 dark:text-white" : ""
                )}
              >
                <span className="relative">
                  Services
                  {servicesActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                  ) : null}
                </span>
              </a>
            ) : (
              <Link
                href="/#services"
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
              >
                Services
              </Link>
            )}

            {/* ✅ Products */}
            {onHome ? (
              <a
                href="#products"
                className={cn(
                  "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                  productsActive ? "text-zinc-900 dark:text-white" : ""
                )}
              >
                <span className="relative">
                  Products
                  {productsActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                  ) : null}
                </span>
              </a>
            ) : (
              <Link
                href="/#products"
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
              >
                Products
              </Link>
            )}

            {/* Contact */}
            {onHome ? (
              <a
                href="#contact"
                className={cn(
                  "transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white",
                  contactActive ? "text-zinc-900 dark:text-white" : ""
                )}
              >
                <span className="relative">
                  Contact
                  {contactActive ? (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-zinc-900 dark:bg-white" />
                  ) : null}
                </span>
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

          {/* Desktop ThemeToggle */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Mobile hamburger + ThemeToggle */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              ref={mobileButtonRef}
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen((v) => !v);
                if (!mobileOpen) setMobileProjectsOpen(false);
              }}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                "border border-zinc-300 text-zinc-900",
                "hover:bg-zinc-50 transition-colors duration-200",
                "dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
              )}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <div className="sm:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div ref={mobilePanelRef} className="mx-auto max-w-5xl px-5 py-4">
            <div className="grid gap-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                  "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                  "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white",
                  pathname === "/" ? "ring-1 ring-zinc-300 dark:ring-zinc-700" : ""
                )}
              >
                <span>Portfolio</span>
                <span className="text-xs opacity-70">↗</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileProjectsOpen((v) => !v)}
                className={cn(
                  "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                  "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                  "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white",
                  projectsActive ? "ring-1 ring-zinc-300 dark:ring-zinc-700" : ""
                )}
              >
                <span>Projects</span>
                <span className="text-xs opacity-70">{mobileProjectsOpen ? "▴" : "▾"}</span>
              </button>

              {mobileProjectsOpen ? (
                <div className="rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
                  {PROJECTS.map((p) => {
                    const active = isActive(pathname, p.href);
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => {
                          setMobileProjectsOpen(false);
                          setMobileOpen(false);
                        }}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                          "hover:bg-zinc-100 dark:hover:bg-zinc-900",
                          active
                            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-white"
                            : "text-zinc-900 dark:text-white"
                        )}
                      >
                        <span className="font-medium">{p.label}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">↗</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}

              {/* Services */}
              {onHome ? (
                <a
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Services</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              ) : (
                <Link
                  href="/#services"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Services</span>
                  <span className="text-xs opacity-70">↗</span>
                </Link>
              )}

              {/* ✅ Products */}
              {onHome ? (
                <a
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Products</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              ) : (
                <Link
                  href="/#products"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Products</span>
                  <span className="text-xs opacity-70">↗</span>
                </Link>
              )}

              {/* Contact */}
              {onHome ? (
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Contact</span>
                  <span className="text-xs opacity-70">↗</span>
                </a>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900",
                    "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:text-white"
                  )}
                >
                  <span>Contact</span>
                  <span className="text-xs opacity-70">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}