import type { Metadata } from "next";
import { Pocket } from "@/components/Pocket";

// La versión corta, para quien contrata: el enlace que va en las postulaciones.
export const metadata: Metadata = {
  title: "Elias González · The Pocket (versión corta)",
  description: "Arquitecto de software. La versión corta del manga: quién soy, mis dos proyectos, precios y cómo escribirme.",
  alternates: { canonical: "/corta" },
  openGraph: {
    type: "website",
    url: "/corta",
    siteName: "Elias González",
    locale: "es_ES",
    title: "Elias González · The Pocket (versión corta)",
    description: "Arquitecto de software. La versión corta del manga: quién soy, mis dos proyectos, precios y cómo escribirme.",
  },
};

export default function Corta() {
  return <Pocket corta />;
}
