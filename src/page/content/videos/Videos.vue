<script setup>

//Vue
import { ref } from 'vue'

// Data Base
import { db } from '@/firebase/firebase.config'
import { collection, query, limit, orderBy} from 'firebase/firestore'

// Componenet
import ItemsList from '@/components/ItemsList.vue'
import VideosItem from '@/views/videos/VideosItem.vue'
import VideoModal from '@/views/videos/VideoModal.vue'

/* || Data || ----------------------------------------*/
const dataInfo = {
  colectionRef: query(collection(db, 'videos'), orderBy('date', 'desc'), limit(6)),
  limitItems: 4,
};

let videoCode = ref("");
let showModal = ref(false);

function openModal(val){
  videoCode.value = val;
  showModal.value = true
}

function closeModal(){
  showModal.value = false
}

</script>

<template>
  <div class="main-video">
    <span class="main-video__background"></span>
    <section class="main-video__list">
      <Suspense>
        <template #default>
          <ItemsList v-slot="val" :info="dataInfo">
            <VideosItem :item="val.item" @click="openModal(val.item.code)" />
          </ItemsList>
        </template>
        <template #fallback>
          <span v-for="(val, index) in 13" :key="index" class="sk-video skeleton"></span>
        </template>
      </Suspense>
      <VideoModal :modalCode="videoCode" @closeM="closeModal" v-if="showModal" />
    </section>

  </div>
</template>

<style lang="scss" scoped>

.main-video {

  .main-video__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-video.gif?alt=media&token=eea0e7fc-7c78-4e49-98c5-3c65ec09ee80);
    background-size: cover;
    background-position: center;
    height: 600px;
    animation: multcolor 30s infinite, move 160s infinite;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(black, transparent);
    }
  }


  $video-grid: minmax(48%, 1fr);
  .main-video__list {
    @extend %container-center;
    grid-template-columns: repeat(auto-fit, $video-grid);

  }
}

.sk-video{
  aspect-ratio: 16/9;
    width: 100%;
}
</style>
