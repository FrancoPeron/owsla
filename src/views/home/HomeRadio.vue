<script>
// Data Base
import { db } from '@/firebase/firebase.config'
import { getDocs, addDoc, collection, query, limit, orderBy } from 'firebase/firestore'

export default {
  data() {
    return {
      radioList: [
        {
          title: 'OWSLA Radio #1 @ Apple Beats 1',
          featuring: 'Skrillex & OWSLA Crew',
          subtitle: 'Introducing OWSLA Radio',
          description: 'Skrillex chats to tons of great guests.',
          cover: 'https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/owslaradio%2F1.webp?alt=media&token=95f2c081-5cc9-4de6-8388-86c0aa8b3a91,',
          link: 'https://music.apple.com/us/station/introducing-owsla-radio/ra.1079232715',
          date: '1/30/2016',
        },
      ],
      activeEpisode: 0,
    }
  },
  mounted() {

    for (let index = 0; index < 4; index++) {
      this.radioList.push({ cover: 'src/assets/image/sk.webp' })
    }

    getDocs(query(collection(db, 'radio'), orderBy('date', 'asc'), limit(4)))
      .then((result) => {
        const resultDocs = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })

        this.radioList = resultDocs
        radioImg1.classList.add('active')
      })
      .catch((error) => console.log(error))
  },

  methods: {
    clearActive() {
      let links = document.getElementsByClassName('radio__img-box')
      Array.from(links).forEach((val) => val.classList.remove('active'))
    },

    showEpisode(e, index) {
      this.activeEpisode = index
      this.clearActive()
      e.path[1].classList.add('active')
    },
  },
}
</script>

<template>
  <section class="radio">
    <h2 class="radio__title">Owsla Radio</h2>

    <h3 class="radio__subtitle">Listen to our radio show on beat 1, enjoy new releases and our special guests, listen more <router-link class="here" to="/radio">here</router-link></h3>

    <div class="radio__box">
      <div class="radio__episodes-info">
        <div class="radio__link">
          <p>0{{ activeEpisode + 1 }}.</p>
          <span class="line"></span>
          <a :href="radioList.at(activeEpisode).link" target="_blank">
            Listen Now
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14.25L8 7.74997L1 1.25" stroke="black" stroke-width="2" />
            </svg>
          </a>
        </div>
        <p class="radio__episodes-title">{{ radioList.at(activeEpisode).featuring }}</p>
        <div class="radio__episodes-subtitle">
          <p>{{ radioList.at(activeEpisode).subtitle }}</p>
          <p>{{ radioList.at(activeEpisode).description }}</p>
        </div>
      </div>
      <div class="radio__imgs-list">
        <span><!--esto es por un bug que se produce en el hover--></span>
        <div class="radio__img-box" :id="'radioImg' + (index + 1)" v-for="(val, index) in radioList" :key="index" @click="showEpisode($event, index)">
          <img class="radio__img" :src="val.cover" :alt="val.title" />
        </div>
      </div>
    </div>
  </section>
  <span class="radio-background"></span>
</template>

<style lang="scss" scoped>
.radio {
  grid-area: radio;
  @extend %container-center;
  @include flex(column);
  align-items: center;
  filter: drop-shadow(0px 0px 25px rgb(80 80 80 / 12%));

  .radio__title {
    grid-column: span 6;
    margin: 32px 0 24px 0;

    @include font(fh1, w500, MonumentE, lsWidest);
    text-align: center;
    line-height: 100%;
  }

  .radio__subtitle {
    grid-column: span 6;
    justify-self: center;
    max-width: 850px;
    margin-bottom: 32px;

    @include font(ft2, w500, MontS, lsWider);
    text-align: center;
    line-height: 150%;
  }

  $padding-radio: 42px;
  .radio__box {
    position: relative;
    @include flex(column);
    justify-content: center;
    align-items: center;
    gap: 2rem;

    height: fit-content;
    width: 100%;
    margin-top: 8rem;
    padding: $padding-radio;
    background-color: $cWhite;
    margin-top: 114px;


    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: -$padding-radio;
    //   left: -$padding-radio;
    //   width: calc(100% + $padding-radio * 2);
    //   height: calc(100% + $padding-radio * 2);
    //   z-index: -1;
    //   background-color: $cWhite;
    //   // clip-path: polygon(0% 0%, 100% 4%, 100% 96%, 0% 100%);
    // }

    @include respond(sm) {
      @include flex(row, wrap);
    }

    .radio__imgs-list {
      position: relative;

      @include flex(row);
      justify-content: space-between;
      gap: 2rem;
      width: 100%;

      @include respond(sm) {
        width: calc(55% - 2rem);
      }

      span{
        display: none;
        width: 0.1%;
        @include respond(md) {
          display: block;
        }
      }
  
      .radio__img-box {
        display: flex;
        height: min-content;
        width: inherit;
        transition: all ease-in-out 0.5s;

        .radio__img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          cursor: pointer;
        }

        &:hover {
          width: 90%;
          transition: all ease-in-out 0.5s;
        }

        &.active {
          width: 200%;
          max-width: 240px;
          transition: all ease-in-out 0.5s;
        }
      }

      #radioImg4{
        display: none;
        @include respond(md) {
          display: flex
        } 
      }

    }
    .radio__episodes-info {
      @include flex(column);
      justify-content: flex-start;
      gap: 32px;
      width: 100%;

      @include respond(sm) {
        width: 45%;
      }
      .radio__link {
        @include flex();
        justify-content: space-between;
        align-items: center;
        gap: 32px;
        width: 100%;

        a,p {
          @include flex();
          align-items: center;
          gap: 8px;
          white-space: nowrap;

          @include font(fc, w500, MonumentE, lsWidest);
          -webkit-text-stroke: 0.4px $cBlack;

          svg {
            margin-top: -3px;
          }
        }
      }

      .radio__episodes-title {
        grid-area: title;

        @include font(ft2, w400, MonumentE, lsWidest);
        font-size: 28px;
        text-transform: uppercase;
        line-height: 30px;
        color: $cBlack;
        -webkit-text-stroke: 1px #000000;

      }

      .radio__episodes-subtitle {
        grid-area: info;
        border-left: solid 2px #000000;
        padding-left: 1rem;

        @include flex(column);
        text-transform: capitalize;

        :nth-child(1) {
          @include font(ft2, w700, MontS, lsWider);
          margin-bottom: 0.5rem;
        }
        :nth-child(2) {
          @include font(fhl2, w500, MontS, lsWider);
          width: 300px;
        }
      }
    }
  }
}

.radio-background {
  grid-area: radio;
  justify-self: flex-end;

  background-image: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fhome-radio.webp?alt=media&token=782f8e94-87bf-405d-8e01-ceb9fb5807a8);
  background-size: cover;
  background-position: right;

  // clip-path: polygon(0% 4%, 100% 0%, 100% 100%, 0% 96%);
  margin: 240px 0 0 0;
  z-index: -1;
  width: 100%;
  height: 484px;
  background-repeat: no-repeat;
}

</style>
