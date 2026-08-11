class Alumno {
    constructor(nombre, curso, division, puntaje) {
        this.nombre = nombre;
        this.curso = curso;
        this.division = division;
        this.puntaje = puntaje;
    }
}

let puntaje = 0;
let alumno;
const inputUsuario = document.getElementById("nombre");
const inputCurso = document.getElementById("curso");
const inputDivision = document.getElementById("Division");

const Formulario = document.getElementById("formulario");
const Preguntas= document.getElementById("Preguntas");
const continuar = document.getElementById("continuar1");
const Final = document.getElementById("finall");


Formulario.addEventListener("submit", function(e){

    
    
    e.preventDefault();

        const NombreUsuario = inputUsuario.value; 
        const Curso = inputCurso.value;
        const Division = inputDivision.value;

    alumno = new Alumno(NombreUsuario, Curso, Division);

    Preguntas.hidden = false;
    Formulario.hidden = true;
    
   

});

 

Preguntas.addEventListener("submit", function(e){

    e.preventDefault();

        const Respuesta = document.querySelector('input[name="respuesta"]:checked').value;
        const Respuesta2 = document.querySelector('input[name="respuesta2"]:checked').value;
        const Respuesta3 = document.querySelector('input[name="respuesta3"]:checked').value;
        const Respuesta4 = document.querySelector('input[name="respuesta4"]:checked').value;

    if (Respuesta === "b") {
        puntaje += 25;
        }       else {
        puntaje += 0;
        }

        if (Respuesta2 === "a") {
        puntaje += 25;
        }       else {
        puntaje += 0;
        }

        if (Respuesta3 === "c") {
        puntaje += 25;
        }       else {
        puntaje += 0;
        }

        if (Respuesta4 === "c") {
        puntaje += 25;
        }   else {
        puntaje += 0;
        }

        console.log(window.alert("¿Listo para ver tus resultados?"));

    Preguntas.hidden = true;
    Final.hidden = false;

    alumno.puntaje = puntaje;
    
    resultado.textContent = `cuestionario completado.
    Nombre: ${alumno.nombre}.
    
    Curso y Division: ${alumno.curso} ${alumno.division}.
    Tu puntaje final es: ${alumno.puntaje} %.`;
});




