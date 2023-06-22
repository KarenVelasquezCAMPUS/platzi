/* let lista = new Array (5); //no usarlo */

let info = {
    direccion:[
        {
            barrio: "aaa",
            numero: 11
        },
        {
            barrio: "bbb",
            numero: 22
        }
    ]
}

console.log(Object.entries(informacion));
Object.entries(informacion).forEach(([id,val]) => {
    console.log(val[1].barrio);
}) // para sacar solo el barrio,nivel normal

/* Object.entries(informacion).forEach(element => {
    console.log(element);
})  //imprimirlo */



/* let lista = [];

lista.unshift[50];
lista["nombre"]= "Miguel";
lista[3] = 100;

console.log(lista);

console.log(Object.entries(lista));
for (let [i,val] of Object.enteries(lista)) {
    console.log(val);
} */

/* for (let [i,val] of Object.enteries(lista)) {
    console.log(val);
} */

/* Object.values(lista).forEach(element => {
    console.log(lista);
}) // manera correcta de hacerlo */

/* for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
console.log(lista[0]);
console.log(lista.nombre);

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
} */


/* console.log(lista);
console.log(lista2); */

/* let i = 0;
do{
    lista[i] = prompt ("Ingrese el dato", i)
    i++;
} while(i<=5)

console.log(lista); */

// /* lo de arriba es igual a decir:

// for (let i = 0; i < 5; i++) {
//     lista[i] = prompt("Ingrese el dato", i);
// }
// console.log(lista); */