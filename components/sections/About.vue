<template>
  <section id="about" class="pt-28 pb-12 md:py-12 px-15">
    <div
      @click="reverseClick"
      @mouseenter="reverseMouse"
      @mouseleave="reverseMouse"
      class="group max-w-5xl h-[500px] mx-auto"
      style="perspective: 1700px"
    >
      <div
        class="relative w-full h-full text-center duration-1000 lg:group-hover:[transform:rotateY(180deg)]"
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
            class="max-w-sm flex flex-col gap-y-9 justify-center items-center text-secondary tracking-[1px]"
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

const reverseClick = () => {
  if (window.innerWidth <= 1024) {
    back.value = !back.value;
  }
};
const reverseMouse = () => {
  if (window.innerWidth >= 1024 && back.value) {
    back.value = false;
  } else if (window.innerWidth >= 1024 && !back.value) {
  }
};
</script>
