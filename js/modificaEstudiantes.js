/*

Aca no se bien como identificar el boton que se presiona, porque yo cada boton lo tengo asociado a un id, que se genero
dinamicamente

id:modifica13
id:elimina125

Eso depende de cada id de usuario.
No encuentro la forma de saber la diferencia entre cada accion

*/

/**
 * 
 * Ahora hago un demo general
 */

let  eliminar = document.getElementById("elimina18")

eliminar.addEventListener("click", function (e) {

    e.preventDefault()
    Swal.fire({ icon: "error", text: "Debe completar todos los campos, por favor" })


})