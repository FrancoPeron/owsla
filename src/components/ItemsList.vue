<script setup>
//Vue
import { ref } from 'vue'
import { onMounted } from '@vue/runtime-core'
import { useInfiniteScroll } from '@vueuse/core'

// Data Base
import { db, getData } from '@/firebase/firebase.config'
import { collection, query, limit, orderBy, startAfter } from 'firebase/firestore'

/* || Data || ----------------------------------------*/

const props = defineProps(['info']);

let colRef = props.info.colectionRef
let limitItems = props.info.limitItems

let lastDocSnapshot = null
let ItemList = ref([])
let resultLength = null

/* || Functions || ----------------------------------------*/

const getNewData = async (colectionRef) => {
  if (lastDocSnapshot) colectionRef = query(colectionRef, startAfter(lastDocSnapshot), limit(limitItems))
  const [result, resultDocs] = await getData(colectionRef)
  lastDocSnapshot = result.docs[result.docs.length-1]
  resultLength = result.docs.length
  ItemList.value.push(...resultDocs)
}

const infinitScroll = (colectionRef)=>{
  useInfiniteScroll(
    window,
    async () => {
      if (resultLength != 0) {
        await getNewData(colectionRef)
        // console.log(ItemList)
      }
    },
    { distance: 500 }
  )
}

/* || LifeCyle || ----------------------------------------*/

onMounted(() => {
  console.log('MsuicList Mounted')
});

/* || Code || ----------------------------------------*/

await getNewData(colRef)
infinitScroll(colRef)

/* --------------------------------------------------------*/
</script>
<template>
  <slot v-for="(val, index) in ItemList" :key="index" :item="val"></slot>
</template>

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
