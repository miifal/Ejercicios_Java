// crear el array

const data = ['hola', 2, 5, 'adios'];

// determinar cual es el mayor

if (data[1] > data[2]){
    console.log('el numero mayor es: ' + data[1]);
}else {
    console.log('El numero mayor es: ' + data[2]);
}

// operaciones numéricas

const resta = data[2] - data[1];
console.log('el resultado de la resta es: ' + resta)

const suma = data[1] + data[2];
console.log('el resultado de la suma es: ' + suma)

const multiplicacion = data[1] * data[2];
console.log('el resultado de la multiplicación es: ' + multiplicacion)

const division = data[2] / data[1];
console.log('el resultado de la división es: ' + division)

const resto = data[2] % data[1];
console.log('el resultado de resto es: ' + resto)