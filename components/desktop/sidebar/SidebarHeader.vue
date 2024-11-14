<template>
  <li class="flex justify-end">
    <span
      class="font-semibold tracking-widest mr-auto p-4 flex items-center transition-all duration-300 ease-in-out"
      :class="{
        'translate-x-0 opacity-100': !isCollapsed,
        '-translate-x-full opacity-0': isCollapsed,
      }"
    >
      KIIZUNA | 絆
    </span>
    <button @:click="toggleSidebar" class="flex p-4 border-none rounded-lg bg-none cursor-pointer hover:bg-accent">
      <Icon name="lucide:chevrons-left" :class="['transition-transform duration-300', { 'rotate-180': isCollapsed }]" />
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
