<script setup lang="ts">
import { Progress } from '~/components/ui/progress';
</script>

<template>
    <div class="relative">
        <img
            class="w-full aspect-video rounded-t-lg border-solid border-bg-border"
            src="/public/images/room_wallpaper.png"
        />
        <!--<div class="fade-overlay" aria-hidden="true" />-->
    </div>
    <div
        class="p-4 border-b border-solid border-bg-border flex flex-col gap-2 relative"
    >
        <TooltipProvider :delay-duration="100">
            <Tooltip>
                <TooltipTrigger as-child>
                    <div
                        class="flex items-center gap-2 text-wrap absolute top-[-30px] left-2"
                    >
                        <div class="bg-card p-2 rounded-lg">
                            <img
                                class="w-10 h-auto rounded-md"
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
        <div class="flex flex-col gap-2 mt-2">
            <span class="text-muted-foreground text-sm">10 / 15 Users</span>
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
