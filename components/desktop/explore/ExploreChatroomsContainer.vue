<script setup lang="ts"></script>

<template>
    <div
        class="border-bg-border relative flex min-h-0 min-w-0 flex-1 justify-start rounded-lg border border-solid bg-card p-4 text-card-foreground"
    >
        <div
            class="mr-2 box-border min-h-0 flex-1 overflow-x-hidden overflow-y-scroll"
        >
            <div
                class="relative grid min-h-full flex-1 grid-cols-[repeat(auto-fill,_20rem)] justify-center gap-4"
            >
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
                <ExploreChatroomCard />
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
