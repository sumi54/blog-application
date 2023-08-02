import {ref} from 'vue'
import {db} from '../firebase/config';
import { query, collection, getDocs ,orderBy} from "firebase/firestore"

const makalelerGetir=()=>{
    const makaleler=ref([])
    const hatalar=ref(null)

    const makaleListesiniYukle=async()=>{

        try{
            
            let res = await getDocs(query(
                collection(db,"makaleler"),
                orderBy("olusturulmaTarihi","desc")
                ));
            makaleler.value=res.docs.map(doc=>{
                return{...doc.data(),id:doc.id}
            })
            
            // let res= await db.collection('makaleler').orderBy('olusturulmaTarihi','desc').get()
            // makaleler.value=res.docs.map(doc=>{
            //     return{...doc.data(),id:doc.id}
            // })
        }catch(error){
            hatalar.value=error.message
        }
    }
    return{makaleler,hatalar,makaleListesiniYukle}
}
export default makalelerGetir