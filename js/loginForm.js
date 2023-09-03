import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

const loginForm = document.querySelector('#login-form');
let user = {};

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    //Obtengo datos del formulario.
    const email = loginForm['inputEmail'].value;
    const password = loginForm['inputPassword'].value;

    //Guardo datos adicionales.
    try{
        //Obtengo al usuario desde los datos de autenticación.
        const credentials = await signInWithEmailAndPassword(auth, email, password);

        //Busco al usuario en la base de datos adicionales con base en su correo.
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
            user = doc.data();
            if(user.Correo === email){
                //Pregunto si el usuario es alumno o profesor para su redirección.
                if(user.Rol === 'Profesor'){
                    window.location.href = "../html/indexProfesor.html";
                }else{
                    window.location.href = "../html/indexAlumno.html";
                }
            }
        });
    }catch(error){
        console.log(error);
        if(error.code === 'auth/wrong-password'){
            console.log("Contraseña incorrecta");
            alertaError("Contraseña incorrecta.");
        } else if(error.code === "auth/user-not-found"){
            console.log("Usuario no encontrado");
            alertaError("Usuario no encontrado.");
        } else{
            console.log(error);
            alertaError("Algo salió mal. Intente más tarde.");
        }
    }
});

//Función que permite enviar una alerta de error al usuario.
function alertaError(mensaje) {
    document.getElementById('alertMessage').innerHTML = mensaje;
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show());
}

// Exportamos la variable user
export {user};