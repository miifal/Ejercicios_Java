/*Utilizando las clases de JavaScript, crea una que calcule el perímetro y su área y pinte por
consola el resultado. Tendremos que hacer tres instancias para: un cuadrado pequeño de 2cm
de lado, mediano (5cm) y grande (10cm). */


class calculo {
    constructor (lado) {
        this.perímetro = lado * 4;
        this.area = lado * lado;

        console.log (' este cuadrado teine ' + lado + 'cm de lado, su perímetro es ' + this.perímetro + ' cm y su área ' + this.area + ' cm2')
    
    }

};

const peque = new calculo (2);
const mediano = new calculo (5);
const grande = new calculo (10);