// https://nuxt.com/docs/api/configuration/nuxt-config
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

export default defineNuxtConfig({
 devtools: { enabled: true },
 pages: true,
 css: ['~/assets/css/tailwind.css', ],

 postcss: {
   plugins: {
     tailwindcss: {},
     autoprefixer: {},
   },
 },

 modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxt/icon"],

 compatibilityDate: '2024-08-19',
});