// firebaseConfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "enm-goals.firebaseapp.com",
  projectId: "enm-goals",
  storageBucket: "enm-goals.appspot.com",
  messagingSenderId: "103774048000",
  appId: "1:103774048000:web:...",
  measurementId: "G-LHCK5KNEG0",
};

// Initialize app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Firestore instance
const db = getFirestore(app);

export { db };
