<template>
  <label class="relative w-20 h-10">
    <input type="checkbox" @click="$emit('switch')" class="peer hidden" />
    <span
      class="relative inline-block cursor-pointer w-20 h-10 rounded-full bg-primary after:content-[''] after:absolute after:inline-block after:top-[5px] after:w-7.5 after:h-7.5 after:bg-white after:rounded-full after:translate-x-[5px] after:duration-300 after:ease-in-out peer-checked:after:translate-x-[45px] peer-active:after:w-[40px] peer-checked:peer-active:after:translate-x-[35px]"
    >
    </span>
    <span
      class="absolute top-2.5 z-10 left-0 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-white"
      >{{ on }}</span
    >
    <span
      class="absolute top-2.5 z-10 right-0 pointer-events-none text-sm w-1/2 text-center text-white peer-checked:text-primary"
      >{{ off }}</span
    >
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  on: String,
  off: String,
});
</script>
