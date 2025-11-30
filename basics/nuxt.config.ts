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
});
