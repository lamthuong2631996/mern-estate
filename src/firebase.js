// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-82a8d.firebaseapp.com",
  projectId: "mern-estate-82a8d",
  storageBucket: "mern-estate-82a8d.appspot.com",
  messagingSenderId: "312840640583",
  appId: "1:312840640583:web:c903bd21c8479339a1f962"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);