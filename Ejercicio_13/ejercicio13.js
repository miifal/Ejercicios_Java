/*A partir de un array con todos los meses del año escritos en minúscula, crea otro donde solo
estén los meses que tienen más de 7 letras y haz que estén escritos en mayúsculas. En otra
variable, indica cuántos meses son*/

const meses = ['enero' , 'febrero' , 'marzo', 'abril', 'mayo' , 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const mesesLargos = meses
.filter (mes => mes.length > 7)
.map (mes =>mes.toLocaleUpperCase());
const numeroMeses = mesesLargos.length;

console.log ('Los meses con nombres mas largos son ', mesesLargos);
console.log('y son ' + numeroMeses + ' meses');