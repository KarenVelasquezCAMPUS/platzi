// If Else

var op1 = "Piedra"
var op2 = "Papel"
var op3 = "Tijera"

var resultado = function (user, cpu) {
  if (user != cpu) {
    if (user === op1 && cpu === op3) { 
    console.log("El usuario ganó con " + op1);
    } else if (user === op2 && cpu === op1) { 
      console.log("El usuario ganó con " + op2);
    } else if (user === op3 && cpu === op2) {
      console.log("El usuario ganó con " + op3);
    } else {
      console.log("La CPU ganó");
    }
  } else if (user === cpu) {
      console.log("Empate");
  }
} 

resultado (op1, op3);

/*
ternarios (solo piedra)

var piedra = 1;
var papel = 2;
var tijera = 3;

function juego (movimiento_jugador) {
    let movimiento_computadora = Math.ceil(Math.random()*3);

    let resultado = movimiento_jugador === 1 && movimiento_computadora === 3 || movimiento_jugador === 3 && movimiento_computadora === 1 ? movimiento_jugador < movimiento_computadora ? "Ganaste" : "Perdiste" : movimiento_jugador == movimiento_computadora ? "Empate" : movimiento_jugador > movimiento_jugador ? "Ganaste" : "Perdiste";

    movimiento_jugador = movimiento_jugador == 1 ? "papel" : movimiento_jugador == 2 ? "tijera" : "piedra";
    movimiento_computadora = movimiento_computadora == 1 ? "papel" : movimiento_computadora == 2 ? "tijera" : "piedra";
    console.log(`Jugador: ${movimiento_jugador}, PC: ${movimiento_computadora}, Resultado: ${resultado}`);

} 

*/

/* 
Chat GPT

// Función para obtener la elección del jugador
function obtenerEleccionJugador() {
    var eleccion = prompt("Elige piedra, papel o tijera:").toLowerCase();
    return (eleccion === "piedra" || eleccion === "papel" || eleccion === "tijera") ? eleccion : obtenerEleccionJugador();
  }
  
  // Función para obtener la elección de la computadora
  function obtenerEleccionComputadora() {
    var elecciones = ["piedra", "papel", "tijera"];
    var indice = Math.floor(Math.random() * 3);
    return elecciones[indice];
  }
  
  // Función para determinar al ganador
  function determinarGanador(eleccionJugador, eleccionComputadora) {
    return (eleccionJugador === eleccionComputadora) ? "Empate" :
      (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
      (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
      (eleccionJugador === "tijera" && eleccionComputadora === "papel") ? "Ganaste" : "Perdiste";
  }
  
  // Función principal del juego
  function jugarPiedraPapelTijera() {
    var eleccionJugador = obtenerEleccionJugador();
    var eleccionComputadora = obtenerEleccionComputadora();
    var resultado = determinarGanador(eleccionJugador, eleccionComputadora);
  
    console.log("Jugador: " + eleccionJugador);
    console.log("Computadora: " + eleccionComputadora);
    console.log("Resultado: " + resultado);
  }
  
  // Jugar el juego
  jugarPiedraPapelTijera();
*/