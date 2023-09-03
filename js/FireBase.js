//script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAW685EvWYmEgc-mid-NRZJBfc4KlhfaHk",
    authDomain: "check-buap.firebaseapp.com",
    projectId: "check-buap",
    storageBucket: "check-buap.appspot.com",
    messagingSenderId: "28247773017",
    appId: "1:28247773017:web:aa8603af492246873e4648",
    measurementId: "G-53JSRKKNTM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//</script>