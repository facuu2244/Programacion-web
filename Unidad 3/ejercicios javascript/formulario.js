function validarFormulario(event){
    event.preventDefault();//evito que se envie el formulario si no se cumplen las verificaciones

    //traigo los elementos de los inputs
    let nombre=document.getElementById("nombre").value.toLowerCase();
    let email=document.getElementById("email").value;
    let contra=document.getElementById("contra").value;
    let repContra=document.getElementById("repContra").value;

    //realizo las verificaciones
    if (nombre=="ana"||nombre=="pepe"||nombre=="pancho"){
        window.alert("El nombre no esta permitido");
        returns;
    }
    if(contra.length<8){
        window.alert("La contraseña debe contener al menos 8 caracteres");
        return;
    }
    if(repContra!==contra){
        window.alert("Las contraseñas no coinciden");
        return;
    }

    let mensaje=document.getElementById("estado");//elemento que muestra el estado del envio
    //preparo los datos
    let usuario={
        nombre: nombre,
        contrasena: contra,
        email: email
    }
    //subo los datos
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(respuesta => {
        if (respuesta.ok==false) {
            throw new Error("Error en el envío: " + respuesta.statusText);
        }
        return respuesta.json();
    })
    .then(datos => {
        console.log("Datos enviados correctamente", datos);
        mensaje.innerHTML = "Los datos se han enviado correctamente";
        mensaje.style.color="green"
        document.getElementById("formRegistro").reset();// Vaciar los campos del formulario
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
        mensaje.innerHTML = "Hubo un error al enviar los datos: " + error.message;
        mensaje.style.color="red"
    });
}

document.getElementById("formRegistro").addEventListener("submit", validarFormulario)