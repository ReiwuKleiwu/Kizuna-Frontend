<script setup lang="ts"></script>

<template>
    <div
        class="flex items-center rounded-lg bg-background p-2 pr-4 hover:bg-accent"
    >
        <div class="flex flex-1 items-center gap-2">
            <img
                class="h-auto w-10 rounded-md"
                src="/public/images/profile_pic_1.jpg"
                alt=""
            />
            <span>Username</span>
        </div>
        <div class="items flex gap-1">
            <TooltipProvider :delay-duration="100">
                <div class="flex flex-col items-center justify-center">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="flex items-center rounded-lg p-2 hover:bg-card"
                            >
                                <Icon class="" name="lucide:user-round-minus" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" :side-offset="8">
                            <p>Kick</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="flex items-center rounded-lg p-2 hover:bg-card"
                            >
                                <Icon name="lucide:user-round-x" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" :side-offset="8">
                            <p>Ban</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="flex items-center rounded-lg p-2 hover:bg-card"
                            >
                                <Icon name="lucide:star" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" :side-offset="8">
                            <p>Handover Host</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>
    </div>
</template>

<style scoped></style>
