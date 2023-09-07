import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

//Obtiene datos del documento
const nombreEdificio = document.querySelector("#nombreEdificio");
const dependenciaEdificio = document.querySelector("#dependenciaEdificio");
const postTable = document.querySelector(".tableComparativa");
const alumnosPresentes = document.querySelectorAll(".alumnosPresentes");
const idEd = localStorage.getItem("idEdificioLast");

//Busca los datos de la clase en la base de datos.
const querySnapshot = await getDocs(collection(db, "edificios"));
querySnapshot.forEach((doc) => {
    const edificio = doc.data();
    if(edificio.id === idEd){
        nombreEdificio.innerHTML = edificio.nombre;
        dependenciaEdificio.innerHTML = edificio.dependencia;     
    }
});

alumnosPresentes.forEach((td) => {
    const numeroAleatorio = Math.floor(Math.random() * 35) + 1;
    td.textContent = numeroAleatorio.toString();
});
