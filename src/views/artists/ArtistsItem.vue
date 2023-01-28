<script setup>

//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/
const props = defineProps(['item'])
let val = ref(props.item);

//loadImg
let loadImg = ref(false)
function loadImage(){
  loadImg.value = true
}

const sk = "https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsk.webp?alt=media&token=6fa58649-938a-447c-9c5f-3d554c4726c0";

</script>

<template>
  <a :href="val.links" target="_blank" class="artist">
    <img class="artist__img" data-bs-toggle="modal" :src="loadImg ? val.img : sk" @load="loadImage" :alt="val.artist" />
    <p class="artist__name">{{ val.artist }}</p>
  </a>
</template>

<style lang="scss">
.artist {
  scroll-snap-align: start;
  position: relative;

  @include respond(lg) {
    scroll-snap-align: end;
    width: 100%;
  }

  .artist__img {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 7/10;
    //cursor: pointer;

    @include respond(lg) {
      width: 100%;
    }
  }

  .artist__name {
    @include font(fb2, w500, MonumentE);
    text-transform: uppercase;
    color: $cBlack;
    padding-top: 0.75rem;
  }
}
</style>
