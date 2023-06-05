/* hoisting es cuando las variables y las funciones se procesan antes que se ejecute cualquier tipo de código */

var miNombre; // se declara
miNombre = "Diego"  // se inicializa

/* primero se declara la función y después se ejecuta o se llama */

/* 
    solo la declaración echas por var sufren del hosting, de la elevación  
    function e import sufren del hoisying por completo
    las clases no sufren de este efecto
    let y const se van para la zona muerta temporal (temporal dead zone)
*/