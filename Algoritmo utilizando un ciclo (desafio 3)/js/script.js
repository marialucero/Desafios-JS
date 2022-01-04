let datos = "";
let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos en el curso de Análisis Matemático I")); 

for (i=0; i<cantidadAlumnos; i++) {
  let nombreAlumno = prompt("Ingrese el nombre del alumno n° "+ (i+1)); 
  datos += "Bienvenido alumno: " + nombreAlumno + "\n"; //agrego un string a otro string, concateno 
  let cantidadOtrasMaterias = parseInt(prompt("Ingrese cuantas materias realiza aparte de esta"));
  let contador = 0;
  while (contador < cantidadOtrasMaterias) {
    let nombreMateria = prompt("Ingrese el nombre de la materia");
    datos += "   - Inscripto en la materia: "+ nombreMateria + "\n";
    contador++;
  }
}
alert(datos)
