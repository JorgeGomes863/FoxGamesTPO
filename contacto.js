
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
var error = document.getElementById("error");
error.style.color = "#CA190E";
error.style.fontSize = "20px"

var form = document.getElementById("formulario");
    form-addEventListener("submit", function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if(nombre.value === null || nombre.value === ""){
            alert("Ingresa tu nombre")
            return 0;
        }
    
        if(nombre.value === null || apellido.value === ""){
            alert("Ingresa tu apellido")
            return 0;
        }
    
        if(nombre.value === null || correo.value === ""){
           alert("Ingresa tu correo")
            return 0;
        }
    
        if(nombre.value === null || mensaje.value === ""){
            alert("Ingresa tu mensaje")
            return 0;
        }
    
            alert("Muchas gracias por comunicarse con nosotros, en breve nos pondremos con contacto con usted.");
    });