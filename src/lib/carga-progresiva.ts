// Las viñetas de fondo se piden cuando su escena está a unas pantallas de distancia,
// no todas al abrir el manga: así el teléfono no baja de golpe todas las ilustraciones.
// Cada viñeta trae su imagen en data-fondo y su estilo usa var(--fondo,none).

const ADELANTE = "300%"; // cuánto antes de llegar se piden (en alturas de pantalla)

function poner(seccion: Element) {
  seccion.querySelectorAll<HTMLElement>("[data-fondo]").forEach((el) => {
    const url = el.dataset.fondo;
    if (url && !el.style.getPropertyValue("--fondo")) el.style.setProperty("--fondo", `url(${url})`);
  });
}

export function iniciarCargaProgresiva() {
  const secciones = document.querySelectorAll("#col > section");
  if (!("IntersectionObserver" in window)) {
    secciones.forEach(poner);
    return;
  }
  const io = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        poner(e.target);
        io.unobserve(e.target);
      }),
    { rootMargin: `${ADELANTE} 0px ${ADELANTE} 0px` },
  );
  // Si el índice salta a otro capítulo, el observador ve llegar esa escena y la pide igual.
  secciones.forEach((s) => io.observe(s));
}
