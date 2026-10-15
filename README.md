# SUMA · Página web

Sitio de marketing de **SUMA** (tarjetas de fidelización digital) para captar negocios. Español de Colombia. Dominio: sumafidelidad.com · Hosting: Cloudflare (Workers Static Assets).

## Stack
Astro 7 (HTML estático, casi 0 JS) + Tailwind 4 + TypeScript. Fuentes autohospedadas con Fontsource (Barlow Condensed y Inter).

## Comandos
```
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Estructura
- `src/pages/index.astro`: home. Secciones en `src/components/`.
- `src/pages/politica-de-datos.astro`: política de tratamiento de datos (aprobada, revisión legal confirmada 2026-10-15).
- `src/lib/site.ts`: WhatsApp, fecha de fin de la promo, precios y preguntas frecuentes.
- `src/styles/global.css`: colores y tipografías (`--color-volt` es el acento, hoy verde `#5dd62c` (paleta: #0f0f0f, #202020, #5dd62c, #337418, #f8f8f8)).
- `public/logos/`: logos (SUMA blanco/negro con transparencia, Alma, CUPÁ). Pendiente: logo SUMA en vector.
- `public/og.png`: imagen para redes (1200×630). Se generó con HTML y hay que rehacerla si cambian color o titular.
- `referencias/`: material de apoyo que no se publica.

## Pendientes
- Conectar el repo `NoveltyS25/SUMA_Pagina-web` a Cloudflare (Workers & Pages > Create > Import repository). Build: `npm run build`, deploy: `npx wrangler deploy`.
- Dominio: lo administra el cocreador; agregar el dominio custom en el Worker (y subdominios de clientes, ej. `cupa.sumafidelidad.com`).
- Logo SUMA en vector y logo de CUPÁ en buena resolución.
- Carrusel de clientes (`LogoMarquee`) oculto en `index.astro` hasta tener más clientes.
- Capturas reales de la tarjeta para reemplazar la maqueta del hero.
- La promo de octubre se oculta sola el 31/10/2026 (`PROMO_END` en `site.ts`).
- Pagos en línea: botón desactivado "Pronto" en Precios.
