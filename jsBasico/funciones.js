// Declarativas 

function miFuncion() {
    return 3;
}

miFuncion();

// Expresión 

/* genera una variable y guarda una función, una función necesita parametros */

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();

// Navegador
function saludarEstudiantes (estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Diego");

function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(1,2);