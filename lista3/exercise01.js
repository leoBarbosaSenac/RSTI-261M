/*
Crie uma função chamada verificarParOuImpar que recebe um número como parâmetro e retorna (ou imprime) se ele é par ou ímpar. Peça o número ao usuário com ask.question() e passe o valor para a função.

Conceitos: function com parâmetro, if/else.
*/
const ask = require('readline-sync')

function verifyOddOrEven(num){
    if(num % 2 === 0){
        return 'Par'
    } 
    return 'Impar'
}

console.clear()
let num = Number(ask.question('Insert your number: '))
console.log(verifyOddOrEven(num))
