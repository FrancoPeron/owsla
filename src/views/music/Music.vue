<script setup>

// Data Base
import { db } from '@/firebase/firebase.config'
import { collection, query, limit, orderBy} from 'firebase/firestore'

// Componenet
import ItemsList from '@/components/ItemsList.vue'
import MusicItem from '@/views/music/MusicItem.vue'

/* || Data || ----------------------------------------*/
const dataInfo = {
    colectionRef: query(collection(db, 'music'), orderBy('date', 'desc'), limit(13)),
    limitItems: 16,
};

</script>

<template>
  <div class="main-music">
    <span class="main-music__background"></span>
    <section class="main-music__list ">
      <Suspense>
        <template #default>
          <ItemsList v-slot="val" :info="dataInfo">
            <MusicItem :item="val.item" />
          </ItemsList>
        </template>
        <template #fallback>
          <span v-for="(val, index) in 13" :key="index" class="sk-release skeleton"></span>
        </template>
      </Suspense>
    </section>
  </div>
</template>

<style lang="scss" scoped>

.main-music {

  .main-music__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-music.webp?alt=media&token=ca5751aa-6cbe-4fd3-9e9e-4df998f55147);
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

  @keyframes multcolor {
    from {
      filter: hue-rotate(0deg);
    }

    to {
      filter: hue-rotate(360deg);
    }
  }

  $music-grid: minmax(240px, 1fr);
  .main-music__list {
    @extend %container-center;
    grid-template-columns: repeat(auto-fit, $music-grid);
  }
}

.sk-release {
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
  
  &:nth-child(1) {
    grid-column: 1/-1;
    grid-row: span 1/-1;
  }
}

@media screen and (min-width: 768px) {
  .sk-release {
    &:nth-child(1) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
}
</style>