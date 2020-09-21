
function validar() {

        var nombre, apellidos, correo, mensaje, expresion;

        nombre = document.getElementById("nombre").value;
        apellidos = document.getElementById("apellidos").value;
        correo = document.getElementById("correo").value;
        mensaje = document.getElementById("mensaje").value;

        expresion = /\w+@\w+\.+[a-z]/


        if (nombre === "" || apellidos === "" || correo === "" || mensaje === "") {
                alert("los campos estan vacios")
                return false
        }
        else if (nombre.length > 25 || apellidos.length > 25) {
                alert("los nombres y apellidos no deben tener mas de 255 caracteres")
                return false
        }
        else if (correo.length > 50) {
                alert("el correo esta muy largo")
                return false
        }
        else if (!expresiones.test(correo)) {
                alert("correro no valido")
                return false
        }
        else if (mensaje.length < 30) {
                alert("el mensaje debe ser mayor a 30 caracteres")
                return false
        }
}