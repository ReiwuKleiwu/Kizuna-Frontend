<template>
    <div class="m-4 flex gap-2 rounded-lg bg-textarea-background p-3">
        <Icon name="lucide:circle-plus" class="shrink-0" />
        <textarea
            ref="messageInput"
            class="max-h-[200px] w-full resize-none overflow-y-auto border-none bg-transparent focus:outline-none"
            placeholder="Message #Room-Title"
            rows="1"
            @input="autoResize"
        />
        <Icon name="lucide:sticker" class="shrink-0" />
    </div>
</template>

<script setup lang="ts">
const messageInput = ref<HTMLTextAreaElement | null>(null);

const autoResize = () => {
    if (messageInput.value) {
        messageInput.value.style.height = 'auto';
        messageInput.value.style.height = `${messageInput.value.scrollHeight}px`;
    }
};

// To ensure it resizes on mount if there's initial content
onMounted(() => {
    nextTick(() => {
        autoResize();
    });
});
</script>
