const formularioLogin = document.getElementById("formLogin")

formularioLogin.addEventListener("submit", function (e) {

    e.preventDefault()
    correo = document.getElementById('inputEmail').value
    contrasenia = document.getElementById('inputPassword').value
    console.log(correo)
    console.log(contrasenia)
    if (correo == "hola@email.com" && contrasenia == "1234") {
        Swal.fire({ icon: "success", text: "Ingreso Correcto!" })
        accesoValido()

    } else {
        Swal.fire({ icon: "error", text: "DATOS INCORRECTOS. Vuelva a ingresarlos" })
    }
})

function accesoValido() {
    location.href = "dashboard.html"


}