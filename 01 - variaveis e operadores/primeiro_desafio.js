/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const quilometrosPorLitro = 10.8;
const distanciaEmquilometros = 94;

const litrosConsumidos = distanciaEmquilometros / quilometrosPorLitro;

const valorGasto = litrosConsumidos*precoCombustivel;

/*

Para usar um número fixo de casas decimais como string
utilize toFixed()

se precisar de um número, converta com 
parseFloat()

*/
console.log(valorGasto.toFixed(2));