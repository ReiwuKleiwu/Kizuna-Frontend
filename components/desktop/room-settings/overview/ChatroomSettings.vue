<script setup lang="ts"></script>

<template>
    <div class="flex flex-col gap-6 p-4">
        <div class="flex justify-between">
            <span class="font-semibold"
                >Restrict login access to registered users only</span
            >
            <Switch />
        </div>
        <div class="flex justify-between">
            <span class="font-semibold">Enable NSFW content in chatrooms</span>
            <Switch />
        </div>
    </div>
</template>

<style scoped></style>
