// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7q4wJDdA9Juvyo0CbOpI406m4S1eoqcs",
  authDomain: "react-zapateria.firebaseapp.com",
  projectId: "react-zapateria",
  storageBucket: "react-zapateria.appspot.com",
  messagingSenderId: "1097870083742",
  appId: "1:1097870083742:web:b87da00f7eacfe3cf51d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;