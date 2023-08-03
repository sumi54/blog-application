<template>
  <div>
    <h1>Makale Detay</h1>
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <div v-if="makale" class="detay content">
      <h2>Makale Başlık:{{ makale.baslik }}</h2>
      <div class="content">
        <i>Makale Tarihi:</i>
        <p>{{ makale.olusturulmaTarihi }}</p>
      </div>
    </div>
    <div v-else>
      Yükleniyor...
    </div>
    <a class="sil" @click="makaleSil">
      <h2>
        <i class="bi bi-trash-fill"></i>
      </h2>

    </a>
    
  </div>
</template>

<script>
import { useRoute,useRouter } from 'vue-router';
import { ref } from 'vue';
import makaleGetir from '../compasables/makaleGetir.js'
import { db } from '../firebase/config';
import {doc,deleteDoc} from 'firebase/firestore'

export default{
  // props:['id'], id getirmenin 1.yolu
  setup(){ //2.yol
    const route=useRoute();
    const router=useRouter();
    const {makale,hatalar,makaleYukle}=makaleGetir(route.params.id)
    makaleYukle();

    const makaleSil=async ()=>{
      let res= doc(db,"makaleler",route.params.id)
      await deleteDoc(res).then(()=>{
        router.push('/')
      })
    }
    return {makale,hatalar,makaleSil}
  }
}

</script>
<style>
    .detay{
      position: relative;
    }
    .content{
      margin-bottom:30px;
    }
    .sil{
      position: absolute;
      top: 50%;
      right: 22%;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
      height: 3.4em;
    }

</style>