<script setup>

// Data Base
import { db } from '@/firebase/firebase.config'
import { collection, query, limit, orderBy} from 'firebase/firestore'

// Componenet
import ItemsList from '@/components/ItemsList.vue'
import MusicRelease from '@/components/MusicRelease.vue'


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
            <MusicRelease :item="val.item" />
          </ItemsList>
        </template>
        <template #fallback>
          <span v-for="(val, index) in 13" :key="index" class="release skCuadrado"></span>
        </template>
      </Suspense>
    </section>
  </div>
</template>

<style lang="scss">
.skCuadrado {
  min-width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  background: url(../assets/image/sk.webp);
  overflow: hidden;
}

.skCuadrado::after {
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  animation: 2s loading linear 0.5s infinite;
  background: linear-gradient(90deg, transparent, #fdfdfd, transparent);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: 1;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* ------------------------------ Music ------------------------------ */

$music-grid: minmax(240px, 1fr);

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

  .main-music__list {
    @extend %container-center;
    background: $cWhite;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, $music-grid);
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

.release {
  position: relative;

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

<!-- .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} -->
