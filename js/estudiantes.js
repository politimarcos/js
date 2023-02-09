
let titulo = document.getElementById("tituloPrincipal");
console.log(titulo.innerText);
titulo.innerText = "Administrador Moodle";

class Estudiante {
    constructor(id, usuario, nombre, apellido, dni, email, telefono) {
        this.id = id; //El id no se lo cargo realmente, viene de Moodle
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
    }
}

const vectorEstudiantes = []

//Consulta de estudiantes a la API Moodle

fetch('https://jsonplaceholder.typicode.com/users', {

    method: "GET",
    header: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
    .then(response => response.json())
    .then(data => {
        
        console.log(data)
        for (let i = 0; i < data.length; i++) {

            vectorEstudiantes.push(new Estudiante(data[i].id, data[i].username, data[i].name, data[i].name, data[i].phone, data[i].phone, data[i].email));

        }

        //Cargo estudiantes en HTML
        for (let i = 0; i < (vectorEstudiantes.length); i++) {

            console.log(vectorEstudiantes[i])

            cargaEstudiante(vectorEstudiantes[i]);
        }

    })


function cargaEstudiante(alumnx) {
    

    let estudianteListado = document.getElementById("listaEstudiantes");
    let estudianteNuevo = document.createElement("tr");
    estudianteNuevo.innerHTML = "<td id=id" + alumnx.id + ">" + (alumnx.id) + "</td>";
    estudianteNuevo.innerHTML += "<td id=usuario" + alumnx.id + ">" + alumnx.usuario + "</td>";
    estudianteNuevo.innerHTML += "<td id=nombre" + alumnx.id + ">" + alumnx.nombre + "</td>";
    estudianteNuevo.innerHTML += "<td id=apellido" + alumnx.id + ">" + alumnx.apellido + "</td>";
    estudianteNuevo.innerHTML += "<td id=dni" + alumnx.id + ">" + alumnx.dni + "</td>";
    estudianteNuevo.innerHTML += "<td id=email" + alumnx.id + ">" + alumnx.email + "</td>";
    estudianteNuevo.innerHTML += "<td>" + alumnx.telefono + "</td>";
    estudianteNuevo.innerHTML += "<td><button class='btn btn-success' id=emailEstudiante" + alumnx.id + ">Enviar email</button></td>";
    estudianteNuevo.innerHTML += "<td><button class='btn btn-warning' id=modifica" + alumnx.id + ">Modifica datos</button></td>";
    estudianteNuevo.innerHTML += "<td><button  class='btn btn-danger' id=elimina" + alumnx.id + ">Elimina estudiante</button></td>";
    estudianteListado.append(estudianteNuevo);
    

}


/*

let titulo = document.getElementById("tituloPrincipal");
console.log(titulo.innerText);
titulo.innerText = "Administrador Moodle";


class Estudiante {
    constructor(id, usuario, nombre, apellido, dni, email, telefono) {
        this.id = id; //El id no se lo cargo realmente, viene de Moodle
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
    }
}

//Consulta de estudiantes a la API Moodle

fetch('https://jsonplaceholder.typicode.com/users', {

    method: "GET",
    header: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            
            console.log(data[i].name)
            cargaEstudiante(data[i]);
            
        }

    })

//Función para realizar la carga de estudiantes

function cargaEstudiante(dato) {

    let estudianteListado = document.getElementById("listaEstudiantes");
    let estudianteNuevo = document.createElement("tr");
    estudianteNuevo.innerHTML = "<td id=id" + dato.id + ">" + (dato.id) + "</td>";
    estudianteNuevo.innerHTML += "<td id=usuario" + dato.id + ">" + dato.username + "</td>";
    estudianteNuevo.innerHTML += "<td id=nombre" + dato.id + ">" + dato.name + "</td>";
    estudianteNuevo.innerHTML += "<td id=apellido" + dato.id + ">" + dato.name + "</td>";
    estudianteNuevo.innerHTML += "<td id=dni" + dato.id + ">" + dato.phone + "</td>";
    estudianteNuevo.innerHTML += "<td id=email" + dato.id + ">" + dato.email + "</td>";
    estudianteNuevo.innerHTML += "<td>" + dato.phone + "</td>";
    estudianteNuevo.innerHTML += "<td><button class='btn btn-success' id=emailEstudiante" + dato.id + ">Enviar email</button></td>";
    estudianteNuevo.innerHTML += "<td><button class='btn btn-warning' id=modifica" + dato.id + ">Modifica datos</button></td>";
    estudianteNuevo.innerHTML += "<td><button  class='btn btn-danger' id=elimina" + dato.id + ">Elimina estudiante</button></td>";

    estudianteListado.append(estudianteNuevo);


}
*/

