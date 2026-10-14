# SUMA · Página web

Sitio de marketing de **SUMA** (tarjetas de fidelización digital) para captar negocios. Español de Colombia. Dominio: sumafidelidad.com · Hosting previsto: Vercel.

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
- `src/pages/politica-de-datos.astro`: política de tratamiento de datos (borrador, falta revisión legal).
- `src/lib/site.ts`: WhatsApp, fecha de fin de la promo, precios y preguntas frecuentes.
- `src/styles/global.css`: colores y tipografías (`--color-volt` es el acento, hoy cian `#00E0D0`).
- `public/logos/`: logos (SUMA blanco/negro con transparencia, Alma, CUPÁ). Pendiente: logo SUMA en vector.
- `public/og.png`: imagen para redes (1200×630). Se generó con HTML y hay que rehacerla si cambian color o titular.
- `referencias/`: material de apoyo que no se publica.

## Pendientes
- Push a GitHub (repo `NoveltyS25/SUMA_Pagina-web`, decidir si privado) y conectar con Vercel.
- Dominio: lo administra el cocreador; conectar DNS a Vercel (y subdominios de clientes, ej. `cupa.sumafidelidad.com`).
- Logo SUMA en vector y logo de CUPÁ en buena resolución.
- Política de datos: revisión legal, razón social, NIT, ciudad y correo.
- Capturas reales de la tarjeta para reemplazar la maqueta del hero.
- La promo de octubre se oculta sola el 31/10/2026 (`PROMO_END` en `site.ts`).
- Pagos en línea: botón desactivado "Pronto" en Precios.
