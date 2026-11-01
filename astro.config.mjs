// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro-Konfiguration fuer den AVW-Website-Entwurf.
// Veroeffentlichung als GitHub-Pages-Projektseite:
//   https://asaroz.github.io/avw-vorschau/
// Fuer eine eigene Domain spaeter: 'site' auf die Domain setzen und 'base' entfernen.
export default defineConfig({
  site: 'https://asaroz.github.io',
  base: '/avw-vorschau/',
  vite: {
    plugins: [tailwindcss()],
  },
});
