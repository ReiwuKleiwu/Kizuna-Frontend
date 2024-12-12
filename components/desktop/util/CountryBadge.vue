<template>
    <div
        class="flex items-center gap-2 rounded-md border border-border px-2 py-1"
    >
        <CountryFlag :country="languageCodeToFlag[languageCode]" />
        <span class="font-semibold">{{
            languageCodeToLanguage[languageCode]
        }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    languageCode: {
        type: String,
        required: true,
        default: 'de',
    },
});

const languageCodeToFlag: Record<string, string> = {
    en: 'us-outlying-islands',
    fr: 'france',
    de: 'germany',
    es: 'spain',
    it: 'italy',
    jp: 'japan',
    kr: 'south-korea',
    zh: 'china',
};

const languageCodeToLanguage: Record<string, string> = {
    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    es: 'Español',
    it: 'Italiano',
    jp: '日本語',
    kr: '한국어',
    zh: '中文',
};
</script>

<style scoped></style>
