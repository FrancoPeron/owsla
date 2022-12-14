<script>

  import HomeBanner from '@/components/HomeBanner.vue'
  import HomeNewMusic from '@/components/HomeNewMusic.vue'
  import HomeArtists from '@/components/HomeArtists.vue'
  import HomePlaylist from '@/components/HomePlaylist.vue'
  import HomeRadio from '@/components/HomeRadio.vue'
  import HomeSuscribe from '@/components/HomeSuscribe.vue'

  export default {
    name: 'Home',
    components: {
      HomeBanner,
      HomeNewMusic,
      HomeArtists,
      HomePlaylist,
      HomeRadio,
      HomeSuscribe,
    },

    mounted() {
      
    },
    
    methods: {
      
    }
  }


</script>


<template>
  <div class="main-index">
    <span class="main-index__background"></span>
    <HomeBanner />
    <HomeNewMusic />
    <HomeArtists />
    <HomePlaylist />
    <HomeRadio />
    <HomeSuscribe />

  </div>
</template>

<style lang="scss" scoped>
  .main-index {
    display: grid;
    grid-template-areas:
      "banner"
      "new-music"
      "artists"
      "playlists"
      "radio"
      "suscribe";
    padding: 2rem 1rem 0;

    .main-index__background {
      @extend .backgrounds-pos;
      background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-index.webp?alt=media&token=35f6061a-5ae9-4208-9088-51ed5c1013c8);
      background-size: cover;
      background-position: center;
      height: 500px;
      animation: multcolor 30s infinite, move 160s infinite;
    }
  }

</style>
