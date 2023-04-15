<script setup>
//Vue
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'

// Data Base
import { getData } from '@/database/firebase.config'
import { query, limit, startAfter } from 'firebase/firestore'

/* || Props || ----------------------------------------*/

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
      }
    },
    { distance: 300 }
  )
}

/* || Code || ----------------------------------------*/

await getNewData(colRef)
infinitScroll(colRef)

/* --------------------------------------------------------*/
</script>
<template>
  <slot v-for="(val, index) in ItemList" :key="index" :item="val"></slot>
</template>

