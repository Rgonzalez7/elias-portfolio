"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/cn";
import EditorialGrid from "@/components/EditorialGrid";
import SiteHeader from "@/components/SiteHeader";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const year = new Date().getFullYear();

  // ✅ activar grid con ?grid=1
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setShowGrid(params.get("grid") === "1");
  }, []);

  return (
    <main
      className={cn(
        "min-h-screen overflow-x-hidden",
        "bg-white text-zinc-900",
        "dark:bg-zinc-950 dark:text-zinc-100",
        "transition-colors duration-300"
      )}
    >
      <EditorialGrid enabled={showGrid} />

      {/* ✅ Shared header */}
      <SiteHeader />

      {/* Hero */}
      <section
        id="top"
        className="mx-auto max-w-5xl px-5 pt-12 sm:pt-20 pb-12 sm:pb-14"
      >
        {/* ✅ overflow-hidden para que los glows NO empujen el ancho */}
        <div className="relative overflow-hidden">
          {/* micro blur glow (behind) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="
                absolute right-[-80px] top-[-60px]
                h-[260px] w-[260px] sm:h-[280px] sm:w-[280px]
                rounded-full bg-zinc-200/70 blur-3xl dark:bg-zinc-800/40
              "
            />
            <div
              className="
                absolute right-[60px] sm:right-[120px]
                top-[110px] sm:top-[120px]
                h-[200px] w-[200px] sm:h-[220px] sm:w-[220px]
                rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20
              "
            />
          </div>

          {/* content */}
          <div className="mx-auto max-w-3xl text-center sm:ml-auto sm:text-right">
            <Reveal>
              {/* Availability line */}
              <div
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full
                  border border-zinc-200 bg-white/70 px-3 py-1
                  text-xs font-medium text-zinc-600
                  dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300
                  transition-colors duration-300
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Available for remote — Full-Stack / AI workflows</span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-6xl">
                Building AI-powered SaaS products with clean UX and real-world workflows.
              </h1>

              <p
                className="
                  mt-4 sm:mt-5 mx-auto sm:ml-auto max-w-2xl
                  text-base sm:text-lg leading-relaxed
                  text-zinc-600 dark:text-zinc-300
                  transition-colors duration-300
                "
              >
                Full-stack engineer building scalable apps and practical AI tooling—focused on speed,
                clarity, and product execution.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-end">
                <a
                  href="#projects"
                  className="
                    inline-flex h-11 w-full sm:w-auto items-center justify-center
                    rounded-full bg-zinc-900 px-6 text-sm font-medium text-white
                    transition-colors duration-200 hover:bg-zinc-800
                    dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200
                  "
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex h-11 w-full sm:w-auto items-center justify-center
                    rounded-full border border-zinc-300 bg-transparent px-6
                    text-sm font-medium text-zinc-900
                    transition-colors duration-200 hover:bg-zinc-50
                    dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900
                  "
                >
                  Contact
                </a>

                <div
                  className="
                    mt-2 sm:mt-0 sm:ml-1 flex flex-wrap items-center gap-x-4 gap-y-2
                    text-sm text-zinc-600 dark:text-zinc-300
                    transition-colors duration-300
                    justify-center sm:justify-end
                  "
                >
                  <a
                    className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                    href="https://github.com/rgonzalez7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                    href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                    href="mailto:rmngzps@gmail.com"
                  >
                    Email
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsSection />

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight">About</h2>
        </Reveal>

        <div className="mt-4 w-full space-y-4 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          <p>
            I’m a full-stack engineer with a background in systems engineering and education. I build SaaS
            products that prioritize clarity, usability, and scalable architecture—especially in learning,
            automation, and AI-assisted workflows.
          </p>
          <p>
            I’m comfortable across the stack (frontend, backend, databases, integrations) and I work best in
            fast-moving environments where product and engineering meet.
          </p>
          <p className="text-sm">
            <span className="text-zinc-900 font-medium dark:text-white transition-colors duration-300">
              Core stack:
            </span>{" "}
            JavaScript, React, Node.js, Express, MongoDB, Tailwind, REST APIs, AI integrations.
          </p>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-10 sm:py-12">
        <Reveal>
          <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-colors duration-300">
            <h2 className="text-xl font-semibold tracking-tight">Let’s build something.</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              If you’re hiring for a remote role or need help building an MVP, feel free to reach out.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:rmngzps@gmail.com"
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800
                           dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200
                           transition-colors duration-200"
              >
                Email me
              </a>
              <a
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
                href="https://github.com/rgonzalez7"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
                href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 pb-10 text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          © {year} Elias Gonzalez
        </footer>
      </section>
    </main>
  );
}