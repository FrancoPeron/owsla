<script>
export default {};
</script>

<template>
  <div class="main-radio">
    <span class="main-radio__background"></span>

    <section class="main-radio__banner">
      <div class="main-radio__precentation">
        <div class="main-radio__info">
          <h1 class="main-radio__title">OWSLA RADIO</h1>
          <p class="main-radio__subtitle">
            Listen to our program on beat 1 and mixcloud, enjoy our releases and
            our special guests. <br />
            "good people, good time."
          </p>
          <hr class="main-radio__line" />
          <div class="d-flex flex-wrap gap-4">
            <a
              class="main-radio__btn"
              href="https://music.apple.com/us/room/1080035340"
              target="_blank"
              >On Apple Music</a
            >
            <a
              class="main-radio__btn"
              href="https://www.mixcloud.com/PAUL_DI/playlists/owsla-radio/"
              target="_blank"
              >On Mixcloud</a
            >
          </div>
        </div>
        <div class="main-radio__info-img">
          <img src="../assets/image/owsla-radio.webp" alt="" />
        </div>
      </div>

      <span class="line-grey"></span>
    </section>

    <section for="target" class="main-radio__list">
      <div
        id="reproductor"
        class="player offcanvas offcanvas-bottom"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        aria-labelledby="reproductor"
      >
        <button
          type="button"
          class="player__btn btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <div modal="target" class="content"></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
/* ------------------------------ Redio ------------------------------ */

$radio-grid: minmax(240px, 1fr);

.main-radio {
  .main-radio__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-radio.webp?alt=media&token=f42944e5-507b-4f20-834b-113c1399d933);
    background-color: black;
    background-size: cover;
    background-position: center;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
    height: 600px;
    animation: move 160s infinite;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(black, transparent);
    }
  }

  .main-radio__banner {
    @extend %container-center;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    // margin-top:clamp(1.2rem, 2vw, 3rem);

    .main-radio__precentation {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(3rem);
      width: 100%;

      .main-radio__info {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 3rem;

        .main-radio__title {
          @extend %f-monument;
          @extend %f-bt2;
          color: transparent;
          -webkit-text-stroke: 1.5px #ffffff;
          text-align: start;
          margin-bottom: 2rem;
        }

        .main-radio__subtitle {
          @extend %f-monument;
          @extend %f-hl1;
          line-height: 1.6;
          text-align: start;
          color: $cWhite;
          font-weight: 300;
        }

        .main-radio__line {
          height: 2px !important;
          width: 70%;
          background: $cWhite;
          opacity: 1;
          margin: 3rem 0;
        }

        .main-radio__btn {
          @extend %btn__outline;
        }
      }

      .main-radio__info-img {
        position: absolute;
        right: 0;
        overflow: hidden;
        height: 100%;
        width: 100%;
        opacity: 0.2;

        img {
          filter: grayscale(1);
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .main-radio__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, $radio-grid);
    gap: 1rem;
    @extend %container-center;

    .main-radio__item {
      position: relative;

      .main-radio__img {
        width: 100%;
      }

      .main-radio__name {
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

        .main-radio__subtitle {
          @extend %f-headline;
          color: $cWhite;
          margin-bottom: 1rem;
        }

        .main-radio__description {
          @extend %f-body;
          color: $cWhite;
        }
      }

      &:hover .main-radio__name {
        opacity: 1;
        transition: all ease-in-out 0.5s;
      }
    }
  }
}

.line-grey {
  grid-column: 1/-1;
  min-height: 16px;
  margin: 2.5rem 0;
  background: linear-gradient(
    to left,
    #f3f3f3 14.286%,
    #d5d5d5 14.286% 28.57%,
    #aeaeae 28.57% 42.85%,
    #797979 42.85% 57.142%,
    #616161 57.142% 71.428%,
    #373737 71.428% 85.714%,
    #1c1c1c 85.714% 100%
  );
}

.player {
  right: 0;
  left: 0;
  max-height: 180px;

  .player__btn {
    position: absolute;
    right: 0;
    top: -29px;
    background-color: #fcfcfc;
    border: 3px solid #d7d7d7;
    border-bottom: 3px solid #fcfcfc;
    opacity: 1;
  }
}

@media screen and (min-width: 768px) {
  .main-radio {
    .main-radio__banner {
      .main-radio__precentation {
        flex-direction: row;

        .main-radio__info {
          width: 48%;
        }

        .main-radio__info-img {
          position: absolute;
          right: 0;
          overflow: hidden;
          height: 100%;
          width: 52%;
          opacity: 1;

          img {
            filter: grayscale(1);
            object-fit: cover;
            clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
