/* una forma de generar una condición, es decir, poder validar ciertas cosas pero este funciona por determinados casos */

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy 1");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
        console.log("No soy nada");
}

/* () donde se valia el algo // la variable */
/* break, es un stop que genere validación a los demás casos, rompe la validación. es importante colocarlo ya que si no se coloca valida todas las condiciones */
/* default se usa cuando no hay más casos, es decir, un tipo else */