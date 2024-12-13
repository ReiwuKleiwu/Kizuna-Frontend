<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <div class="grid h-full flex-1 grid-cols-[1fr_min(80ch,_100%)_1fr] p-4">
        <div class="col-start-2 flex h-full flex-col gap-4">
            <h1 class="pl-4 text-2xl font-semibold">
                {{ t('chatroom_settings.overview.heading') }}
            </h1>

            <div class="flex">
                <ChatroomForm />
            </div>
            <div class="h-[1px] bg-border"></div>
            <ChatroomSettings />
        </div>
    </div>
</template>

<style scoped></style>
