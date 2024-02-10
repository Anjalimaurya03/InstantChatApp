
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahIPS5RBCiBgiA_gxoIHI5g_wsSpoJaw",
  authDomain: "instantchat-737f8.firebaseapp.com",
  projectId: "instantchat-737f8",
  storageBucket: "instantchat-737f8.appspot.com",
  messagingSenderId: "459665689205",
  appId: "1:459665689205:web:6e964d4da595dc0c6e063c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
