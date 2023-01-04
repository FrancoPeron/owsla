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
  <a :href="val.link" target="_blank" class="release">
    <img class="release__img shadow" :src="loadImg ? val.cover : 'src/assets/image/sk.webp'" @load="loadImage" :alt="val.title" />
  </a>
</template> -->

<style lang="scss">

</style>
