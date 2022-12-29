<script>
export default {};
</script>

<template>
  <main class="main-contact">
    <span class="main-contact__background"></span>
    <!-- <h1 class="main-contact__title">Contact</h1> -->
    <!-- varios form ya que son formularios con distintos objetivos -->

    <section class="contact">
      <div class="contact__box">
        <img
          class="contact__img"
          src="../assets/image/owslacrew.webp"
          alt="owslacrew"
        />
        <form class="contact__demo" action="">
          <label class="contact__demo-title" for="file">SEND DEMO</label>
          <div class="contact__demo-box">
            <input class="contact__demo-file" type="file" name="file" id="" />
            <button class="contact__demo-btn">Send</button>
          </div>
        </form>
        <form class="contact__suscribe" action="">
          <label class="contact__suscribe-title" for="subscribe"
            >SUBSCRIBE</label
          >
          <div class="contact__suscribe-box">
            <input
              class="contact__suscribe-email"
              type="email"
              name="subscribe"
              id=""
            />
            <button class="contact__suscribe-btn">Sign Up</button>
          </div>
        </form>

        <form class="contact__description" action="">
          <label class="contact__description-title" for="description"
            >WRITE US</label
          >
          <div class="contact__description-box">
            <textarea
              class="contact__description-textarea"
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button class="contact__description-btn">Send</button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
/* ------------------------------ Contact ------------------------------ */

.main-contact__background {
  @extend %backgrounds-pos;
  height: 100%;
  background: url();
  background-size: cover;
  background-position: center;
  animation: move 160s infinite;
  filter: hue-rotate(225deg);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, transparent);
  }
}

.main-contact {
  .main-contact__title {
    font-weight: 500;
    color: $cWhite;

    text-align: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
    text-transform: uppercase;
    white-space: nowrap;

    &::before {
      content: "-";
      
      color: $cWhite;
      margin-right: 3rem;
    }

    &::after {
      content: "-";
    
      color: $cWhite;
      margin-left: 3rem;
    }
  }
}

.contact_form {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @include respond(md) {
    grid-column: span 1;
  }
}

.contact_title {
 
  color: $cWhite;
  margin: 2rem;
}

.contact {
  @extend %container-center;

  .contact__box {
    display: grid;
    grid-template-areas:
      "suscribe"
      "demo"
      "description";

    @include respond(md) {
      border: solid 2px white;
      backdrop-filter: blur(4px);

      grid-template-areas:
        "img suscribe"
        "img demo"
        "img description";
    }

    .contact__img {
      display: none;
      grid-area: img;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-right: solid 2px white;

      @include respond(md) {
        display: flex;
      }
    }

    .contact__suscribe {
      grid-area: suscribe;
      @extend .contact_form;

      @include respond(md) {
        padding: 2rem 3rem;
      }

      .contact__suscribe-title {
        @extend .contact_title;
      }

      .contact__suscribe-box {
        @extend %formulario__form;

        .contact__suscribe-email {
          @extend .formulario__input;
        }

        .contact__suscribe-btn {
          @extend .formulario__btn;
          @include respond(sm) {
            border-left: 0;
            margin: 0;
          }
        }
      }
    }

    .contact__demo {
      grid-area: demo;
      @extend .contact_form;

      @include respond(md) {
        padding: 2rem 3rem;
      }

      .contact__demo-title {
        @extend .contact_title;
      }

      .contact__demo-box {
        @extend %formulario__form;

        .contact__demo-file {
          @extend .formulario__input-file;
        }

        .contact__demo-btn {
          @extend .formulario__btn;
          @include respond(sm) {
            border-left: 0;
            margin: 0;
          }
        }
      }
    }

    .contact__description {
      grid-area: description;
      margin-bottom: 1rem;
      @extend .contact_form;

      @include respond(md) {
        padding: 2rem 3rem;
      }

      .contact__description-title {
        @extend .contact_title;
      }

      .contact__description-box {
        @extend %formulario__form;
        flex-direction: column;

        .contact__description-textarea {
          @extend .formulario__input-textarea;
        }

        .contact__description-btn {
          @extend .formulario__btn;
          @include respond(sm) {
            border-top: 0;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
