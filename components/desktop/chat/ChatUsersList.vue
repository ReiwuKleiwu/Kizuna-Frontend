<template>
    <aside
        class="bg-card flex flex-col w-72 rounded-lg border border-solid border-bg-border"
    >
        <img
            class="w-full aspect-video rounded-t-lg"
            src="/public/images/room_wallpaper.png"
        />
        <div
            id="users-scroller"
            class="overflow-x-hidden overflow-y-scroll flex-1 my-2 mr-1 overflow-x-hidden"
        >
            <div class="flex flex-col min-h-full relative px-2">
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import ChatUser from '~/components/desktop/chat/ChatUser.vue';
</script>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}

/* CHROME */
::-webkit-scrollbar {
    width: 0.2rem;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
    background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
    background: hsl(var(--primary));
    border-radius: 30px;
    max-height: 10rem;
}

/* Non-WebKit browsers */
@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--primary)) hsl(var(--background));
    }
}
</style>
