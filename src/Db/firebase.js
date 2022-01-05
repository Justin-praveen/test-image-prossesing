import { initializeApp } from "firebase/app";
import "firebase/firestore"
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"




const firebaseConfig = {

  apiKey: "AIzaSyDUMWnH-4HugF8yPA8sJIgHxdMsZaUUB4Y",

  authDomain: "quise-a84cc.firebaseapp.com",

  projectId: "quise-a84cc",

  storageBucket: "quise-a84cc.appspot.com",

  messagingSenderId: "620761043831",

  appId: "1:620761043831:web:adbcf29fa7aab70fdf4772",

  measurementId: "G-NZV0V20P8W"

};




const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const auth = getAuth(app)

export default db 

