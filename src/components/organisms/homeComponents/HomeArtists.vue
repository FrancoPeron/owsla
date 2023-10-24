<script>

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, collection, query, limit, orderBy } from 'firebase/firestore'

export default {
  data() {
    return {
      cantData: 16,
      scrollLeftAux: -1,
      artistsList: [],
    }
  },
  mounted() {
    for (let index = 0; index < this.cantData; index++) {
      this.artistsList.push({ img: 'src/assets/images/sk.webp' })
    }
    //obtener datos
    getDocs(query(collection(db, 'artists'), orderBy('date', 'desc'), limit(this.cantData)))
      .then((result) => {
        const resultDocs = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })

        this.artistsList = resultDocs
      })
      .catch((error) => console.log(error))
  },

  methods: {
    nextArtist() {
      artistsList.scroll({ left: artistsList.scrollLeft + artistsList.offsetWidth, behavior: 'smooth' }) /*Obtiene la posicion del scroll de la seccion y le suma el ancho de la tarjeta para ir a la siguiente*/
      if (artistsList.scrollLeft >= artistsList.scrollWidth - artistsList.offsetWidth - 1) {
        artistsList.scroll({ left: 0, behavior: 'smooth' })
      }
    },
  },
}
</script>

<template>
  <section class="our-artists">
    <h2 class="our-artists__title">Our Artists</h2>

    <div class="our-artists__boxBtn">
      <hr class="our-artists__line" />
      <button class="our-artists__scroll-button" @click="nextArtist" id="bLess">></button>
    </div>

    <div class="our-artists__list" id="artistsList">
      <div v-for="(val, index) in artistsList" :key="index" class="artist d-flex flex-column position-relative overflow-hidden m-0 w-100">
        <img class="artist__img w-100" data-bs-toggle="modal" :src="val.img" :alt="val.artist" />
        <p class="artist__name">{{ val.artist }}</p>
      </div>
    </div>
  </section>

  <span class="our-artists-background"></span>
</template>

<style lang="scss" scoped>
.our-artists {
  grid-area: artists;
  @extend %container-center;
  display: grid;
  grid-template-areas:
    'title'
    'listart';
  width: inherit;
  height: fit-content;
  background-color: $cWhite;
  box-shadow: 0 0 0 42px #ffffff;
  filter: drop-shadow(0px 0px 30px rgba(148, 148, 148, 0.12));
  gap: 24px;
  margin: 106px 0;
  margin-left: 4rem;

  @include respond(sm) {
    grid-template-areas:
      'title btn'
      'title listart';
  }
  @include respond(lg) {
    margin-left: 0rem;
  }
  .our-artists__title {
    grid-area: title;

    @include font(fh2, w500, MonumentE, lsWidest);
    text-align: center;

    @include respond(sm) {
      writing-mode: vertical-rl;
      transform: scale(-1);
      white-space: nowrap;
    }
  }
  .our-artists__boxBtn {
    grid-area: btn;
    display: none;
    align-items: center;
    gap: 24px;
    height: fit-content;

    @include respond(sm) {
      display: flex;
    }

    .our-artists__scroll-button {
      font-family: monospace;
      width: 40px;
      height: 40px;
      justify-self: end;
      z-index: 1;
      background: transparent;
      padding: 0.5rem 0.8rem 0.7rem 0.6rem;
      font-size: 1.8rem;
      line-height: 1rem;
      border: solid 3px black;
      color: black;
    }

    .our-artists__line {
      height: 3px !important;
      width: 100%;
      background: $cBlack;
      border: transparent;
    }
  }
  .our-artists__list {
    grid-area: listart;

    @include flex();
    align-items: center;
    gap: 24px;
    position: relative;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    @include respond(sm) {
      overflow-x: auto;
    }

    .artist {
      scroll-snap-align: start;
      position: relative;

      @include respond(lg) {
        scroll-snap-align: end;
        width: 100%;
        min-width: calc((100% - 72px) / 4);
      }

      .artist__img {
        object-fit: cover;
        width: 240px;
        height: 100%;

        aspect-ratio: 7/10;
        //cursor: pointer;

        @include respond(lg) {
          width: 100%;
        }
      }

      .artist__name {
        @include font(fb1, w500, MonumentE);
        text-transform: uppercase;
        color: $cBlack;
        padding-top: 0.75rem;
      }
    }
  }
}

.our-artists-background {
  grid-area: artists;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-radio.webp?alt=media&token=f42944e5-507b-4f20-834b-113c1399d933);
  background-size: cover;
  background-position: center;
  z-index: -1;
  background-repeat: no-repeat;
  width: 62%;
  height: 100%;
}
</style>
