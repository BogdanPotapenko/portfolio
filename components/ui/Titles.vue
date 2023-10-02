<template>
  <h2 class="text-center [text-shadow:1px_1px_2px_#ff00de] text-[#4b0082]">
    {{ title }}
  </h2>
</template>
<script setup lang="ts">
const props = defineProps(["title"]);
</script>
