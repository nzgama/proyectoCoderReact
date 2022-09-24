// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, query, where } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqs37eX9DH_z7bp_w8SQRghxGSR8JSHI",
  authDomain: "my-project-coder-ce6fa.firebaseapp.com",
  projectId: "my-project-coder-ce6fa",
  storageBucket: "my-project-coder-ce6fa.appspot.com",
  messagingSenderId: "792277628351",
  appId: "1:792277628351:web:4eb3a0df13812088db9d0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firesoteFetchGetProducts = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "products"),
      where("categori_id", "==", idCategory)
    );
  } else {
    q = query(collection(db, "products"));
  }

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFirestore;
};

export const firesoteFetchGetProduct = async (idProduct) => {
  const docRef = doc(db, "products", idProduct);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
