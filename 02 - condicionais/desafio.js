/*

Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por km;
5 - Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

let precoEtanol = 5.49;
let precoGasolina = 6.49;

let isEtanol = false;

// desempenho de um HB20S 1.0
let desempenhoEtanol = 10.8;
let desempenhoGasolina = 15.3;  

let distanciaPercorrida = 94;

let gastoEtanol = (distanciaPercorrida/desempenhoEtanol)*precoEtanol;
let gastoGasolina = (distanciaPercorrida/desempenhoGasolina)*precoGasolina;


if (isEtanol) {
	console.log('Valor gasto em etanol: R$', gastoEtanol.toFixed(2))	
} else {
	console.log('Valor gasto em gasolina: R$', gastoGasolina.toFixed(2));
}
