<template>
  <div class="messages-container flex-1 flex flex-col overflow-y-hidden p-4 pr-2 justify-end">
    <PerfectScrollbar
      @ps-y-reach-end="isUserAtBottom = true"
      @ps-scroll-up="isUserAtBottom = false"
      :options="{ suppressScrollX: true }"
      ref="scrollbarApi"
    >
      <ChatMessage v-for="(messages, index) in messages" key="index" />
    </PerfectScrollbar>
  </div>
</template>

<style scoped>
  /* Vue 3 deep selector */
</style>

<script setup lang="ts">
  import type { PerfectScrollbarExpose } from 'vue3-perfect-scrollbar';

  const scrollbarApi = ref<PerfectScrollbarExpose | null>(null);
  const isUserAtBottom = ref(true);

  // Sample messages data
  const messages = ref([0, 0, 0]);

  // Scroll to bottom when component is mounted
  onMounted(async () => {
    await nextTick();
    scrollToBottom();

    // Add interval to update messages every 2 seconds
    setInterval(() => {
      messages.value = [...messages.value, messages.value.length];
    }, 2000);
  });

  // Scroll to bottom whenever messages change if user is already at bottom
  watch(messages, async () => {
    await nextTick();
    console.log(isUserAtBottom.value);
    if (isUserAtBottom.value) {
      scrollToBottom();
    }
  });

  function scrollToBottom() {
    if (!scrollbarApi.value) {
      console.warn('Scrollbar instance not found');
      return;
    }

    // Update the scrollbar to ensure it's aware of any changes
    scrollbarApi.value.ps?.update();

    // Scroll to the bottom
    const scrollElement = scrollbarApi.value.ps?.element;

    if (!scrollElement) return;

    scrollElement.scrollTop = scrollElement.scrollHeight;
  }
</script>
