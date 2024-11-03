// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  routeRules: {
    "/**": { static: true },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "@nuxtjs/i18n"],

  googleFonts: {
    families: {
      ABeeZee: [400, 500, 600, 700],
    },
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  app: {
    head: {
      title: "Your Website Title",
      link: [
        {
          rel: "icon",
          type: "image/svg",
          href: "/icons/euroCredit-logo.png",
          sizes: "32x32",
        },
      ],
    },
  },
});
