<script setup>

//Vue
import { ref, computed, watch } from 'vue'
// import { YoutubeVue3 } from 'youtube-vue3'

/* || Data || ----------------------------------------*/
const emit = defineEmits(['closeM']);
const props = defineProps(['modalCode'])
let val = ref(props.modalCode);
watch(props, () => val.value = props.modalCode);

</script>

<template>
  <div class="video-modal" @click="emit('closeM')">
    <iframe class="video-modal__player" :src="`https://www.youtube.com/embed/${val}`" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
    <!-- <YoutubeVue3 class="video-modal__player" ref="youtube" :videoid="val" :autoplay="0" /> -->
  </div>
</template>

<style lang="scss">
  .video-modal{
    @include flex();
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999999999;

    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(#000000, #00000091);
      z-index: 0;
    }
    
    .video-modal__player{
      aspect-ratio: 16/9;
      width: 100%;
      height: fit-content;
      max-width: 1000px;
      z-index: 2;
    }
  }

</style>
