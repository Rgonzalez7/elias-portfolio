"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-500 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}