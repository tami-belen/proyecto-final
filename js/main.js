//prompt//

var respuesta = window.prompt("¿Te has registrado para que te enviemos ofertas y novedades?");
//alert//
alert
alert ('la respuesta es :' + respuesta)

const nombre = document.getElementById ("nombre")
const correo = document.getElementById ("email")
const telefono = document.getElementById ("tel")
const form = document.getElementById ("form")
const listInputs = document.querySelectorAll (".form-input")


form.addEventListener("submit" , (e) => {
    e.preventDefault();
    if (nombre.value.length < 1 ) {
        console.error ("error")

    }
});



form.addEventListener("submit" , (e) => {
    e.preventDefault();
    if (correo.value.length < 1 ) {
        console.error ("error")

    }
});



form.addEventListener("submit" , (e) => {
    e.preventDefault();
    if (telefono.value.length < 1 ) {
        console.error ("error")

    }
});



