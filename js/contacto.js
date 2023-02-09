const botonEmail = document.getElementById("btn-email")

function enviarEmail()
{
    Swal.fire({icon:"success", text:"Email enviado correctamente!"})
}

botonEmail.addEventListener("click",enviarEmail())

