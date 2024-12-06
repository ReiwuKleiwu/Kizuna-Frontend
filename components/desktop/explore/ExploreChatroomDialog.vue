<template>
    <div class="rounded-lg p-4 flex gap-4 min-h-[40rem] aspect-video">
        <div
            class="flex flex-col bg-card flex-1 rounded-lg border border-border"
        >
            <!-- Header Area -->
            <div
                class="border-b border-border p-6 flex items-center justify-between"
            >
                <div class="flex gap-2 items-center">
                    <h2
                        class="text-2xl font-extrabold tracking-wide text-primary"
                    >
                        Room-Name
                    </h2>
                </div>

                <div class="flex gap-4 items-center">
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
                class="flex flex-col flex-1 h-40 border-b border-border p-6 bg-content"
            >
                <h2 class="text-lg font-semibold mb-4">Room-Description</h2>
                <div
                    class="overflow-y-scroll overflow-x-hidden box-border flex-1 min-h-0"
                >
                    <div class="min-h-full relative">
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
            <div class="flex flex-wrap gap-2 p-4 w-full">
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
        <div class="flex flex-col gap-4 h-full">
            <ChatUsersList class="flex-1 max-h-full overflow-y-auto" />
            <Button>Join</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import CountryFlag from '~/components/desktop/util/CountryFlag.vue';
</script>

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
