/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por km;
5 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';

// desempenho de um HB20S 1.0
const desempenhoEtanol = 10.8;
const desempenhoGasolina = 15.3;

const distanciaPercorrida = 94;

if (tipoCombustivel === 'Gasolina') {
	const gastoGasolina = (distanciaPercorrida/desempenhoGasolina)*precoGasolina;
	console.log('Valor gasto em gasolina: R$', gastoGasolina.toFixed(2));
}

if (tipoCombustivel === 'Etanol') {
	const gastoEtanol = (distanciaPercorrida/desempenhoEtanol)*precoEtanol;
	console.log('Valor gasto em etanol: R$', gastoEtanol.toFixed(2));
}