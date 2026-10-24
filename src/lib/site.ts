import { ui, type Lang } from '../i18n/ui';

export const SITE_URL = 'https://sumafidelidad.com';
export const WA_NUMBER = '573193299348';
export const WA_DISPLAY = '+57 319 329 9348';

export const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const waLinks = (lang: Lang) => ({
  contact: wa(ui[lang].wa.contact),
  demo: wa(ui[lang].wa.demo),
  promo: wa(ui[lang].wa.promo),
});

// Versiones en español, para las páginas que no se traducen (guía y legales).
export const WA_CONTACT = waLinks('es').contact;
export const WA_DEMO = waLinks('es').demo;
export const WA_PROMO = waLinks('es').promo;

// La promo se oculta sola pasada esta fecha (hora Colombia).
export const PROMO_END = '2026-10-31T23:59:59-05:00';

export const PRICE_MONTH = 240000;
export const PRICE_PROMO_MONTH = 120000;
