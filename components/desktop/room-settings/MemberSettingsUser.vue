<script setup lang="ts"></script>

<template>
    <div
        class="bg-background flex items-center p-2 pr-4 rounded-lg hover:bg-accent"
    >
        <div class="flex flex-1 items-center gap-2">
            <img
                class="w-10 h-auto rounded-md"
                src="/public/images/profile_pic_1.jpg"
                alt=""
            />
            <span>Username</span>
        </div>
        <div class="flex gap-1 items">
            <TooltipProvider :delay-duration="100">
                <div class="flex flex-col items-center justify-center">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="rounded-lg p-2 flex items-center hover:bg-card"
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
                                class="rounded-lg p-2 flex items-center hover:bg-card"
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
                                class="rounded-lg p-2 flex items-center hover:bg-card"
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
