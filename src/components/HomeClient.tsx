"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import EditorialGrid from "@/components/EditorialGrid";
import SiteHeader from "@/components/SiteHeader";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import EngagementsFoundationsBridge from "@/components/EngagementsFoundationsBridge";
import SystemsBar from "@/components/SystemsBar";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function HomeClient() {
  // ✅ evita hydration mismatch con Date()
  const year = useMemo(() => new Date().getFullYear(), []);

  // ✅ activar grid con ?grid=1
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShowGrid(params.get("grid") === "1");
  }, []);

  return (
    <main
    className={cn(
        "pt-[72px]", // ✅ compensa header fixed
        "min-h-screen overflow-x-hidden",
        "bg-white text-zinc-900",
        "dark:bg-zinc-950 dark:text-zinc-100",
        "transition-colors duration-300"
    )}
    >
      <EditorialGrid enabled={showGrid} />

      <SiteHeader />

      <HeroSection />

      <ProjectsSection />

      <AboutSection />

      <SystemsBar />

      <ServicesSection />

      <EngagementsFoundationsBridge />

      <ProductsSection />

      {/* ✅ Contact real (form + resend ya lo tienes) */}
      <ContactSection />

      <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm tracking-wide text-zinc-500 dark:text-zinc-400 text-right transition-colors duration-300">
        © {year} Elias Gonzalez
      </footer>
    </main>
  );
}