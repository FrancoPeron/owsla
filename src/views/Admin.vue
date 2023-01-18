<script> 
  import Player from '@/components/Player.vue'
  // import { defineAsyncComponent , ref } from 'vue'

  // Data Base
  import {db, storage} from '@/firebase/firebase.config'
  import { getDocs, addDoc, collection, query, limit, Timestamp } from "firebase/firestore"
  import {getStorage, ref, uploadString ,listAll, getDownloadURL} from "firebase/storage";

  import radio from "@/assets/data.js";

  

  export default {
    data() {
      return {
        urlsImgOld: [],
        urlsImgNew: [],
        nameImgNew: [],
        urlfirebase: "owslaradio",
        data: radio
      };
    },
    components: {
      Player,
    },
    mounted() {
      this.getUrl()
      this.addDoc()
    },
    
    methods: {

      //Subida de archivo desde la pc
      uploadImg(event){

        if(event.target.files.length > 0){

          //Convierto las imagenes a webp
          this.convertImgWebp(event)

          //Descargar Imgs
          this.downImgs()
          
          //Sube imgs a Firbase Storage
          this.uploadImgs()

        }
      },      
      // Convierte la imagen a webp 
      convertImgWebp(event){
        //Creo el canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        for (let index = 0; index < event.target.files.length; index++) {

          //Guardo las imagenes Cargadas
          this.urlsImgOld[index] = URL.createObjectURL(event.target.files[index])
          //Guardo los nombres
          this.nameImgNew[index] = (event.target.files[index].name).split(".", 1)[0]
          //Creo una imagen nueva
          let img = new Image();
          //Cargo la imagen al canvas
          img.src = URL.createObjectURL(event.target.files[index]);
          img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img,0,0);
            //Convierto el cavas en webp
            let webpImage = canvas.toDataURL("image/webp",.5);
            //Guardo las imagenes Convertidas
            this.urlsImgNew[index] = String(webpImage)
          }
        }
      },
      //Descarga Imagenes a PC
      downImgs(){

        btnDescargar.addEventListener("click", () => {
          let enlace = document.createElement('a');
          console.log(this.urlsImgNew.length)
          for (let index = 0; index < this.urlsImgNew.length; index++) {
            enlace.download = `${this.nameImgNew[index]}.webp`;
            enlace.href = this.urlsImgNew[index];
            enlace.click();
          }

        });
      },

      //Carga Imagenes a Firebase Storage
      uploadImgs(){

        btnSubir.addEventListener("click", () => {
          console.log(this.urlsImgNew.length)
          for (let index = 0; index <  this.urlsImgNew.length; index++) {
            let storageRef = ref(storage, `${this.urlfirebase}/${this.nameImgNew[index]}.webp`);
            uploadString(storageRef, this.urlsImgNew[index], 'data_url').then((snapshot) => {
              console.log(`Uploaded ${this.nameImgNew[index]}`);
            });
            
          }
        });
      },

      //Obtiene links de las Imagenes en Firebase Storage
      getUrl(){
        btnGetUrl.addEventListener("click", () => {
          const storage = getStorage();
          let musicRef = ref(storage,`${this.urlfirebase}`);

          listAll(musicRef)
          .then(async ({ items }) => {
              const urls = await Promise.all(items.map((item) => getDownloadURL(item)));
              console.log(urls);
          })
          .catch((error) => {
              console.log(error);
          });
        });
      },

      //Cargar Datos a firebase
      addDoc(){

        btnSubirData.addEventListener("click", () => {
          this.data.map((item)=>{
            addDoc(collection(db, 'radio'),{
              ...item,
              date: Timestamp.fromDate(new Date(item.date)),
            })
            
          })
        });
      }
    }

  }
  
</script>

<template>
  <Player />
  <div class="container">
    <h1 class="h1">Admin</h1>

    <div class="imgsBoxs">
      <div class="imgsBox">
        <img v-for="(item, index) in urlsImgOld" :key="index" :src="item" :alt="item">
      </div>
      <div class="imgsBox">
        <img v-for="(item, index) in urlsImgNew" :key="index" :src="item" :alt="item">
      </div>
    </div>

    <div class="btnBox">
      <input class="input" type="file" multiple name="imgUp" id="imgUp" @change="uploadImg">
      <label for="imgUp"></label>
      <button id="btnDescargar">DescargarFoto</button>
      <button id="btnGetUrl">ObtenerUrl</button>
      <button id="btnSubir">subirFoto</button>
      <button id="btnSubirData">subirData</button>
    </div>

  </div>

</template>

<style lang="scss" scoped>

/* --------------------  -------------------- */

  .container{
    display: grid;
    grid-template-areas:  
        'h1 h1' 
        'input input'
        'imgsBoxs imgsBoxs'
        'btnBox btnBox';
    gap: auto;
    width: 100%;
    justify-content: space-between;
    background-color: white;

  }

  .h1{
    grid-area: h1;
    text-align: center;
    width: 100%;
  }

  .input{
    grid-area:input;
    display: flex;
  }

  .imgsBoxs{
    grid-area:imgsBoxs;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .imgsBox{
  
      width: 600px;
      height: 400px;
      overflow: auto;
      border: 1px solid rgba(0, 0, 0, 0.12);
  
      img{
        width:50%;
      }
  
    }

  }

  .btnBox{
    grid-area:btnBox;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }


</style>