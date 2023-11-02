<template>
  <section id="portfolio" class="py-12 px-7.5 md:px-15">
    <div class="max-w-5xl mx-auto">
      <titles class="mb-12" :title="$t(`sectionPortfolio.title`)" />
      <div
        class="flex gap-x-2.5 sm:gap-x-3 md:gap-x-4 items-center overflow-hidden"
      >
        <button
          @click="deg -= 360 / amount"
          :disabled="buttonDisabled"
          class="btn w-9 h-14 bg-[url('/portfolio/left.svg')] bg-center bg-no-repeat"
        ></button>
        <button
          @click="deg += 360 / amount"
          :disabled="buttonDisabled"
          class="btn w-9 h-14 bg-[url('/portfolio/right.svg')] bg-center bg-no-repeat order-last"
        ></button>

        <div
          ref="slider"
          class="relative w-full h-0 pb-[150%] sm:pb-[98%] lg:pb-[60%]"
        >
          <div
            v-for="(portfolio, index) in portfolios"
            :key="index"
            class="absolute duration-1000 top-0 left-0 w-full h-full flex justify-center items-center bg-primary rounded-xl p-3 pb-6 ease-linear"
            :style="` 
              transform: rotateY(${
                (360 / amount) * index + deg
              }deg) translate3d(0,0,calc(-1px + ${translate}px /  2)) ;
              backface-visibility: hidden;`"
          >
            <nuxt-link
              class="w-full h-full"
              :to="portfolio.link"
              target="blank"
            >
              <picture class="w-full h-full">
                <source
                  :srcset="`/portfolio/portfolio${portfolio.img}Phone.jpg`"
                  type="image/jpeg"
                  media="(max-width:639px)"
                />
                <source
                  :srcset="`/portfolio/portfolio${portfolio.img}Ipad.jpg`"
                  type="image/jpeg"
                  media="(max-width:1023px)"
                />
                <img
                  :src="`/portfolio/portfolio${portfolio.img}.jpg`"
                  class="rounded-xl w-full h-full object-cover object-top"
                />
              </picture>
            </nuxt-link>
          </div>

          <div
            class="absolute flex gap-x-1 left-1/2 -translate-x-1/2 bottom-1.5 first:bg-white"
          >
            <button
              ref="points"
              v-for="point of amount"
              @click="clickPoint(point)"
              :disabled="buttonDisabled"
              class="w-2 h-2 rounded-full bg-black first:bg-[#c0c0c0] duration-300"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const portfolios = ref([
  {
    id: 1,
    img: "/rickAndMorty",
    link: "https://bogdanpotapenko.github.io/rick-and-morty",
  },
  {
    id: 2,
    img: "/addUser",
    link: "https://bogdanpotapenko.github.io/add-user",
  },
  { id: 3, img: "/narkology", link: "http://narkolog.kharkov.ua" },
  {
    id: 4,
    img: "/weather",
    link: "https://bogdanpotapenko.github.io/weather",
  },
]);

const slider = ref();
const points = ref();

const deg = ref(0);
const translate = ref(0);

const amount = portfolios.value.length;
const currentPoint = computed(() => (deg.value / (360 / amount)) % amount);

const buttonDisabled = ref(false);

const clickPoint = (point: number) => {
  deg.value +=
    (360 / amount) * (point - 1) - (360 / amount) * currentPoint.value;
};

watch(deg, () => {
  points.value.forEach((el: HTMLElement) => {
    el.style.background = "black";
    if (currentPoint.value >= 0) {
      points.value[currentPoint.value].style.background = "#c0c0c0";
    } else {
      points.value[currentPoint.value + amount].style.background = "#c0c0c0";
    }
  });

  buttonDisabled.value = true;
  slider.value.classList.add("animate-[scale_1s_linear]");
  setTimeout(() => {
    buttonDisabled.value = false;
    slider.value.classList.remove("animate-[scale_1s_linear]");
  }, 1000);
});

onMounted(() => {
  translate.value = slider.value?.clientWidth;
  window.addEventListener("resize", function () {
    translate.value = slider.value?.clientWidth;
  });
});
</script>

<style>
@keyframes scale {
  0% {
    transform: scale(1);
    perspective: none;
  }
  10% {
    transform: scale(0.7);
    perspective: 15000px;
  }
  90% {
    transform: scale(0.7);
    perspective: 15000px;
  }
  100% {
    transform: scale(1);
    perspective: none;
  }
}
</style>
