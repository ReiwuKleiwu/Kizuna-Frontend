<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';
import {
    supportedLanguages,
    supportedLanguagesDetails,
} from '~/utils/languages';
const { t } = useI18n();

const open = ref(false);
const selectedLanguage = defineModel({
    type: String,
});
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                role="combobox"
                :aria-expanded="open"
                class="w-full justify-between"
            >
                <div class="flex gap-2">
                    <!-- Display selected locales flag -->
                    <CountryFlag
                        v-if="selectedLanguage"
                        :country="
                            supportedLanguagesDetails.get(selectedLanguage)
                                ?.iconName
                        "
                    />
                    <!-- Display selected locales label or placeholder -->
                    <span>
                        {{
                            selectedLanguage
                                ? supportedLanguagesDetails.get(
                                      selectedLanguage,
                                  )?.label
                                : t(
                                      'chatroom_settings.language_picker.no_language_selected',
                                  )
                        }}
                    </span>
                </div>
                <Icon
                    name="lucide:globe"
                    class="ml-2 h-4 w-4 shrink-0 opacity-50"
                />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="flex-1 p-0">
            <Command>
                <CommandInput
                    class="h-9"
                    :placeholder="
                        t(
                            'chatroom_settings.language_picker.search_placeholder',
                        )
                    "
                />
                <CommandEmpty>{{
                    t('chatroom_settings.language_picker.no_language_found')
                }}</CommandEmpty>
                <CommandList>
                    <CommandGroup>
                        <CommandItem
                            v-for="language in supportedLanguages"
                            :key="language"
                            :value="`${supportedLanguagesDetails.get(language)?.label || ''}_${language}`"
                            @select="
                                (event) => {
                                    selectedLanguage =
                                        event.detail.value
                                            ?.toString()
                                            .split('_')[1] || 'en-EN';

                                    open = false;
                                }
                            "
                        >
                            <div class="flex gap-2">
                                <CountryFlag
                                    :country="
                                        supportedLanguagesDetails.get(language)
                                            ?.iconName
                                    "
                                />
                                <span>
                                    {{
                                        supportedLanguagesDetails.get(language)
                                            ?.label
                                    }}
                                </span>
                            </div>
                            <Icon
                                name="lucide:check"
                                :class="
                                    cn(
                                        'ml-auto h-4 w-4',
                                        selectedLanguage === language
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    )
                                "
                            />
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>
