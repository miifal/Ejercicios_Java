

const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

const numero = prompt("dime tu DNI", "");
const posicion = numero % 23;




if (numero < 0 || numero > 99999999) {
    alert ("El numero proporcionado no es válido");
} else {
    alert("la letra del dni es: " + letra[posicion]);
};

