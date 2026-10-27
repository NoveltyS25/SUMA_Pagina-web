// Contenido de las páginas por tipo de negocio (/tarjeta-de-fidelizacion-para-...).
// Cada una tiene texto propio: no es una plantilla con la palabra cambiada.
// En los textos, {price} se reemplaza por el precio mensual.

export interface Niche {
  slug: string;
  path: string;
  /** "cafeterías" (plural, minúscula) */
  plural: string;
  /** "Cafeterías" (para chips y enlaces) */
  label: string;
  title: string;
  description: string;
  h1Accent: string;
  lead: string;
  waMessage: string;
  heroAlt: string;
  pains: [string, string][];
  steps: [string, string][];
  ideasTitle: string;
  ideas: [string, string][];
  faqs: { q: string; a: string }[];
  closingTitle: string;
  closingSub: string;
  /** Solo cafeterías: muestra el caso de Cupá. */
  cupaCase?: boolean;
}

const PRICE_FAQ = {
  q: '¿Cuánto cuesta?',
  a: 'La membresía es de {price} al mes por sede, con tarjetas, sellos y clientes ilimitados. Cada sede adicional suma $30.000 al mes. La suscripción es a 12 meses.',
};

export const niches: Niche[] = [
  {
    slug: 'cafeterias',
    path: '/tarjeta-de-fidelizacion-para-cafeterias',
    plural: 'cafeterías',
    label: 'Cafeterías',
    title: 'Tarjeta de fidelización digital para cafeterías | SUMA',
    description:
      'Tarjeta de sellos digital para cafeterías: tus clientes la guardan en Apple o Google Wallet, sin apps, y suma sola desde tu caja. Sabe quién vuelve.',
    h1Accent: 'para cafeterías',
    lead: 'Una tarjeta de sellos en el Apple Wallet y el Google Wallet de tus clientes. Cada café suma, el décimo es de regalo y tú sabes quién vuelve. Sin apps y conectada a tu caja.',
    waMessage: 'Hola, tengo una cafetería y quiero saber más sobre SUMA.',
    heroAlt: 'Dueño de una cafetería y dos clientes con la tarjeta de sellos digital en el celular',
    pains: [
      ['Se pierde o se olvida', 'El cartón se queda en la otra chaqueta y el café de regalo nunca llega.'],
      ['No sabes quién es tu cliente', 'Un sello en papel no te dice cuántas veces vuelve ni cuánto gasta.'],
      ['No hay cómo avisarles', 'Lanzas el postre nuevo y dependes de que vean tu Instagram.'],
    ],
    steps: [
      ['Pega el QR', 'En el mostrador o en las mesas.'],
      ['Se inscriben', 'Toma unos 30 segundos.'],
      ['Cada café suma', 'Cobras igual y el sello llega solo.'],
    ],
    ideasTitle: 'Ideas de fidelización para cafeterías',
    ideas: [
      ['10 sellos, café de regalo', 'La meta clásica. La cantidad la defines tú.'],
      ['Categorías de clientes', 'Quien más viene sube de nivel y recibe algo más.'],
      ['Avisos en las horas flojas', 'Cuéntales de una promo para llenar la tarde del martes.'],
      ['Aviso de novedades', 'Anuncia el pastel del día directo al celular.'],
      ['Aviso a quien no vuelve', 'Escríbele a quien lleva días sin pasar por tu café.'],
      ['Cumpleaños y fechas', 'Un detalle en el día justo vale más que un descuento al azar.'],
    ],
    faqs: [
      {
        q: '¿Cuántos sellos debe tener la tarjeta de una cafetería?',
        a: 'Muchas cafeterías empiezan con 10 sellos para un café gratis, pero la cantidad la defines tú. Con los datos de visitas puedes acortarla o alargarla.',
      },
      {
        q: '¿Mis clientes necesitan descargar una app?',
        a: 'No. La tarjeta vive en el Wallet que ya trae su celular. Escanean el QR, se inscriben en unos 30 segundos y la guardan.',
      },
      {
        q: '¿Tengo que cambiar mi caja?',
        a: 'No. SUMA se conecta a tu caja actual. Tu equipo cobra como siempre y pide la cédula del cliente.',
      },
      PRICE_FAQ,
    ],
    closingTitle: 'Que tus clientes vuelvan por otro café',
    closingSub: 'Cuéntanos de tu cafetería y te mostramos SUMA funcionando.',
    cupaCase: true,
  },
  {
    slug: 'restaurantes',
    path: '/tarjeta-de-fidelizacion-para-restaurantes',
    plural: 'restaurantes',
    label: 'Restaurantes',
    title: 'Tarjeta de fidelización digital para restaurantes | SUMA',
    description:
      'Tarjeta de sellos digital para restaurantes: tus comensales la guardan en Apple o Google Wallet, sin apps, y se conecta a tu caja. Conoce a quien vuelve.',
    h1Accent: 'para restaurantes',
    lead: 'Una tarjeta de sellos en el Apple Wallet y el Google Wallet de tus comensales. Cada visita suma, el premio llega solo y tú sabes quién vuelve, cuánto gasta y quién dejó de venir. Sin apps y conectada a tu caja.',
    waMessage: 'Hola, tengo un restaurante y quiero saber más sobre SUMA.',
    heroAlt: 'Dueño de un negocio de comida y dos clientes con la tarjeta de sellos digital en el celular',
    pains: [
      ['Mesas llenas, clientes sin nombre', 'Atiendes cientos de personas al mes y no sabes quiénes son ni cuántas veces volvieron.'],
      ['Los días flojos siguen flojos', 'Sin un canal directo, llenar el martes depende de publicar y esperar.'],
      ['El descuento no deja nada', 'Regalar descuentos a todos cuesta margen y no te dice quién es tu mejor cliente.'],
    ],
    steps: [
      ['Pon el QR a la vista', 'En la mesa, en la caja o en la carta.'],
      ['Se inscriben', 'Desde su celular, en unos 30 segundos.'],
      ['Cada visita suma', 'Cobras como siempre y pides la cédula.'],
    ],
    ideasTitle: 'Ideas de fidelización para restaurantes',
    ideas: [
      ['Premio al completar la tarjeta', 'Un postre, una entrada o una bebida de la casa.'],
      ['Categorías de clientes', 'Tus habituales suben de nivel y reciben algo más.'],
      ['Avisos del menú del día', 'Cuéntales de una promo para entre semana directo a su celular.'],
      ['Recupera a quien dejó de venir', 'Escríbele a quien lleva días sin pasar por tu mesa.'],
      ['Cumpleaños y fechas especiales', 'Invítalos a celebrar en tu restaurante.'],
      ['Conoce a tu clientela', 'Quién vuelve, cuánto gasta y cada cuánto viene.'],
    ],
    faqs: [
      {
        q: '¿Funciona con la caja o el POS de mi restaurante?',
        a: 'SUMA se conecta a tu caja actual y tu equipo cobra como siempre. Escríbenos por WhatsApp con el sistema que usas y te confirmamos la conexión.',
      },
      {
        q: '¿Mis meseros tienen que hacer algo extra?',
        a: 'Solo pedir la cédula del cliente al cobrar, igual que para la factura electrónica. El sello llega solo.',
      },
      {
        q: '¿Puedo usarlo en varias sedes?',
        a: 'Sí. La membresía es por sede y cada sede adicional suma $30.000 al mes.',
      },
      PRICE_FAQ,
    ],
    closingTitle: 'Que tus comensales vuelvan a tu mesa',
    closingSub: 'Cuéntanos de tu restaurante y te mostramos SUMA funcionando.',
  },
  {
    slug: 'bares',
    path: '/tarjeta-de-fidelizacion-para-bares',
    plural: 'bares',
    label: 'Bares',
    title: 'Tarjeta de fidelización digital para bares | SUMA',
    description:
      'Tarjeta de sellos digital para bares: tus clientes la guardan en Apple o Google Wallet, sin apps, y puedes avisarles de eventos y promos. Conoce a tus habituales.',
    h1Accent: 'para bares',
    lead: 'Una tarjeta de sellos en el Apple Wallet y el Google Wallet de tus clientes. Cada visita suma y puedes avisarles de eventos y del happy hour directo a su celular. Sin apps y conectada a tu caja.',
    waMessage: 'Hola, tengo un bar y quiero saber más sobre SUMA.',
    heroAlt: 'Dueño de un negocio y dos clientes con la tarjeta de sellos digital en el celular',
    pains: [
      ['Dependes de Instagram para llenar la noche', 'Publicas el evento y esperas que lo vean a tiempo.'],
      ['No sabes quiénes son tus habituales', 'Ves caras conocidas, pero no cuántas veces vienen ni cuánto gastan.'],
      ['Las promos no tienen seguimiento', 'No sabes quién la aprovechó ni si volvió después.'],
    ],
    steps: [
      ['Pon el QR en la barra', 'Y en las mesas o en la entrada.'],
      ['Se inscriben', 'Desde su celular, en unos 30 segundos.'],
      ['Cada visita suma', 'Cobras igual y el sello llega solo.'],
    ],
    ideasTitle: 'Ideas de fidelización para bares',
    ideas: [
      ['Aviso de happy hour', 'Cuéntales la promo del día directo a su celular.'],
      ['Eventos y noches especiales', 'Anuncia la música en vivo o el evento de la semana.'],
      ['Premio a la visita número 10', 'Un detalle de la casa para quien más viene.'],
      ['Categorías para tus habituales', 'Quien más viene sube de nivel y recibe algo más.'],
      ['Recupera a quien dejó de venir', 'Escríbele a quien lleva semanas sin pasar por tu bar.'],
      ['Cumpleaños', 'Invítalos a celebrar contigo.'],
    ],
    faqs: [
      {
        q: '¿Puedo avisar de un evento o del happy hour?',
        a: 'Sí. SUMA es un canal directo al celular de tus clientes, con su autorización, para anunciar eventos y promociones sin depender solo de redes sociales.',
      },
      {
        q: '¿Mis clientes necesitan descargar una app?',
        a: 'No. La tarjeta vive en el Wallet que ya trae su celular. Escanean el QR y se inscriben en unos 30 segundos.',
      },
      {
        q: '¿Funciona con mi caja?',
        a: 'SUMA se conecta a tu caja actual y tu equipo cobra como siempre. Escríbenos por WhatsApp con el sistema que usas y te confirmamos la conexión.',
      },
      PRICE_FAQ,
    ],
    closingTitle: 'Que tus habituales vuelvan esta noche',
    closingSub: 'Cuéntanos de tu bar y te mostramos SUMA funcionando.',
  },
  {
    slug: 'panaderias',
    path: '/tarjeta-de-fidelizacion-para-panaderias',
    plural: 'panaderías',
    label: 'Panaderías',
    title: 'Tarjeta de fidelización digital para panaderías | SUMA',
    description:
      'Tarjeta de sellos digital para panaderías y pastelerías: tus clientes la guardan en Apple o Google Wallet, sin apps, y suma sola en cada compra.',
    h1Accent: 'para panaderías',
    lead: 'Una tarjeta de sellos en el Apple Wallet y el Google Wallet de tus clientes de todos los días. Cada compra suma, el regalo llega solo y tú sabes quién vuelve. Sin apps y conectada a tu caja.',
    waMessage: 'Hola, tengo una panadería y quiero saber más sobre SUMA.',
    heroAlt: 'Dueño de un negocio de panadería y dos clientes con la tarjeta de sellos digital en el celular',
    pains: [
      ['El cliente del pan de cada día no deja huella', 'Viene seguido, pero no sabes quién es ni cuánto compra en el mes.'],
      ['Las tarjetas de papel no se completan', 'Compras pequeñas y frecuentes: el cartón se arruga y se pierde.'],
      ['No hay cómo avisar de la hornada', 'El pan caliente o el postre del día solo lo ven quienes pasan por la puerta.'],
    ],
    steps: [
      ['Pon el QR en el mostrador', 'Junto a la vitrina o a la caja.'],
      ['Se inscriben', 'Toma unos 30 segundos, una sola vez.'],
      ['Cada compra suma', 'Pides la cédula al cobrar y el sello llega solo.'],
    ],
    ideasTitle: 'Ideas de fidelización para panaderías',
    ideas: [
      ['Un pan o un café de regalo', 'Al completar la tarjeta. La cantidad de sellos la defines tú.'],
      ['Avisos de la hornada', 'Cuéntales del pan recién hecho o del postre del día.'],
      ['Categorías de clientes', 'Tus clientes de todos los días suben de nivel.'],
      ['Recupera a quien dejó de venir', 'Escríbele a quien lleva días sin pasar por tu panadería.'],
      ['Temporadas y fechas especiales', 'Anuncia tus pedidos de Navidad, Día de la Madre o cumpleaños.'],
      ['Conoce tu clientela', 'Quién vuelve, con qué frecuencia y cuánto compra.'],
    ],
    faqs: [
      {
        q: '¿Sirve si mis clientes compran rápido y de paso?',
        a: 'Sí. Inscribirse toma unos 30 segundos y se hace una sola vez. Después solo dan su cédula al pagar y el sello llega solo.',
      },
      {
        q: '¿Mis clientes necesitan descargar una app?',
        a: 'No. La tarjeta vive en el Wallet que ya trae su celular.',
      },
      {
        q: '¿Tengo que cambiar mi caja?',
        a: 'No. SUMA se conecta a tu caja actual y tu equipo cobra como siempre.',
      },
      PRICE_FAQ,
    ],
    closingTitle: 'Que tus clientes vuelvan por su pan',
    closingSub: 'Cuéntanos de tu panadería y te mostramos SUMA funcionando.',
  },
];

export const nicheBySlug = (slug: string) => niches.find((n) => n.slug === slug)!;
