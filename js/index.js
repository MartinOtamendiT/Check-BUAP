if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.warn('Error al registrar Service Worker', err))
}

const firebaseConfig = {
    apiKey: "AIzaSyCrovk6V-qo6gVAsKSJMFK0XFMsusrJKT4",
    authDomain: "check-buap-eac4d.firebaseapp.com",
    projectId: "check-buap-eac4d",
    storageBucket: "check-buap-eac4d.appspot.com",
    messagingSenderId: "713133031722",
    appId: "1:713133031722:web:63463bc79a886e16195e53",
    measurementId: "G-QMV9HSVPSN"
};