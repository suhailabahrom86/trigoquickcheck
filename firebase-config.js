import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCehDucqOtft30cJmm3B9l5jhNjD6yhoVw",
  authDomain: "trigo-quick-check.firebaseapp.com",
  projectId: "trigo-quick-check",
  storageBucket: "trigo-quick-check.firebasestorage.app",
  messagingSenderId: "564861239779",
  appId: "1:564861239779:web:1f2ece689a556b2e7e20d6",
  measurementId: "G-MDSXC87LFQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
