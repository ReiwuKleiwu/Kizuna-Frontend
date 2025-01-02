<script setup lang="ts">
import SettingsSpacer from '~/components/desktop/room-settings/SettingsSpacer.vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { supportedLanguages } from '~/utils/languages';

const { t } = useI18n();

const chatroomSchema = toTypedSchema(
    z.object({
        name: z.string().min(1).max(20),
        description: z.string().min(0).max(250),
        language: z.enum(supportedLanguages),
        tags: z.array(z.string().min(1).max(10)).min(0).max(5),
    }),
);

const { handleSubmit } = useForm({
    validationSchema: chatroomSchema,
    initialValues: {
        tags: [],
        language: supportedLanguages[0],
    },
});

const onSubmit = handleSubmit((values) => {
    console.log('Form submitted!', values);
});
</script>

<template>
    <form class="flex flex-1 flex-col gap-4 p-4" @submit="onSubmit">
        <div class="flex gap-4">
            <div class="flex-1 flex-col gap-4">
                <!-- Room Name -->
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem class="flex w-full flex-col gap-2">
                        <FormLabel
                            class="text-xs font-semibold uppercase"
                            for="room-name"
                        >
                            {{
                                t('chatroom_settings.form.chatroom_name.label')
                            }}
                        </FormLabel>
                        <FormControl>
                            <Input
                                id="room-name"
                                class="rounded-sm"
                                type="text"
                                v-bind="componentField"
                                :placeholder="
                                    t(
                                        'chatroom_settings.form.chatroom_name.placeholder',
                                    )
                                "
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <SettingsSpacer />
                <!-- Room Description -->
                <FormField v-slot="{ componentField }" name="description">
                    <FormItem class="flex w-full flex-col gap-2">
                        <FormLabel
                            class="text-xs font-semibold uppercase"
                            for="room-description"
                        >
                            {{
                                t(
                                    'chatroom_settings.form.chatroom_description.label',
                                )
                            }}
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                id="room-description"
                                class="resize-none rounded-sm"
                                v-bind="componentField"
                                rows="7"
                                :placeholder="
                                    t(
                                        'chatroom_settings.form.chatroom_description.placeholder',
                                    )
                                "
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <SettingsSpacer />
                <!-- Chatroom Language -->
                <FormField v-slot="{ componentField }" name="language">
                    <FormItem class="flex w-full flex-col gap-2">
                        <FormLabel
                            class="text-xs font-semibold uppercase"
                            for="room-language"
                        >
                            {{
                                t(
                                    'chatroom_settings.form.chatroom_language.label',
                                )
                            }}
                        </FormLabel>
                        <FormControl>
                            <ChatroomLanguagePicker v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </div>
            <SettingsChatroomCard />
        </div>
        <SettingsSpacer />
        <!-- Room Tags -->
        <FormField v-slot="{ value }" name="tags">
            <FormItem class="flex w-full flex-col gap-2">
                <FormLabel
                    class="text-xs font-semibold uppercase"
                    for="room-tags"
                >
                    {{ t('chatroom_settings.form.chatroom_tags.label') }}
                </FormLabel>
                <FormControl>
                    <TagsInput
                        id="room-tags"
                        :model-value="value"
                        class="rounded-sm border p-2"
                    >
                        <TagsInputItem
                            v-for="tag in value"
                            :key="tag"
                            :value="tag"
                        >
                            <TagsInputItemText />
                            <TagsInputItemDelete />
                        </TagsInputItem>
                        <TagsInputInput
                            :placeholder="
                                t(
                                    'chatroom_settings.form.chatroom_tags.placeholder',
                                )
                            "
                        />
                    </TagsInput>
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit"> Submit </Button>
    </form>
</template>

<style scoped></style>
