import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

//Obtiene datos de las clases y el profesor.
const profesorMat = localStorage.getItem("userMatricula");
const querySnapshot = await getDocs(collection(db, "clases"));
const postList = document.querySelector(".postsRep");
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
            <p id="nrc">NRC: ${clase.nrc}</p>

            <a class="btn btn-lg btn-primary btn-block btn-login botonVerRep" href="./reporte.html">Ver reporte</a>
        </li>`;
        //Concatena los elementos de la lista.
        html += li;
    }
});
//Escribe las clases en el documento HTML.
postList.innerHTML = html;

//Lee el NRC de la clase seleccionada para el pase de lista.
const botonesVerReporte = document.querySelectorAll('.botonVerRep');
botonesVerReporte.forEach((boton) => {
    //A cada botón le añade un listener.
    boton.addEventListener('click', function (event) {
        //Encuentra el elemento padre <li> del botón actual.
        const listItem = event.target.closest('li');
        if (listItem) {
            //Obtiene el valor del nrc del elemento <li>.
            const nrcElement = listItem.querySelector('#nrc').textContent;     
            if (nrc) {
                const nrcPre = nrcElement.split(': ');
                const nrc = nrcPre[1];
                console.log(nrc);
                localStorage.setItem("nrcLast", nrc);
            } else {
                console.log('No se encontró el NRC de la clase');
            }
        } else {
            console.log('No se encontró el NRC asociado al botón');
        }
    });
});