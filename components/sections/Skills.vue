<template>
  <section id="skills" class="py-12 px-7.5 sm:px-15">
    <div class="max-w-5xl mx-auto">
      <Titles class="mb-12" :title="$t(`sectionSkills.title`)" />
      <div
        class="w-[calc(300px+(850_-_300)*((100vw-390px)/(1024_-_390)))] max-w-[850px] mx-auto text-white text-center"
      >
        <div class="relative w-full h-0 pb-[100%] flex justify-center">
          <div class="w-full pt-[50%] flex items-center">
            <button
              class="mx-auto w-[calc(55px+(100_-_55)*((100vw-390px)/(1024_-_390)))] max-w-[100px] h-[calc(55px+(100_-_55)*((100vw-390px)/(1024_-_390)))] max-h-[100px] bg-primary rounded-full text-sm sm:text-base"
              style="
                background: radial-gradient(
                  circle at 65% 15%,
                  #9370db 3%,
                  #3c004b 60%,
                  black 100%
                );
              "
              @click="degree = !degree"
            >
              {{
                degree
                  ? $t(`sectionSkills.buttonTrue`)
                  : $t(`sectionSkills.buttonFalse`)
              }}
            </button>
          </div>
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="absolute animate-[three_30s_linear_infinite] w-[calc(90px+(250_-_90)*((100vw-390px)/(1024-390)))] max-w-[250px] h-[calc(90px+(250_-_90)*((100vw-390px)/(1024-390)))] max-h-[250px] origin-[calc(45px+(125_-_45)*((100vw-390px)/(1024_-_390)))_calc(150px+(420_-_150)*((100vw-390px)/(1024_-_390)))] lg:origin-[125px_420px]"
            :style="`--threefrom:rotate(${
              360 + deg * -index
            }deg); --threeto:rotate(${deg * -index}deg); ${
              degree ? 'animation-play-state: paused;' : ''
            }`"
          >
            <div
              class="absolute w-full h-full flex flex-col justify-center items-center rounded-full animate-[one_30s_linear_infinite]"
              :style="`--onefrom:rotate(${
                360 + deg * index
              }deg); --oneto:rotate(${deg * index}deg);                
               background: radial-gradient(
                  circle at 65% 15%,
                  #9370db 3%,
                  #3c004b 60%,
                  black 100%
                );
                ${degree ? 'animation-play-state: paused;' : ''}`"
            >
              <img
                :src="`/skills${skill.img}`"
                alt=""
                class="w-[calc(30px+(100_-_30)*((100vw-390px)/(1024_-_390)))] max-w-[100px] h-[calc(30px+(100_-_30)*((100vw-390px)/(1024-390)))] max-h-[100px] mx-auto"
              />
              <p class="text-xs sm:text-base">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup land="ts">
const skills = ref([
  { id: 0, name: "Vue", img: "/Vue.svg" },
  { id: 1, name: "Git", img: "/GitHub.svg" },
  { id: 2, name: "VS Code", img: "/VSCode.svg" },
  { id: 3, name: "Html", img: "/Html.svg" },
  { id: 4, name: "JS", img: "/JavaScript.svg" },
  { id: 5, name: "Css", img: "/Css.svg" },
]);

const deg = ref(360 / skills.value.length);

const degree = ref(false);
</script>

<style>
@keyframes one {
  from {
    transform: var(--onefrom, rotate(360deg));
  }
  to {
    transform: var(--oneto, rotate(0deg));
  }
}

@keyframes three {
  from {
    transform: var(--threeto, rotate(0deg));
  }
  to {
    transform: var(--threefrom, rotate(360deg));
  }
}
</style>
