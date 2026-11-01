/* =============================================================================
   Inhalte für den AVW-Entwurf – NUR öffentlich belegte Angaben bzw. das, was
   Angela in ihren Sprachnachrichten (06.07.2026) erzählt hat.

   Quellen: Handelsregister/northdata (HRB 9718, AG Kleve), Kleinanzeigen-Pro-
   Profil „AVW – Alden Vermarktung West GmbH – Insolvenzverwertung", eBay-Konto.
   Mit `OFFEN` markierte Werte fehlen noch und müssen von Franz-Josef kommen.
   ========================================================================== */

export const company = {
  short: 'AVW',
  name: 'Alden Vermarktung West',
  legal: 'AVW – Alden Vermarktung West GmbH',
  owner: 'Franz-Josef Aldenhoff',
  since: 2009,
  street: 'Zur Rosau 3',
  zip: '46459',
  city: 'Rees',
  // Warenstandort laut Kleinanzeigen-Profil; genaue Adresse OFFEN.
  stockCity: 'Emmerich am Rhein',
  phoneHref: '+492851968942',
  phoneLabel: '02851 968942',
  mobileHref: '+4915782020102',
  mobileLabel: '0157 82020102',
  email: null as string | null, // OFFEN
  register: 'Amtsgericht Kleve, HRB 9718',
  hours: [
    { day: 'Montag – Freitag', time: '7:30 – 19:00 Uhr' },
    { day: 'Samstag', time: '8:30 – 14:00 Uhr' },
  ],
} as const;

export const links = {
  kleinanzeigen: 'https://www.kleinanzeigen.de/pro/aldenvermarktungwest',
  ebay: 'https://www.ebay.de/usr/alden-vermarktung-west',
} as const;

export interface Service {
  title: string;
  text: string;
  icon: 'clear' | 'sell' | 'store';
}

/* Leistungen – aus Angelas Beschreibung („Beräumungen und Akten, Einlagerungen",
   „wird beauftragt, Sachen abzuholen und die dann zu verkaufen") und dem
   Unternehmenszweck. Formulierungen = ENTWURF. */
export const services: Service[] = [
  {
    title: 'Beräumung & Übernahme',
    text: 'Wir beräumen Betriebs- und Geschäftsräume im Auftrag von Insolvenzverwaltern und Unternehmen – zum vereinbarten Festpreis, zuverlässig und termingerecht.',
    icon: 'clear',
  },
  {
    title: 'Verwertung & Verkauf',
    text: 'Maschinen, Fahrzeuge, Lager- und Büroausstattung bringen wir wieder in Umlauf – über unseren Verkauf in Emmerich und unsere Online-Shops.',
    icon: 'sell',
  },
  {
    title: 'Einlagerung',
    text: 'Akten und Inventar lagern wir sicher ein, bis sie wieder gebraucht oder verwertet werden.',
    icon: 'store',
  },
];

export interface Category {
  title: string;
  examples: string;
  icon: 'excavator' | 'shelf' | 'truck' | 'office';
}

/* Warengruppen – abgeleitet aus den aktuellen Kleinanzeigen-Angeboten
   (Stand 01.11.2026). Alle Kacheln führen in den Kleinanzeigen-Shop. */
export const categories: Category[] = [
  { title: 'Baumaschinen & Zubehör', examples: 'Bagger-Anbauteile, Ketten, Räder, Arbeitsbühnen', icon: 'excavator' },
  { title: 'Lager & Werkstatt', examples: 'Schwerlastregale, Werkzeug, Messmittel, Sortimo', icon: 'shelf' },
  { title: 'Lkw, Anhänger & Fahrzeuge', examples: 'Nutzfahrzeuge, Anhänger, Ladungssicherung', icon: 'truck' },
  { title: 'Büro & Betrieb', examples: 'Bürostühle, Heizungen, Betriebsausstattung', icon: 'office' },
];
