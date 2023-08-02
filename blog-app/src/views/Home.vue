<template>
  <div class="Home">
    <div v-if="hatalar">
      {{ hatalar }}
    </div>
    <div v-else-if="makaleler.length">
      <makale-listesi :makaleler="makaleler"></makale-listesi>
    </div>
    <div v-else>
      Yükleniyor...
    </div>
  </div>
</template>
<script>
import MakaleListesi from '../components/MakaleListesi.vue'
import makalelerGetir from '../compasables/makalelerGetir.js';
export default{
  name:'Home',
  components:{
    MakaleListesi,
  },
  setup(){
    const {makaleler,hatalar,makaleListesiniYukle}=makalelerGetir();
    
    makaleListesiniYukle();

    return {makaleler,hatalar}
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
