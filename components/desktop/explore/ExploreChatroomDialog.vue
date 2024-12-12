<template>
    <div class="flex aspect-video min-h-[40rem] gap-4 rounded-lg p-4">
        <div
            class="flex flex-1 flex-col rounded-lg border border-border bg-card"
        >
            <!-- Header Area -->
            <div
                class="flex items-center justify-between border-b border-border p-6"
            >
                <div class="flex items-center gap-2">
                    <h2
                        class="text-2xl font-extrabold tracking-wide text-primary"
                    >
                        Room-Name
                    </h2>
                </div>

                <div class="flex items-center gap-4">
                    <Icon
                        name="lucide:triangle-alert"
                        class="text-card-foreground"
                    />
                    <Icon name="lucide:lock" class="text-card-foreground" />
                    <CountryBadge language-code="de" />
                </div>
            </div>

            <!-- Content Section -->
            <div
                class="bg-content flex h-40 flex-1 flex-col border-b border-border p-6"
            >
                <h2 class="mb-4 text-lg font-semibold">Room-Description</h2>
                <div
                    class="box-border min-h-0 flex-1 overflow-x-hidden overflow-y-scroll"
                >
                    <div class="relative min-h-full">
                        <div
                            class="min-h-0 overflow-hidden pr-4 text-muted-foreground"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci aperiam cumque eaque, facere facilis
                            omnis sequi ullam vel velit. Accusamus cupiditate
                            doloremque, ea est ipsa numquam optio possimus qui,
                            repellat rerum similique suscipit unde veritatis
                            voluptate voluptatem? Ab architecto aspernatur
                            beatae error, esse est libero quae quaerat
                            repellendus repudiandae. A assumenda, aut doloremque
                            facere fuga fugiat nesciunt obcaecati placeat
                            praesentium quae quod quos ratione recusandae rerum
                            temporibus, ullam unde voluptatum? Accusantium
                            blanditiis commodi cumque, dicta ea eligendi eum
                            fugit iste iure libero nostrum numquam, odio placeat
                            quos sequi unde velit voluptas. Ad aut commodi
                            consectetur consequatur corporis deleniti deserunt
                            dignissimos distinctio earum eum excepturi fuga
                            fugit harum magni maxime modi nihil obcaecati odio
                            officia possimus quas quis quos, rem repudiandae
                            soluta sunt, suscipit tenetur ullam unde voluptates?
                            A, accusantium aliquid assumenda atque blanditiis,
                            culpa debitis delectus dolor ducimus eos explicabo
                            fugit ipsa ipsum itaque laudantium magni maiores
                            minus modi mollitia nemo nihil nobis, numquam odio
                            omnis porro quas quasi quis quisquam sapiente
                            similique tempore tenetur velit vitae! Aperiam
                            corporis cumque dignissimos, error explicabo fuga
                            inventore ipsam iusto mollitia, nisi non, nostrum
                            odit optio praesentium provident quisquam tempore
                            unde. Aliquid blanditiis enim ex exercitationem
                            facilis incidunt iste iusto labore laboriosam libero
                            magnam minus molestias numquam, odio odit, quo sunt
                            temporibus totam unde voluptatum! Consequuntur
                            cupiditate, distinctio eum id impedit inventore iste
                            iure laboriosam modi natus non, nostrum praesentium
                            quia quod reiciendis rerum saepe sunt totam.
                            Adipisci consequatur dolore esse exercitationem
                            facere ipsum minima numquam possimus repellendus ut!
                            Adipisci aliquid asperiores consequatur cupiditate
                            dicta doloribus dolorum eos esse eveniet expedita
                            explicabo fugiat id laborum laudantium, minus
                            mollitia nihil nostrum omnis pariatur quia quo quos
                            ratione sapiente tenetur veniam. Aliquam amet
                            blanditiis delectus distinctio excepturi
                            exercitationem fugiat impedit ipsa ipsam, iusto
                            laudantium, nihil odit praesentium quis saepe
                            sapiente, voluptates? Animi aspernatur debitis
                            deserunt dignissimos dolor, dolore doloremque esse
                            explicabo illum itaque iure magni modi neque
                            nesciunt nihil nobis obcaecati quaerat quasi
                            quisquam recusandae repellendus saepe, sit, soluta
                            tempore temporibus velit veniam? Cum odio odit
                            officia quasi? Aliquid eligendi excepturi facilis
                            harum incidunt ipsam labore, praesentium quas quod
                            repudiandae sequi similique sunt tempore, vel.
                        </div>
                    </div>
                </div>
            </div>

            <!-- Badges -->
            <div class="flex w-full flex-wrap gap-2 p-4">
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
                <Badge># Badge</Badge>
            </div>
        </div>
        <div class="flex h-full flex-col gap-4">
            <ChatUsersList class="max-h-full flex-1 overflow-y-auto" />
            <Button>Join</Button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}

/* CHROME */
::-webkit-scrollbar {
    width: 0.5rem;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
    background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
    background: hsl(var(--accent));
    border-radius: 30px;
}

@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--accent)) hsl(var(--background));
    }
}
</style>
