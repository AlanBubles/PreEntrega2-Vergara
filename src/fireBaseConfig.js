// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGHcMSHvuov8gVE9PD2EV7WcqwmYCJYMs",
  authDomain: "coderproyecto-c8f87.firebaseapp.com",
  projectId: "coderproyecto-c8f87",
  storageBucket: "coderproyecto-c8f87.appspot.com",
  messagingSenderId: "386223820362",
  appId: "1:386223820362:web:00b72286311a3aad1c60b3",
  measurementId: "G-EXWJF7JFVJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const analytics = getAnalytics(app);
export const productsCollection=collection(db,"itemList")
export const ventasCollection = collection(db,"ventas")