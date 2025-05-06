// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-swiper", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", "@ant-design-vue/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  antd: { extractStyle: true },
  pinia: { storesDirs: ["./stores/**"] },
  runtimeConfig: {
    mongodbUri: process.env.NUXT_PRIVATE_MONGODB_URI || "mongodb://localhost:27017",
    mongodbName: process.env.NUXT_PRIVATE_MONGODB_NAME || "nuxt_app",
    jwtSecret: process.env.NUXT_PRIVATE_JWT_SECRET || "default-secret",
    jwtExpiresIn: process.env.NUXT_PRIVATE_JWT_EXPIRES_IN || "1d",
  },
});
