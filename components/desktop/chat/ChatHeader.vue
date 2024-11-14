<template>
  <div class="flex items-center justify-between p-4 border-b border-bg-border">
    <h2 class="text-xl font-bold">Room-Name</h2>
    <div class="flex gap-1">
      <TooltipProvider :delayDuration="100">
        <Tooltip>
          <TooltipTrigger asChild>
            <NuxtLink class="rounded-lg p-2 no-underline flex items-center gap-6 hover:bg-accent" to="/room-settings">
              <Icon name="lucide:settings-2" class="shrink-0" />
            </NuxtLink>
          </TooltipTrigger>
          <TooltipContent side="bottom" :sideOffset="8">
            <p>Room Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
