
const frase = prompt('Escribe una frase');

function MayMin(texto) {
    
    if (texto === texto.toUpperCase()) {
        return "La frase es solo mayúsculas";
    } else if (texto === texto.toLowerCase()) {
        return "La frase es solo solo minúsculas";
    } else {
        return "La frase tiene minúsculas y mayúsculas";
    }

}

alert(MayMin(frase));
