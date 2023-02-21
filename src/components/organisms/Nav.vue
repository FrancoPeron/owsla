<script>
export default {
  mounted() {},
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<template lang="">
  <nav id="navBar" class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/" @click="scrollToTop">Home</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/music" @click="scrollToTop">Music</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/artists" @click="scrollToTop">Artists</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/videos" @click="scrollToTop">Videos</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/radio" @click="scrollToTop">Radio</router-link>
      </li>
      <li class="nav__item">
        <a class="nav__link" target="_blank" href="https://owslagoods.netlify.app/">Merch</a>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/contact" @click="scrollToTop">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav {
  @include flex(column, wrap);
  position: absolute;
  top: 70px;
  right: 0;

  background: linear-gradient(0, #000000 0%, #000000d1 100%);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  transition: all 1s;
  max-height: 0;
  overflow: hidden;
  margin-bottom: 2rem;

  &--row {
    flex-direction: row;
    max-height: 100%;
  }

  @include respond(md) {
    flex-direction: row;
    position: relative;
    top: 0;
    width: fit-content;
    height: fit-content;
    background: transparent;
    backdrop-filter: blur(0);
    max-height: 100%;
  }
  @include respond(lg) {
    justify-content: space-between;
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

      @include respond(md) {
        width: auto;
      }

      .nav__link {
        position: relative;

        @include font(fb1, w500, MonumentE, lsWidest);
        color: $cWhite;
        -webkit-text-stroke: 0.5px $cWhite;
        text-transform: uppercase;
        line-height: calc(150%);
        text-align: center;

        width: 100%;
        padding: 1rem;

        @include respond(md) {
          padding: 0;
          -webkit-text-stroke: 0.5px $cWhite;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px;
          border-radius: 5px;
          transition: all 0.5s;

          @include respond(md) {
            bottom: -8px;
          }
        }
      }
      .nav__link:hover::after,
      .router-link-exact-active::after {
        background-color: $cWhite;
        width: 20%;
        left: 40%;
        @include respond(md) {
          width: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>
