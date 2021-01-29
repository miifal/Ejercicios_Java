
const frase = prompt('Escribe una frase');

function MayMin(texto) {
    
    if (texto === texto.toUpperCase()) {
        resultado = "La frase es solo mayúsculas";
    } else if (texto === texto.toLowerCase()) {
        resultado = "La frase es solo solo minúsculas";
    } else {
        resultado = "La frase tiene minúsculas y mayúsculas";
    }
    return resultado
}

alert(MayMin(frase));