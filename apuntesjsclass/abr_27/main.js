let computador = {
    procesador: "intel 7",
    pantalla: undefined,
    //funcion 
    mostrarProcesador: function(){
       return`el procesador de mi computador es ${this.procesador}`;
    },
    //arowfuction
    mostrarProcesador2: ()=>{
        return`el procesador de mi computador es ${this.procesador} 2`; //no funciona, más tarde explica -!!no pueden estar anidadas en un objeto

    },
    //formaLinda, función declarar -más usada
    mostrarProcesador3(){
        return`el procesador de mi computador es ${this.procesador} 3`;

    }
}

console.log(computador.mostrarProcesador());
console.log(computador.mostrarProcesador2());
console.log(computador.mostrarProcesador3());

// hacer funcionar el arrow fuction -clausulas, usos que el usuario modifique una libreria
let obj = {
    info: "Miguel",
    mostrar (){
        let f = () => `nombre: ${this.info}`;
        return f.bind(this)();
    }
}

console.log(obj.mostrar());