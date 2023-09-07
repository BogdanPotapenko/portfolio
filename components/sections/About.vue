<template>
  <section id="about" class="pt-28 pb-12 md:py-12 px-15">
    <div
      @click="back = !back"
      class="max-w-5xl h-[500px] mx-auto"
      style="perspective: 1000px"
    >
      <div
        class="flip-card relative w-full h-full text-center duration-700"
        style="transform-style: preserve-3d"
        :style="back ? 'transform: rotateY(180deg)' : ''"
      >
        <div
          class="absolute w-full h-full flex flex-col justify-center items-center rounded-3xl bg-primary border-4 border-solid border-secondary"
          style="backface-visibility: hidden"
        >
          <div class="w-36 h-36">
            <img src="/about/profile.svg" />
          </div>
          <h3 class="mt-5 text-secondary w-48">
            {{ $t("sectionAbout.name") }}
          </h3>
        </div>
        <div
          class="absolute w-full h-full flex justify-center p-3 rounded-3xl bg-primary border-4 border-solid border-secondary"
          style="transform: rotateY(180deg); backface-visibility: hidden"
        >
          <div
            class="max-w-sm flex flex-col gap-y-9 justify-center items-center text-white tracking-[1px]"
          >
            <p>
              {{ $t("sectionAbout.textFirst") }}
            </p>
            <p>
              {{ $t("sectionAbout.textMiddle") }}
            </p>
            <p>
              {{ $t("sectionAbout.textEnd") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const back = ref(false);
</script>
