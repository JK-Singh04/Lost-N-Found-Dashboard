// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "website-dashboard-97a21.firebaseapp.com",
  projectId: "website-dashboard-97a21",
  storageBucket: "website-dashboard-97a21.appspot.com",
  messagingSenderId: "784727418213",
  appId: "1:784727418213:web:07125252a77cdc431a2d8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

