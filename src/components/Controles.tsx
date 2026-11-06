// Lo que flota encima del manga: idioma, el índice y las dos hojas (la poción y la tienda de demo).
// El motor llena los textos (según el idioma) y abre o cierra cada hoja.

export function Controles() {
  return (
    <>
      {/* El atajo al contacto: aparece al firmar, para quien navega con el teclado o tiene prisa. */}
      <button className="saltar" id="saltar" type="button" hidden>Saltar al contacto</button>
      {/* Dónde está el lector: el capítulo y cuánto lleva leído. */}
      <p className="progreso" id="progreso" hidden>
        <span id="progresoCap"></span>
        <i aria-hidden="true"><b id="progresoBar"></b></i>
      </p>
      {/* En pantallas anchas, el índice vive en el margen. */}
      <nav className="rail" id="rail" hidden aria-label="Capítulos"></nav>
      <button className="lang" id="lang" type="button" aria-label="Cambiar a inglés" lang="en">EN</button>
      <button className="menuBtn" id="menuBtn" type="button" aria-expanded="false" aria-controls="menu">
        <svg viewBox="0 0 32 24" aria-hidden="true">
          <path d="M2 3C10 2 22 4 30 2.5M2 12C12 13 20 11 30 12.5M2 21C9 22 23 20.5 30 21.5" />
        </svg>
        <span className="sr" id="menuBtnLabel">Abrir menú</span>
      </button>

      <div id="menu" hidden role="dialog" aria-modal="true" aria-labelledby="menuTitle">
        <div className="mpage">
          <div className="mhead">
            <span className="moku" aria-hidden="true">目次</span>
            <h2 id="menuTitle">Índice</h2>
            <button id="menuClose" type="button">Cerrar</button>
          </div>
          <p className="mquip" id="menuQuip"></p>
          <ol className="mlist" id="mlist"></ol>
          <button className="mversion" id="menuVersion" type="button">Versión corta: 5 capítulos</button>
          <span className="msfx" aria-hidden="true">バッ</span>
        </div>
      </div>

      <div id="potion" hidden role="dialog" aria-modal="true" aria-labelledby="potName">
        <div className="dpage">
          <span className="dsfx" aria-hidden="true">ポン</span>
          <div className="pbar" id="potBar"><span id="potName">X</span></div>
          <p className="dtag" id="potQuote"></p>
          <p className="pprice" id="potPrice"></p>
          <ul className="plist" id="potList"></ul>
          <button className="dlink" id="potPick" type="button" data-t="pick">Este mismo</button>
          <button className="dclose" id="potClose" type="button" data-t="keep">Sigo mirando</button>
        </div>
      </div>

      <div id="demo" hidden role="dialog" aria-modal="true" aria-labelledby="demoName">
        <div className="dpage">
          <span className="dsfx" aria-hidden="true">ギィ</span>
          <div className="dphone">
            <div className="dbar"><span id="demoName">SHOP</span></div>
            <p className="dtag" id="demoTag"></p>
            <div className="dbtns">
              <span data-t="dbt1">MENÚ</span>
              <span data-t="dbt2">RESERVAR</span>
              <span data-t="dbt3">PUNTOS</span>
            </div>
            <span className="dstamp">DEMO</span>
          </div>
          <a className="dlink" id="demoLink" href="https://www.mnml.one" target="_blank" rel="noopener" data-t="dlink">
            Verla en Minimal One
          </a>
          <button className="dclose" id="demoClose" type="button" data-t="dclose">Salir de la tienda</button>
        </div>
      </div>
    </>
  );
}

// Las capas fijas del escenario: la cuadrícula del fondo, lo que flota cerca, la pista de los globos y el chibi.
export function Escenario() {
  return (
    <>
      <div id="depthFar" className="off" aria-hidden="true"></div>
      <div id="depthNear" aria-hidden="true"></div>
      <div id="cshadow" aria-hidden="true"></div>
      <div id="track" aria-live="off"></div>
      <div id="chibi" aria-hidden="true">
        <span className="speed"></span>
        {/* eslint-disable-next-line @next/next/no-img-element -- el motor cambia este src cuadro a cuadro */}
        <img src="/img/d-9cc3ca425d20612d.webp" alt="" />
        <span className="sign"></span>
      </div>
    </>
  );
}
