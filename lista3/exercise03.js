// Crie uma função classificarNota(nota) que recebe uma nota de 0 a 10 e retorna o conceito:

// 9 ou 10 → "Excelente"
// 7 ou 8 → "Bom"
// 5 ou 6 → "Regular"
// Menor que 5 → "Reprovado"
// Conceitos: function, if/else if/else encadeado.
const ask = require('readline-sync')


function rate(score){
    if(score >= 9){
        return "Excelente"
    } else if (score >= 7) {
        return "Bom"
    } else if (score >= 5) {
        return "Regular"
    } else {
        return "Reprovado"
    }
}

console.clear()
let score = Number(ask.question('Insert student score: '))
console.log(rate(score))
