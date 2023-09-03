// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrovk6V-qo6gVAsKSJMFK0XFMsusrJKT4",
  authDomain: "check-buap-eac4d.firebaseapp.com",
  projectId: "check-buap-eac4d",
  storageBucket: "check-buap-eac4d.appspot.com",
  messagingSenderId: "713133031722",
  appId: "1:713133031722:web:63463bc79a886e16195e53",
  measurementId: "G-QMV9HSVPSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);