<script setup lang="ts"></script>

<template>
    <div
        class="bg-card p-4 flex flex-1 justify-start relative rounded-lg border border-solid border-bg-border text-card-foreground min-h-0 min-w-0"
    >
        <div
            class="mr-2 overflow-y-scroll overflow-x-hidden box-border flex-1 min-h-0"
        >
            <div
                class="grid flex-1 grid-cols-[repeat(auto-fill,_20rem)] justify-center gap-4 min-h-full relative"
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
