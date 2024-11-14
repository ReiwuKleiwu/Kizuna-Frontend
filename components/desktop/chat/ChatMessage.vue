<template>
  <div
    class="text-card-foreground relative grid grid-cols-[80px_1fr] w-auto p-2 mt-6 rounded-lg hover:bg-background group"
  >
    <img src="/public/images/profile_pic_1.jpg" class="w-16 h-auto rounded-lg" />
    <div>
      <div class="grid grid-cols-[auto_1fr] gap-4">
        <span class="font-bold">User</span>
        <span>Today at 17:08 Uhr</span>
      </div>
      <div class="pr-24">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ex! Dolorem nobis suscipit, repudiandae
          sequi soluta ratione reprehenderit? Nesciunt error repudiandae dicta, libero minus rem rerum saepe aliquam
          fugiat eius illo delectus soluta provident autem culpa officiis temporibus facere. Eum error quos in commodi
          porro tempora necessitatibus nam, est officia consequatur omnis culpa! Officia, repellendus mollitia? Earum
          recusandae eos reiciendis deserunt laborum, eius in soluta itaque tempore blanditiis quisquam enim dolore
          quasi iste at ratione id? Vero dolor quae perspiciatis aliquid consequuntur quia culpa provident, aut possimus
          id consequatur non eos animi odio doloribus similique tempore impedit recusandae minima minus.
        </span>
      </div>
      <div
        class="absolute -top-6 right-4 p-1 grid grid-flow-col items-center justify-center gap-1 bg-background rounded-md z-[1] border opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <TooltipProvider :delayDuration="100">
          <Tooltip>
            <TooltipTrigger asChild>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:reply" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :sideOffset="8">
              <p>Reply</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider :delayDuration="100">
          <Tooltip>
            <TooltipTrigger asChild>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:pen" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :sideOffset="8">
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider :delayDuration="100">
          <Tooltip>
            <TooltipTrigger asChild>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:trash" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :sideOffset="8">
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</template>
