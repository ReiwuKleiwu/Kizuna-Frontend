<script setup lang="ts">
import BansSettingsUser from '~/components/desktop/room-settings/bans/BansSettingsUser.vue';

const { t } = useI18n();
</script>

<template>
    <div class="flex h-full flex-1 p-4">
        <div class="grid h-full flex-1 grid-cols-[1fr_min(80ch,_100%)_1fr]">
            <div
                class="col-span-1 col-start-2 flex h-full flex-col gap-4 overflow-y-hidden"
            >
                <h1 class="text-2xl font-semibold">
                    {{ t('chatroom_settings.bans.heading') }}
                </h1>
                <div
                    class="flex flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden"
                >
                    <div class="mr-2 flex flex-col gap-2">
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                        <BansSettingsUser />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}

/* CHROME */
::-webkit-scrollbar {
    width: 0.5rem;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
    background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
    background: hsl(var(--accent));
    border-radius: 30px;
}

@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--accent)) hsl(var(--background));
    }
}
</style>
