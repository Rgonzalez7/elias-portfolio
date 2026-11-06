"use client";

import { useEffect } from "react";
import { iniciarCargaProgresiva } from "@/lib/carga-progresiva";

// Arranca el motor del manga una vez que React ya pintó la página.
// Se importa aparte (code splitting) y nunca corre en el servidor: necesita window y el DOM.
export function Motor() {
  useEffect(() => {
    let vivo = true;
    iniciarCargaProgresiva();
    import("@/lib/motor").then(({ iniciarMotor }) => {
      if (vivo) iniciarMotor();
    });
    return () => {
      vivo = false;
    };
  }, []);
  return null;
}
