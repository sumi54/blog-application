<template>
  <div class="makale-ekle">
    <form @submit.prevent="makaleEkle">
      <label>Makale Başlık:</label>
      <input type="text" id="baslik" name="baslik" v-model="baslik" required>
      <textarea name="icerik" id="icerik" v-model="icerik" required></textarea>
      <button>Oluştur</button>
    </form>
  </div>
</template>
<script>
import {ref} from 'vue'
import {db,timestamp} from '../firebase/config.js'
import {collection,addDoc,doc,setDoc,query} from 'firebase/firestore'
import {useRouter} from 'vue-router'
export default{
  setup(){
    const baslik=ref('')
    const icerik=ref('')
    const router=useRouter()

    const makaleEkle=async ()=>{
      const makale={
        baslik:baslik.value,
        icerik:icerik.value,
        olusturulmaTarihi:timestamp
      }

      
      const res=collection(db,"makaleler")

      await addDoc(res,makale).then(()=>{
       router.push({name:"Home"}) 
      }).catch((err)=>{
        console.log(err.message);
      })

      
    }
    return {baslik,icerik,makaleEkle}
  }

}
</script>
<style>
.makale-ekle form {
  max-width: 400px;
  margin: 0 auto;
}
.makale-ekle input,
.makale-ekle textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
.makale-ekle label {
  display: block;
  margin-top: 24px;
}
textarea {
  height: 120px;
}
.makale-ekle button {
  margin-top: 20px;
  background: #eb4d4b;
  color: white;
  padding: 6px;
  border-radius: 10px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>