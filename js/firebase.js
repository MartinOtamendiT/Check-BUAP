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
  apiKey: "AIzaSyCrovk6V-qo6gVAsKSJMFK0XFMsusrJKT4",
  authDomain: "check-buap-eac4d.firebaseapp.com",
  projectId: "check-buap-eac4d",
  storageBucket: "check-buap-eac4d.appspot.com",
  messagingSenderId: "713133031722",
  appId: "1:713133031722:web:83f2a431bd7681c5195e53",
  measurementId: "G-JLHVN9NSMJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);