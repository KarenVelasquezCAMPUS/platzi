// Coerción Implícita

/* cambiar los valores a otro tipo de valor , transforma los tipos de valores. Es cuando el lenguaje nos ayuda a cambiar el tipo de valor. */

var a = 4 +"7"
typeof a /* 47 */

var b = 4 * "7"
typeof b /* 28 */

// Coerción Explicita 

/* es cuando obligamos a que cambie el tipo de valor. */

var a = 20;
var b = a + "";
console.log(b); 
/* 20 */
typeof b;

var c = String(a);
console.log(c);
/* 20 */

var d = Number (c);
typeof d