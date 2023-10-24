<script>
// Componenet
import Nav from './Nav.vue'
import Burger from '../molecules/burger.vue'

export default {
  components: {
    Nav,
    Burger
  },
  mounted() {
  },

}
</script>

<template>
  <header class="header">

    <div class="header__logo">
      <!-- <svg class="header__logo-line" width="203" height="2" viewBox="0 0 203 2" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg> -->
      <span class="header__logo-line"></span>
      <router-link class="header__logo-link" v-on:click="burgerHide" to="/">
        <img src="../../assets/images/owslaLogo.svg" alt="OWSLA Logo" />
      </router-link>
      <!-- <svg class="header__logo-line" width="203" height="2" viewBox="0 0 203 2" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.73206 1L201.732 0.999983" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg> -->
      <span class="header__logo-line"></span>
      <Burger />
    </div>

    <div className="header__nav">
      <!-- <img class="header__nav-img" src="" alt=""> -->
      <div className='burger-box' burgerbox="">
        <Nav />
      </div>
    </div>

  </header>
</template>

<style lang="scss">
.header {
  grid-area: header;

  @include flex(column, nowrap);
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: .5rem;

  @include respond(sm) {
    // @include flex(column, nowrap);
    margin-bottom: 2rem;
  }

  .header__logo {
    @include flex();
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    gap: 3rem;

    transition-delay: .9s;
    transition-duration: .5s;
    transition-property: background;

    .header__logo-line{
      width: 100%;
      height: 2px;
      border-radius: 1rem;
      background-color: white;
      @include respond(sm) {
        width: 20%;
      }
    }
    .header__logo-line:first-child{
      display: none;
      @include respond(sm) {
        display: block;
      }
    }
    .header__logo-line:last-child{
      display: none;
      @include respond(sm) {
        display: block;
      }
    }

    &.header__logo--active {
      background: $cBlack;
      transition: all .2s;

      @include respond(md) {
        background: transparent;
      }
    }

    .header__logo-link {
      width: clamp(48px, 9vw, 64px);

      img {
        width: inherit;
      }
    }

  }

  .header__nav {
    position: relative;
    @include flex();
    align-items: center;
    padding: 1rem 1.5rem;
    width: 100%;
    max-height: 60px;
    transition-delay: .9s;
    transition-duration: .5s;
    transition-property: background;

    &.header__nav--active {
      background: $cBlack;
      transition: all .2s;

      @include respond(md) {
        background: transparent;
      }
    }


    // .header__nav-img{
    //   max-height: 50px;
    //   content: url(@/assets/images/owslaLogoText.svg);
    // }
  }
}
</style>
