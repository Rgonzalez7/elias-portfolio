// El pie del manga y la hoja de los textos legales (el motor pone el texto de cada uno).

export function Pie() {
  return (
    <>
      <footer className="foot" id="foot">
        <div className="fin">
          <p className="fsfx" aria-hidden="true">おわり</p>
          <h2 className="fname" id="footName">ELIAS GONZÁLEZ</h2>
          <p className="ftag" data-t="ftag">Arquitecto de software. Hago productos que caben en un bolsillo.</p>
          <div className="fcols">
            <nav aria-labelledby="fh1">
              <h3 id="fh1" data-t="fh1">El manga</h3>
              <button type="button" className="flink" id="fTop" data-t="fTop">Volver al contrato</button>
              <button type="button" className="flink" id="fMenu" data-t="fMenu">Índice de capítulos</button>
              <button type="button" className="flink" id="fWrite" data-t="fWrite">Escríbeme</button>
            </nav>
            <nav aria-labelledby="fh2">
              <h3 id="fh2" data-t="fh2">Proyectos</h3>
              <a className="flink" href="https://www.mnml.one" target="_blank" rel="noopener">Minimal One</a>
              <a className="flink" href="https://www.guibbo.com" target="_blank" rel="noopener">Güibbo</a>
            </nav>
            <nav aria-labelledby="fh3">
              <h3 id="fh3" data-t="fh3">En otra parte</h3>
              <a className="flink" id="fMail" href="mailto:rmngzps@gmail.com">rmngzps@gmail.com</a>
              <a className="flink" href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1" target="_blank" rel="noopener">LinkedIn</a>
              <a className="flink" href="https://eliasgonzalez.io">eliasgonzalez.io</a>
            </nav>
          </div>
          <div className="flegal">
            <button type="button" className="flink sm" data-doc="legal" data-t="dLegal">Aviso legal</button>
            <button type="button" className="flink sm" data-doc="privacy" data-t="dPrivacy">Política de privacidad</button>
            <button type="button" className="flink sm" data-doc="cookies" data-t="dCookies">Política de cookies</button>
          </div>
          <p className="fcopy" data-t="fcopy">
            © 2026 Elias González. Dibujado a mano, programado a mano. Ningún pelo fue cortado en el proceso.
          </p>
        </div>
      </footer>

      <div id="legal" hidden role="dialog" aria-modal="true" aria-labelledby="legalTitle">
        <div className="lpage">
          <div className="lhead">
            <h2 id="legalTitle">Aviso legal</h2>
            <button type="button" id="legalClose" data-t="close">Cerrar</button>
          </div>
          <div className="lbody" id="legalBody"></div>
        </div>
      </div>
    </>
  );
}
