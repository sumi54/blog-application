<template>
  <div>
    <h1>Makale Detay</h1>
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <div v-if="makale" class="detay content">
      <h2>Makale Başlık:{{ makale.baslik }}</h2>
      <div class="content">
        <i>Makale İçerik:</i>
        <p>{{ makale.icerik }}</p>
      </div>
    </div>
    <div v-else>
      Yükleniyor...
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import makaleGetir from '../compasables/makaleGetir.js'
export default{
  // props:['id'], id getirmenin 1.yolu
  setup(){ //2.yol
    const route=useRoute();
    const id=ref(route.params.id)
    const {makale,hatalar,makaleYukle}=makaleGetir(route.params.id)
    makaleYukle();
    return {makale,hatalar}
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
      top: 0;
      right: 0;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
    }
</style>