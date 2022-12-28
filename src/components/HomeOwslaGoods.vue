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
      <a class="merch__btn" href="https://owslagoods.netlify.app/" target="_blank">
        view all
        <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9 8L1 8M26.9 8L19.9 15M26.9 8L19.9 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </a>

    </div>
  </section>
  <span class="merch-background"></span>
</template>

<style lang="scss" scoped>

.merch {
  grid-area: merch;
  @extend %container-center;

  @include flex(column);
  align-items: center;

  .merch__title {
    margin: 32px 0 24px 0;

    @include font(fh1, w500, MonumentE, lsWidest);
    text-align: center;
    line-height: 100%;
  }

  .merch__subtitle {
    max-width: 850px;
    margin-bottom: 32px;

    @include font(ft2, w500, MontS, lsWider);
    text-align: center;
    line-height: 100%;

  }
  .merch__imgBox {
    display: grid;
    grid-template-areas:
      'img1'
      'img2'
      'img4'
      'btn';
    grid-template-columns: 1fr;
    grid-column-gap: 12%;
    grid-row-gap: 64px;
    max-width: 60%;

    @include respond(xs) {
      grid-template-areas:
      'img1 img2'
      'img4 img4'
      'btn btn';
      grid-template-columns: 1fr 1fr;
      max-width: 90%;
    }

    @include respond(sm) {
      
      max-width: 75%;
    }

    @include respond(md) {
      grid-template-areas:
      'img1 img2 img3'
      'img4 img4 btn';
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 100%;
    }

    .merch__img {
      position: relative;

      img {
        width: 100%;
        aspect-ratio: 29/39;
        border: 4px solid #ffffff;
        object-fit: cover;
        // min-width: 270px;

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

    .merch__btn{
      grid-area: btn;
      justify-self: flex-end;
      @include btn(cB,bgW,bW,false);
      
      svg{
        transition: ease-in-out 0.5s;
      }

      &:hover{
        svg{
          transform: translateX(6px);
          transition: ease-in-out 0.5s;
        }
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
  margin-top: 300px;
  margin-bottom: 3rem;
  background-repeat: no-repeat;
}
</style>
