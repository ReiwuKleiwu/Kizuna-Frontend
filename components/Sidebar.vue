<template>
  <nav :class="['flex flex-col gap-4']">
    <div
      :class="[
        'flex-1 text-card-foreground flex flex-col overflow-hidden text-nowrap transition-all duration-300 ease-in-out rounded-lg border border-bg-border border-solid bg-card',
        { 'w-[66px] p-1': isCollapsed, 'w-64 py-1 px-2': !isCollapsed },
      ]"
    >
      <ul class="list-none flex flex-col">
        <SidebarHeader :isCollapsed="isCollapsed" :toggleSidebar="toggleSidebar" />
        <div class="bg-border h-[1px] my-1"></div>
        <SidebarNavItem
          v-for="item in navItems"
          :key="item.label"
          :iconName="item.icon"
          :label="item.label"
          :isCollapsed="isCollapsed"
        />
      </ul>
    </div>
    <SidebarFooter :isCollapsed="isCollapsed" :user="user" />
  </nav>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import SidebarHeader from './SidebarHeader.vue';
  import SidebarNavItem from './SidebarNavItem.vue';
  import SidebarFooter from './SidebarFooter.vue';

  const isCollapsed = ref(true);
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const user = ref({
    username: 'Username',
    profilePicture: './public/images/profile_pic_1.jpg',
  });

  const navItems = [
    { label: 'Explore Chats', icon: 'lucide:messages-square' },
    { label: 'Friends', icon: 'lucide:users-round' },
    { label: 'Room Settings', icon: 'lucide:settings-2' },
  ];
</script>
