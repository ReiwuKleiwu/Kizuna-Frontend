<script setup lang="ts">
import { ref } from 'vue';

const roomTags = ref<string[]>([]);
</script>

<template>
    <div class="grid w-full max-w-sm items-center gap-6">
        <!-- Room Name -->
        <div class="flex w-64 flex-col gap-1">
            <Label class="text-xs font-semibold uppercase" for="room-name"
                >Room Name</Label
            >
            <Input
                id="room-name"
                class="rounded-sm"
                type="text"
                placeholder="Enter room name"
            />
        </div>

        <!-- Room Description -->
        <div class="flex w-96 flex-col gap-1">
            <Label
                class="text-xs font-semibold uppercase"
                for="room-description"
                >Room Description</Label
            >
            <Textarea
                id="room-description"
                class="resize-none rounded-sm"
                rows="7"
                placeholder="Enter room description"
            />
        </div>

        <!-- Room Tags -->
        <div class="w-full">
            <Label class="text-xs font-semibold uppercase" for="room-tags"
                >Room Tags</Label
            >
            <TagsInput
                id="room-tags"
                v-model="roomTags"
                class="rounded-sm border p-2"
            >
                <TagsInputItem v-for="tag in roomTags" :key="tag" :value="tag">
                    <TagsInputItemText />
                    <TagsInputItemDelete />
                </TagsInputItem>
                <TagsInputInput placeholder="Add a tag" />
            </TagsInput>
        </div>
    </div>
</template>

<style scoped>
/* Add custom styles for better spacing and alignment if necessary */
</style>
