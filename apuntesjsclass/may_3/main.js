// suma por defecto
function suma({num1=undefined,num2=5}){
    console.log(num1, num2);
}

suma ({});

// sumar números y retornarlos
console.log(suma({num1: 50, num2:0}));

function suma(arg){
    let {num1=50, num3=undefined, num2= 60} = arg;
    num1 = (num1) ? num1 : 1;
    return num1/num2;
}

// función landa
let fa = function(){
    return "f"
}

console.dir(fa);

// función arrow
let fa = (num1)=>(num1>5) ? undefined : num1;

console.log(fa(5));

// callback, función declarada
let fa =()=>  "Función a"; 
let fb =(arg)=>[arg(), "Funcion b"]

console.log(fb(fa).join(""));

// Función autoejecutable
(function(){
    console.log("Hola soy la función");
})()

// clausula
let clausula = (()=>{
    return ()=>{
        console.log("Holla");
    }
})();

clausula();


// ambito lexico this
function a(p1){
    this.nombre = p1;
    console.log(this.nombre);
}

let execute = a.blind(this, "miguel");

execute();

/* a.apply(this, ["miguel"]); */


// modularizacion

let obj = {
    nombre: "miguel",
    saludar(){
        console.log(this.nombre);
    }
}

obj.saludar();
