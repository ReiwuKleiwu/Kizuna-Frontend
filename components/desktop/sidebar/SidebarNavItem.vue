<template>
    <TooltipProvider :delay-duration="100">
        <li>
            <Tooltip>
                <TooltipTrigger as-child>
                    <NuxtLink
                        class="flex items-center gap-6 rounded-lg p-4 no-underline hover:bg-accent"
                        :to="to"
                        :class="{
                            'bg-accent text-card-foreground-highlight':
                                isActive,
                        }"
                    >
                        <Icon :name="iconName" class="shrink-0" />
                        <span class="grow">{{ label }}</span>
                    </NuxtLink>
                </TooltipTrigger>
                <TooltipContent
                    v-if="isCollapsed"
                    side="right"
                    :side-offset="8"
                >
                    <p>{{ label }}</p>
                </TooltipContent>
            </Tooltip>
        </li>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
    iconName: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    isCollapsed: Boolean,
});

const isActive = computed(() => route.path === props.to);
</script>
