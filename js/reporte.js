import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

//Obtiene datos del documento
const nrcClase = document.querySelector("#nrcClase");
const nombreClase = document.querySelector("#nombreClase");
const seccClase = document.querySelector("#seccClase");
const postTable = document.querySelector(".tableAlumnos");
const nrc = localStorage.getItem("nrcLast");

//Busca los datos de la clase en la base de datos.
const querySnapshot = await getDocs(collection(db, "clases"));
querySnapshot.forEach((doc) => {
    const clase = doc.data();
    if(clase.nrc === nrc){
        nombreClase.innerHTML = clase.nombre;
        seccClase.innerHTML = `Secc. ${clase.seccion}`;
        nrcClase.innerHTML = localStorage.getItem("nrcLast");         
    }
});

//Busca a los alumnos con asistencia a la clase en la base de datos.
let matriculasAsistencia =[];
const querySnapshot2 = await getDocs(collection(db, "listas_asistencia"));
querySnapshot2.forEach((doc) => {
    const alumno = doc.data();
    if(alumno.nrc === nrc){
        matriculasAsistencia.push(alumno);
        console.log(alumno.matricula);         
    }
});

//Busca los otros datos de los alumnos.
let html = "";
const querySnapshot3 = await getDocs(collection(db, "usuarios"));
for(let i = 0; i < matriculasAsistencia.length; i++) {
    querySnapshot3.forEach((doc) => {
        const alumno = doc.data();
        if(alumno.Matricula === matriculasAsistencia[i].matricula){
            console.log(matriculasAsistencia[i])
            const li = `
            <tr>
                <th scope="row">${i+1}</th>
                <td>${alumno.Matricula}</td>
                <td>${alumno.Nombre}</td>
                <td>${matriculasAsistencia[i].timeStamp}</td>
            </tr>`;
            //Concatena los elementos de la lista.
            html += li;
        }
    });
}
//Escribe las clases en el documento HTML.
postTable.innerHTML = html;

