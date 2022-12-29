<script>
export default {
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
    overflowHide(){
      if (burger.checked) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },

    burgerHide(){
      if(burger.checked){
        burger.click()
      }
    }

  },
}
</script>

<template lang="">
  <header class="header">
    <input type="checkbox" name="burger-btn" v-on:click="overflowHide" id="burger" />

    <div class="header__logo-burger">
      <svg class="header__line" width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>

      <router-link class="header__logo" v-on:click="burgerHide" to="/"> <img alt="OWSLA Logo" /></router-link>

      <svg class="header__line" width="203" height="2" viewBox="0 0 203 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>

      <label for="burger" class="burger-btn"><div class="burger"></div></label>
    </div>

    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/music">Music</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/artists">Artists</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/videos">Videos</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/radio">Radio</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/nest">NEST</router-link>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="https://owslagoods.netlify.app/">Merch</a>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
/* -------------------- Header -------------------- */

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

/* ---------- Navbar ---------- */

.nav {
  @include flex(column, wrap);
  position: absolute;
  top: 70px;
  right: 0;

  background-color: $cBlack;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  transition: all 1s;
  max-height: 0;
  overflow: hidden;

  &--column {
    flex-direction: column;
    align-items: flex-start;
  }

  @include respond(md) {
    flex-direction: row;
    position: relative;
    top: 0;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    max-height: 100%;
  }
  @include respond(lg) {
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .nav__list {
    @include flex(column);
    align-items: center;
    width: 100%;
    margin: 1rem 0;

    @include respond(md) {
      flex-direction: row;
      width: fit-content;
      margin: 0 0 1rem;
    }

    .nav__item {
      display: flex;
      width: 100%;
      margin: -1px 1rem;

      .nav__link {
        position: relative;

        @include font(fb1, w500, MonumentE, lsWidest);
        color: $cBlack;
        text-transform: uppercase;
        line-height: calc(150%);
        text-align: center;

        width: 100%;
        padding: 1rem;

        @include respond(md) {
          padding: 0;
          color: $cWhite;
          -webkit-text-stroke: 0.5px $cWhite;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 4px;
          border-radius: 5px;
          transition: all 0.5s;

          @include respond(md) {
            bottom: -8px;
          }
        }
      }

      @include respond(md) {
        width: auto;
      }
    }
  }
}

.nav__item:nth-child(1),
.nav__item:nth-child(1).nav__item--active .nav__link::after,
.nav__item:nth-child(1) .nav__link:hover::after {
  background-color: $color1;
}

.nav__item:nth-child(2),
.nav__item:nth-child(2).nav__item--active .nav__link::after,
.nav__item:nth-child(2) .nav__link:hover::after {
  background-color: $color2;
}

.nav__item:nth-child(3),
.nav__item:nth-child(3).nav__item--active .nav__link::after,
.nav__item:nth-child(3) .nav__link:hover::after {
  background-color: $color3;
}

.nav__item:nth-child(4),
.nav__item:nth-child(4).nav__item--active .nav__link::after,
.nav__item:nth-child(4) .nav__link:hover::after {
  background-color: $color4;
}

.nav__item:nth-child(5),
.nav__item:nth-child(5).nav__item--active .nav__link::after,
.nav__item:nth-child(5) .nav__link:hover::after {
  background-color: $color5;
}

.nav__item:nth-child(6),
.nav__item:nth-child(6).nav__item--active .nav__link::after,
.nav__item:nth-child(6) .nav__link:hover::after {
  background-color: $color6;
}

.nav__item:nth-child(7),
.nav__item:nth-child(7).nav__item--active .nav__link::after,
.nav__item:nth-child(7) .nav__link:hover::after {
  background-color: $color7;
}

@media screen and (min-width: 1024px) {
  .nav__item:nth-child(1),
  .nav__item:nth-child(2),
  .nav__item:nth-child(3),
  .nav__item:nth-child(4),
  .nav__item:nth-child(5),
  .nav__item:nth-child(6),
  .nav__item:nth-child(7) {
    background-color: transparent;
  }
}
</style>
