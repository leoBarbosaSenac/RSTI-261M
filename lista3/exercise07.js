// Exercício 7 — Mês do Ano
// Crie uma função nomeDoMes(numero) que recebe um número de 1 a 12 e retorna o nome do mês correspondente. Caso o número seja inválido, retorne uma mensagem de erro.

// Conceitos: function, switch case, case default.

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            return "Invalid month number"
    }
}

console.log(getMonthName(1))
console.log(getMonthName(7))
console.log(getMonthName(12))
console.log(getMonthName(15))