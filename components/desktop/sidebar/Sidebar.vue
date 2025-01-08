<template>
    <nav :class="['flex flex-col gap-4']">
        <div
            :class="[
                'border-bg-border flex flex-1 flex-col overflow-hidden text-nowrap rounded-lg border border-solid bg-card text-card-foreground transition-all duration-300 ease-in-out',
                { 'w-[66px] p-1': isCollapsed, 'w-64 px-2 py-1': !isCollapsed },
            ]"
        >
            <ul class="flex list-none flex-col gap-2">
                <SidebarHeader
                    :is-collapsed="isCollapsed"
                    :toggle-sidebar="toggleSidebar"
                />
                <div class="my-1 h-[1px] bg-border" />
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
    {
        label: 'Explore Chatrooms',
        icon: 'lucide:messages-square',
        to: '/explore',
    },
    // { label: 'Friends', icon: 'lucide:users-round', to: '/friends' },
    { label: 'Active Chatroom', icon: 'lucide:message-square', to: '/chat' },
    {
        label: 'Create Chatroom',
        icon: 'lucide:square-plus',
        to: '/create-chatroom',
    },
];
</script>
