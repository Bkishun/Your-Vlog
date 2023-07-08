// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIWSu8gcW-bGcmpI5oS8vV56-H6dC1jLM",
  authDomain: "react-course-489ac.firebaseapp.com",
  projectId: "react-course-489ac",
  storageBucket: "react-course-489ac.appspot.com",
  messagingSenderId: "975579958194",
  appId: "1:975579958194:web:25ac16ab2d9d531619f2ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);