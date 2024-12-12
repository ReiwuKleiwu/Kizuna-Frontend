<template>
    <div class="relative flex min-h-0 min-w-0 flex-1 bg-card p-4">
        <div
            id="message-scroller"
            class="mr-2 box-border min-h-0 flex-1 overflow-x-hidden overflow-y-scroll"
        >
            <div class="relative flex min-h-full flex-col justify-end">
                <ol class="min-h-0 list-none overflow-hidden">
                    <ChatMessage
                        v-for="(message, index) in messages"
                        :key="index"
                    />
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const messages = ref([1, 1, 1]);
const isUserScrolledToBottom = ref(true);

const messageScroller = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
    if (messageScroller.value) {
        messageScroller.value.scrollTop = messageScroller.value.scrollHeight;
    }
};
const isScrolledToBottom = (): boolean => {
    if (!messageScroller.value) return false;
    const { scrollHeight, scrollTop, offsetHeight } = messageScroller.value;
    const tolerance = 1;
    return Math.abs(scrollHeight - offsetHeight - scrollTop) <= tolerance;
};
const handleScroll = () => {
    isUserScrolledToBottom.value = isScrolledToBottom();
};

watch(messages, async () => {
    await nextTick();
    if (isUserScrolledToBottom.value) {
        scrollToBottom();
    }
});

onMounted(() => {
    messageScroller.value = document.getElementById(
        'message-scroller',
    ) as HTMLElement | null;
    if (!messageScroller.value) return;

    scrollToBottom();
    messageScroller.value.addEventListener('scroll', handleScroll);

    setInterval(() => {
        messages.value = [...messages.value, messages.value.length + 1];
    }, 5000);
});

onUnmounted(() => {
    if (messageScroller.value) {
        messageScroller.value.removeEventListener('scroll', handleScroll);
    }
});
</script>

<style scoped>
.scroll-container {
    scrollbar-gutter: stable;
}

/* CHROME */
::-webkit-scrollbar {
    width: 0.5rem;
}

::-webkit-scrollbar-track {
    border-radius: 30px;
    background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
    background: hsl(var(--accent));
    border-radius: 30px;
}

@supports not selector(::-webkit-scrollbar) {
    * {
        scrollbar-color: hsl(var(--accent)) hsl(var(--background));
    }
}
</style>
