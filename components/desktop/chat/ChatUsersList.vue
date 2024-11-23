<template>
    <aside
        class="bg-card flex flex-col w-72 rounded-lg border border-solid border-bg-border text-card-foreground"
    >
        <ChatUsersListHeader />
        <div
            id="users-scroller"
            class="overflow-x-hidden overflow-y-scroll flex-1 my-2 mr-1"
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

<style scoped>
.fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%);
    pointer-events: none;
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
    background: hsl(var(--accent));
    border-radius: 30px;
    max-height: 10rem;
}
/* Non-WebKit browsers */
@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--accent)) hsl(var(--background));
    }
}
</style>

<script setup lang="ts">
import ChatUsersListHeader from '~/components/desktop/chat/ChatUsersListHeader.vue';
</script>
