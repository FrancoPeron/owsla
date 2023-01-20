<script setup>
import {YoutubeVue3} from 'youtube-vue3'

// Data Base
import { db } from '@/firebase/firebase.config'
import { collection, query, limit, orderBy} from 'firebase/firestore'

// Componenet
import ItemsList from '@/components/ItemsList.vue'

/* || Data || ----------------------------------------*/
const dataInfo = {
  colectionRef: query(collection(db, 'videos'), orderBy('date', 'desc'), limit(8)),
  limitItems: 8,
};


</script>

<template>
  <div class="main-video">
    <span class="main-video__background"></span>
    <section class="main-video__list">

      <Suspense>
        <template #default>
          <ItemsList v-slot="val" :info="dataInfo">
            <!-- <iframe class="video" :src="`https://www.youtube.com/embed/${val.item.code}`" title="A YouTube video" frameborder="0" allowfullscreen></iframe> -->
            <YoutubeVue3 class="video" ref="youtube" :videoid="val.item.code" :autoplay="0" />
          </ItemsList>
        </template>
        <template #fallback>
          <span v-for="(val, index) in 13" :key="index" class="sk-release skeleton"></span>
        </template>
      </Suspense>
    </section>
  </div>
</template>

<style lang="scss">
/* ------------------------------ Videos ------------------------------ */

$video-grid: minmax(48%, 1fr);

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

  .main-video__title {
    color: $cWhite;

    text-align: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
    text-transform: uppercase;
    white-space: nowrap;

    &::before {
      content: '-';

      color: $cWhite;
      margin-right: 3rem;
    }

    &::after {
      content: '-';

      color: $cWhite;
      margin-left: 3rem;
    }
  }

  .main-video__list {
    @extend %container-center;
    background: $cWhite;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, $video-grid);
    gap: 2rem;
  }

  .video{
    aspect-ratio: 16/9;
    width: 100%;
  }
}

.video-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .video-item__box {
    position: relative;
    transition: all ease-in-out 0.5s;

    .video-item__img {
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
      opacity: 0;
    }

    &::after {
      content: '';
      width: 30px;
      height: 30px;
      background: url('./assets/image/play.svg');
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
      opacity: 0;
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

  .video-item__title {
    line-height: calc(140%);
    font-weight: 500;
    letter-spacing: 0.05rem;
    color: $cBlack;
    margin: 1rem 0;
  }
}

.video-modal {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: $cBlack;
}
</style>
