<template>
    <div class="rounded-lg p-4 flex gap-4 min-h-[40rem] aspect-video">
        <div
            class="flex flex-col bg-card flex-1 rounded-lg border border-border"
        >
            <!-- Header Area -->
            <div class="border-b border-border p-6">
                <h2 class="text-2xl font-extrabold tracking-wide text-primary">
                    Room-Name
                </h2>
            </div>

            <!-- Content Section -->
            <div
                class="flex flex-col flex-1 h-40 border-b border-border p-6 bg-content"
            >
                <h2 class="text-lg font-semibold mb-4">Room-Description</h2>
                <div
                    class="flex-1 overflow-y-scroll leading-relaxed text-gray-300"
                >
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

            <!-- Badges -->
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

/* Updated Styling */
.text-primary {
    color: hsl(var(--primary));
}

.bg-content {
    background-color: hsl(var(--background-alt));
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
