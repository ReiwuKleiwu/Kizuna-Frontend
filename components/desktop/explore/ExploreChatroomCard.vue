<template>
    <div
        class="bg-background min-w-80 rounded-lg border border-border overflow-hidden hover:bg-accent group text-foreground"
    >
        <div class="relative aspect-video">
            <img
                src="/public/images/room_wallpaper.png"
                alt="Room Wallpaper"
                class="w-full h-full object-cover"
            />
            <div
                class="fade-overlay absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[hsl(var(--background))] to-transparent pointer-events-none group-hover:from-[hsl(var(--accent))]"
                aria-hidden="true"
            ></div>
        </div>
        <div class="p-4 border-b border-solid border-bg-border">
            <div class="flex flex-col items-start gap-1 w-full">
                <h2 class="text-lg font-semibold">Room-name</h2>
                <div class="flex items-center gap-2 p-2 text-wrap">
                    <img
                        class="w-10 h-auto rounded-md"
                        src="/public/images/profile_pic_1.jpg"
                        alt=""
                    />
                    <span class="break-words whitespace-normal text-wrap">
                        Username
                    </span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-muted-foreground text-sm">10 / 15 Users</span>
                <Progress :model-value="75" class="h-2" />
            </div>
        </div>
        <div class="p-4">
            <div class="flex items-center">
                <div>
                    <p
                        class="text-sm text-muted-foreground group-hover:text-foreground"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Et neque eaque aspernatur placeat aut iusto
                        deserunt asperiores provident ad voluptate cupiditate
                        tempore corporis, animi nisi!.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
