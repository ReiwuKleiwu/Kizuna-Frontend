<template>
    <div
        :class="[
            'h-16 text-card-foreground flex justify-center overflow-hidden text-nowrap transition-all duration-300 ease-in-out rounded-lg border border-bg-border border-solid bg-card',
            { 'w-[66px] p-1': isCollapsed, 'w-64 py-1 px-2': !isCollapsed },
        ]"
    >
        <div class="flex items-center justify-between gap-5 w-full">
            <div
                class="rounded-lg flex p-2 items-center gap-5 hover:bg-accent w-full"
            >
                <img
                    src="/public/images/profile_pic_1.jpg"
                    class="rounded-full w-10 h-auto shrink-0"
                >
                <span class="grow">{{ user.username }}</span>
            </div>
            <TooltipProvider :delay-duration="100">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <NuxtLink
                            to="/profile-settings"
                            class="rounded-lg flex p-2 hover:bg-accent"
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
