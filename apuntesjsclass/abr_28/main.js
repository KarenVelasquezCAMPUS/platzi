/*let listas = new Array(10).fill("Miguel");

for (let i = 0; i < lista.legth; i++) {
    if (i==6){
        break;
    }
    console.log(i);
}*/

/*multiplicador:
for (let g = 2; g < 1; g++) {
    console.groupCollapsed(`Tabla del ${g}`);
    multiplicando:
    for (let i = 1; i <= 10; i++){

        console.log(`${g} x ${i} = ${g*i}`);

    }
    if (g==5){
            break multiplicador;
    }
    console.groupEnd();
}*/

/* // forEach con Array
let lista = ["Miguel", "Zharick", "Anthoni", "Brayan"];

lista.forEach(element => {
    console.log(element);
});
 */

let campus = {
    dia: {
        m1: [0, 12, 0, 13, 0, 1, 0, 2, 0, 4, 0, 4, 0, 8],
        s1: [0, 1, 8, 8, 2, 7, 0, 10, 0, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5],
        c1: [38, 36, 40, 45, 57, 242, 1, 2],
    },
    tarde: {
        m2: [0, 1, 0, 3, 0, 7, 0, 9, 0, 8, 0, 8, 0, 9, 0, 10],
        s2: [0, 1, 2, 3, 4, 7, 8, 9],
        c2: [10, 0, 1, 70, 0, 7, 80, 0, 8, 40, 0, 4],
    },
    noche: {
        m3: [0, 10, 25, 30, 33, 35, 40],
        s3: [70, 80, 90, 17, 75, 33],
        c3: [1, 2, 3, 4, 5, 6, 7, 8],
    }
}

console.log(campus.tarde.m2[10]);
console.log(campus.dia.s1[7]);
console.log(campus.tarde.s2[6]);
console.log(campus.noche.s3[0]);