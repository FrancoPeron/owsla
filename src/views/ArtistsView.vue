<script setup>
// Data Base
import { db } from '@/database/firebase.config'
import { collection, query, limit, orderBy } from 'firebase/firestore'

// Componenet
import ItemsList from '@/components/loops/ItemsList.vue'
import ArtistsItem from '@/components/molecules/ArtistsItem.vue'

/* || Data || ----------------------------------------*/
const dataInfo = {
  colectionRef: query(collection(db, 'artists'), orderBy('date', 'desc'), limit(8)),
  limitItems: 8,
};
</script>

<template>
  <div class="main-artists">
    <span class="main-artists__background"></span>
    <section class="main-artists__list">
      <Suspense>
        <template #default>
          <ItemsList v-slot="val" :info="dataInfo">
            <ArtistsItem :item="val.item" />
          </ItemsList>
        </template>
        <template #fallback>
          <div v-for="(val, index) in 13" :key="index" class="sk-box">
            <span class="sk-artist skeleton"></span>
            <span class="sk-title skeleton"></span>
          </div>
        </template>
      </Suspense>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-artists {
  .main-artists__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-artists.webp?alt=media&token=ab1cccfa-d469-4700-962d-87e774f9dc4a);
    background-size: cover;
    background-position: center;
    // clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
    height: 600px;
    animation: move 160s infinite;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(black, transparent);
    }
  }

  @keyframes move {
    0% {
      background-position: bottom;
    }

    50% {
      background-position: top;
    }

    100% {
      background-position: bottom;
    }
  }

  $artists-grid: minmax(240px, 1fr);
  .main-artists__list {
    @extend %container-center;
    grid-template-columns: repeat(auto-fit, $artists-grid);
  }
}

.sk-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .sk-artist {
    width: 100%;
    aspect-ratio: 7/10;
  }

  .sk-title {
    width: 70%;
    height: 20px;
  }
}
</style>
