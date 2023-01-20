<script setup>

//Vue
import { ref, computed, watch } from 'vue'
import { YoutubeVue3 } from 'youtube-vue3'

/* || Data || ----------------------------------------*/
const emit = defineEmits(['closeModal2']);

const props = defineProps(['code2'])
let val = ref(props.code2);

watch(props, () => val.value = props.code2)



// computed(() => console.log(props.code2))

// const normalizedSize = computed(() => {return `${props.code2}`});

// console.log(normalizedSize.value)
</script>
<template>
  <div class="video-modal"  @click="emit('closeModal2')">
    <!-- <iframe class="video" :src="`https://www.youtube.com/embed/${val.item.code}`" title="A YouTube video" frameborder="0" allowfullscreen></iframe> -->
    <YoutubeVue3 class="video-modal__player" ref="youtube" :videoid="val" :autoplay="0" />

  </div>
  <!-- <button @click="emit('closeModal2')">fgsdfgsdfgdrgfsddfasdfasd</button> -->


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
