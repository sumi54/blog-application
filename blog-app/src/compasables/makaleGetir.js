import { ref } from "vue";
import { db } from "../firebase/config";
import {collection,addDoc,setDoc,query,doc, getDoc} from 'firebase/firestore'
import moment from 'moment'
const makaleGetir=(id)=>{
    const makale=ref(null);
    const hatalar=ref(null)
    const makaleYukle=async ()=>{
        try {
            const docRef=doc(db,"makaleler",id)
            const docSnap=await getDoc(docRef)
            // const res=await dbref.doc(id)
           
               if(!docSnap.exists){
                throw Error('makale bulunamadı')
            }
            const tarih=docSnap.data().olusturulmaTarihi.toDate();
            const formatlanmısTarih=moment(tarih).format('LL')
            console.log(formatlanmısTarih);
            makale.value={...docSnap.data(),id:docSnap.id,olusturulmaTarihi:formatlanmısTarih} 
            
            // let res=await collection(db,'makaleler'.doc(id).get())
            
        }catch(error){
            hatalar.value=error.message
        }
    }
    return{makale,hatalar,makaleYukle}
}
export default makaleGetir