<script setup>
//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/

const props = defineProps(['item'])
let val = ref(props.item);

let loadImg = ref(false)
function loadImage(){
  loadImg.value = true
}

</script>
<template>
  <div class="artist d-flex flex-column position-relative overflow-hidden m-0 w-100">
    <img class="artist__img w-100" data-bs-toggle="modal" :src="loadImg ? val.img : 'src/assets/image/sk.webp'" @load="loadImage" :alt="val.artist" />
    <p class="artist__name">{{ val.artist }}</p>
  </div>
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
