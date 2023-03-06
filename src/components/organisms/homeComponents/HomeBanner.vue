<script>
export default {
  data() {
    return {
      videoList: [
        {
          video: 'https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/videos%2FWarm%20Winters%20%5BOWSLA%20GOODS%20Lookbook%20Video%5D.webm?alt=media&token=4ebf701f-481a-4e21-a9e6-51fa2b5e366c',
          link: 'https://www.youtube.com/watch?v=k4XX7TTeTvI',
          category: 'Collection Clothing',
          title: 'Warm Winters',
          subtitle: 'OWSLA GOODS',
        },
        {
          video: 'https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/videos%2FSkrillex%20%26%20Bladee%20-%20Real%20Spring%20(Official%20Music%20Video).webm?alt=media&token=1c6cb15e-3c0c-4276-8cb3-479c15c43ea2',
          link: 'https://www.youtube.com/watch?v=0i4gZ9IE2CI',
          category: 'Music Video',
          title: 'Real Spring',
          subtitle: 'Skrillex & Bladee',
        },
        {
          video: 'https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/videos%2FFriendly%20Fire.webm?alt=media&token=a1dc47a6-0b43-436c-8941-6c195509c863',
          link: 'https://www.youtube.com/watch?v=F6CNaD21gC0',
          category: 'Music Video',
          title: 'Frendly Fire',
          subtitle: 'Skrillex',
        },
      ],
      refreshInterval: undefined,
      cont: 2,
    }
  },

  mounted() {
    radio1.checked = true
    linkVideo1.classList.add('active')

    this.startSlider()
  },

  unmounted() {
    this.stopSlider()
  },

  methods: {
    clearActive() {
      let links = document.getElementsByClassName('slider__link')
      Array.from(links).forEach((val) => val.classList.remove('active'))
    },

    btnVideoActive(e, index) {
      this.stopSlider()
      this.cont = index
      e.target.classList.add('active')
      this.startSlider()
    },

    loopSlider() {
      let videoTarget = document.getElementById('radio' + this.cont)
      let linkTarget = document.getElementById('linkVideo' + this.cont)

      this.clearActive()

      videoTarget.checked = true
      linkTarget.classList.add('active')

      this.cont++
      if (this.cont > 3) this.cont = 1
    },

    stopSlider() {
      this.clearActive()
      clearInterval(this.refreshInterval)
    },

    startSlider() {
      this.refreshInterval = setInterval(this.loopSlider, 16000)
    },
  },
}
</script>

<template>
  <section class="banner">
    <div class="slider">
      <div class="slider__videos">
        <div v-for="(val, index) in videoList" :key="index">
          <input type="radio" name="radio-btn" :id="'radio' + (index + 1)" />
          <div :id="'video' + (index + 1)" class="slider__box-video">
            <video class="slider__video" :src="val.video" muted loop autoplay></video>
            <div class="slider__box-info">
              <p class="slider__category">{{ val.category }}</p>
              <h2 class="slider__title">{{ val.title }}<br /></h2>
              <p class="slider__subtitle">{{ val.subtitle }}</p>
              <a class="slider__btn" :href="val.link" target="_blank">Watch Now</a>
            </div>
          </div>
        </div>
      </div>

      <div class="slider__nav">
        <label class="slider__link" v-for="(val, index) in videoList.length" :key="index" :id="'linkVideo' + (index + 1)" :for="'radio' + (index + 1)" @click="btnVideoActive($event, index + 1)"></label>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  @extend %container-center;
  grid-area: banner;
  width: 100%;

  @extend %fadeIn;
}

.slider {
  @include flex(column);
  .slider__videos {
    position: relative;
    /* animation: slide 20s ease infinite; */

    .slider__box-video {
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0;
      position: relative;
      transition: all ease-in-out 0.5s;

      .slider__video {
        width: 100%;
        height: 570px;
        // aspect-ratio: 16/8;
        object-fit: cover;
        background-color: $cBlack;
      }

      .slider__box-info {
        position: absolute;
        bottom: 0;

        display: grid;
        grid-template-areas:
          'category btn'
          'title btn'
          'subtitle btn';
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        z-index: 1;
        width: 100%;
        padding: 2rem 3rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%);
        .slider__category {
          grid-area: category;

          @include font(fhl2, w500, MonumentE, lsWidest);
          text-transform: uppercase;
          font-weight: 500;
          color: $cWhite;
          margin-bottom: 1rem;

          &::before {
            content: '|';
            margin-right: 1rem;
          }
        }
        .slider__title {
          grid-area: title;

          @include font(fh1, w700, MonumentE);
          text-transform: uppercase;
          color: $cWhite;
        }
        .slider__subtitle {
          grid-area: subtitle;

          @include font(ft1, w700, MonumentE, lsWidest);
          color: transparent;
          -webkit-text-stroke: 1.2px $cWhite;
        }

        .slider__btn {
          grid-area: btn;
          align-self: flex-end;
          @include btn(cW, bgT, bW);
        }
      }
    }

    #video1 {
      .slider__category {
        &::before {
          color: #ff0;
        }
      }
    }

    #video2,
    #video3 {
      position: absolute;
      left: 0;
      top: 0;
      margin-top: auto;
      margin-bottom: auto;
      .slider__category {
        &::before {
          color: #f0f;
        }
      }
    }

    #radio1:checked ~ #video1,
    #radio2:checked ~ #video2,
    #radio3:checked ~ #video3 {
      opacity: 1;
      transition: all ease-in-out 0.5s;
    }
  }

  /* ---------- Slider nav ---------- */

  .slider__nav {
    @include flex();
    justify-content: center;

    width: 100%;

    .slider__link {
      border: 3px solid $cBlack;
      height: 16px;
      width: 18px;
      cursor: pointer;
      transition: 1s;
      position: relative;
      margin-top: 1rem;

      @include respond(sm) {
        width: 33.33333333%;
      }
    }

    .active {
      width: 100%;
      @include respond(sm) {
        width: 33.33333333%;
      }
    }

    .slider__link.active::after {
      content: ' ';
      height: 140%;
      width: 101%;
      background-color: $cBlack;
      position: absolute;
      top: -2px;
      left: -2px;
      animation: carousel-active-nav-item 16s linear;
    }

    .slider__link:not(:last-child) {
      margin-right: 24px;
    }

    .slider__link:hover {
      background: $cBlack;
      width: 50%;

      @include respond(sl) {
        width: 40%;
      }
    }

    @keyframes carousel-active-nav-item {
      from {
        width: 0%;
      }

      to {
        width: 100%;
      }
    }
  }
}
/*#t=30*/

@media screen and (max-width: 600px) {
  .slider__box-info {
    grid-template-areas:
      'category'
      'title'
      'subtitle'
      'btn' !important;
    gap: 24px;
  }
}
</style>
