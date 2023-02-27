<script>
import { defineAsyncComponent} from 'vue'

export default {
  name: 'Home',
  data() {
    return {
      scrollPos: 0,
    }
  },

  components: {
    HomeBanner: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeBanner.vue')),
    HomeNewMusic: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeNewMusic.vue')),
    HomeArtists: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeArtists.vue')),
    HomeOwslaGoods: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeOwslaGoods.vue')),
    HomeRadio: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeRadio.vue')),
    HomeSuscribe: defineAsyncComponent(() => import('@/components/organisms/homeComponents/HomeSuscribe.vue')),
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollPos = scrollY + window.innerHeight
    })
  },

  methods: {},
}
</script>

<template>
  <main class="main-home">
    <span class="main-home__background"></span>
    <HomeBanner />
    <HomeNewMusic />
    <HomeArtists />
    <HomeOwslaGoods />
    <HomeRadio />
    <HomeSuscribe />  
  </main>
</template>
<!-- v-if="scrollPos > 2500" -->
<style lang="scss" scoped>
.main-home {
  display: grid;
  grid-template-areas:
    'banner'
    'new-music'
    'artists'
    'merch'
    'radio'
    'suscribe';
  grid-row-gap: 132px;

  .main-home__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-index.webp?alt=media&token=35f6061a-5ae9-4208-9088-51ed5c1013c8);
    background-size: cover;
    background-position: center;
    height: 500px;
    animation: move 160s infinite;
  }
}
</style>
