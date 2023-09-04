import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    //Obtengo datos del formulario.
    const name = signupForm['nombre'].value;
    const id = signupForm['matricula'].value;
    const email = signupForm['correo'].value;
    const password = signupForm['contraseña'].value;
    let role;

    //Obtengo el rol del usuario con base en su dominio.
    let domain = email.split('@');
    if(domain[1] == "correo.buap.mx"){
        role = "Profesor";
    }
    else{
        role = "Alumno"; 
    }
    
    try{
        //Guardo los datos para autenticación.
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        //Guardo datos adicionales.
        const docRef = await addDoc(collection(db, "usuarios"), {
            Nombre: name,
            Matricula: id,
            Rol: role,
            Correo: email
        });
        console.log("Documento escrito con el ID: ", docRef.id);
        window.location.href = "../index.html";
    }catch(error){
        console.log(error);
        if(error.code === 'auth/email-already-in-use'){
            console.log("Correo ya registrado");
            alertaError("El correo proporcionado ya se encuentra registardo.");
        } else if(error.code === 'auth/invalid-email'){
            console.log("Correo no válido");
            alertaError("El correo proporcionado no es válido.");
        } else if(error.code === "auth/weak-password"){
            console.log("Password débil");
            alertaError("La contraseña es muy débil. Deber ser mayor a 6 caracteres y contener mayúsculas, minúsculas y números.");
        } else if (error.code){
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

