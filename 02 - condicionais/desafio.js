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

const combustiveis = {
	Gasolina: {preco: 6.66, desempenho: 15.3},
	Etanol: {preco: 5.79, desempenho: 10.8},
};

const tipoCompustivel = 'Etanol';
const distanciaPercorrida = 94;

if (combustiveis[tipoCompustivel]) {
	const {  preco, desempenho  } = combustiveis[tipoCompustivel];
	const gasto = (distanciaPercorrida / desempenho) * preco;
	console.log(`Valor gasto em ${tipoCompustivel.toLowerCase()}: R$ ${gasto.toFixed(2)}`);
} else {
	console.log('Tipo de combustível inválido');
}