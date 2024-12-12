<template>
    <div
        class="border-bg-border flex items-center justify-between border-b p-4"
    >
        <h2 class="text-xl font-extrabold">Room-Name</h2>
        <div class="flex gap-1">
            <TooltipProvider :delay-duration="100">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <NuxtLink
                            class="group flex items-center gap-6 rounded-lg p-2 no-underline hover:bg-accent"
                            to="/room-settings"
                        >
                            <Icon
                                name="lucide:settings-2"
                                class="shrink-0 text-card-foreground group-hover:text-card-foreground-highlight"
                            />
                        </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" :side-offset="8">
                        <p>Room Settings</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>
</template>
