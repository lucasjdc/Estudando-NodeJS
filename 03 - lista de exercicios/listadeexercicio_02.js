/*

- Menor que 18.5: Abaixo do peso
- Entre 18.5 e 24.9: Peso normal
- Entre 25 e 29.9: Sobrepeso
- Igual ou acima de 30: Obesidade

*/

const peso = 73;
const altura = 1.73;

const imc = peso / (altura * altura);

console.log('IMC:', imc.toFixed(1));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
} else {
    console.log('Obesidade')
}

