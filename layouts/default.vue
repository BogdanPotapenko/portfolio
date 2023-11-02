<template>
  <div class="min-h-full">
    <background :isBackground="isBackground" />
    <navbar @close="isBackground = !isBackground" />
    <main class="md:pt-15 relative z-10">
      <NuxtPage />
    </main>
  </div>
</template>
<script setup lang="ts">
const isBackground = ref(true);
</script>
