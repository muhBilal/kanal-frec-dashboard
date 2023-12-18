import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3CtrDUSpqXMo8aq4cnIeKpcbzqVreFt0",
  authDomain: "bootcampai-98477.firebaseapp.com",
  projectId: "bootcampai-98477",
  storageBucket: "bootcampai-98477.appspot.com",
  messagingSenderId: "1060163487457",
  appId: "1:1060163487457:web:95ba81632211cce585d9a0",
  measurementId: "G-3MZ9RT92ER"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app)