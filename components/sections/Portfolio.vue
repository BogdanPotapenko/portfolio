<template>
  <section id="portfolio" class="py-12 px-7.5 md:px-15">
    <div class="max-w-5xl mx-auto">
      <titles class="mb-12" :title="$t(`sectionPortfolio.title`)" />
      <div
        class="flex gap-x-2.5 sm:gap-x-3 md:gap-x-4 items-center overflow-hidden"
      >
        <button
          @click="deg -= 360 / amount"
          class="btn w-9 h-14 bg-[url('/portfolio/left.svg')] bg-center bg-no-repeat"
        ></button>
        <button
          @click="deg += 360 / amount"
          class="btn w-9 h-14 bg-[url('/portfolio/right.svg')] bg-center bg-no-repeat order-last"
        ></button>

        <div
          id="slider"
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
            <div
              v-for="portfolio of portfolios"
              class="dot cursor-pointer w-2 h-2 rounded-full bg-black duration-300"
            ></div>
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

const amount = portfolios.value.length;

const deg = ref(0);
const translate = ref(0);

onMounted(() => {
  translate.value = document.getElementById("slider")!.clientWidth;
  window.addEventListener("resize", function () {
    translate.value = document.getElementById("slider")!.clientWidth;
  });

  document.querySelectorAll<HTMLDivElement>(".dot")[0].style.background =
    "#c0c0c0";
});

watch(deg, () => {
  document.querySelectorAll<HTMLDivElement>(".dot").forEach((el) => {
    el.style.background = "black";

    if ((deg.value / (360 / amount)) % amount >= 0) {
      document.querySelectorAll<HTMLDivElement>(".dot")[
        (deg.value / (360 / amount)) % amount
      ].style.background = "#c0c0c0";
    } else {
      document.querySelectorAll<HTMLDivElement>(".dot")[
        ((deg.value / (360 / amount)) % amount) + amount
      ].style.background = "#c0c0c0";
    }
  });
  document.querySelectorAll<HTMLButtonElement>("button").forEach((el) => {
    el.disabled = true;
    setTimeout(() => {
      el.disabled = false;
    }, 1000);
  });
  const slider = document.getElementById("slider");
  slider!.classList.add("animate-[scale_1s_cubic-bezier(0.2,0.4,0.3,0.2)]");
  setTimeout(() => {
    slider!.classList.remove(
      "animate-[scale_1s_cubic-bezier(0.2,0.4,0.3,0.2)]"
    );
  }, 1000);
});
</script>

<style>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.55);
  }
  100% {
    transform: scale(1);
  }
}
</style>
