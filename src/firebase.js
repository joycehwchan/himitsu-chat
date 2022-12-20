import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "himitsu-chat.firebaseapp.com",
  projectId: "himitsu-chat",
  storageBucket: "himitsu-chat.appspot.com",
  messagingSenderId: "980510293971",
  appId: "1:980510293971:web:70ece203751de65c3b3926",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
