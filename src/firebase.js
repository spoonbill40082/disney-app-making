// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO_3zBGedOnDc9V5t5iIRQ_8AZuyA3b38",
  authDomain: "react-disney-plus-app-1c5f4.firebaseapp.com",
  projectId: "react-disney-plus-app-1c5f4",
  storageBucket: "react-disney-plus-app-1c5f4.appspot.com",
  messagingSenderId: "248218952816",
  appId: "1:248218952816:web:a005056cbeab9c5a39c0b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;