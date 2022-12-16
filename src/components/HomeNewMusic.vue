%<script>
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
    getDocs(query(collection(db, 'music'),orderBy("date", "desc"),limit(3)))
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

  methods: {
    //obtener datos
  },
};
</script>

<template>
  <section class="new-music">
    <h2 class="new-music__title">Latest Releases</h2>
    <h3 class="new-music__subtitle">
      some of our latest releases from this year, feel and enjoy the
      music, listen more <router-link to="/music">here</router-link>
    </h3>

    <div v-for="(val,index) in musicList" :key="index" class="new-music__album">
      <div class="new-music__text">
        <p>.{{(index+1)}}</p>
        <a :href="val.link" target="_blank">Listen Now 
          <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14.25L8 7.74997L1 1.25" stroke="black" stroke-width="2"/>
          </svg>
        </a>
      </div>
      <img class="new-music__img" :src="val.cover" :alt="val.title"/>
    </div>
    
  </section>

  <span class="new-music-background">
    <svg height="101" viewBox="0 0 1440 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="100" width="1306" height="4" fill="black"/>
      <rect x="138" width="1302" height="4" fill="black"/>
    </svg>
  </span>
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
    @extend %f-title;
    grid-column: span 6;
    justify-self: center;
  }

  .new-music__subtitle {
    @extend %f-subtitle;
    grid-column: span 6;
    justify-self: center;
    max-width: 800px;

    a:hover {
      color: $cBlack;
      text-decoration: underline;
    }
  }

  .new-music__album {
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 250px;
    border: solid #000 3px;
    padding: 0 20px 20px 20px;
    margin: 3rem 1.5rem 3rem 0;
    background-color: #fff;
    grid-column: span 6;
    box-shadow: 12px 0px 0px 24px $cWhite;
    .new-music__text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;

      @extend %f-monument;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: center;

      p{
        @extend %f-b1;
      }

      a{
        display: flex;
        gap: 8px;
        align-items: center;

        @extend %f-12;
        -webkit-text-stroke: .3px $cBlack;

        svg{
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
  //background-image: url(@/assets/image/background/newmusic.webp);
  background-size: cover;
  background-position: top;
  filter: brightness(0.5);
  z-index: -1;
  margin-top: 25rem;
  margin-bottom: 24rem;
  background-repeat: no-repeat;
}

.new-music-background svg {
  width: 100%;
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
    margin-bottom: 2rem;

    svg rect{
      height: 5px;
    }
  }
}

@media screen and (max-width: 820px) { 

  .new-music-background {
  
    svg rect{
      height: 6px;
    }
  }
}

@media screen and (max-width: 620px) { 

  .new-music-background {
  
    svg rect{
      height: 8px;
    }
  }
}
</style>
