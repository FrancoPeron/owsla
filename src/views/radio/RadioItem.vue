<script setup>

//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/

const props = defineProps(['item']);
let val = ref(props.item);

let loadImg = ref(false)
function loadImage(){
  loadImg.value = true
}

</script>
<template>
  <button class="releaseShow">
    <img class="releaseShow__img shadow" :src="loadImg ? val.cover : 'src/assets/image/sk.webp'" @load="loadImage" :alt="val.title" />
    <div class="releaseShow__info">
      <h2 class="releaseShow__title">
        {{ val.title }}
        <br>
        <br>
        <p v-for="feat in val.featuring">{{feat}}</p>
      </h2>
    </div>
  </button>
</template> -->

<style lang="scss">
.releaseShow {
  position: relative;
  aspect-ratio: 1/1;

  .releaseShow__img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: opacity 2s ease;
  }

  .releaseShow__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    transition: all ease-in-out 0.5s;
    padding: 1rem;

    .releaseShow__title {
      @include font(fhl2);
      color: $cWhite;
      text-align: center;
      margin-bottom: 1rem;
    }

    .releaseShow__artist {
      @include font(fb1);
      color: $cWhite;
      text-align: center;
    }
  }

  &:hover .releaseShow__info {
    opacity: 1;
    transition: all ease-in-out 0.5s;
  }
}

</style>
