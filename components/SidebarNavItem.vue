<template>
  <TooltipProvider :delayDuration="100">
    <li>
      <Tooltip>
        <TooltipTrigger asChild>
          <a class="rounded-lg p-4 no-underline flex items-center gap-5 hover:bg-accent">
            <Icon :name="iconName" class="shrink-0" />
            <span class="grow">{{ label }}</span>
          </a>
        </TooltipTrigger>
        <TooltipContent v-if="isCollapsed" side="right" :sideOffset="8">
          <p>{{ label }}</p>
        </TooltipContent>
      </Tooltip>
    </li>
  </TooltipProvider>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    iconName: {
      type: String,
      required: true,
    },
    label: String,
    isCollapsed: Boolean,
  });
</script>
