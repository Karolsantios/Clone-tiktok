
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3ihFEMXH07oTn8Yq70sh6kjF9DQuARwg",
  authDomain: "tiktok---jornada-6c506.firebaseapp.com",
  projectId: "tiktok---jornada-6c506",
  storageBucket: "tiktok---jornada-6c506.appspot.com",
  messagingSenderId: "785297423479",
  appId: "1:785297423479:web:100cc6632b71188171da72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;