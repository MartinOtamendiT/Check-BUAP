import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

//Recupera datos del usuario.
const nombre = localStorage.getItem("userNombre");
const matricula = localStorage.getItem("userMatricula");
const correo = localStorage.getItem("userCorreo");

//Genera QR con la matrícula y el nombre.
new QRCode(document.getElementById("qrcode"), `{"matricula":"${matricula}"}`);
//Coloca nombre en la tarjeta.
var cardNombre = document.getElementById('nombreAlumno');
cardNombre.innerText = nombre;
//Coloca matrícula en la tarjeta.
var cardMat = document.getElementById('matAlumno');
cardMat.innerText = matricula;
//Coloca correo en la tarjeta.
var cardCorreo = document.getElementById('correoAlumno');
cardCorreo.innerText = correo;

const salir = document.querySelector("#salir");
salir.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await signOut(auth);
        console.log("signup out");
        window.location.href = "../index.html";
    } catch (error) {
        console.log(error);
    }
});