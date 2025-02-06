/*
2) o IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de um pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dato o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo que 18.5 Abaixo do peso;
- Entre 18.5 e 24.9 Peso normal;
- Entre 25 e 29.9 Acima do peso;
- Entre 30 a 39.9  Obeso
- Acima de 40 Obsesidade Grave;

*/

const peso = 80;
const altura = 1.75;

// Cálculo do IMC
const imc = peso / Math.pow(altura, 2);

console.log(`IMC: ${imc.toFixed(1)}`);

let classificacao;

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = 'Peso normal';
} else if (imc >= 25 && imc <= 29.9) {
    classificacao = 'Acima do peso';
} else if (imc >= 30 && imc <= 39.9) {
    classificacao = 'Obeso';
} else {
    classificacao = 'Obsidade Grave';
}

console.log(`Classificação: ${classificacao}`);