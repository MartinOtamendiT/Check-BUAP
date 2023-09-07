import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

//Obtiene los edificios registrados..
const querySnapshot = await getDocs(collection(db, "edificios"));
const postList = document.querySelector(".postsRep");
let html = "";
//Busca las materias que imparte el profesor.
querySnapshot.forEach((doc) => {
    const edificio = doc.data();
    //Obtiene los datos del edificio y lo agrega en HTML.
    const li = `
    <li class="list-group-item list-group-item-action">
        <h4 id="idEdificio">${edificio.nombre} - ${edificio.id}</h4>
        <h5>${edificio.dependencia} | ${edificio.campus}</h5>
        <p>${edificio.direccion}</p>
        <a class="btn btn-lg btn-primary btn-block btn-login botonVerRep" href="./reporteEdificio.html">Ver reporte</a>
    </li>`;
    //Concatena los elementos de la lista.
    html += li;
});
//Escribe las clases en el documento HTML.
postList.innerHTML = html;

//Lee el id del edificio seleccionado para el pase de lista.
const botonesVerReporte = document.querySelectorAll('.botonVerRep');
botonesVerReporte.forEach((boton) => {
    //A cada botón le añade un listener.
    boton.addEventListener('click', function (event) {
        //Encuentra el elemento padre <li> del botón actual.
        const listItem = event.target.closest('li');
        if (listItem) {
            //Obtiene el valor del id del Edificio <li>.
            const idEdificioElement = listItem.querySelector('#idEdificio').textContent;     
            if (idEdificio) {
                const idEdificioPre = idEdificioElement.split(' - ');
                const idEdificio = idEdificioPre[1];
                console.log(idEdificio);
                localStorage.setItem("idEdificioLast", idEdificio);
            } else {
                console.log('No se encontró el Id del edificio');
            }
        } else {
            console.log('No se encontró el Id asociado al botón');
        }
    });
});