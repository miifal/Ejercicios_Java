

// utilizando for ...of
let contador = 0;
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
for (let i of notas){ 
    contador += i;
    console.log('la puntuacion final con for...of es ' + contador)
};


//utilizando for




let contador2 = 0
const notas2 = [6, 7, 2, 9, 3, 4, 5, 8, 2];
for(let i2 = 0; i2 < notas2.length; i2++) {
    contador2 += notas2[i2];
    console.log('la puntuacion final con for es ' + contador2)
}


