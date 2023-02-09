const formularioIngreso = document.getElementById("formIngreso")

formularioIngreso.addEventListener("submit", function (e) {

    e.preventDefault()
    usuario = document.getElementById('inputUsuario').value
    nombre = document.getElementById('inputNombre').value
    apellido = document.getElementById('inputApellido').value
    email = document.getElementById('inputEmail').value
    dni = document.getElementById('inputDni').value
    telefono = document.getElementById('inputTelefono').value


    if (usuario == "" || nombre == "" || apellido == "" || email == "" || dni == "" || telefono == "") {
        Swal.fire({ icon: "error", text: "Debe completar todos los campos" })

    }
    else {
        //Swal.fire({ icon: "success", text: "Ingreso Correcto!" })
        gestionUsuarios()
        informeExito()
    }
})

function gestionUsuarios() {
    /*
    Funcion que accede a la API que maneja la BD de Moodle
    Actualmente en modo Demo
    */
   



}

function informeExito() {

    Swal.fire({
        title: 'Ingreso exitoso!, ¿desea cargar un nuevo estudiante?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            location.href = "ingreso.html"
        } else if (result.isDenied) {
            Swal.fire('Confirme salida', '', 'info')
            location.href = "dashboard.html"
        }
    })
}