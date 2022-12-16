<template>
  <main class="main-artists">
    <span class="main-artists__background"></span>

      <section for="target" class="main-artists__list">
        <div v-for="(val,index) in artistsList" :key="index" class="artist d-flex flex-column position-relative overflow-hidden m-0 w-100">
            <img class="artist__img w-100" data-bs-toggle="modal" :src="val.img" :alt="val.artist">
            <p class="artist__name">{{val.artist}}</p>
            

            <!-- <div class="modal fade" id="artist${val.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content shadow">
                        <span class="line2 bg-secondary"></span>
                        <div class="modal-header">
                            <h2 class="modal-title">{val.name}</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-3">

                            <p class="h5 f-text">${val.description}</p>    
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
      </section>
    
  </main>
</template>

<script>
  // Data Base
  import {db} from '@/firebase/firebase.config'
  import { getDocs, addDoc, collection, query, limit, orderBy } from "firebase/firestore"

  export default {

    data() {
      return {
        artistsList: [],
      };
    },
    mounted() {

       //obtener datos
      getDocs(query(collection(db, 'artists'),orderBy("date", "desc")))
      .then(result => {
          const resultDocs = result.docs.map(doc => {
              return {
                  id: doc.id,
                  ...doc.data(),
              }
          })

          this.artistsList = resultDocs
          console.log( this.artistsList)
      })
      .catch(error => console.log(error))
      
    },
    
    methods: {

    }
  }  
</script>

<style lang="scss" scoped>
/* ------------------------------ Artists ------------------------------ */

$artists-grid: minmax(300px, 1fr);

.main-artists {
  .main-artists__background {
    @extend %backgrounds-pos;
    background: url(https://firebasestorage.googleapis.com/v0/b/owsla-8020a.appspot.com/o/background%2Fmain-artists.webp?alt=media&token=ab1cccfa-d469-4700-962d-87e774f9dc4a);
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

  @keyframes move {
    0% {
      background-position: bottom;
    }

    50% {
      background-position: top;
    }

    100% {
      background-position: bottom;
    }
  }

  .main-artists__title {
    @extend %f-monument;
    @extend %f-bt2;
    color: $cWhite;

    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    white-space: nowrap;
    &::before {
      content: "-";

      @extend %f-bt2;
      color: $cWhite;
      margin-right: 3rem;
    }

    &::after {
      content: "-";

      @extend %f-bt2;
      color: $cWhite;
      margin-left: 3rem;
    }
  }

  .main-artists__list {
    @extend .container-full;
    background: $cWhite;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, $artists-grid);
    gap: 2rem;
  }
}

.artist {
  scroll-snap-align: start;

  .artist__img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    cursor: pointer;
    // @extend %shadow;
  }

  .artist__name {
    @extend %f-monument;
    @extend %f-hl1;
    line-height: calc(140%);
    letter-spacing: 0.05rem;
    color: $cBlack;
    padding: 0.75rem 0;
  }

  .artist__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    opacity: 0;
    background-color: #000;
    height: 400px;
    padding: 0.5rem 0;
    transition: all ease-in-out 0.5s;
    max-width: 0;
  }

  &:hover > .artist__img {
    filter: grayscale(100%);
    transition: all ease-in-out 0.5s;
  }

  &:hover > .artist__info {
    max-width: 100px;
    opacity: 1;
    transition: all ease-in-out 0.5s;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
}

.modal-title {
  @extend %f-monument;
  @extend %f-t2;
}

@media screen and (min-width: 768px) {
  .artist {
    scroll-snap-align: end;
  }
}
</style>
