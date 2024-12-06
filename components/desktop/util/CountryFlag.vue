<template>
    <Icon :name="`twemoji:flag-${country}`" class="icon" />
</template>

<script setup lang="ts">
// Define props
defineProps({
    country: {
        type: String,
        required: true,
        default: 'germany',
    },
});
</script>

<style scoped>
.icon {
    --height: 0.75em;
    /* Set width-height ratio based on your icon's aspect ratio */
    --width-height-ratio: calc(100 / 72);

    height: var(--height);
    width: calc(var(--height) * var(--width-height-ratio));
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 3px;
    position: relative;
    filter: saturate(1.1);
    display: block;

    /* Force GPU acceleration for filters (especially for Safari) */
    transform: translateZ(0);
}

.icon::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    filter: contrast(0) brightness(2);
    opacity: 0.25;
}
</style>
