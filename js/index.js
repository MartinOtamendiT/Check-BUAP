import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import './firebase.js'
import './loginForm.js'

let counter;
const perfil = document.getElementById("perfil-img");
const imgbutton = document.getElementById("check-buap-img");
//Se llama al service Worker.
if ('serviceWorker' in navigator) {
    counter = 0;
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.warn('Error al registrar Service Worker', err))
}

/*imgbutton.addEventListener('click', function() {
    counter = counter + 1;
    console.log(counter);
});
if(counter>=5){
    perfil.style.display = "none";
}else{
    perfil.style.display = "block";
}*/

//Lista los cambios en la autenticación
/*onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("Existe")
    } else {
        console.log("NO Existe")
    }
});*/