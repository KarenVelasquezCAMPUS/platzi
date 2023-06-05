// Condicionales con if


var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if ( edad > 18 ) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}


// Ternario

condition ? true : false; /* Sintaxis de las operación de un ternario */


var numero = 1;

var resultado = numero === 1 ? "Si sot un uno" : "No soy un uno";
console.log(resultado);

/* 
    () condición
    {} tarea, lo que pasa
*/