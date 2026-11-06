import { Controles, Escenario } from "@/components/Controles";
import { Pie } from "@/components/Pie";
import { Motor } from "@/components/Motor";
import { HISTORIA } from "@/components/historia";

// Las escenas de la versión corta (capítulos 1, 6, 7, 8 y 9). La misma lista vive en el motor (CORTA_SC),
// que recorta los textos; aquí se recorta el dibujo para que /corta no descargue lo que no va a enseñar.
const ESCENAS_CORTA = new Set([
  "contract", "kid8", "parents8", "eng8", "timeline8", "today8",
  "ch6open", "mnml", "guibbo", "back6",
  "shelf9", "bottles9", "phone9", "call10", "desk10", "gap10",
  "quiet11", "mkof", "mkpaso", "cont11", "end",
]);

function historiaCorta(): string {
  // Cada escena es un <section class="sc" … data-sc="…"> de primer nivel, sin secciones dentro.
  return HISTORIA.split(/(?=<section class="sc)/)
    .filter((trozo) => {
      const sc = /data-sc="([^"]+)"/.exec(trozo);
      return !sc || ESCENAS_CORTA.has(sc[1]);
    })
    .join("");
}

export function Pocket({ corta = false }: { corta?: boolean }) {
  return (
    <>
      <Controles />
      <Escenario />
      {/* Las viñetas: el motor las mide y las anima con el scroll, así que van tal cual, sin que React las vuelva a pintar. */}
      <main
        className="col"
        id="col"
        data-version={corta ? "corta" : "larga"}
        dangerouslySetInnerHTML={{ __html: corta ? historiaCorta() : HISTORIA }}
      />
      <Pie />
      <Motor />
    </>
  );
}
