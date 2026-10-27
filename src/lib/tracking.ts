// Medición de conversiones: cada clic a WhatsApp es un lead.
// 1) Guarda de dónde llegó la visita (UTM, gclid/fbclid o sitio de referencia).
// 2) Agrega esa referencia al mensaje prellenado de WhatsApp, para saber qué anuncio trajo cada lead.
// 3) Envía el evento generate_lead a Analytics (y a Meta, si el pixel está instalado).

const KEY = 'suma-ref';

function param(name: string) {
  return new URLSearchParams(location.search).get(name);
}

function currentRef(): string {
  const source = param('utm_source');
  if (source) {
    return [source, param('utm_medium'), param('utm_campaign')].filter(Boolean).join('/');
  }
  if (param('gclid')) return 'google/cpc';
  if (param('fbclid')) return 'facebook';
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, '');
    if (host && host !== location.hostname) return host;
  } catch {}
  return '';
}

function storedRef(): string {
  try {
    const fresh = currentRef();
    // Primer contacto de la sesión: no se pisa con navegación interna.
    if (fresh && !sessionStorage.getItem(KEY)) sessionStorage.setItem(KEY, fresh);
    return sessionStorage.getItem(KEY) ?? fresh;
  } catch {
    return currentRef();
  }
}

function placeOf(el: Element): string {
  if (el.closest('#promo-bar')) return 'barra_promo';
  if (el.closest('header')) return 'encabezado';
  if (el.closest('footer')) return 'pie';
  return el.closest('section[id]')?.id ?? el.closest('main')?.id ?? 'pagina';
}

export function initTracking() {
  const ref = storedRef();
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="https://wa.me/"]');

  if (ref) {
    links.forEach((a) => {
      const url = new URL(a.href);
      const text = url.searchParams.get('text') ?? '';
      url.searchParams.set('text', `${text}\n\n[ref: ${ref}]`);
      a.href = url.toString();
    });
  }

  links.forEach((a) =>
    a.addEventListener('click', () => {
      const params = {
        method: 'whatsapp',
        link_location: placeOf(a),
        page_path: location.pathname,
        campaign_ref: ref || 'directo',
      };
      const w = window as any;
      if (typeof w.gtag === 'function') w.gtag('event', 'generate_lead', params);
      if (typeof w.fbq === 'function') w.fbq('track', 'Lead');
    }),
  );
}
