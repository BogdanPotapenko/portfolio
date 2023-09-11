<template>
  <div class="flex relative">
    <input
      @click="$emit('switch')"
      class="w-0 h-0 invisible peer"
      type="checkbox"
      :id="label"
    /><label
      :for="label"
      class="relative block cursor-pointer w-20 h-10 rounded-full bg-primary after:content-[''] after:absolute after:top-5px after:left-5px after:w-7.5 after:h-7.5 after:bg-white after:rounded-full after:duration-300 active:after:w-11 peer-checked:after:left-full peer-checked:after:-ml-5px peer-checked:after:-translate-x-full"
    ></label>
    <span
      class="absolute top-2.5 pointer-events-none text-sm w-1/2 text-center text-primary peer-checked:text-[white]"
    ></span>
    <span
      class="absolute top-2.5 right-0 pointer-events-none text-sm w-1/2 text-center text-white peer-checked:text-primary"
    ></span>
  </div>
  <label class="switch">
    <input type="checkbox" @click="$emit('switch')" />
    <span class="slider"></span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  on: String,
  off: String,
});
</script>

<style>
.switch {
  --button-width: 60px;
  --button-height: 30px;
  --toggle-diameter: 25px;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 10px;
  --toggle-wider: 2em;
  --color-grey: #cccccc;
  --color-green: #4296f4;
}

.slider {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: 0.3s all ease-in-out;
}

.slider::after {
  content: "";
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
  transition: 0.3s all ease-in-out;
}

.switch input[type="checkbox"]:checked + .slider {
  background-color: var(--color-green);
}

.switch input[type="checkbox"]:checked + .slider::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
    )
  );
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0
    calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

.switch input[type="checkbox"] {
  display: none;
}

.switch input[type="checkbox"]:active + .slider::after {
  width: var(--toggle-wider);
}

.switch input[type="checkbox"]:checked:active + .slider::after {
  transform: translateX(
    calc(
      var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
    )
  );
}
</style>
