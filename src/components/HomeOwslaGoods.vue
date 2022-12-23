<script>
export default {
  mounted() {},

  methods: {},
}
</script>

<template>
  <section class="merch">
    <h2 class="merch__title">Owsla Goods</h2>
    <h3 class="merch__subtitle">some of our latest releases from this year, feel and enjoy the music, listen more <router-link to="/music">here</router-link></h3>

    <div class="merch__imgBox">
      <div class="merch__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fburn-forever%2Fburn-forever_008.webp?alt=media&token=b0161680-fc76-4538-bb23-d428b592db80" alt="" />
        <p>'Neon Logo'</p>
      </div>
      <div class="merch__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/artists%2Fekali.webp?alt=media&token=b458e958-4c65-42ff-8969-4bcc0e227e92" alt="" />
        <p>'Classic Logo'</p>
      </div>
      <div class="merch__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fanglo_017.webp?alt=media&token=7a824dd9-1b72-4bdd-9fab-a54854f16dac" alt="" />
        <p>'Anglo Script'</p>
      </div>
      <div class="merch__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/owslagoods-fbf3b.appspot.com/o/products%2Fartist_046%203.png?alt=media&token=7b350a3d-c573-476d-8078-d9026b8f0413" alt="" />
        <p>'Spectrum Flag'</p>
      </div>
    </div>
  </section>
  <span class="merch-background"></span>
</template>

<style lang="scss" scoped>
/* -------------------- Playlists -------------------- */

.merch {
  grid-area: merch;
  @extend %container-center;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  .merch__title {
    @include font(fh1, w500, MonumentE);
    margin-bottom: 2rem;
    grid-column: span 6;
    justify-self: center;
  }

  .merch__subtitle {
    @extend %f-subtitle;
    grid-column: span 6;
    justify-self: center;
    max-width: 800px;
    margin-bottom: 6rem;
  }
  .merch__imgBox {
    display: grid;
    grid-template-areas:
      'img1 img2'
      'img4 img4'
      'btn btn';
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 12%;
    grid-row-gap: 64px;
    width: 100%;

    @include respond(md) {
      grid-template-areas:
      'img1 img2 img3'
      'img4 img4 btn';
      grid-template-columns: 1fr 1fr 1fr;
    }

    .merch__img {
      position: relative;

      img {
        width: 100%;
        aspect-ratio: 29/39;
        border: 4px solid #ffffff;
        object-fit: cover;

      }
      p {
        @include font(fb1, w500, MonumentE, lsWidest);
        background-color: $cWhite;
        text-transform: capitalize;

        position: absolute;
        left: 0;
        bottom: 32px;
        
        @include flex();
        justify-content: center;
        align-items: center;
        text-align: center;


        width: 100%;
        height: 42px;
        padding: 0 1rem;
        padding-top: .4rem
      }
    }
    .merch__img:nth-child(1) {
      grid-area: img1;
      

      p{
        bottom: 64px;
      }

      p{
        @include respond(md) {
          bottom: 96px;

        }
      }
    }

    .merch__img:nth-child(2) {
      grid-area: img2;
      margin-top: 32px;

      p{
        @include respond(md) {
          bottom: 64px;
        }
      }
    }

    .merch__img:nth-child(3) {
      grid-area: img3;
      margin-top: 64px;

      display: none;

      @include respond(md) {
        display: block;
      }

    }
    .merch__img:nth-child(4) {
      grid-area: img4;
      width: min(100%,408px);
      justify-self: center;
      
      img {
        aspect-ratio: 51/31;
      }

      p{
        width: fit-content;
        bottom: none;
        top: 32px;
      }
    }
  }
}
.merch-background {
  grid-area: merch;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-artists.webp?alt=media&token=ab1cccfa-d469-4700-962d-87e774f9dc4a);
  background-size: cover;
  background-position: center;
  z-index: -1;
  height: 500px;
  margin-top: 400px;
  margin-bottom: 3rem;
  background-repeat: no-repeat;
}
</style>
