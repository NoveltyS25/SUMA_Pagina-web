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
    q: '¿Mis clientes tienen que descargar una app?',
    a: 'No. La tarjeta vive en Apple Wallet o Google Wallet, que ya están en su celular. Escanean un QR, se registran y listo.',
  },
  {
    q: '¿Tengo que cambiar mi caja o mi sistema de ventas?',
    a: 'No. SUMA se conecta a tu caja (POS) actual. Tu equipo cobra como siempre y pide la cédula del cliente, igual que ya hace para la factura electrónica.',
  },
  {
    q: '¿Cuánto tarda un cliente en inscribirse?',
    a: 'Unos 30 segundos: escanea el QR, llena sus datos y guarda la tarjeta en su celular.',
  },
  {
    q: '¿Qué información obtengo de mis clientes?',
    a: 'Quién vuelve, cuánto gasta y quién dejó de venir. Es tu base de datos propia, con la autorización del cliente para recibir promociones.',
  },
  {
    q: '¿Puedo avisarles de promos y eventos?',
    a: 'Sí. Es un canal directo al celular del cliente para llenar el happy hour, anunciar eventos y celebrar fechas especiales sin depender solo de redes sociales.',
  },
  {
    q: '¿Hay límite de tarjetas, sellos o clientes?',
    a: 'No. La membresía incluye tarjetas, sellos y bases de datos ilimitados.',
  },
  {
    q: '¿Personalizar mi tarjeta tiene costo extra?',
    a: 'No. El diseño de la tarjeta y su funcionamiento (categorías, sellos para llegar al premio, tipo de premio y notificaciones) los ajustamos a tu negocio sin cobro adicional.',
  },
  {
    q: '¿Qué notificaciones puedo activar?',
    a: 'Las que tú decidas. Por ejemplo, un aviso cuando un cliente pasa cerca de tu local, o cuando llevan cierta cantidad de días sin volver.',
  },
  {
    q: '¿Hay permanencia?',
    a: 'La suscripción es a 12 meses. Si más adelante abres otra sede, cada sede adicional suma $30.000 al mes.',
  },
  {
    q: '¿Puedo pagar en línea?',
    a: 'Estamos trabajando en eso. Por ahora coordinamos todo por WhatsApp y te acompañamos paso a paso.',
  },
];
