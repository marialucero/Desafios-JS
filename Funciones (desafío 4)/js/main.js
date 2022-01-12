const cantidadMaterias = 4; 
let cantidadAlumnos = parseFloat(prompt("Ingrese la cantidad de alumnos")); 

function promedio (sumaNotas,cantidadMaterias) {
    return (sumaNotas)/cantidadMaterias; 
}

for (let i=0; i<cantidadAlumnos; i++) {
    let ingresarNombreAlumno = prompt("Ingrese el nombre del alumno");
    let sumaNotas = 0; 
    for (let j=0; j<cantidadMaterias; j++) {
        let ingresarNota = parseFloat(prompt("Ingrese la nota final de cada materia para calcular su promedio final del Curso de Ingreso")); 
        sumaNotas += ingresarNota;
    }
    let promedioFinal = promedio(sumaNotas,cantidadMaterias);
    alert("Promedio de "+ingresarNombreAlumno+ ": "+promedioFinal);
}