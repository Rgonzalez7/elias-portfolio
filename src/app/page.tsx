import ThemeToggle from "./ThemeToggle";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      {/* Top */}
      <header
        className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur
                   dark:border-zinc-800/70 dark:bg-zinc-950/75 transition-colors duration-300"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-medium tracking-tight transition-opacity duration-200 hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white dark:bg-white dark:text-zinc-900 transition-colors duration-300">
              EG
            </span>
            <span>Elias Gonzalez</span>
          </a>

          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
              <a
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white"
                href="#contact"
              >
                Contact
              </a>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Building AI-powered SaaS products with clean UX and real-world workflows.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
            Full-stack engineer focused on scalable web apps, automation, and product-driven development.
            Currently building{" "}
            <span className="text-zinc-900 font-medium dark:text-white transition-colors duration-300">
              Guibbo
            </span>
            , an AI-driven education and training platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800
                         dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200
                         transition-colors duration-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50
                         dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900
                         transition-colors duration-200"
            >
              Contact
            </a>

            <div className="ml-1 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
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
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          A selection of work focused on SaaS, AI workflows, and product-driven engineering.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {/* Featured: Guibbo */}
          <article
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 dark:bg-zinc-950
                       transition-transform duration-200 will-change-transform
                       hover:-translate-y-[2px]
                       hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]
                       dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold">Guibbo</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  AI-powered education & training platform for psychology students and educators.
                </p>
              </div>
              <span
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600
                           dark:border-zinc-800 dark:text-zinc-300 transition-colors duration-300"
              >
                Featured
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
              <li>• Real-time transcription with automated AI feedback</li>
              <li>• Role-based dashboards (admin, professor, student)</li>
              <li>• Clinical workflows, evaluations, and reporting</li>
              <li>• Built for MVP speed with scalable architecture</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Tailwind", "AI APIs"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:rmngzps@gmail.com?subject=Guibbo%20Demo%20Request"
                className="text-sm font-medium text-zinc-900 hover:underline dark:text-white transition-colors duration-200"
              >
                Request demo
              </a>
            </div>
          </article>

          {/* Placeholder project */}
          <article
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800
                       transition-transform duration-200 will-change-transform
                       hover:-translate-y-[2px]
                       hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]
                       dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-base font-semibold">AI Feedback Mini-Tool</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Lightweight tool that analyzes session text and generates structured feedback.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "API Integrations"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Placeholder project */}
          <article
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800
                       transition-transform duration-200 will-change-transform
                       hover:-translate-y-[2px]
                       hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]
                       dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-base font-semibold">Dashboard UI Kit</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Reusable dashboard components built with a minimal design system.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>

          {/* Placeholder project */}
          <article
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800
                       transition-transform duration-200 will-change-transform
                       hover:-translate-y-[2px]
                       hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]
                       dark:hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-base font-semibold">Auth + API Starter</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Clean full-stack starter with authentication, protected routes, and REST endpoints.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Node.js", "MongoDB", "REST"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700
                             dark:bg-zinc-900 dark:text-zinc-200 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
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

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 transition-colors duration-300">
          <h2 className="text-xl font-semibold tracking-tight">Let’s build something.</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
            If you’re hiring for a remote role or need help building an MVP, feel free to reach out.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="mailto:rmngzps@gmail.com"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800
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

        <footer className="mt-10 pb-10 text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          © {year} Elias Gonzalez
        </footer>
      </section>
    </main>
  );
}