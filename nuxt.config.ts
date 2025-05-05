// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-swiper", "@pinia/nuxt", "pinia-plugin-persistedstate/nuxt", "@ant-design-vue/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  antd: { extractStyle: true },
  pinia: { storesDirs: ["./stores/**"] },
});
