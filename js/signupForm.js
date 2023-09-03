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
    }catch(error){
        console.log(error);
    }
    
})

