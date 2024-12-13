// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    ssr: false,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
    ],
    colorMode: {
        classSuffix: '',
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui',
    },
    i18n: {
        defaultLocale: 'de',
        locales: [
            { code: 'de', language: 'de-DE', file: 'de.json' },
            { code: 'en', language: 'en-US', file: 'en.json' },
            { code: 'jp', language: 'jp-JP', file: 'jp.json' },
        ],
        langDir: './locales',
        vueI18n: './i18n.config.ts',
    },
});
