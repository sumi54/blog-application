import { ref } from "vue";
import { db } from "../firebase/config";
import {doc, getDoc} from 'firebase/firestore'
import moment from 'moment'
const makaleGetir=(id)=>{
    const makale=ref(null);
    const hatalar=ref(null)
    const makaleYukle=async ()=>{
        try {
            const docRef=doc(db,"makaleler",id)
            const docSnap=await getDoc(docRef)
           
            if(!docSnap.exists()){
                throw Error('makale bulunamadı')
            }
            const tarih=docSnap.data().olusturulmaTarihi.toDate();
            const formatlanmısTarih=moment(tarih).format('LL')
            makale.value={...docSnap.data(),id:docSnap.id,olusturulmaTarihi:formatlanmısTarih} 
            
        }catch(error){
            hatalar.value= error.message
        }
    }
    return{makale,hatalar,makaleYukle}
}
export default makaleGetir