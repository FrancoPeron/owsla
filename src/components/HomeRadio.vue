<script>
  export default {
    mounted() {
      
    },
    
    methods: {
      
    }
  }
</script>

<template>
  <section class="radio">
    <h2 class="radio__title">Our Radio</h2>

    <h3 class="radio__subtitle">
      Listen to our program on beat 1 and mixcloud, enjoy our releases and our
      special guests
    </h3>

    <div class="playlists__list">
      <img class="m-btn playlists__img" m-id="1" src="https://i.scdn.co/image/ab67706c0000bebb59f906f5d309fc1c9b35c95b" alt="Playlists 2"/>
      <img class="m-btn playlists__img" m-id="2" src="https://i.scdn.co/image/ab67706c0000bebbeec08ebad6313ba4620d1231" alt="Playlists 1"/>
      <img class="m-btn playlists__img" m-id="3" src="https://i.scdn.co/image/ab67706c0000bebbb528347c16962d66ac3be2d5" alt="Playlists 3"/>
    </div>

    <div class="radio__list" href="">
      <div class="radio__item">
        <p class="radio__num">1</p>
        <img
          class="radio__img"
          src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/4/4/4/6/b4ed-5190-4280-a38b-6ad22bdb28ce"
          alt=""
        />
        <iframe
          width="100%"
          height="180"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FCreateRadio%2Fowsla-radio-1-beats-1%2F"
          frameborder="0"
        ></iframe>
      </div>
      <div class="radio__item">
        <p class="radio__num">2</p>
        <img
          class="radio__img"
          src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/4/4/4/6/b4ed-5190-4280-a38b-6ad22bdb28ce"
          alt=""
        />
        <iframe
          width="100%"
          height="180"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FCreateRadio%2Fowsla-radio-2-beats-1%2F"
          frameborder="0"
        ></iframe>
      </div>
      <div class="radio__item">
        <p class="radio__num">3</p>
        <img
          class="radio__img"
          src="https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/4/4/4/6/b4ed-5190-4280-a38b-6ad22bdb28ce"
          alt=""
        />
        <iframe
          width="100%"
          height="180"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FPAUL_DI%2Fskrillex-owsla-radio-3-beats-1%2F"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  /* -------------------- Radio -------------------- */

  .radio {
    grid-area: radio;
    @extend %container-center;
    @include flex(column, nowrap);
    align-items: center;
    width: 100%;
    padding-left: 1rem;

    .radio__title {
      @extend %f-title;
      margin-bottom: 2rem;
      grid-column: span 2;
    }

    .radio__subtitle {
      @extend %f-subtitle;
      justify-self: center;
      max-width: 800px;
    }

    .radio__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      width: 100%;

      .radio__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 3rem;

        .radio__num {
          display: none;
          min-width: 120px;

          @extend %f-monument;
          font-size: clamp(4rem, 5vw, 4.5rem);
          line-height: calc(150%);
          color: transparent;
          -webkit-text-stroke: 2.5px #000000;
          margin-bottom: 0;
        }

        .radio__img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 476px) {
    .radio__img {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .radio {
      .radio__list {
        .radio__item {
          flex-direction: row;

          .radio__num {
            display: flex;
          }
        }
      }
    }
  }
</style>

<!-- 
.playlists {
  grid-area: playlists;
  @extend %container-center;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  .playlists__title {
    @extend %f-title;
    grid-column: span 2;
    margin-bottom: 0;
  }

  .playlists__list {
    grid-column: span 2;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 16rem 0rem 3rem;

    .playlists__img {
      width: 100%;
      max-width: 500px;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
      transition: all ease-in-out 0.5s;
      cursor: pointer;

      &:nth-child(1) {
        position: absolute;
        transform: translate(0, -200px);

        &:hover {
          transform: translate(0, -230px);

          & ~ :nth-child(2) {
            transform: translate(0, -20px);
          }

          & ~ :nth-child(3) {
            transform: translate(0, 50px);
          }
        }
      }

      &:nth-child(2) {
        box-shadow: 0px -30px 30px 0px rgba(0, 0, 0, 0.64);
        position: absolute;
        transform: translate(0, -90px);

        &:hover {
          transform: translate(0, -180px);

          & ~ :nth-child(3) {
            transform: translate(0, 50px);
          }
        }
      }

      &:nth-child(3) {
        box-shadow: 0px -30px 30px 0px rgba(0, 0, 0, 0.64);
        z-index: 1;
      }

      &:hover {
        filter: hue-rotate(135deg);
        transition: all ease-in-out 0.5s;
      }

      &--up {
        transform: translate(0, -230px) !important;
      }
    }
  }

  .playlists__songs {
    display: none;
    grid-column: span 2;
    margin: 2rem 0rem;

    .playlists__iframe {
      min-height: 500px;
      width: 100%;
      height: 100%;
    }
  }
}


@media screen and (min-width: 768px) {
  .playlists {
    .playlists__list {
      .playlists__img {
        max-width: 380px;
        width: 100%;
        margin-left: 140px;
        &:nth-child(1) {
          transform: translate(-140px, -140px);

          &:hover {
            transform: translate(-140px, -250px);
          }

          &:hover ~ :nth-child(2) {
            transform: translate(-60px, -10px);
          }
        }

        &:nth-child(2) {
          transform: translate(-70px, -70px);

          &:hover {
            transform: translate(-70px, -250px);
          }
          &:hover ~ :nth-child(3) {
            transform: translate(10px, 10px);
          }
        }
        &:nth-child(3) {
          z-index: 1;
        }

        &:hover {
          filter: hue-rotate(135deg);
          transition: all ease-in-out 0.5s;
        }
      }
    }

    .playlists__songs {
      display: flex;
    }
  }

  .playlists-background {
    margin-bottom: 20rem;
  }
}

@media screen and (min-width: 1024px) {
  .playlists {
    .playlists__title {
      margin-bottom: 3rem;
    }

    .playlists__list {
      grid-column: span 1;
      justify-content: start;
    }

    .playlists__songs {
      grid-column: span 1;
      justify-content: end;
      margin: 2rem 0rem;
      margin-left: 2rem;
    }
  }

  .playlists-background {
    margin-bottom: 8rem;
  }
} -->