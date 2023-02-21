<script>
export default {}
</script>

<template>
  <div class="main-contact">
    <span class="main-contact__background"></span>

    <section class="main-contact__box">
      <div class="contact">
        <img class="contact__img" src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fowslacrew.webp?alt=media&token=890c51b2-fe1d-452f-aab3-70fa74e92b21" alt="owslacrew" />
        <form class="contact__suscribe" action="">
          <label class="contact__suscribe-title" for="subscribe">SUBSCRIBE</label>
          <div class="contact__suscribe-box">
            <input class="contact__suscribe-email" placeholder="Email Address" type="email" name="subscribe" id="" />
            <button class="contact__suscribe-btn">Sign Up</button>
          </div>
        </form>
        <form class="contact__demo" action="">
          <label class="contact__demo-title" for="file">SEND DEMO</label>
          <div class="contact__demo-box">
            <input class="contact__demo-file" type="file" name="file" id="" />
            <button class="contact__demo-btn">Send</button>
          </div>
        </form>
        <form class="contact__description" action="">
          <label class="contact__description-title" for="description">WRITE US</label>
          <div class="contact__description-box">
            <textarea class="contact__description-textarea" name="description" id="" cols="30" rows="10"></textarea>
            <button class="contact__description-btn">Send</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.main-contact {
  .main-contact__background {
    @extend %backgrounds-pos;
    height: 150%;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-index.webp?alt=media&token=35f6061a-5ae9-4208-9088-51ed5c1013c8);
    background-size: cover;
    background-position: center;
    animation: move 160s infinite;
    // filter: hue-rotate(225deg);

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(black, transparent);
    }
  }

  .main-contact__box {
    @extend %container-center;
  }
}

.contact__suscribe-title,
.contact__demo-title,
.contact__description-title {
  @include font(ft2, w500, MonumentE, lsWidest);
  color: $cWhite;
  text-align: center;
  margin-bottom: 1rem;
}

.contact__suscribe-btn,
.contact__demo-btn,
.contact__description-btn{
  @include btn(cB, bgW, bW);
  width: 100%;
  border-left: solid 2px $cWhite;
  border-top: 0px;

  @include respond(sm) {
    width: fit-content;
    border-left: 0px;
    border-top: solid 2px $cWhite;
  }
}

.contact {
  display: grid;
  grid-template-areas:
    'suscribe'
    'demo'
    'description';
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @include respond(md) {
    border: solid 2px white;
    backdrop-filter: blur(4px);

    grid-template-areas:
      'img suscribe'
      'img demo'
      'img description';
    grid-template-columns: 1fr 1.5fr;
  }

  .contact__img {
    display: none;
    grid-area: img;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-right: solid 2px $cWhite;

    @include respond(md) {
      display: flex;
    }
  }

  .contact__suscribe {
    grid-area: suscribe;
    @include flex(column);
    align-items: center;
    padding: 2.5rem 3rem;

    .contact__suscribe-box {
      @extend %formulario__form;

      .contact__suscribe-email {
        @include formulario__input(cW);
      }
    }
  }

  .contact__demo {
    grid-area: demo;
    @include flex(column);
    align-items: center;
    padding: 2.5rem 3rem;

    .contact__demo-box {
      @extend %formulario__form;

      .contact__demo-file {
        @include formulario__input(cW, file);
      }
    }
  }

  .contact__description {
    grid-area: description;
    @include flex(column);
    align-items: center;
    padding: 2.5rem 3rem;

    .contact__description-box {
      @include flex(column);
      width: 100%;

      .contact__description-textarea {
        @include formulario__input(cW, textarea);
      }

      .contact__description-btn{
        width: 100%;
      }
    }
  }
}
</style>
