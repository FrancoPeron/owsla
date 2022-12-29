<script>
// Data Base
import { db } from '@/firebase/firebase.config'
import { getDocs, collection, query, limit, orderBy, startAfter } from 'firebase/firestore'
import { useInfiniteScroll } from '@vueuse/core'

export default {
  data() {
    return {
      showImg: false,
      skList: 13,
      skImg: 'https://img.freepik.com/foto-gratis/fondo-estudio-fotografo-vacio-resumen-textura-fondo-belleza-azul-claro-oscuro-claro-gris-frio-pared-plana-degradado-blanco-nevado-piso_1258-54160.jpg?w=600',
      musicList: [],
      limit: 13,
      resultLength: null,
    }
  },
  mounted() {
    this.getData()
    this.limit = 16

    useInfiniteScroll(
      window,
      () => {
        if (this.resultLength != 0) {
          this.getData()
        } else {
          document.querySelectorAll('.skCuadrado').forEach((element) => {
            element.classList.add('skHide')
          })
        }
      },
      { distance: 500 }
    )
  },

  methods: {
    //obtener datos
    getData() {
      let colectionRef = query(collection(db, 'music'), orderBy('date', 'desc'), limit(this.limit))

      if (this.lastDocSnapshot) colectionRef = query(colectionRef, startAfter(this.lastDocSnapshot))

      getDocs(colectionRef)
        .then((result) => {
          //guardo snapshoot
          this.lastDocSnapshot = result.docs[result.docs.length - 1]

          //agrego id
          const resultDocs = result.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })

          //guardo resultado en el array
          this.musicList.push(...resultDocs)

          //guardo longitud del resultado
          this.resultLength = resultDocs.length
        })
        .catch((error) => console.log(error))
    },

    loadImage() {
      this.showImg = true
      this.skList = 4

      document.querySelectorAll('.skCuadrado').forEach((element) => {
        element.classList.add('skLast')
      })
    },
  },
}
</script>

<template>
  <div class="main-music">
    <span class="main-music__background"></span>
    <section for="target" class="main-music__list">
      <a v-for="(val, index) in musicList" :key="index" :href="val.link" target="_blank" class="release">
        <img class="release__img shadow" :src="!showImg ? skImg : val.cover" :alt="val.title" @load="loadImage" />
        <div class="release__info">
          <h2 class="release__title">
            {{ val.title }}
            <p v-if="val.featuring[0]">{{ `(feat. ` + val.featuring[0] + `)` }}</p>
          </h2>
          <h3 class="release__artist">
            {{ val.artist[0] }}
            <p v-if="val.artist.length > 1">{{ ` & ` + val.artist[1] }}</p>
          </h3>
          .
        </div>
      </a>

      <span v-for="(val, index) in skList" :key="index" class="release skCuadrado"></span>
    </section>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.skCuadrado {
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: url(@/assets/image/sk.webp);
}
.skHide {
  display: none;
}
.skLast {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%), url(@/assets/image/sk.webp);
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
    width: 100%;
  }
}

.music-btn {
  @include btn(cB, bgW, bB);
}
.release {
  position: relative;

  .release__img {
    width: 100%;
    aspect-ratio: 1/1;
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
