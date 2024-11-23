<template>
    <div class="flex flex-1 gap-4">
        <ChatMain />
        <ChatUsersList />
    </div>
</template>

<script setup lang="ts">
import ChatUsersList from '~/components/desktop/chat/ChatUsersList.vue';
import ChatMain from '~/components/desktop/chat/ChatMain.vue';
</script>
