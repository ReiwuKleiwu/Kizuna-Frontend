<script setup lang="ts"></script>

<template>
    <div
        class="flex-1 overflow-hidden rounded-lg border border-border bg-card p-4"
    >
        <div class="grid h-full flex-1 grid-cols-[1fr_min(80ch,_100%)_1fr] p-4">
            <div
                class="col-start-2 flex h-full flex-col gap-4 overflow-auto overflow-x-hidden"
            >
                <h1 class="pl-4 text-2xl font-semibold">Create Chatroom</h1>
                <CreateChatroomForm />
            </div>
        </div>
    </div>
</template>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}

/* CHROME */
::-webkit-scrollbar {
    width: 0.5rem;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
    background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
    background: hsl(var(--accent));
    border-radius: 30px;
}

@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--accent)) hsl(var(--background));
    }
}
</style>
