<template>
    <TooltipProvider :delay-duration="100">
        <li>
            <Tooltip>
                <TooltipTrigger as-child>
                    <NuxtLink
                        class="rounded-lg p-4 no-underline flex items-center gap-6 hover:bg-accent"
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
    label: String,
    to: String,
    isCollapsed: Boolean,
});

const isActive = computed(() => route.path === props.to);
</script>
