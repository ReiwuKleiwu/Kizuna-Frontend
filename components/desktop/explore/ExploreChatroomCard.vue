<template>
    <div>
        <!-- Room card -->
        <div
            class="bg-background min-w-80 rounded-lg border border-border overflow-hidden hover:bg-accent group text-foreground h-fit cursor-pointer"
            @click="openDialog"
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
                    <span class="text-muted-foreground text-sm"
                        >10 / 15 Users</span
                    >
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
                            deserunt asperiores provident ad voluptate
                            cupiditate tempore corporis, animi nisi!.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Overlay -->
        <div
            v-if="isDialogOpen || isClosing"
            :class="[
                'fixed inset-0 z-50 bg-black/80 duration-200',
                {
                    'animate-in fade-in-0': isDialogOpen,
                    'animate-out fade-out-0': isClosing,
                },
            ]"
            @click="closeDialog"
            @animationend="handleAnimationEnd"
        ></div>

        <!-- Dialog -->
        <div
            v-if="isDialogOpen || isClosing"
            :class="[
                'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 border bg-background shadow-lg duration-200 rounded-lg',
                {
                    'animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]':
                        isDialogOpen,
                    'animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]':
                        isClosing,
                },
            ]"
            @animationend="handleAnimationEnd"
        >
            <ExploreChatroomDialog />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State for dialog visibility
const isDialogOpen = ref(false);
const isClosing = ref(false);

// Open the dialog
const openDialog = () => {
    isDialogOpen.value = true;
    isClosing.value = false;
};

// Close the dialog
const closeDialog = () => {
    isDialogOpen.value = false;
    isClosing.value = true;
};

// Handle the end of the animation
const handleAnimationEnd = () => {
    if (isClosing.value) {
        isClosing.value = false;
    }
};
</script>
