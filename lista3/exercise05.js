// Crie uma função calculadora(num1, num2, operador) que recebe dois números e um operador (+, -, *, /) e retorna o resultado da operação. Peça os dois números e o operador ao usuário separadamente.

// Conceitos: function com múltiplos parâmetros, switch case.
const ask = require('readline-sync')


function calculator(num1, num2, operator){
    switch(operator){
        case 1:
            return num1 + num2
        case 2:
            return num1 - num2
        case 3:
            return num1 * num2
        case 4:
            return num1 / num2
        default:
            return undefined
    }
}

let num1 = Number(ask.question('Insert first number: '))
let num2 = Number(ask.question('Insert second number: '))
let operator = Number(ask.question(`
1: +
2: -
3: *
4: /

Choose operation: `))

console.log(calculator(num1, num2, operator))