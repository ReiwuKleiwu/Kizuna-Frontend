<template>
    <div>
        <!-- Room card -->
        <div
            class="group h-[26rem] h-fit min-w-80 cursor-pointer overflow-hidden rounded-lg border border-border bg-background text-foreground hover:bg-accent"
            @click="openDialog"
        >
            <div class="relative aspect-video">
                <img
                    src="/public/images/room_wallpaper.png"
                    alt="Room Wallpaper"
                    class="h-full w-full object-cover"
                />
            </div>
            <div class="border-bg-border relative border-b border-solid p-4">
                <TooltipProvider :delay-duration="100">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="absolute left-2 top-[-40px] flex items-center gap-2 text-wrap rounded-lg bg-background p-2 group-hover:bg-accent"
                            >
                                <img
                                    class="h-auto w-10 rounded-md"
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
                <div class="flex w-full flex-col items-start gap-1">
                    <div class="flex w-full items-center justify-between gap-2">
                        <h2 class="truncate text-lg font-semibold">
                            Room-Name
                        </h2>
                        <CountryBadge class="shrink-0" language-code="de" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-sm text-muted-foreground"
                        >10 / 15 Users</span
                    >
                    <Progress :model-value="75" class="h-2" />
                </div>
            </div>
            <div class="p-4">
                <div class="flex items-center">
                    <div class="w-full">
                        <p
                            class="line-clamp-5 break-all text-sm text-muted-foreground group-hover:text-foreground"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet delectus itaque minus modi optio?
                            Accusantium adipisci aperiam assumenda atque
                            consectetur consequatur consequuntur doloribus
                            eligendi illum incidunt magni maxime molestias nobis
                            possimus quae quia quis, tempora? Alias amet hic
                            laboriosam, magni maxime perferendis sed. A at aut
                            commodi deserunt iusto nobis perferendis unde.
                            Beatae maiores nesciunt officia recusandae repellat.
                            At doloremque enim fugit illum nesciunt ratione
                            repudiandae sunt vero. Autem ipsam nemo officia
                            possimus qui sint vel, voluptatum! Ad cum deleniti
                            dicta dolore, doloribus, ipsam iste iusto magnam
                            molestiae necessitatibus nihil odio provident quasi
                            quod saepe vitae voluptate voluptatem. Cumque,
                            iusto!
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
        />

        <!-- Dialog -->
        <div
            v-if="isDialogOpen || isClosing"
            :class="[
                'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background shadow-lg duration-200',
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
