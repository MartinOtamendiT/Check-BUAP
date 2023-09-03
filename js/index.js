import './firebase.js'
import './loginForm.js'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.warn('Error al registrar Service Worker', err))
}

/*login.addEventListener('click', (e)=>{
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    console.log(email+password);
})*/