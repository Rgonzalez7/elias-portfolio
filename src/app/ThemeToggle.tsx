"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme") as Theme | null;

  // default SIEMPRE light si no hay preferencia válida
  if (saved === "dark" || saved === "light") return saved;
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700
                 shadow-sm transition
                 hover:bg-zinc-50 hover:text-zinc-900
                 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 focus:ring-offset-white
                 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200
                 dark:hover:bg-zinc-900 dark:hover:text-white
                 dark:focus:ring-zinc-700 dark:focus:ring-offset-zinc-950"
    >
      <span className="transition-transform group-hover:scale-[1.03]">
        {isDark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
      </span>
    </button>
  );
}