// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@nuxt/image'],
  site: {
    url: 'http://localhost:3000/',
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  // RULES
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      // ignore: ['/'],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  experimental: { inlineRouteRules: true },
});