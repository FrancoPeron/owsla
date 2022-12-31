<script setup>

//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/

const props = defineProps(['item']);
let val = ref(props.item);

</script>
<template>
  <a :href="val.link" target="_blank" class="release">
    <img class="release__img shadow" :src="val.cover" :alt="val.title" @load="loadImage" />
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
</template> -->

<style lang="scss">
.release {
  position: relative;

  .release__img {
    width: 100%;
    aspect-ratio: 1/1;
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
