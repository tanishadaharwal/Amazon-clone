// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";


// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration




const firebaseConfig = {
    apiKey: "AIzaSyC3ZYwjbJDf3hNiVF1e7NPS_ngrGqAwrOc",
    authDomain: "amaz-2d779.firebaseapp.com",
    projectId: "amaz-2d779",
    storageBucket: "amaz-2d779.appspot.com",
    messagingSenderId: "132076497720",
    appId: "1:132076497720:web:775d9eec82cae185c52fcd",
    measurementId: "G-CHCNRMV4QK"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
  
  