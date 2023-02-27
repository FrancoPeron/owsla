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

<template>
  <nav class="nav">
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
  @include flex(row, wrap);
  justify-content: center;
  padding: 1rem;
  @include respond(md) {
    padding: 0;
  }

  .nav__list {
    @include flex(column);
    align-items: center;
    gap: 1.5rem;
    @include respond(md) {
      flex-direction: row;
    }

    .nav__item {
      .nav__link {
        position: relative;

        @include font(fb2, w500, MonumentE, lsWidest);
        color: $cWhite;
        -webkit-text-stroke: 0.5px $cWhite;
        text-transform: uppercase;
        line-height: calc(150%);
        text-align: center;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 3px;
          border-radius: 5px;
          transition: all 0.5s;
        }
      }
      .nav__link:hover::after,
      .router-link-exact-active::after {
        background-color: $cWhite;
        width: 100%;
        left: 0;
        
      }
    }
  }
}
</style>
