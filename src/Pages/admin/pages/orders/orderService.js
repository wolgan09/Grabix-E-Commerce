import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const fetchOrdersList = async () => {
       
    await getDocs(collection(db, "orders"))
        .then((querySnapshot)=>{               
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            // console.log(newData);
        }).catch(err => { console.log(err)})
   
}
export {fetchOrdersList}