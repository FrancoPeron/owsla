<script setup>

</script>

<template>
  <section class="radio">
    <h2 class="radio__title">Owsla Radio</h2>

    <h3 class="radio__subtitle">Listen to our program on beat 1 and mixcloud, enjoy our releases and our special guests</h3>

    <div class="radio__list">
      <img class="radio__img" m-id="3" src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/owslaradio%2F3.webp?alt=media&token=b85e3cf9-ec38-42c9-9262-245b0717b13b" alt="radio 3" />
      <img class="radio__img" m-id="2" src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/owslaradio%2F2.webp?alt=media&token=bc400968-0c69-4931-b7b7-438d03bbd8d3" alt="radio 2" />
      <img class="radio__img" m-id="1" src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/owslaradio%2F1.webp?alt=media&token=95f2c081-5cc9-4de6-8388-86c0aa8b3a91" alt="radio 1" />
    </div>

    <div class="radio__player">
      <p class="radio__player-title">Skrillex & OWSLA Crew</p>
      <div class="radio__player-info">
        <p>Introducing OWSLA Radio</p>
        <p>Skrillex chats to tons of great guests.</p>
      </div>
      <div class="radio__play">
      </div>
      <img src="https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/owslaradio%2F1.webp?alt=media&token=95f2c081-5cc9-4de6-8388-86c0aa8b3a91" class="radio__img" alt="">
    </div>
  </section>
  <span class="radio-background"></span>
</template>

<style lang="scss" scoped>

.radio {
  grid-area: radio;
  @extend %container-center;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  filter: drop-shadow(0px 0px 25px rgb(80 80 80 / 12%));

  .radio__title {
    grid-column: span 6;
    margin: 32px 0 24px 0;

    @include font(fh1, w500, MonumentE, lsWidest);
    text-align: center;
    line-height: 100%;
  }

  .radio__subtitle {
    grid-column: span 6;
    justify-self: center;
    max-width: 850px;
    margin-bottom: 32px;

    @include font(ft2, w500, MontS, lsWider);
    text-align: center;
    line-height: 100%;
  }

  .radio__list {
    grid-column: 1/2;
    
    @include flex();
    justify-content: flex-start;
    position: relative;
    margin: 6rem 0 6rem;

    .radio__img {
      width: 100%;
      max-width: 260px;

      transition: all ease-in-out 0.5s;
      cursor: pointer;

      &:nth-child(1) {

        &:hover {
          transform: translate(0, -32px);

          & ~ :nth-child(2) {
            transform: translate(48px, 72px);
          }

          & ~ :nth-child(3) {
            transform: translate(96px, 118px);
          }
        }
      }

      &:nth-child(2) {
        position: absolute;
        transform: translate(48px, 48px);

        &:hover {
          transform: translate(48px, 16px);

          & ~ :nth-child(3) {
            transform: translate(96px, 118px);
          }

          & :has(img){
            transform: translate(0, 118px);
          }
        }
      }

      &:nth-child(3) {
        position: absolute;
        transform: translate(96px, 96px);
      }
    }
  }

  .radio__player{
    grid-column: 2/3;
    clip-path: polygon(0% 8%, 100% 0%, 100% 100%, 3% 97%);
    background-color: #ffffff;
    height: fit-content;
    width: 600px;
    margin-top: 6rem;
    padding: 3rem 2.25rem 3rem 3.25rem;


    display: grid;
    grid-template-areas:  "title img"
                          "info img";
    grid-template-columns: 1fr auto;
    justify-self: flex-end;
    align-self: center;

    .radio__player-title{
      grid-area: title;

      @include font(ft2, w400, MonumentE, lsWidest);
      font-style: normal;
      text-transform: uppercase;
      line-height: 30px;
      color: $cBlack;
      -webkit-text-stroke: 1px #000000;

      display: flex;
      align-self: center;
    }

    .radio__player-info{
      grid-area: info;
      border-left: solid 3px #000000;
      padding-left: 1rem;

      @include flex(column);
      align-self: center;
      text-transform: capitalize;

      :nth-child(1){
        @include font(fhl1, w700, MontS, lsWider);
        margin-bottom: .5rem;
      }
      :nth-child(2){
        @include font(fb1, w500, MontS, lsWider);
        width: 300px;
      }
    }

    .radio__img{
      grid-area: img;

      width: 80px;
      height: 200px;
      object-fit: cover;
      justify-self: center;
      align-self: center;
    }


  }

}

.radio-background {
  grid-area: radio;
  justify-self: flex-end;

  background-image: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fhome-radio.webp?alt=media&token=782f8e94-87bf-405d-8e01-ceb9fb5807a8);
  background-size: cover;
  background-position: right;

  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 4% 96%);
  
  margin: 210px 0 0 0;
  z-index: -1;
  width: 50%;
  height: 250px;
  background-repeat: no-repeat;
  }

// @media screen and (min-width: 768px) {
//     .radio__list {
//       .radio__img {
//         max-width: 380px;
//         width: 100%;
//         margin-left: 140px;
//         &:nth-child(1) {
//           transform: translate(-140px, -140px);

//           &:hover {
//             transform: translate(-140px, -250px);
//           }

//           &:hover ~ :nth-child(2) {
//             transform: translate(-60px, -10px);
//           }
//         }

//         &:nth-child(2) {
//           transform: translate(-70px, -70px);

//           &:hover {
//             transform: translate(-70px, -250px);
//           }
//           &:hover ~ :nth-child(3) {
//             transform: translate(10px, 10px);
//           }
//         }
//         &:nth-child(3) {
//           z-index: 1;
//         }

//         &:hover {
//           filter: hue-rotate(135deg);
//           transition: all ease-in-out 0.5s;
//         }
//       }

//       .radio__songs {
//         display: flex;
//       }
//     }

//     .radio-background {
//       margin-bottom: 20rem;
//     }
//   }

// @media screen and (min-width: 1024px) {
//   .radio__title {
//     margin-bottom: 3rem;
//   }

//   .radio__list {
//     grid-column: span 1;
//     justify-content: start;
//   }

//   .radio__songs {
//     grid-column: span 1;
//     justify-content: end;
//     margin: 2rem 0rem;
//     margin-left: 2rem;
//   }
// }

</style>
