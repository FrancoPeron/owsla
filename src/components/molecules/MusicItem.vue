<script setup>

//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/
const props = defineProps(['item']);
let val = ref(props.item);

//loadImg
let loadImg = ref(false)
function loadImage(){
  loadImg.value = true
}

const sk = "https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsk.webp?alt=media&token=6fa58649-938a-447c-9c5f-3d554c4726c0";

</script>

<template>
  <a class="release" :href="val.link" target="_blank">
    <img class="release__img shadow" :src="loadImg ? val.cover : sk" @load="loadImage" :alt="val.title" />
    <div class="release__info">
      <h2 class="release__title">
        {{ val.title }}
        <p v-if="val.featuring[0]">{{ `(feat. ` + val.featuring[0] + `)` }}</p>
      </h2>
      <h3 class="release__artist">
        {{ val.artist[0] }}
        <p v-if="val.artist.length > 1">{{ ` & ` + val.artist[1] }}</p>
      </h3>
    </div>
  </a>
</template>

<style lang="scss">
.release {
  position: relative;
  aspect-ratio: 1/1;

  .release__img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    transition: opacity 2s ease;
  }

  .release__info {
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

    .release__title {
      @include font(fhl2);
      color: $cWhite;
      text-align: center;
      margin-bottom: 1rem;
    }

    .release__artist {
      @include font(fb1);
      color: $cWhite;
      text-align: center;
    }
  }

  &:hover .release__info {
    opacity: 1;
    transition: all ease-in-out 0.5s;
  }

  &:nth-child(1) {
    grid-column: 1/-1;
    grid-row: span 1/-1;
  }
}

@media screen and (min-width: 768px) {
  .release {
    &:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
}
</style>
