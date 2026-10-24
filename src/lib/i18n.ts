import { ui, homePath, type Lang } from '../i18n/ui';

const formatter = (lang: Lang) =>
  new Intl.NumberFormat(ui[lang].locale, {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });

// En español se escribe $240.000 (sin espacio), como estaba antes.
const cop = (n: number, lang: Lang) => formatter(lang).format(n).replace(/^\$\s/, '$');

/** Monto en pesos colombianos. El navegador lo cambia a USD si el visitante no está en Colombia (lib/currency.ts). */
export const money = (n: number, lang: Lang) => `<span data-cop="${n}">${cop(n, lang)}</span>`;

/** Reemplaza los {240000} de un texto por montos convertibles. Solo para textos propios (set:html). */
export const rich = (text: string, lang: Lang) => text.replace(/\{(\d+)\}/g, (_, n) => money(Number(n), lang));

/** Igual que rich pero en texto plano (JSON-LD, meta). */
export const plain = (text: string, lang: Lang) => text.replace(/\{(\d+)\}/g, (_, n) => cop(Number(n), lang));

/** Enlace a una sección de la portada en el idioma dado. */
export const homeLink = (lang: Lang, hash = '') => `${homePath(lang)}${hash}`;
