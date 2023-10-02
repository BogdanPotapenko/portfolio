<template>
  <section id="contacts" class="py-12 px-7.5 md:px-15">
    <div class="max-w-5xl mx-auto">
      <titles class="mb-12" :title="$t(`sectionContacts.title`)" />
      <div class="text-center text-white">
        <p>
          {{ $t("sectionContacts.textFirst") }}
        </p>
        <p>
          {{ $t("sectionContacts.textMiddle") }}
        </p>
        <div class="my-12">
          <ul class="flex justify-center gap-x-3.5 md:gap-x-10">
            <li class="">
              <nuxt-link
                to="https://www.linkedin.com/in/богдан-потапенко-b74860221"
                target="blank"
                class="group p-2.5 block w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 rounded-full bg-[#0077b5] md:bg-white duration-700 hover:bg-[#0077b5] hover:-translate-y-1"
              >
                <icons-linkedin
                  class="max-md:fill-white duration-700 group-hover:fill-white p-1"
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="https://t.me/bogdan_potapenko"
                target="blank"
                class="group p-2.5 block w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 rounded-full bg-[#0077b5] md:bg-white duration-700 hover:bg-[#0077b5] hover:-translate-y-1"
              >
                <icons-telegram
                  class="max-md:fill-white duration-700 group-hover:fill-white"
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="https://www.instagram.com/bohdanchik_"
                target="blank"
                class="group p-2.5 block w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 rounded-full bg-[#E4405F] md:bg-white duration-700 hover:bg-[#E4405F] hover:-translate-y-1"
              >
                <icons-instagram
                  class="max-md:fill-white duration-700 group-hover:fill-white p-1"
                />
              </nuxt-link>
            </li>
            <li class="">
              <nuxt-link
                to="https://github.com/BogdanPotapenko"
                target="blank"
                class="group p-2.5 block w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 rounded-full bg-[#2c2c2c] md:bg-white duration-700 hover:bg-[#2c2c2c] hover:-translate-y-1"
              >
                <icons-git-hub
                  class="max-md:fill-white duration-700 group-hover:fill-white p-1"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-xs sm:text-base">
          <nuxt-link
            class="hover:[text-shadow:0.3px_0.3px_0.7px_#ff00de] hover:text-[#4b0082]"
            to="https://www.linkedin.com/in/богдан-потапенко-b74860221"
            target="blank"
            >LinkedIn</nuxt-link
          >,
          <nuxt-link
            class="hover:[text-shadow:0.3px_0.3px_0.7px_#ff00de] hover:text-[#4b0082]"
            to="https://t.me/bogdan_potapenko"
            target="blank"
            >Telegram</nuxt-link
          >,
          <nuxt-link
            class="hover:[text-shadow:0.3px_0.3px_0.7px_#ff00de] hover:text-[#4b0082]"
            to="https://www.instagram.com/bohdanchik_"
            target="blank"
            >Instagram</nuxt-link
          >,
          <nuxt-link
            class="hover:[text-shadow:0.3px_0.3px_0.7px_#ff00de] hover:text-[#4b0082]"
            to="https://github.com/BogdanPotapenko"
            target="blank"
            >GitHub</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
