<template>
  <h2 class="text-[white] text-center">
    {{ title }}
  </h2>
</template>
<script setup lang="ts">
const props = defineProps(["title"]);
</script>
