import { collection, addDoc, doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { auth, db } from './firebase.js'

try{
    //Recupera datos del alumno y los convierte a JSON.
    const alumnoDatos = JSON.parse(localStorage.getItem("alumno"));

    //Coloca nombre en la tarjeta.
    /*var cardNombre = document.getElementById('nombreAlumno');
    cardNombre.innerText = alumnoDatos.nombre;*/
    //Coloca matrícula en la tarjeta.
    var cardMat = document.getElementById('matAlumno');
    cardMat.innerText = alumnoDatos.matricula;
    //Coloca fecha y hora en la tarjeta.
    var cardTimeStamp = document.getElementById('TimeStampAlumno');
    cardTimeStamp.innerText = localStorage.getItem("QrTimestamp");

    //Registra la asistencia del alumno.
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    const docData = {
        fecha:  year + "/" + month + "/" + day,
        nrc: localStorage.getItem("nrcLast"),
        matricula: alumnoDatos.matricula,
        timeStamp: localStorage.getItem("QrTimestamp")
    };
    await addDoc(collection(db, "listas_asistencia"), docData);
    console.log("Documento escrito en la bd");
}catch (error){
    console.log(error);
    //Notifica del error al usuario.
    var cardNombre = document.getElementById('nombreAlumno');
    cardNombre.innerText = "QR no válido";
}finally{
    //Timer de redirección.
    setTimeout(function(){
        window.location.href = "../html/leerQR.html";
    }, 2000);
}