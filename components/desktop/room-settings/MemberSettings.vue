<script setup lang="ts"></script>

<template>
    <div class="flex flex-1 h-full">
        <div
            class="flex-1 grid grid-cols-[1fr_min(70ch,_100%)_1fr] gap-2 h-full"
        >
            <div
                class="col-span-1 col-start-2 overflow-y-auto overflow-x-hidden h-full"
            >
                <div class="mr-2 flex gap-2 flex-col">
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                    <MemberSettingsUser />
                </div>
            </div>
        </div>
    </div>
</template>

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
