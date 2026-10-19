export const SITE_URL = 'https://sumafidelidad.com';
export const WA_NUMBER = '573193299348';
export const WA_DISPLAY = '+57 319 329 9348';

export const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_CONTACT = wa('Hola, quiero saber más sobre SUMA para mi negocio.');
export const WA_DEMO = wa('Hola, quiero agendar una demo de SUMA.');
export const WA_PROMO = wa('Hola, quiero aprovechar la promo de SUMA (paga 3 meses y recibe 3).');

// La promo se oculta sola pasada esta fecha (hora Colombia).
export const PROMO_END = '2026-10-31T23:59:59-05:00';

export const PRICE_MONTH = 240000;
export const PRICE_PROMO_MONTH = 120000;

export const faqs = [
  {
    q: '¿Qué es una tarjeta de fidelización digital?',
    a: 'Es la tarjeta de sellos de tu negocio dentro del celular del cliente, en Apple Wallet o Google Wallet. Suma sellos sola con cada compra, da premios y te deja avisarle de promos. Reemplaza al cartón de sellos.',
  },
  {
    q: '¿Mis clientes tienen que descargar una app?',
    a: 'No. La tarjeta vive en el Wallet que ya trae su celular. Escanean un QR, se registran en unos 30 segundos y listo.',
  },
  {
    q: '¿Tengo que cambiar mi caja o mi sistema de ventas?',
    a: 'No. SUMA se conecta a tu caja (POS) actual. Tu equipo cobra como siempre y pide la cédula del cliente.',
  },
  {
    q: '¿Qué información obtengo de mis clientes?',
    a: 'Quién vuelve, cuánto gasta y quién dejó de venir. Es tu base de datos propia, con autorización del cliente para recibir promociones.',
  },
  {
    q: '¿Puedo personalizar la tarjeta y los avisos?',
    a: 'Sí, sin costo extra: diseño, categorías, sellos para el premio y notificaciones (por ejemplo, cuando un cliente pasa cerca o lleva días sin volver).',
  },
  {
    q: '¿Hay límite de tarjetas, sellos o clientes?',
    a: 'No. La membresía incluye tarjetas, sellos y bases de datos ilimitados.',
  },
  {
    q: '¿Hay permanencia y puedo pagar en línea?',
    a: 'La suscripción es a 12 meses y cada sede adicional suma $30.000 al mes. El pago en línea viene en camino; por ahora coordinamos todo por WhatsApp.',
  },
];
