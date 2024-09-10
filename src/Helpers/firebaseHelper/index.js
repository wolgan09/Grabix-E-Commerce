import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Pages/admin/firebase";

export async function getDocument(coll, id) {
  const snap = await getDoc(doc(db, coll, id));
  if (snap.exists()) return snap.data();
  else return Promise.reject(Error(`No such document: ${coll}.${id}`));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR"

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
