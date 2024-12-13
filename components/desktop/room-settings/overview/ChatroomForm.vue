<script setup lang="ts">
const roomTags = ref<string[]>([]);
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <!-- Room Name -->
        <div class="flex w-64 flex-col gap-1">
            <Label class="text-xs font-semibold uppercase" for="room-name">
                Chatroom Name
            </Label>
            <Input
                id="room-name"
                class="rounded-sm"
                type="text"
                placeholder="Enter the name of the chatroom"
            />
        </div>

        <!-- Room Description -->
        <div class="flex w-96 flex-col gap-1">
            <Label
                class="text-xs font-semibold uppercase"
                for="room-description"
            >
                Chatroom Description
            </Label>
            <Textarea
                id="room-description"
                class="resize-none rounded-sm"
                rows="7"
                placeholder="Provide a brief description of the chatroom"
            />
        </div>

        <!-- Chatroom Language -->
        <div class="flex flex-col gap-1">
            <Label class="text-xs font-semibold uppercase" for="room-language">
                Chatroom Language
            </Label>
            <Select id="room-language">
                <SelectTrigger>
                    <SelectValue placeholder="Choose a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="german">
                            <div class="flex gap-2">
                                <CountryFlag country="germany" />
                                <span>German</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="english">
                            <div class="flex gap-2">
                                <CountryFlag country="united-states" />
                                <span>English</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="japanese">
                            <div class="flex gap-2">
                                <CountryFlag country="japan" />
                                <span>Japanese</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="korean">
                            <div class="flex gap-2">
                                <CountryFlag country="south-korea" />
                                <span>Korean</span>
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>

        <!-- Room Tags -->
        <div class="w-96">
            <Label class="text-xs font-semibold uppercase" for="room-tags">
                Chatroom Tags
            </Label>
            <TagsInput
                id="room-tags"
                v-model="roomTags"
                class="rounded-sm border p-2"
            >
                <TagsInputItem v-for="tag in roomTags" :key="tag" :value="tag">
                    <TagsInputItemText />
                    <TagsInputItemDelete />
                </TagsInputItem>
                <TagsInputInput
                    placeholder="Add tags for the chatroom (e.g., tech, sports)"
                />
            </TagsInput>
        </div>
    </div>
</template>

<style scoped></style>
