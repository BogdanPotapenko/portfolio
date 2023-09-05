// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  app: {
    baseURL: "/portfolio/",
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en/index.ts",
      },
      {
        code: "uk",
        file: "uk/index.ts",
      },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    "~/components",
    { path: "~/components/layouts" },
    { path: "~/components/sections" },
    { path: "~/components/ui" },
  ],
});
