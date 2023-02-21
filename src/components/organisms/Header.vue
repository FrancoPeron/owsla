<script>
// Componenet
import Nav from './Nav.vue'

export default {
  components: {
    Nav,
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = 'auto'
      }
    })

    document.querySelectorAll('.nav__link').forEach((element) => {
      element.addEventListener('click', function () {
        burger.click()
        document.body.style.overflow = 'auto'
      })
    })
  },

  methods: {
    overflowHide() {
      if (burger.checked) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },

    burgerHide() {
      if (burger.checked) {
        burger.click()
      }
    },
  },
}
</script>

<template>
  <header class="header">
    <input type="checkbox" name="burger-btn" v-on:click="overflowHide" id="burger" />

    <div class="header__logo-burger">
      <svg class="header__line" width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>

      <router-link class="header__logo" v-on:click="burgerHide" to="/">
        <img alt="OWSLA Logo" />
      </router-link>

      <svg class="header__line" width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>

      <label for="burger" class="burger-btn"><div class="burger"></div></label>
    </div>
    <Nav />
  </header>
</template>

<style lang="scss">
.header {
  grid-area: header;

  @include flex(column, nowrap);
  align-items: center;
  justify-content: center;
  width: 100%;

  @include respond(md) {
    justify-content: space-between;
    padding-top: 2rem;
  }

  #burger {
    display: none;

    &:checked + .header__logo-burger > .burger-btn > .burger {
      width: 0;
    }

    &:checked + .header__logo-burger > .burger-btn > .burger::before {
      top: 0;
      width: 34px;
      transform: rotate(-45deg);
      transition: all 0.5s;
    }

    &:checked + .header__logo-burger > .burger-btn > .burger::after {
      top: 0;
      width: 34px;
      transform: rotate(45deg);
      transition: all 0.5s;
    }

    &:checked ~ .nav {
      max-height: 100%;
      transition: all 1s;
    }
  }

  .header__logo-burger {
    @include flex();
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    z-index: 2;

    .header__line {
      display: none;
      margin: 0 4rem;
      @include respond(md) {
        display: block;
      }
    }

    a {
      @include respond(md) {
        height: 100px;
      }
    }

    .header__logo img {
      max-height: 42px;
      content: url(@/assets/image/owslaLogo2.svg);

      @include respond(md) {
        max-height: 100px;
        content: url(@/assets/image/owslaLogo.svg);
      }
    }

    /*burger*/

    .burger-btn {
      @include flex(row-reverse);
      align-items: center;
      height: 34px;
      width: 34px;
      cursor: pointer;

      .burger {
        position: relative;
        width: 22px;

        &::before {
          top: -10px;
          width: 34px;
          transition: all 0.5s;
        }

        &::after {
          top: 10px;
          width: 28px;
          transition: all 0.5s;
        }
      }

      .burger,
      .burger::before,
      .burger::after {
        height: 3px;
        border-radius: 5px;
        background-color: $cWhite;
      }

      .burger::before,
      .burger::after {
        content: '';
        position: absolute;
        right: 0;
      }

      @include respond(md) {
        display: none;
      }
    }

    @include respond(md) {
      width: fit-content;
      padding: 0;
      margin-bottom: 2rem;
    }
  }
}
</style>
