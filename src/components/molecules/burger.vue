<script setup>

import { useRoute } from 'vue-router'
import { watch } from "vue";

const route = useRoute();
watch(() => route.name, () => {
  burgerClose()
}
)

window.addEventListener('resize', (e) => {
  if (window.innerWidth > 1024) {
    burgerClose()
  }
})

let burgerChecked = false

function burgerActive(classElement, classActive) {
  let element = document.querySelector(classElement);
  (burgerChecked)
    ? element.classList.add(classActive)
    : element.classList.remove(classActive)
}

function overflowHide() {
  (burgerChecked)
    ? document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'auto'
}

function activeFunctions() {
  burgerActive(".header__logo", "header__logo--active")
  burgerActive(".header__nav", "header__nav--active")
  burgerActive(".burger", "burger--active")
  burgerActive(".burger-box", "burger-box--active")
  overflowHide();
}

function burgerToggle() {
  burgerChecked = !burgerChecked
  activeFunctions()
}

function burgerClose() {
  burgerChecked = false
  activeFunctions()
}
</script>

<template>
  <div className="burger" htmlFor="burger" v-on:click="burgerToggle">
    <span className="burger__btn"></span>
  </div>
</template>

<style lang="scss">
.burger {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 28px;
  width: 28px;
  margin: auto;
  cursor: pointer;

  @include respond(md) {
    display: none;
  }

  .burger__btn,
  .burger__btn:before,
  .burger__btn:after {
    height: 2px;
    border-radius: 5px;
    background-color: #ffffff;
  }

  .burger__btn:before,
  .burger__btn:after {
    content: "";
    position: absolute;
    right: 0;
  }

  .burger__btn {
    position: relative;
    width: 100%;

    &:before {
      top: -8px;
      right: 4px;
      width: 20px;
      transition: all 0.5s;
    }

    &:after {
      top: 8px;
      right: 2px;
      width: 24px;
      transition: all 0.5s;
    }
  }

  &.burger--active>.burger__btn {
    height: 0;
  }

  &.burger--active>.burger__btn:before {
    top: 0;
    right: 0;
    width: 30px;
    transform: rotate(-45deg);
    transition: all 0.5s;
  }

  &.burger--active>.burger__btn:after {
    top: 0;
    right: 0;
    width: 30px;
    transform: rotate(45deg);
    transition: all 0.5s;
  }
}

.burger-box {
  flex: 1;
  position: absolute;
  top: 60px;
  right: 0;

  width: 100%;
  height: 0;
  min-height: 0;

  overflow: hidden;
  transition: all 1s;
  z-index: 1000;

  background: linear-gradient(0, #000000 0%, #000000d1 100%);
  backdrop-filter: blur(5px);

  @include respond(md) {
    position: relative;
    top: 0;

    width: fit-content;
    height: fit-content;
    max-height: 100%;

    overflow: visible;
    z-index: auto;

    background: transparent;
    backdrop-filter: blur(0);

  }

  &.burger-box--active {
    min-height: calc(100vh);
    transition: all 1s;

  }
}</style>
