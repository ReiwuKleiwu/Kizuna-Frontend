<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
    <!-- Label -->
    <div class="flex flex-col gap-2">
        <Label class="text-xs font-semibold uppercase" for="room-tags">
            {{ t('chatroom_settings.chatroom_card.label') }}
        </Label>
        <!-- Chatroom card -->
        <div
            class="group h-[26rem] w-80 overflow-hidden rounded-lg border border-border bg-background text-foreground"
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
                                class="absolute left-2 top-[-40px] flex items-center gap-2 text-wrap rounded-lg bg-background p-2"
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
                            class="line-clamp-5 break-all text-sm text-muted-foreground"
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
    </div>
</template>

<script setup lang="ts"></script>
