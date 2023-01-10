// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSfTi4h0jY_mZWA-ZMdTPFkF0pSxOHwFg",
  authDomain: "kursetonline-4c1dc.firebaseapp.com",
  projectId: "kursetonline-4c1dc",
  storageBucket: "kursetonline-4c1dc.appspot.com",
  messagingSenderId: "24429216852",
  appId: "1:24429216852:web:4dbec8d20b648d9ef559c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();