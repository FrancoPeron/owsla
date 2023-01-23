<script>

  export default {
    mounted() {
      
    },
    
    methods: {
      
    }
  }
</script>

<template>
  <section class="suscribe">
    <h2 class="suscribe__title">Don't Miss The News</h2>
    <h3 class="suscribe__subtitle">
      Sign up to receive all new releases, show, dates and more!
    </h3>
    <form class="suscribe__form">
      <input class="suscribe__email" placeholder="Email Address" type="email" name="subscribe" id="" />
      <button class="suscribe__btn">Sign Up</button>
    </form>
  </section>
  
</template>

<style lang="scss" scoped>
  /* -------------------- Suscribe -------------------- */

  .suscribe {
    grid-area: suscribe;
    @extend %container-center;


    @include flex(column);
    align-items: center;

    width: 100%;
    height: 440px;
    padding: 100px 0;

    .suscribe__title {
      @include font(fh1, w500, MonumentE, lsWidest);
      color: $cBlack;

      margin-bottom: 1rem;
      max-width: 800px;
      text-align: center
    }

    .suscribe__subtitle {
      @include font(fhl1, w500);
      color: $cBlack;

      margin-bottom: 3rem;
      max-width: 800px;
      text-align: center
    }
  }

  .suscribe__form {
    @extend %formulario__form;

    .suscribe__email {
      @include formulario__input(cB);
    }

    .suscribe__btn {
      @include btn(cW,bgB,bB);
      width: 100%;

      @include respond(sm) {
        width: fit-content;
      }
    }
  }

  .suscribe-background {
    grid-area: suscribe;
    background-image:
    linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 57.37%, rgba(255, 255, 255, 0.85) 85.94%, #FFFFFF 100%),
    url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsuscribe.webp?alt=media&token=03255be4-dc3f-4843-8ef7-505c40a20e2c);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 440px;
    // filter: brightness(0.7) saturate(1.8);

    z-index: -1;
  }
</style>