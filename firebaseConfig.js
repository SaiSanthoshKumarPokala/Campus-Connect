// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRNABRIlU92-jEQY9jfYN-IJo3TvqbvsU",
  authDomain: "campusconnect-iomp.firebaseapp.com",
  projectId: "campusconnect-iomp",
  storageBucket: "campusconnect-iomp.firebasestorage.app",
  messagingSenderId: "94609202390",
  appId: "1:94609202390:web:f7c7238bb2069416993d77",
  measurementId: "G-Z6RXQB1D06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);