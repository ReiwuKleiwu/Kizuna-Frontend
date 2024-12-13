<script setup lang="ts">
const { t } = useI18n();

const roomTags = ref<string[]>([]);
</script>

<template>
    <div class="flex flex-col gap-4 p-4">
        <!-- Room Name -->
        <div class="flex w-64 flex-col gap-1">
            <Label class="text-xs font-semibold uppercase" for="room-name">
                {{ t('chatroom_settings.form.chatroom_name.label') }}
            </Label>
            <Input
                id="room-name"
                class="rounded-sm"
                type="text"
                :placeholder="
                    t('chatroom_settings.form.chatroom_name.placeholder')
                "
            />
        </div>

        <!-- Room Description -->
        <div class="flex w-96 flex-col gap-1">
            <Label
                class="text-xs font-semibold uppercase"
                for="room-description"
            >
                {{ t('chatroom_settings.form.chatroom_description.label') }}
            </Label>
            <Textarea
                id="room-description"
                class="resize-none rounded-sm"
                rows="7"
                :placeholder="
                    t('chatroom_settings.form.chatroom_description.placeholder')
                "
            />
        </div>

        <!-- Chatroom Language -->
        <div class="flex flex-col gap-1">
            <Label class="text-xs font-semibold uppercase" for="room-language">
                {{ t('chatroom_settings.form.chatroom_language.label') }}
            </Label>
            <ChatroomLanguagePicker />
        </div>

        <!-- Room Tags -->
        <div class="w-96">
            <Label class="text-xs font-semibold uppercase" for="room-tags">
                {{ t('chatroom_settings.form.chatroom_tags.label') }}
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
                    :placeholder="
                        t('chatroom_settings.form.chatroom_tags.placeholder')
                    "
                />
            </TagsInput>
        </div>
    </div>
</template>

<style scoped></style>
