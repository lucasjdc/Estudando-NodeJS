/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando
o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de
pagamentos escolhido e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/ 


const precoEtiqueta = 100;
const tipoPagamento = 'Acima de duas vezes';
let desconto = 0;
let juros = 0;
let valorPago;

if (tipoPagamento === 'Débito') {    
    desconto = 0.1;    
} else if (tipoPagamento === 'Dinheiro' || tipoPagamento === 'PIX') {
    desconto = 0.15;
} else if (tipoPagamento === 'Duas vezes') {
    desconto = 0;
} else if (tipoPagamento === 'Acima de duas vezes') {
    juros = 0.1;    
} else {
    console.log('Forma de pagamento inválida!');
}

valorPago = precoEtiqueta *  (1 - desconto) * (1 + juros);

console.log(`Tipo de pagamento: ${tipoPagamento}`);
console.log(`Total a pagar: R$ ${valorPago.toFixed(2)}`);