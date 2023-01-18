<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Player from '@/components/Player.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Player
  },
}
</script>

<template>
    <Header />
    <Player />
    <router-view/>
    <Footer />

</template>


