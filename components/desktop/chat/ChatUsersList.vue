<template>
    <aside
        class="border-bg-border flex w-72 flex-col rounded-lg border border-solid bg-card text-card-foreground"
    >
        <ChatUsersListHeader />
        <div class="my-2 mr-1 flex-1 overflow-x-hidden overflow-y-scroll">
            <div class="relative flex min-h-full flex-col px-2">
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

<script setup lang="ts">
import ChatUsersListHeader from '~/components/desktop/chat/ChatUsersListHeader.vue';
</script>

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
