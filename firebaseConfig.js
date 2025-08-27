import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBR2cMHoBezG86Y6niwR97xUuO-pjrhkOU",
  authDomain: "enm-goals.firebaseapp.com",
  projectId: "enm-goals",
  storageBucket: "enm-goals.firebasestorage.app",
  messagingSenderId: "43719589883",
  appId: "1:43719589883:web:68c708773729ab4560155e",
  measurementId: "G-95W28QD85Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
