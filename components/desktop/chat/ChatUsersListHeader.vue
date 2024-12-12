<script setup lang="ts">
import { Progress } from '~/components/ui/progress';
</script>

<template>
    <div class="relative">
        <img
            class="border-bg-border aspect-video w-full rounded-t-lg border-solid"
            src="/public/images/room_wallpaper.png"
        />
        <!--<div class="fade-overlay" aria-hidden="true" />-->
    </div>
    <div
        class="border-bg-border relative flex flex-col gap-2 border-b border-solid p-4"
    >
        <TooltipProvider :delay-duration="100">
            <Tooltip>
                <TooltipTrigger as-child>
                    <div
                        class="absolute left-2 top-[-30px] flex items-center gap-2 text-wrap"
                    >
                        <div class="rounded-lg bg-card p-2">
                            <img
                                class="h-auto w-10 rounded-md"
                                src="/public/images/profile_pic_1.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right" :side-offset="4">
                    <p>Username</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <!-- <h2 class="text-lg font-bold">Room-Name</h2> -->
        <div class="mt-2 flex flex-col gap-2">
            <span class="text-sm text-muted-foreground">10 / 15 Users</span>
            <Progress :model-value="75" class="h-2" />
        </div>
    </div>
</template>

<style scoped>
.fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%);
    pointer-events: none;
}
</style>
