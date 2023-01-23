<script>
// Data Base
import { db } from '@/firebase/firebase.config'
import { getDocs, addDoc, collection, query, limit, orderBy } from 'firebase/firestore'

export default {
  data() {
    return {
      musicList: [],
      loadedImg: false,
    }
  },
  mounted() {
    for (let index = 0; index < 3; index++) {
      this.musicList.push({ cover: 'src/assets/image/sk.webp' })
    }

    getDocs(query(collection(db, 'music'), orderBy('date', 'desc'), limit(3)))
      .then((result) => {
        const resultDocs = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })

        this.musicList = resultDocs
      })
      .catch((error) => console.log(error))
  },

  methods: {

  },
}
</script>

<template>
  <fragment>
    <section class="new-music">
      <h2 class="new-music__title">Latest Releases</h2>
      <h3 class="new-music__subtitle">some of our latest releases from this year, feel and enjoy the music, listen more <router-link class="here" to="/music">here</router-link></h3>
      <div v-for="(val, index) in musicList" :key="index" class="new-music__album">
        <div class="new-music__text">
          <p>.{{ index + 1 }}</p>
          <a :href="val.link" target="_blank">
            Listen Now
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14.25L8 7.74997L1 1.25" stroke="black" stroke-width="2" />
            </svg>
          </a>
        </div>
        <img class="new-music__img" :src="val.cover" :alt="val.title" />
      </div>
    </section>
    <span class="new-music-background"></span>
  </fragment>
</template>

<style lang="scss" scoped>
.new-music {
  grid-area: new-music;
  @extend %container-center;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 8%;
  width: 100%;
  margin-bottom: 2rem;

  @extend %fadeInDown;

  .new-music__title {
    grid-column: span 6;
    margin: 32px 0 24px 0;

    @include font(fh1, w500, MonumentE, lsWidest);
    text-align: center;
    line-height: 100%;
  }

  .new-music__subtitle {
    grid-column: span 6;
    justify-self: center;
    max-width: 850px;
    margin-bottom: 32px;

    @include font(ft2, w500, MontS, lsWider);
    text-align: center;
    line-height: 150%;

    a:hover {
      color: $cBlack;
      text-decoration: underline;
    }
  }

  .new-music__album {
    @include flex(column);
    justify-self: center;
    width: 250px;
    border: solid #000 3px;
    padding: 0 20px 20px 20px;
    margin: 4rem 1.5rem 4rem 0;
    background-color: #fff;
    grid-column: span 6;
    box-shadow: 12px 0px 0px 24px $cWhite;

    &:nth-child(3) {
      @include respond(sm) {
        grid-column: 1 / 4;
      }
      @include respond(md) {
        grid-column: 1 / 3;
      }
    }
    &:nth-child(4) {
      @include respond(sm) {
        align-self: center;
        grid-row: 3 / 5;
        grid-column: 4 / 7;
      }
      @include respond(md) {
        transform: translate(0, 64px);
        grid-column: 3 / 5;
      }
    }
    &:nth-child(5) {
      @include respond(sm) {
        grid-column: 1 / 4;
      }
      @include respond(md) {
        grid-column: 5 / 7;
      }
    }

    @include respond(sm) {
    }

    .new-music__text {
      @include flex();
      justify-content: space-between;
      align-items: center;

      padding: 1rem 0;

      text-transform: uppercase;
      text-align: center;

      p {
        @include font(fb1, w500, MonumentE);
        -webkit-text-stroke: 0.3px $cBlack;
      }

      a {
        @include flex();
        align-items: center;
        gap: 8px;

        @include font(fc, w500, MonumentE, lsWidest);
        -webkit-text-stroke: 0.4px $cBlack;

        svg {
          margin-top: -3px;
        }
      }
    }

    .new-music__img {
      width: 100%;
      min-width: 250px;
      aspect-ratio: 1/1;
      object-fit: cover;
      position: relative;
      box-shadow: 10px 0px 0px 10px $cWhite;
    }
  }
}

.new-music-background {
  grid-area: new-music;
  z-index: -1;
  margin-top: 54rem;
  position: relative;
  height: 3px;
  width: 100%;
  background-color: $cBlack;

  @include respond(sm) {
    margin-top: 43rem;
  }
  @include respond(md) {
    margin-top: 26rem;
    background-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: -450px;
    right: 0;
    width: 92%;
    height: 3px;
    background-color: $cBlack;

    @include respond(sm) {
      top: -300px;
    }
    @include respond(md) {
      top: -50px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -450px;
    left: 0;
    width: 90%;
    height: 3px;
    background-color: $cBlack;

    @include respond(sm) {
      bottom: -300px;
    }
    @include respond(md) {
      bottom: -50px;
    }
  }
}
</style>
