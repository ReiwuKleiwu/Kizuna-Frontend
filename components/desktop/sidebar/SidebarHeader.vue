<template>
    <li class="flex justify-end">
        <span
            class="mr-auto flex items-center p-4 font-semibold tracking-widest transition-all duration-300 ease-in-out"
            :class="{
                'translate-x-0 opacity-100': !isCollapsed,
                '-translate-x-full opacity-0': isCollapsed,
            }"
        >
            KIIZUNA | 絆
        </span>
        <button
            class="flex cursor-pointer rounded-lg border-none bg-none p-4 hover:bg-accent"
            @:click="toggleSidebar"
        >
            <Icon
                name="lucide:chevrons-left"
                :class="[
                    'transition-transform duration-300',
                    { 'rotate-180': isCollapsed },
                ]"
            />
        </button>
    </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    isCollapsed: Boolean,
    toggleSidebar: {
        type: Function,
        required: true,
    },
});
</script>
