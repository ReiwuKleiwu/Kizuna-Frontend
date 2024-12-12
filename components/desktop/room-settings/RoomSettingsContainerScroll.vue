<template>
    <div
        class="grid h-12 grid-cols-3 items-center gap-2 rounded-lg border border-border bg-card p-2"
    >
        <NuxtLink
            to="chat"
            class="flex justify-self-start rounded-md p-1 hover:bg-accent"
        >
            <Icon name="lucide:x" />
        </NuxtLink>

        <div class="flex justify-center gap-2">
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
    </div>

    <!-- Tab content -->
    <div
        class="flex-1 overflow-hidden rounded-lg border border-border bg-card p-4"
    >
        <OverviewSettings v-if="selectedTab === 'overview'" />
        <MemberSettings v-else-if="selectedTab === 'members'" />
        <div v-else-if="selectedTab === 'bans'"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref('members');
const tabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Members', value: 'members' },
    { label: 'Bans', value: 'bans' },
];
</script>
