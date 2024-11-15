<template>
  <div class="bg-card flex flex-1 relative min-h-0 min-w-0 p-4">
    <div class="mr-2 overflow-y-scroll overflow-x-hidden box-border flex-1 min-h-0">
      <div class="flex flex-col justify-end min-h-full relative">
        <ol class="min-h-0 overflow-hidden list-none">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
        </ol>
      </div>
    </div>
  </div>
</template>

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
    background: hsl(var(--primary));
    border-radius: 30px;
  }

  @supports not selector(::-webkit-scrollbar) {
    * {
      scrollbar-color: hsl(var(--primary)) hsl(var(--background));
    }
  }
</style>
