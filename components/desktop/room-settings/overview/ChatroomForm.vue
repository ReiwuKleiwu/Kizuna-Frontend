<script setup lang="ts">
import SettingsSpacer from '~/components/desktop/room-settings/SettingsSpacer.vue';

const { t } = useI18n();

const roomTags = ref<string[]>([]);
</script>

<template>
    <div class="flex flex-1 flex-col gap-4 p-4">
        <!-- Room Name -->
        <div class="flex w-full flex-col gap-2">
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
        <SettingsSpacer />
        <!-- Room Description -->
        <div class="flex w-full flex-col gap-2">
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
        <SettingsSpacer />
        <!-- Chatroom Language -->
        <div class="flex w-full flex-col gap-2">
            <Label class="text-xs font-semibold uppercase" for="room-language">
                {{ t('chatroom_settings.form.chatroom_language.label') }}
            </Label>
            <ChatroomLanguagePicker />
        </div>
        <SettingsSpacer />
        <!-- Room Tags -->
        <div class="flex w-full flex-col gap-2">
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
