<template>
    <div
        class="bg-background min-w-80 rounded-lg border border-border overflow-hidden hover:bg-accent group text-foreground h-fit"
    >
        <div class="relative aspect-video">
            <img
                src="/public/images/room_wallpaper.png"
                alt="Room Wallpaper"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="p-4 border-b border-solid border-bg-border relative">
            <TooltipProvider :delay-duration="100">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <div
                            class="flex items-center bg-background rounded-lg gap-2 p-2 text-wrap absolute top-[-40px] left-2 group-hover:bg-accent"
                        >
                            <img
                                class="w-10 h-auto rounded-md"
                                src="/public/images/profile_pic_1.jpg"
                                alt=""
                            />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" :side-offset="4">
                        <p>Username</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <div class="flex flex-col items-start gap-1 w-full">
                <h2 class="text-lg font-semibold">Room-name</h2>
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
<script setup lang="ts"></script>
