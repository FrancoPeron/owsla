<script>
  import { defineAsyncComponent , ref } from 'vue'

  export default {
    name: 'Home',
    data() {
      return {
        scrollPos: 0
      }
    },

    components: {
      HomeBanner: defineAsyncComponent(() => import('@/components/HomeBanner.vue')),
      HomeNewMusic: defineAsyncComponent(() => import('@/components/HomeNewMusic.vue')),
      HomeArtists: defineAsyncComponent(() => import('@/components/HomeArtists.vue')),
      HomeOwslaGoods: defineAsyncComponent(() => import('@/components/HomeOwslaGoods.vue')),
      HomeRadio: defineAsyncComponent(() => import('@/components/HomeRadio.vue')),
      HomeSuscribe: defineAsyncComponent(() => import('@/components/HomeSuscribe.vue')),
    },

    mounted() {
      
      window.addEventListener('scroll', () => {
          this.scrollPos = scrollY + window.innerHeight
          console.log(this.scrollPos)
      })
    },
    
    methods: {
      
    }
  }


</script>


<template>
  <div class="main-index">
    <span class="main-index__background"></span>
    <HomeBanner />
    <HomeNewMusic/>
    <HomeArtists v-if="scrollPos > 1500"/>
    <HomeOwslaGoods v-if="scrollPos > 2500"/>
    <!-- <HomeRadio /> -->
    <HomeSuscribe  v-if="scrollPos > 3500"/>
  </div>
</template>

<style lang="scss" scoped>
  .main-index {
    display: grid;
    grid-template-areas:
      "banner"
      "new-music"
      "artists"
      "merch"
      "radio"
      "suscribe";
    padding: 2rem 1rem 0;
    grid-row-gap: 148px;

    .main-index__background {
      @extend %backgrounds-pos;
      background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-index.webp?alt=media&token=35f6061a-5ae9-4208-9088-51ed5c1013c8);
      background-size: cover;
      background-position: center;
      height: 500px;
      animation: multcolor 30s infinite, move 160s infinite;
    }
  }

</style>
