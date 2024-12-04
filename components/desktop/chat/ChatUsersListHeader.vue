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
    <div class="p-4 border-b border-solid border-bg-border flex flex-col gap-2">
        <h2 class="text-lg font-bold">Room-Name</h2>
        <div class="flex flex-col gap-2">
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
