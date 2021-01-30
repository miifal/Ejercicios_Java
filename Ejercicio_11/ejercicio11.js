

//calcular la media con reduce

const times = [60, 75, 79, 80, 55, 59]; 

const suma = times.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const media = suma / times.length;
console.log('Media', media);