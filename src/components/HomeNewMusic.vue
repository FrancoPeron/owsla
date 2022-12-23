
<script>
// Data Base
import { db } from '@/firebase/firebase.config'
import { getDocs, addDoc, collection, query, limit, orderBy } from 'firebase/firestore'

export default {
  data() {
    return {
      musicList: [],
    }
  },
  mounted() {
    getDocs(query(collection(db, 'music'), orderBy('date', 'desc'), limit(3)))
      .then((result) => {
        const resultDocs = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })

        this.musicList = resultDocs
        console.log(this.musicList)
      })
      .catch((error) => console.log(error))
  },

  methods: {
    //obtener datos
  },
}
</script>

<template>
  <section class="new-music">
    <h2 class="new-music__title">Latest Releases</h2>
    <h3 class="new-music__subtitle">some of our latest releases from this year, feel and enjoy the music, listen more <router-link to="/music">here</router-link></h3>

    <div v-for="(val, index) in musicList" :key="index" class="new-music__album">
      <div class="new-music__text">
        <p>.{{ index + 1 }}</p>
        <a :href="val.link" target="_blank"
          >Listen Now
          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14.25L8 7.74997L1 1.25" stroke="black" stroke-width="2" />
          </svg>
        </a>
      </div>
      <img class="new-music__img" :src="val.cover" :alt="val.title" />
    </div>
  </section>

  <span class="new-music-background"></span>
</template>

<style lang="scss" scoped>
/* -------------------- New Music -------------------- */

.new-music {
  grid-area: new-music;
  @extend %container-center;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 8%;
  width: 100%;

  .new-music__title {
    grid-column: span 6;

    @include font(fh1, w500, MonumentE);
    text-align: center;
  }

  .new-music__subtitle {
    grid-column: span 6;

    @include font(ft2, w500);
    justify-self: center;
    max-width: 800px;
    text-align: center;

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
    margin: 3rem 1.5rem 3rem 0;
    background-color: #fff;
    grid-column: span 6;
    box-shadow: 12px 0px 0px 24px $cWhite;
    .new-music__text {
      @include flex();
      justify-content: space-between;
      align-items: center;

      padding: 1rem 0;

      text-transform: uppercase;
      text-align: center;

      p {
        @include font(fb1, w500, MonumentE);
      }

      a {
        @include flex();
        align-items: center;
        gap: 8px;

        @include font(fc, w500, MonumentE);
        -webkit-text-stroke: 0.3px $cBlack;

        svg {
          margin-top: -3px;
        }
      }
    }

    .new-music__img {
      width: 100%;
      min-width: 250px;
      position: relative;
    }
  }
}

.new-music-background {
  grid-area: new-music;
  z-index: -1;
  margin-top: 45rem;
  position: relative;
  height: 4px;
  width: 100%;
  background-color: $cBlack;

  &::after {
    content: '';
    position: absolute;
    top: -400px;
    right: 0;
    width: 90%;
    height: 4px;
    background-color: $cBlack;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -400px;
    left: 0;
    width: 90%;
    height: 4px;
    background-color: $cBlack;
  }
}

@media screen and (min-width: 768px) {
  .new-music__album:nth-child(3),
  .new-music__album:nth-child(4),
  .new-music__album:nth-child(5) {
    margin-top: 100px;
  }

  .new-music__album:nth-child(3) {
    transform: translate(0, -30px);
    grid-column: 1 / 4;
  }

  .new-music__album:nth-child(4) {
    align-self: center;
    grid-row: 3 / 5;
    grid-column: 4 / 7;
  }

  .new-music__album:nth-child(5) {
    grid-column: 1 / 4;
  }

  .new-music-background {
    margin-top: 38rem;

    &::after {
      top: -300px;
    }

    &::before {
      bottom: -300px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .new-music__album:nth-child(3),
  .new-music__album:nth-child(4),
  .new-music__album:nth-child(5) {
    margin-top: 100px;
  }

  .new-music__album:nth-child(3) {
    transform: translate(0, -30px);
    grid-column: 1 / 3;
  }

  .new-music__album:nth-child(4) {
    transform: translate(0, 70px);
    grid-column: 3 / 5;
  }

  .new-music__album:nth-child(5) {
    grid-column: 5 / 7;
  }

  .new-music-background {
    margin-top: 25rem;
    background-color: transparent;

    &::after {
      top: -50px;
    }

    &::before {
      bottom: -50px;
    }
  }
}
</style>
