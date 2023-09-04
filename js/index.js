import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import './firebase.js'
import './loginForm.js'
//import './alumno.js'

//Se llama al service Worker.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.warn('Error al registrar Service Worker', err))
}

//Lista los cambios en la autenticación
/*onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("Existe")
    } else {
        console.log("NO Existe")
    }
});*/