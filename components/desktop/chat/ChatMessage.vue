<template>
  <div
    class="text-card-foreground relative grid grid-cols-[80px_1fr] w-auto p-2 mt-6 mr-4 rounded-lg hover:bg-background group"
  >
    <img src="/public/images/profile_pic_1.jpg" class="w-12 h-auto rounded-lg justify-self-center self-start mt-1" >
    <div>
      <div class="flex gap-4 items-center">
        <div>
          <span class="text-card-foreground-highlight font-bold">Username</span>
        </div>
        <div>
          <span class="text-muted-foreground text-xs">Today at 17:08 Uhr</span>
        </div>
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
        <TooltipProvider :delay-duration="100">
          <Tooltip>
            <TooltipTrigger as-child>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:reply" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :side-offset="8">
              <p>Reply</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider :delay-duration="100">
          <Tooltip>
            <TooltipTrigger as-child>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:pen" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :side-offset="8">
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider :delay-duration="100">
          <Tooltip>
            <TooltipTrigger as-child>
              <div class="flex items-center justify-center p-1 rounded-md hover:bg-accent">
                <Icon name="lucide:trash" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" :side-offset="8">
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
</template>
