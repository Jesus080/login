const formulario = document.getElementById("formularioLogin");
let correoIn = document.querySelector("#email");
let contrasenaIn = document.querySelector("#contra");
const mensajerror = document.getElementById("mensaje");


const usuarios = [{
    usuario : "prueba@gmail.com",
    contrasenasUsuarios: "hola"
}]

const eventoFormulario = (evt)=> {
    evt.preventDefault();
    let correo = correoIn.value; 
    let contrasena = contrasenaIn.value;
    let coincidencias = usuarios.filter((obj)=> obj.usuario === correo);
    if (coincidencias.length > 0){
        if(coincidencias[0].contrasenasUsuarios === contrasena){
            window.location = "home.html";
        }else{
            //alert("Contrasena incorrecta");
            mensajerror.textContent = "Contrasena incorrecta!"
        }
    }else{
        //alert("Usuario incorrecto o contrasena incorrecto!");
        mensajerror.textContent = "Usuario incorrecto!"
    }
       
}
formulario.addEventListener("submit",eventoFormulario);

