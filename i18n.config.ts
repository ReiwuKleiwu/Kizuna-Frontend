/*
export default defineI18nConfig(() => {
    return {
        legacy: false,
        lazy: false,
        defaultLocale: 'de',
        locales: [
            { code: 'de', language: 'de-DE', file: 'de.json' },
            { code: 'en', language: 'en-US', file: 'en.json' },
            { code: 'jp', language: 'jp-JP', file: 'jp.json' },
        ],
        langDir: './locales',
    };
});*/

export default defineI18nConfig(() => {
    return {
        legacy: false,
    };
});
