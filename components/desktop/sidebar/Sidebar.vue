<template>
    <nav :class="['flex flex-col gap-4']">
        <div
            :class="[
                'flex-1 text-card-foreground flex flex-col overflow-hidden text-nowrap transition-all duration-300 ease-in-out rounded-lg border border-bg-border border-solid bg-card',
                { 'w-[66px] p-1': isCollapsed, 'w-64 py-1 px-2': !isCollapsed },
            ]"
        >
            <ul class="list-none flex flex-col gap-2">
                <SidebarHeader
                    :is-collapsed="isCollapsed"
                    :toggle-sidebar="toggleSidebar"
                />
                <div class="bg-border h-[1px] my-1" />
                <SidebarNavItem
                    v-for="item in navItems"
                    :key="item.label"
                    :icon-name="item.icon"
                    :label="item.label"
                    :to="item.to"
                    :is-collapsed="isCollapsed"
                />
            </ul>
        </div>
        <SidebarFooter :is-collapsed="isCollapsed" :user="user" />
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isCollapsed = ref(true);
const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};

const user = ref({
    username: 'Username',
    profilePicture: './public/images/profile_pic_1.jpg',
});

const navItems = [
    { label: 'Explore Chats', icon: 'lucide:messages-square', to: '/explore' },
    // { label: 'Friends', icon: 'lucide:users-round', to: '/friends' },
    { label: 'Active Chat', icon: 'lucide:message-square', to: '/chat' },
    { label: 'Room Settings', icon: 'lucide:settings-2', to: '/settings' },
];
</script>
