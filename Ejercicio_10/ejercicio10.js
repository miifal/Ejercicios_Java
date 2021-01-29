// Filtra el siguiente array de números creando uno con números pares y otro con impares. 

const numero =  [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const numeroPar = numero.filter(numero => numero % 2 === 0);
console.log('Números Pares',numeroPar);

const numeroImpar = numero.filter(numero => numero % 2 !== 0);
console.log('Números Impares',numeroImpar);


