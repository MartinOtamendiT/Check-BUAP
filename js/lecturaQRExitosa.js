try{
    //Recupera datos del alumno y los convierte a JSON.
    const alumnoDatos = JSON.parse(localStorage.getItem("alumno"));

    //Coloca nombre en la tarjeta.
    var cardNombre = document.getElementById('nombreAlumno');
    cardNombre.innerText = alumnoDatos.nombre;
    //Coloca matrícula en la tarjeta.
    var cardMat = document.getElementById('matAlumno');
    cardMat.innerText = alumnoDatos.matricula;
    //Coloca fecha y hora en la tarjeta.
    var cardTimeStamp = document.getElementById('TimeStampAlumno');
    cardTimeStamp.innerText = localStorage.getItem("QrTimestamp");
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