// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Z1KqytzoDCABs0IBrnR-b5biaEv5vVc",
  authDomain: "check-buap-e5a76.firebaseapp.com",
  projectId: "check-buap-e5a76",
  storageBucket: "check-buap-e5a76.appspot.com",
  messagingSenderId: "150543683858",
  appId: "1:150543683858:web:371570c7b8c1f2cbc4a3cb",
  measurementId: "G-S9D6LRE9TX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);