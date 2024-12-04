<template>
    <div class="rounded-lg p-4 flex gap-4 min-h-[40rem] aspect-video">
        <div
            class="flex flex-col bg-card flex-1 rounded-lg border border-border"
        >
            <div class="border-b border-border p-4">
                <h2 class="text-xl font-bold">Room-Name</h2>
            </div>
            <div class="flex flex-col flex-1 h-40 border-b border-border p-4">
                <h2 class="text-lg font-bold mb-2">Room-Description</h2>
                <div class="flex-1 overflow-y-scroll">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias commodi delectus, distinctio dolore eos hic illo in
                    maiores maxime neque nobis nostrum numquam officiis optio
                    placeat quisquam, ratione rerum sed veritatis voluptatem. Ad
                    adipisci at beatae corporis culpa cumque deserunt dolor
                    dolore doloribus eos eveniet fuga inventore ipsam laudantium
                    libero minima molestias natus nihil nisi numquam quidem, rem
                    reprehenderit sapiente sequi voluptates, voluptatibus
                    voluptatum. Amet consequuntur doloribus dolorum fuga illo
                    ipsam minima qui quis reprehenderit velit. Dolorum iure
                    iusto minima nisi possimus quasi veniam. Ab consequatur
                    dolorum eius fugit ipsam, molestiae, nam nesciunt
                    perferendis qui rerum totam vel velit vitae.
                </div>
            </div>
            <div class="flex flex-wrap gap-2 p-4 w-full">
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
            </div>
        </div>
        <div class="flex flex-col gap-4 h-full">
            <ChatUsersList class="overflow-y-scroll" />
            <Button>Join</Button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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
