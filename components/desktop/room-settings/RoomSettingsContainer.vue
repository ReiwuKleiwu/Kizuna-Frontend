<template>
    <div
        class="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-lg border border-border bg-card p-4"
    >
        <div
            class="col-start-2 flex justify-center gap-2 rounded-lg bg-background p-1"
        >
            <div
                v-for="tab in tabs"
                :key="tab.value"
                :class="[
                    'cursor-pointer rounded-md px-4 py-1',
                    selectedTab === tab.value
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent',
                ]"
                @click="selectedTab = tab.value"
            >
                {{ tab.label }}
            </div>
        </div>
        <NuxtLink
            to="chat"
            class="col-start-3 flex justify-self-start rounded-md p-2 hover:bg-accent"
        >
            <Icon name="lucide:x" />
        </NuxtLink>
    </div>

    <!-- Tab content -->
    <div
        class="flex-1 overflow-hidden rounded-lg border border-border bg-card p-4"
    >
        <OverviewSettings v-if="selectedTab === 'overview'" />
        <MemberSettings v-else-if="selectedTab === 'members'" />
        <BansSettings v-else-if="selectedTab === 'bans'" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref('overview');
const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Members', value: 'members' },
    { label: 'Bans', value: 'bans' },
];
</script>
