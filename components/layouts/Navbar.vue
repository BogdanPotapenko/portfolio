<template>
  <header
    class="w-full h-15 text-white fixed z-20 mx-auto"
    style="
      background: radial-gradient(ellipse at bottom, #08192a -100%, black 100%);
    "
  >
    <div
      @click="activeMenu = !activeMenu"
      class="md:hidden fixed z-30 right-5 top-5 py-2.5 w-7.5"
    >
      <div
        class="w-7.5 h-1 duration-1000 before:duration-500 after:duration-500 before:absolute before:w-7.5 before:h-1 before:bg-white before:left-0 after:content-[''] after:absolute after:w-7.5 after:h-1 after:bg-white after:left-0"
        :class="
          activeMenu
            ? 'bg-transparent transition-none  before:top-1/2  before:bottom-auto  before:ranslate-y-1/2 before:-rotate-45 after:top-1/2  after:bottom-auto  after:ranslate-y-1/2 after:rotate-45'
            : 'bg-white before:top-0 after:bottom-0'
        "
      ></div>
    </div>

    <div
      class="text-4xl md:text-[22px] max-w-6xl h-screen relative max-md:overflow-auto md:h-15 mx-auto flex flex-col md:flex-row items-center justify-between md:px-15 max-md:bg-black"
      :class="
        activeMenu
          ? 'top-0 duration-500 md:duration-0 '
          : 'top-[calc(-100vh-500px)] duration-500 md:duration-0 md:top-0'
      "
    >
      <nav
        class="flex gap-5 flex-col md:flex-row items-center md:justify-between py-24 md:py-0"
      >
        <button
          class="hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]"
          :disabled="scrolling"
          @click="scroll(about.getBoundingClientRect().y - 60)"
        >
          {{ $t("navbar.links.about") }}
        </button>
        <button
          class="hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]"
          :disabled="scrolling"
          @click="scroll(skills.getBoundingClientRect().y - 60)"
        >
          {{ $t("navbar.links.skills") }}
        </button>
        <button
          class="hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]"
          :disabled="scrolling"
          @click="scroll(portfolio.getBoundingClientRect().y - 60)"
        >
          {{ $t("navbar.links.portfolio") }}
        </button>
        <button
          class="hover:[text-shadow:1px_1px_2px_#ff00de] hover:text-[#4b0082]"
          :disabled="scrolling"
          @click="scroll(contacts.getBoundingClientRect().bottom - height)"
        >
          {{ $t("navbar.links.contacts") }}
        </button>
      </nav>
      <div class="flex gap-3 flex-col md:flex-row mb-24 md:mb-0">
        <toggle-button
          @switch="
            params.amount ? (params.amount = 0) : (params.amount = 100),
              background()
          "
          label="star"
          on="ON"
          off="OFF"
        />
        <toggle-button
          @switch="locale === 'en' ? (locale = 'uk') : (locale = 'en')"
          label="locale"
          on="EN"
          off="UA"
        />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { locale } = useI18n();

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

const about = ref();
const skills = ref();
const portfolio = ref();
const contacts = ref();
const height = ref();

const scrolling = ref(false);
const activeMenu = ref(false);

onMounted(() => {
  background();
  move();
  about.value = document.getElementById("about");
  skills.value = document.getElementById("skills");
  portfolio.value = document.getElementById("portfolio");
  contacts.value = document.getElementById("contacts");
  height.value = window.innerHeight;
});

const randomBetween = (a: number, b: number) => {
  return a + Math.random() * (b - a);
};
const background = () => {
  document.querySelectorAll<HTMLDivElement>(".star").forEach((el) => {
    el.remove();
  });
  for (let i = 0; i < params.value.amount; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
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
      randomBetween(params.value.duration.min, params.value.duration.max) + "s";
    document.getElementById("background")!.append(star);
  }
};
const move = () => {
  const move_star =
    document.querySelectorAll<HTMLDivElement>(".star")[
      Math.floor(randomBetween(0, params.value.amount))
    ];
  move_star.style.animation = "move linear";
  move_star.style.animationDuration = randomBetween(0.5, 1) + "s";
  setTimeout(() => {
    move_star.style.animation = "shine infinite alternate";
    move_star.style.animationDuration =
      randomBetween(params.value.duration.min, params.value.duration.max) + "s";
    move();
  }, Math.floor(randomBetween(3, 10)) * 1000);
};

const scroll = (value: number) => {
  activeMenu.value = false;
  scrolling.value = true;
  if (value > 50) {
    window.scrollBy(0, 50);
    setTimeout(() => {
      scroll(value - 50);
    }, 20);
  } else if (value < -50) {
    window.scrollBy(0, -50);
    setTimeout(() => {
      scroll(value + 50);
    }, 20);
  } else {
    window.scrollBy(0, value);
    scrolling.value = false;
  }
};

watch(activeMenu, () => {
  if (activeMenu.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>

<style>
@keyframes shine {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  40% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  60% {
    transform: scale(0.2);
    opacity: 0.1;
  }
  80% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.9;
  }
}

@keyframes move {
  0% {
    transform: rotate(315deg) translateX(0);
    width: 50px;
    box-shadow: 10px 0px 1px 0px;
    opacity: 1;
  }

  100% {
    transform: rotate(315deg) translateX(-200px);
    opacity: 0;
  }
}

.link:hover {
  text-shadow: 0 0 1px #fff, 0 0 3px #fff, 0 0 6px #fff, 0 0 9px #ff00de,
    0 0 15px #ff00de, 0 0 20px #ff00de, 0 0 30px #ff00de;
}
</style>
