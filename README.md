# Elias González · The Pocket

Un manga que se lee con el scroll: cómo una idea dibujada en una servilleta se vuelve una app.
Hecho con Next.js y React, listo para Vercel.

- `src/app/layout.tsx`: título, descripción, imagen para compartir y las tres letras (next/font).
- `src/app/page.tsx`: la página; `src/components/` los controles, el escenario, el pie y el motor.
- `src/components/historia.ts`: las viñetas de cada capítulo.
- `src/lib/motor.js`: el motor (scroll, globos, el chibi, los capítulos, ES/EN). Arranca una vez desde `Motor.tsx`.
- `src/app/pocket.css`: los estilos del manga.
- `public/img/`: todas las ilustraciones.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # lo mismo que hace Vercel
```
