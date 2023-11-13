<template>
  <div
    id="background"
    class="min-h-screen fixed left-0 right-0 -top-[100px] pb-[100px] translate-y-[100px]"
    style="
      background: radial-gradient(ellipse at center, #08192a 10%, black 100%);
    "
  >
    <div ref="stars" v-for="star of params.amount"></div>
  </div>
</template>

<script setup lang="ts">
const prop = defineProps<{
  isBackground: boolean;
}>();

const params = ref({
  amount: 100,
  size: {
    min: 0.5,
    max: 1.5,
    giant: 2,
  },
  duration: {
    min: 2,
    max: 10,
  },
});

const stars = ref();

const randomBetween = (a: number, b: number) => {
  return a + Math.random() * (b - a);
};
const starStyle = () => {
  setTimeout(() => {
    stars.value.forEach((star: HTMLElement) => {
      const size =
        Math.round(Math.random() * 10) === 0
          ? params.value.size.giant
          : randomBetween(params.value.size.min, params.value.size.max);
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.position = "absolute";
      star.style.left = randomBetween(0, 100) + "%";
      star.style.top = randomBetween(0, 100) + "%";
      star.style.background =
        "radial-gradient(ellipse at center,#dce5ed 2%,#6c89a4 100%)";
      star.style.borderRadius = "100%";
      star.style.boxShadow = "0 0 " + size + "px " + size / 3 + "px #dce5ed";
      star.style.transform = "translate3d(0, 0, 200px)";
      star.style.animation = "shine infinite alternate";
      star.style.animationDuration =
        randomBetween(params.value.duration.min, params.value.duration.max) +
        "s";
      document.getElementById("background")!.append(star);
    });
  }, 0);
};

const starMove = () => {
  if (stars.value.length > 0) {
    const move_star =
      stars.value[Math.floor(randomBetween(0, params.value.amount))];
    move_star.style.animation = "move linear";
    move_star.style.animationDuration = randomBetween(0.5, 1) + "s";
    setTimeout(() => {
      move_star.style.animation = "shine infinite alternate";
      move_star.style.animationDuration =
        randomBetween(params.value.duration.min, params.value.duration.max) +
        "s";

      starMove();
    }, Math.floor(randomBetween(3, 10)) * 1000);
  } else {
    setTimeout(() => {
      starMove();
    }, Math.floor(randomBetween(3, 10)) * 1000);
  }
};

watch(
  () => prop.isBackground,
  () => {
    if (prop.isBackground) {
      params.value.amount = 100;
      setTimeout(() => {
        starStyle();
      }, 100);
    } else {
      params.value.amount = 0;
    }
  }
);

onMounted(() => {
  starStyle();
  starMove();
});
</script>
