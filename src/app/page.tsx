import { Controles, Escenario } from "@/components/Controles";
import { Pie } from "@/components/Pie";
import { Motor } from "@/components/Motor";
import { HISTORIA } from "@/components/historia";

export default function Inicio() {
  return (
    <>
      <Controles />
      <Escenario />
      {/* Las viñetas: el motor las mide y las anima con el scroll, así que van tal cual, sin que React las vuelva a pintar. */}
      <main className="col" id="col" dangerouslySetInnerHTML={{ __html: HISTORIA }} />
      <Pie />
      <Motor />
    </>
  );
}
