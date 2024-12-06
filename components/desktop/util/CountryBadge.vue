<template>
    <div
        class="flex gap-2 py-1 px-2 items-center rounded-md border border-border"
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
};

const languageCodeToLanguage: Record<string, string> = {
    en: 'English',
    fr: 'French',
    de: 'German',
    es: 'Spanish',
    it: 'Italian',
    jp: 'Japanese',
    kr: 'Korean',
};
</script>

<style scoped></style>
