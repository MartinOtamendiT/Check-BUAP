import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

//Obtiene datos de las clases y el profesor.
const profesorMat = localStorage.getItem("userMatricula");
const querySnapshot = await getDocs(collection(db, "clases"));
const postList = document.querySelector(".posts");
let html = "";
//Busca las materias que imparte el profesor.
querySnapshot.forEach((doc) => {
    const clase = doc.data();
    if(clase.matriculaProfesor === profesorMat){
        //Obtiene el horario y lo convierte a HTML.
        let horario = [];
        let diasDetalles = "";
        for(let i = 0; i < clase.horario.length; i++) {
            horario[i] = JSON.parse(clase.horario[i]);
            diasDetalles += `
            <p>${horario[i].dia}: ${horario[i].horas} | Edificio: ${horario[i].edificio} | Salón: ${horario[i].salon}</p>`;
        }
        //Obtiene los demás datos de la clase y los convierte a HTML.
        const li = `
        <li class="list-group-item list-group-item-action">
            <h5>${clase.nombre} - Secc. ${clase.seccion}</h5>
            ${diasDetalles}
            <p>NRC: ${clase.nrc}</p>
            <a class="btn btn-lg btn-primary btn-block btn-login" href="./leerQR.html">Pasar lista</a>
        </li>`;
        //Concatena los elementos de la lista.
        html += li;
    }
});
//Escribe las clases en el documento HTML.
postList.innerHTML = html;