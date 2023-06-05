var op1 = "Piedra"
var op2 = "Papel"
var op3 = "Tijera"

var resultado = function (user, cpu) {
    switch (true) {
        case (user === cpu) :
            console.log("Empate");
            break;
        case (user === op1 && cpu === op3):
        case (user === op2 && cpu === op1):
        case (user === op3 && cpu === op2):
            console.log("El usuario ganó con " + user);
            break;
        default:
            console.log("El CPU ganó con " + cpu);
            break;
    }
}

resultado (op2, op3);