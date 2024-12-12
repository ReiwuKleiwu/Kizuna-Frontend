<template>
    <div
        :class="[
            'border-bg-border flex h-16 justify-center overflow-hidden text-nowrap rounded-lg border border-solid bg-card text-card-foreground transition-all duration-300 ease-in-out',
            { 'w-[66px] p-1': isCollapsed, 'w-64 px-2 py-1': !isCollapsed },
        ]"
    >
        <div class="flex w-full items-center justify-between gap-5">
            <div
                class="flex w-full items-center gap-5 rounded-lg p-2 hover:bg-accent"
            >
                <img
                    src="/public/images/profile_pic_1.jpg"
                    class="h-auto w-10 shrink-0 rounded-full"
                />
                <span class="grow">{{ user.username }}</span>
            </div>
            <TooltipProvider :delay-duration="100">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <NuxtLink
                            to="/profile-settings"
                            class="flex rounded-lg p-2 hover:bg-accent"
                        >
                            <Icon name="lucide:settings" class="shrink-0" />
                        </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent v-if="!isCollapsed" :side-offset="4">
                        <p>Profile Settings</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isCollapsed: Boolean,
    user: {
        type: Object,
        required: true,
    },
});
</script>
