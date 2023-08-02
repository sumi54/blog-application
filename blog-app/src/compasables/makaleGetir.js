import { ref } from "vue";
import { db } from "../firebase/config";
import {collection,addDoc,setDoc,query,doc, getDoc} from 'firebase/firestore'

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
            makale.value={...docSnap.data(),id:docSnap.id} 
            
            // let res=await collection(db,'makaleler'.doc(id).get())
            
        }catch(error){
            hatalar.value=error.message
        }
    }
    return{makale,hatalar,makaleYukle}
}
export default makaleGetir