// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Custom components
  components: [
    {
      path: '@/components',
      pathPrefix: false, // mens Nuxt does not use the common prefix anymore - #components
    },
    {
      path: '@/otherComponents', // Vue scans otherComponents as well when rendering layouts and looking for components
    },
  ],
  // CSS or bootstrap
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
});
