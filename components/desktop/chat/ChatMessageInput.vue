<template>
  <div class="flex p-3 m-4 bg-textarea-background rounded-lg gap-2">
    <Icon name="lucide:circle-plus" class="shrink-0" />
    <textarea
      ref="messageInput"
      @input="autoResize"
      class="w-full bg-transparent border-none focus:outline-none resize-none overflow-y-auto max-h-[200px]"
      placeholder="Message #Room-Title"
      rows="1"
    ></textarea>
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
