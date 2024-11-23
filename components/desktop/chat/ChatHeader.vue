<template>
  <div class="flex items-center justify-between p-4 border-b border-bg-border">
    <h2 class="text-xl font-bold">Room-Name</h2>
    <div class="flex gap-1">
      <TooltipProvider :delay-duration="100">
        <Tooltip>
          <TooltipTrigger as-child>
            <NuxtLink
              class="rounded-lg p-2 no-underline flex items-center gap-6 hover:bg-accent group"
              to="/room-settings"
            >
              <Icon
                name="lucide:settings-2"
                class="text-card-foreground shrink-0 group-hover:text-card-foreground-highlight"
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
