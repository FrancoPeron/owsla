<template>
  <div class="main-music">
    <span class="main-music__background"></span>

    <section for="target" class="main-music__list">
      <a v-for="(val,index) in musicList" :key="index" :href="val.link" target="_blank" class="release">
        <img class="release__img shadow" :src="val.cover" :alt="val.title">
        <div class="release__info">
            <h2 class="release__title"> {{val.title}}<p v-if="val.featuring[0]">{{`(feat. `+val.featuring[0]+ `)`}}</p></h2>
            <h3 class="release__artist"> {{val.artist[0]}} <p v-if="val.artist.length>1">{{` & `+ val.artist[1]}}</p> </h3>.
        </div>
      </a>
    </section>
  </div>
</template>

<script>
// Data Base
import {db} from '@/firebase/firebase.config'
import { getDocs, addDoc, collection, query, limit, orderBy } from "firebase/firestore"

export default {
  data() {
    return {
      musicList: [],
    };
  },
  mounted() {

    //obtener datos
    getDocs(query(collection(db, 'music'),orderBy("date", "desc")))
    .then(result => {
        const resultDocs = result.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })

        this.musicList = resultDocs
        console.log( this.musicList)
    })
    .catch(error => console.log(error))

  },

  methods: {},
};
</script>

<style lang="scss">
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
      content: "";
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

  .main-music__title {
    @extend %f-monument;
    @extend %f-bt1;
    color: $cWhite;

    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    white-space: nowrap;

    &::before {
      content: "-";
      @extend %f-bt1;
      color: $cWhite;
      margin-right: 3rem;
    }

    &::after {
      content: "-";
      @extend %f-bt1;
      color: $cWhite;
      margin-left: 3rem;
    }
  }

  .main-music__list {
    @extend %container-center;
    background: $cWhite;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, $music-grid);
    gap: 2rem;
  }
}

.release {
  position: relative;

  .release__img {
    width: 100%;
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
      @extend %f-h1eadline;
      color: $cWhite;
      text-align: center;
      margin-bottom: 1rem;
    }

    .release__artist {
      @extend %f-body;
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