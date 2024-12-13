<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <div class="flex flex-col gap-6 p-4">
        <div class="flex justify-between">
            <span class="font-semibold">{{
                t('chatroom_settings.settings.restrict_login_access')
            }}</span>
            <Switch />
        </div>
        <div class="flex justify-between">
            <span class="font-semibold">{{
                t('chatroom_settings.settings.enable_nsfw_content')
            }}</span>
            <Switch />
        </div>
    </div>
</template>

<style scoped></style>
