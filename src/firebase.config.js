import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyA_nbUvop8OTdAT3Lfst8W4dh3udTim9WM",
  authDomain: "cosmicshop-5f1e6.firebaseapp.com",
  projectId: "cosmicshop-5f1e6",
  storageBucket: "cosmicshop-5f1e6.appspot.com",
  messagingSenderId: "194669048482",
  appId: "1:194669048482:web:051ba4389aa0458ffb9dfb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;