<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';
import {
    supportedLanguages,
    supportedLanguagesDetails,
} from '~/utils/languages';

const open = ref(false);
const selectedLanguage = ref('');
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <Button
                variant="outline"
                role="combobox"
                :aria-expanded="open"
                class="w-96 justify-between"
            >
                <div class="flex gap-2">
                    <!-- Display selected language flag -->
                    <CountryFlag
                        v-if="selectedLanguage"
                        :country="
                            supportedLanguagesDetails.get(selectedLanguage)
                                ?.iconName
                        "
                    />
                    <!-- Display selected language label or placeholder -->
                    <span>
                        {{
                            selectedLanguage
                                ? supportedLanguagesDetails.get(
                                      selectedLanguage,
                                  )?.label
                                : 'Select language...'
                        }}
                    </span>
                </div>
                <Icon
                    name="lucide:globe"
                    class="ml-2 h-4 w-4 shrink-0 opacity-50"
                />
            </Button>
        </PopoverTrigger>
        <PopoverContent class="w-96 p-0">
            <Command>
                <CommandInput
                    class="h-9"
                    placeholder="Search language by name..."
                />
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandList>
                    <CommandGroup>
                        <CommandItem
                            v-for="language in supportedLanguages"
                            :key="language"
                            :value="language"
                            :data-search="
                                supportedLanguagesDetails.get(language)?.label
                            "
                            @select="
                                (event) => {
                                    selectedLanguage = event.detail.value;
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
