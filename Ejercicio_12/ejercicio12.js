


const palabras = ['Environmental', 'Systems', 'Research', 'Institute'];

const resultado = palabras.reduce((accumulator, currentValue) => {
    if (accumulator.length > currentValue.length) {
        return accumulator
    } else{
        return currentValue

    }

})

console.log ('la palabra mas larga es ' + resultado);