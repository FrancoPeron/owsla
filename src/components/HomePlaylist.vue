<script>
  export default {
    mounted() {
      this.playlist()
    },
    
    methods: {
      playlist(){
        const PLAYLIST = {
          1: 'https://open.spotify.com/embed/playlist/53PL6ta1G0KUC1wHiX7ABx?utm_source=generator&theme=0',
          2: 'https://open.spotify.com/embed/playlist/6pqF6xEMaLBXHdUPKlXZwd?utm_source=generator',
          3: 'https://open.spotify.com/embed/playlist/3GGnJRZnzkiie2izVuUxN0?utm_source=generator'
        }

        var items = document.querySelectorAll(".m-btn");
        console.log(items)
        for (var i = 0; i < items.length; i++) {

            items[i].addEventListener("click", function(e){
                var target =  e.currentTarget;
                var m_id = target.getAttribute('m-id')
                var body = document.querySelector('.target')
                body.src = PLAYLIST[m_id];
                
            }, false);
        }

        if(window.innerWidth<768){

          let play_img = document.getElementsByClassName("playlists__img");

          (play_img[1]).addEventListener("mouseenter", function( event ) {
              play_img[0].classList.add("playlists__img--up")
          }, false);

          (play_img[1]).addEventListener("mouseleave", function( event ) {
              play_img[0].classList.remove("playlists__img--up")
          }, false);

        }
      },
    }
  }
</script>

<template>
  <section class="playlists">
    <h2 class="playlists__title">Our Playlists</h2>
    <div class="playlists__list">
      <img
        class="m-btn playlists__img"
        m-id="1"
        src="https://i.scdn.co/image/ab67706c0000bebb59f906f5d309fc1c9b35c95b"
        alt="Playlists 2"
      />
      <img
        class="m-btn playlists__img"
        m-id="2"
        src="https://i.scdn.co/image/ab67706c0000bebbeec08ebad6313ba4620d1231"
        alt="Playlists 1"
      />
      <img
        class="m-btn playlists__img"
        m-id="3"
        src="https://i.scdn.co/image/ab67706c0000bebbb528347c16962d66ac3be2d5"
        alt="Playlists 3"
      />
    </div>

    <div class="playlists__songs">
      <iframe
        class="playlists__iframe target"
        src="https://open.spotify.com/embed/playlist/3GGnJRZnzkiie2izVuUxN0?utm_source=generator"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </section>
  <span class="playlists-background"></span>
</template>

<style lang="scss" scoped>
  /* -------------------- Playlists -------------------- */

  .playlists {
    grid-area: playlists;
    @extend .container-center;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    .playlists__title {
      @extend .f-title;
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

  .playlists-background {
    grid-area: playlists;
    background-image: url(@/assets/image/background/playlist.webp);
    background-size: cover;
    background-position: center;
    filter: brightness(0.5) hue-rotate(110deg);
    z-index: -1;
    margin-top: 14.5rem;
    margin-bottom: 3rem;
    background-repeat: no-repeat;
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
  }
</style>