<template>
  <section class="suscribe">
    <h2 class="suscribe__title">Don't Miss The News</h2>
    <h3 class="suscribe__subtitle">Sign up to receive all new releases, show, dates and more!</h3>
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
  margin: 2rem 0 10rem;

  .suscribe__title {
    @include font(fh1, w500, MonumentE, lsWider);
    color: $cBlack;

    margin-bottom: 1rem;
    max-width: 800px;
    text-align: center;
  }

  .suscribe__subtitle {
    margin: 0 32px 3rem 32px;

    @include font(ft2, w500, MontS, lsWider);
    color: $cBlack;
    max-width: 800px;
    text-align: center;
  }
}

.suscribe__form {
  @extend %formulario__form;
  max-width: 700px;

  .suscribe__email {
    @include formulario__input(cB);
  }

  .suscribe__btn {
    @include btn(cW, bgB, bB);
    width: 100%;
    border-left: solid 2px black;
    border-top: 0px;
    height: 52px;
    
    @include respond(sm) {
      width: fit-content;
      border-left: 0px;
      border-top: solid 2px black;
    }
  }
}

.suscribe-background {
  grid-area: suscribe;
  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 57.37%, rgba(255, 255, 255, 0.85) 85.94%, #ffffff 100%), url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fsuscribe.webp?alt=media&token=03255be4-dc3f-4843-8ef7-505c40a20e2c);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 440px;
  // filter: brightness(0.7) saturate(1.8);

  z-index: -1;
}
</style>
