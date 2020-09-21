const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("click", validar)

function validar(e){
        let warning = ""
        let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        let entrar = false      // si el if entra en true muestra el mensaje de error
        parrafo.innerHTML = ""  // reiniciamos el formulario

        if(nombre.value.length < 2 || apellidos.value.length < 2){
                warning += `el nombre o apellido es muy corto <br>`
                entrar = true
        }
        if(!regexEmail.test(correo.value)){
                warning += `el email no es valido <br>`
                entrar = true
        }
        if(mensaje.value.length < 30){
                warning += `el mensaje debe contener al menos 30 caracteres <br>`
                entrar = true
        }
        if(entrar){
               parrafo.innerHTML = warning
               e.preventDefault(e) 
        }
}