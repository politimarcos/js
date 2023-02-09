let titulo = document.getElementById("tituloPrincipal");
titulo.innerText = "Administrador Moodle";


let pie = document.querySelector("#comentario-pie");
pie.textContent = "MP-2022";

//Clase de cursos
class Curso {
    constructor(id, nombre, nombreCorto, area, docente) {
        this.id = id;
        this.nombre = nombre;
        this.nombreCorto = nombreCorto;
        this.area = area;
        this.docente = docente;
    }

}

//Demo de cursos a cargar en html

const vectorCursos=[];

vectorCursos.push(new Curso(2, "Python ", "py_v001", "Programación ", "Jose Docente"));
vectorCursos.push(new Curso(6, "Internet de las cosas ", "iot_v001", "Programación ", "Carlos Docente"));
vectorCursos.push(new Curso(7, "Microcontroladores ", "uc_v002", "Electrónica ", "Marcos  Docente"));
vectorCursos.push(new Curso(8, "Servicios Cloud para IoT ", "cloud_v007", "Programación ", "Maria Docente"));
vectorCursos.push(new Curso(9, "Energia ", "energia_v007", "Programación ", "Maria Docente"));




function cargaCursos(miCurso) {

    let cursoListado = document.getElementById("listaCursos");
    let cursoNuevo = document.createElement("tr");
    cursoNuevo.innerHTML = "<td>" + miCurso.id + "</td>";
    cursoNuevo.innerHTML += "<td>" + miCurso.nombre + "</td>";
    cursoNuevo.innerHTML += "<td>" + miCurso.nombreCorto + "</td>";
    cursoNuevo.innerHTML += "<td>" + miCurso.area + "</td>";
    cursoNuevo.innerHTML += "<td>" + miCurso.docente + "</td>";
    let urlCurso = "https://marcospoliti.ar/elearning/course/view.php?id=" + miCurso.id;
    let urlParticipantes = "https://marcospoliti.ar/elearning/user/index.php?id=" + miCurso.id;
    cursoNuevo.innerHTML += "<td><button class='btn btn-primary'><a href=" + urlCurso + ">Ingresar a curso</a></button></td>";
    cursoNuevo.innerHTML += "<td><button class='btn btn-primary'><a href=" + urlParticipantes + ">Estudiantes del curso</button></td>";
    cursoNuevo.innerHTML += "<td><button class='btn btn-success'>Contactar docente</button></td>";
    cursoListado.append(cursoNuevo);

}


//Cargo cursos en HTML
for (i=0;i<(vectorCursos.length);i++){

    cargaCursos(vectorCursos[i]);
}



