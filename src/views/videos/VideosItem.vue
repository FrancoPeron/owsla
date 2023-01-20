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

const sk = "https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsk.webp?alt=media&token=6fa58649-938a-447c-9c5f-3d554c4726c0";


</script>
<template>
  <a :href="val.link" target="_blank" class="release">
    <img class="release__img shadow" :src="loadImg ? val.cover : sk" @load="loadImage" :alt="val.title" />
  </a>
</template> -->

<style lang="scss">

</style>
