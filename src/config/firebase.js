import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAIoJibYnBNXmpsMb0MaDJznw5lFjfxKZ8",
  authDomain: "random-3793d.firebaseapp.com",
  projectId: "random-3793d",
  storageBucket: "random-3793d.appspot.com",
  messagingSenderId: "393085245094",
  appId: "1:393085245094:web:706cbf62e364cd62e44667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);