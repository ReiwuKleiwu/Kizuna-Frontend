<template>
    <div
        class="group relative mr-4 mt-6 grid w-auto grid-cols-[80px_1fr] rounded-lg p-2 text-card-foreground hover:bg-background"
    >
        <img
            src="/public/images/profile_pic_1.jpg"
            class="mt-1 h-auto w-12 self-start justify-self-center rounded-lg"
        />
        <div>
            <div class="flex items-center gap-4">
                <div>
                    <span class="font-bold text-card-foreground-highlight"
                        >Username
                    </span>
                </div>
                <div>
                    <span class="text-xs text-muted-foreground"
                        >Today at 17:08 Uhr</span
                    >
                </div>
            </div>
            <div class="pr-24">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, ex! Dolorem nobis suscipit, repudiandae sequi
                    soluta ratione reprehenderit? Nesciunt error repudiandae
                    dicta, libero minus rem rerum saepe aliquam fugiat eius illo
                    delectus soluta provident autem culpa officiis temporibus
                    facere. Eum error quos in commodi porro tempora
                    necessitatibus nam, est officia consequatur omnis culpa!
                    Officia, repellendus mollitia? Earum recusandae eos
                    reiciendis deserunt laborum, eius in soluta itaque tempore
                    blanditiis quisquam enim dolore quasi iste at ratione id?
                    Vero dolor quae perspiciatis aliquid consequuntur quia culpa
                    provident, aut possimus id consequatur non eos animi odio
                    doloribus similique tempore impedit recusandae minima minus.
                </span>
            </div>
            <div
                class="absolute -top-6 right-4 z-[1] grid grid-flow-col items-center justify-center gap-1 rounded-md border bg-background p-1 opacity-0 transition-opacity group-hover:opacity-100"
            >
                <TooltipProvider :delay-duration="100">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div
                                class="flex items-center justify-center rounded-md p-1 hover:bg-accent"
                            >
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
                            <div
                                class="flex items-center justify-center rounded-md p-1 hover:bg-accent"
                            >
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
                            <div
                                class="flex items-center justify-center rounded-md p-1 hover:bg-accent"
                            >
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
