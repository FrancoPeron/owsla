<script setup>

//Vue
import { ref } from 'vue'

/* || Data || ----------------------------------------*/
const props = defineProps(['item'])
let val = ref(props.item)

/*----------------------------------------------------*/
let loadImg = ref(false)
function loadImage() {
  loadImg.value = true
}

const sk = 'https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsk.webp?alt=media&token=6fa58649-938a-447c-9c5f-3d554c4726c0';

</script>
<template>
  <div class="video">
    <img class="video__img shadow" :src="loadImg ? val.img : sk " @load="loadImage" :alt="val.title" />
  </div>
</template>

<style lang="scss" scoped>

.video {
  position: relative;
  transition: all ease-in-out 0.5s;
  cursor: pointer;

  .video__img {
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    width: 80px;
    height: 80px;
    background: $cWhite;
    background-size: cover;
    z-index: 1;
    border-radius: 120px;

    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: all ease-in-out 0.5s;
    opacity: .2;
  }

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    background: url('src/assets/image/play.svg');
    background-size: cover;
    margin-left: 0.2rem;

    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all ease-in-out 0.5s;

    z-index: 2;
    filter: invert(1);
    opacity: .5;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
    &::before {
      opacity: 0.4;
    }
  }
}
</style>
