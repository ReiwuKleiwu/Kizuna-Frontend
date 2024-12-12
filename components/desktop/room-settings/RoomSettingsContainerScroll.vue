<template>
    <div
        class="bg-card h-12 rounded-lg border border-border p-2 gap-2 grid grid-cols-3 items-center"
    >
        <NuxtLink
            to="chat"
            class="p-1 flex hover:bg-accent rounded-md justify-self-start"
        >
            <Icon name="lucide:x" />
        </NuxtLink>

        <div class="flex justify-center gap-2">
            <div
                v-for="tab in tabs"
                :key="tab.value"
                :class="[
                    'cursor-pointer px-4 py-1 rounded-md',
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
        class="bg-card flex-1 rounded-lg border border-border p-4 overflow-hidden"
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
