// Crie uma função verificarMaioridade(idade) que recebe a idade da pessoa e informa se ela é maior de idade (18 anos ou mais) ou menor de idade. Peça a idade ao usuário antes de chamar a função.

// Conceitos: function, if/else, comparação numérica.
const ask = require('readline-sync')


function verifyLegalAge(age){
    return age >= 18 //true ou false
}
//------------------------------------------

console.clear()
let userAge = Number(ask.question('Insert your age: '))


if(verifyLegalAge(userAge)){
    console.log("Maior de idade")
} else {
    console.log('Menor de idade')
}
