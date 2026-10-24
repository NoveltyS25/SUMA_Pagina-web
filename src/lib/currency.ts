// Cliente: los montos del sitio están en COP. Si el visitante no está en Colombia, se muestran en USD
// (aproximado; se factura en COP). Tasa de open.er-api.com guardada 12 h. Si algo falla, se deja todo en COP.

const isColombia = (): boolean => {
  try {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'America/Bogota') return true;
  } catch {}
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  return langs.some((l) => /-CO$/i.test(l ?? ''));
};

const loadRate = async (): Promise<number | null> => {
  const KEY = 'suma-usd-rate';
  try {
    const cached = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (cached && Date.now() - cached.t < 12 * 3600 * 1000) return cached.rate;
  } catch {}
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/COP');
    const data = await res.json();
    const rate = data?.rates?.USD;
    if (data?.result !== 'success' || !(rate > 0)) return null;
    try {
      localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), rate }));
    } catch {}
    return rate;
  } catch {
    return null;
  }
};

export interface Money {
  code: 'USD';
  /** Dólares por 1 COP. */
  rate: number;
  /** Convierte un monto en COP a texto en USD, redondeado a 2 cifras significativas. */
  format: (cop: number) => string;
}

let pending: Promise<Money | null> | null = null;

/** Devuelve la conversión a USD, o null si el visitante está en Colombia o no se pudo obtener la tasa. */
export const getMoney = (): Promise<Money | null> => {
  pending ??= (async () => {
    if (isColombia()) return null;
    const rate = await loadRate();
    if (!rate) return null;
    const locale = document.documentElement.lang || 'en';
    const format = (cop: number) => {
      const v = cop * rate;
      const mag = 10 ** (Math.floor(Math.log10(Math.max(v, 0.01))) - 1);
      const rounded = Math.round(v / mag) * mag;
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'code',
        minimumFractionDigits: 0,
        maximumFractionDigits: rounded < 10 ? 1 : 0,
      }).format(rounded);
    };
    return { code: 'USD', rate, format };
  })();
  return pending;
};

/** Reemplaza todos los [data-cop] por su valor en USD y muestra las notas [data-money-note]. */
export const applyMoney = async () => {
  const m = await getMoney();
  if (!m) return;
  document.querySelectorAll<HTMLElement>('[data-cop]').forEach((el) => {
    el.textContent = m.format(Number(el.dataset.cop));
  });
  document.querySelectorAll<HTMLElement>('[data-money-note]').forEach((el) => el.removeAttribute('hidden'));
  document.documentElement.dataset.currency = m.code;
};
