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
    @extend .container-center;
    @include flex(column, nowrap);
    align-items: center;
    width: 100%;
    padding-left: 1rem;

    .radio__title {
      @extend .f-title;
      margin-bottom: 2rem;
      grid-column: span 2;
    }

    .radio__subtitle {
      @extend .f-subtitle;
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

          @extend .f-monument;
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