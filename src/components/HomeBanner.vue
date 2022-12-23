<script>
export default {
  mounted() {
    this.bannerSlider()
  },

  methods: {
    bannerSlider() {
      var cont = 2
      var anterior = 0
      let links = document.getElementsByClassName('slider__link')
      document.getElementById('radio1').checked = true

      links[0].classList.add('active')

      setInterval(loop, 15000)

      function loop() {
        links[anterior].classList.remove('active')
        links[cont - 1].classList.remove('active2')
        links[cont - 1].classList.add('active')

        document.getElementById('radio' + cont).checked = true
        anterior = cont - 1
        cont++
        if (cont > 3) {
          cont = 1
        }
      }

      document.getElementById('label-radio1').addEventListener('click', function () {
        links[1].classList.remove('active')
        links[2].classList.remove('active')
        links[1].classList.remove('active2')
        links[2].classList.remove('active2')
        cont = 1
        links[cont - 1].classList.add('active2')
      })
      document.getElementById('label-radio2').addEventListener('click', function () {
        links[2].classList.remove('active')
        links[0].classList.remove('active')
        links[2].classList.remove('active2')
        links[0].classList.remove('active2')
        cont = 2
        links[cont - 1].classList.add('active2')
      })
      document.getElementById('label-radio3').addEventListener('click', function () {
        links[0].classList.remove('active')
        links[1].classList.remove('active')
        links[0].classList.remove('active2')
        links[1].classList.remove('active2')
        cont = 3
        links[cont - 1].classList.add('active2')
      })
    },
  },
}
</script>

<template>
  <section class="banner">
    <div class="slider">
      <div class="slider__videos">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />

        <div id="video1" class="slider__box-video">
          <video class="slider__video" src="@/assets/video/WarmWinters.webm" muted loop autoplay></video>

          <div class="slider__box-info">
            <p class="slider__category">Collection Clothing</p>
            <h2 class="slider__title">Warm Winters<br /></h2>
            <p class="slider__subtitle">OWSLA GOODS</p>
            <a class="slider__btn" href="https://www.youtube.com/watch?v=k4XX7TTeTvI" target="_blank">Watch Now</a>
          </div>
        </div>

        <div id="video2" class="slider__box-video">
          <video class="slider__video" src="@/assets/video/BirdyNamNam-Goinin.mp4#t=15" muted loop autoplay></video>

          <div class="slider__box-info">
            <p class="slider__category">Music Video</p>
            <h2 class="slider__title">Goin'in<br /></h2>
            <p class="slider__subtitle">Birdy Nam Nam</p>
            <a class="slider__btn" href="https://www.youtube.com/watch?v=3JJsq0GbpPg" target="_blank">Watch Now</a>
          </div>
        </div>

        <div id="video3" class="slider__box-video">
          <video class="slider__video" src="@/assets/video/FriendlyFire.mp4#t=0" muted loop autoplay></video>

          <div class="slider__box-info">
            <p class="slider__category">Music Video</p>
            <h2 class="slider__title">Frendly Fire<br /></h2>
            <p class="slider__subtitle">Skrillex</p>
            <a class="slider__btn" href="https://www.youtube.com/watch?v=F6CNaD21gC0" target="_blank">Watch Now</a>
          </div>
        </div>

        <!-- <img class="slider__img" src="@/assets/image/slider3.jpg" alt=""> -->
      </div>

      <div class="slider__nav">
        <label class="slider__link" id="label-radio1" for="radio1"></label>
        <label class="slider__link" id="label-radio2" for="radio2"></label>
        <label class="slider__link" id="label-radio3" for="radio3"></label>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* -------------------- Banner -------------------- */

.banner {
  grid-area: banner;
  @extend %container-center;
  width: 100%;
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
        background: rgb(0, 0, 0);
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
          @extend %btn__outline;
        }
      }
    }

    #video1 {
      .slider__category {
        &::before {
          color: $color2;
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
          color: $color5;
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
      width: 100%;
      background-color: $cBlack;
      position: absolute;
      top: -2px;
      left: -2px;
      animation: carousel-active-nav-item 15s linear;
    }

    .slider__link:not(:last-child) {
      margin-right: 24px;
    }

    .slider__link:hover,
    .active2 {
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

  .active2 {
    width: 100%;
  }
}
</style>

//aregglar nav sincroniza y se acomoda mal
