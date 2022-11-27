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
    <h2 class="suscribe__title">Don't Miss The Next News</h2>
    <h3 class="suscribe__subtitle">
      Sign up to receive an email with all new releases, show dates and more
    </h3>
    <form class="suscribe__form">
      <input
        class="suscribe__email"
        placeholder="Email Address"
        type="email"
        name="subscribe"
        id=""
      />
      <button class="suscribe__btn">Sign Up</button>
    </form>
  </section>
  <span class="suscribe-background"></span>
  
</template>

<style lang="scss" scoped>
  /* -------------------- Suscribe -------------------- */

  .suscribe {
    grid-area: suscribe;
    @extend .container-center;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 0 1rem;
    margin: 10rem 0;

    .suscribe__title {
      @extend .f-title2;
      color: $cWhite;

      margin-bottom: 1rem;
      max-width: 800px;
    }

    .suscribe__subtitle {
      @extend .f-subtitle2;
      color: $cWhite;

      margin-bottom: 3rem;
      max-width: 500px;
    }
  }

  .suscribe__form {
    @extend .formulario__form;

    .suscribe__email {
      @extend .formulario__input;
    }

    .suscribe__btn {
      @extend .formulario__btn;

      @include respond(sm) {
        border-left: 0;
        margin: 0;
      }
    }
  }

  .suscribe-background {
    grid-area: suscribe;
    background-image: url(@/assets/image/background/suscribe.webp);
    background-size: cover;
    filter: brightness(0.7) saturate(1.8);
    background-position: bottom;

    z-index: -1;
    background-repeat: no-repeat;
  }
</style>