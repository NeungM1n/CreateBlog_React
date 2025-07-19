// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiTXM7WSQcouNCUPSRReewotRAGsLzhxg",
  authDomain: "portfolio-nuengm1n.firebaseapp.com",
  projectId: "portfolio-nuengm1n",
  storageBucket: "portfolio-nuengm1n.firebasestorage.app",
  messagingSenderId: "1065255002615",
  appId: "1:1065255002615:web:4165b8cf5167026540cef2",
  measurementId: "G-CL3X96GYQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export default app; 