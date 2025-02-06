/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando
o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de
pagamentos escolhido e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/ 

const precoEtiqueta = 100;
const formaDePagamento = 5;
let desconto = 0;
let juros = 0;
let valorPago;

if (formaDePagamento === 1) {    
    desconto = 0.1;    
} else if (formaDePagamento === 2) {
    desconto = 0.15;
} else if (formaDePagamento === 3) {
    desconto = 0;
} else if (formaDePagamento === 4) {
    juros = 0.1;    
} else {
    console.log('Forma de pagamento inválida!');
}

valorPago = precoEtiqueta *  (1 - desconto) * (1 + juros);

console.log(`Total a pagar: R$ ${valorPago.toFixed(2)}`);