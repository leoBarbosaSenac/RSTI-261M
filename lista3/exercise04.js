// Crie uma função diaDaSemana(numero) que recebe um número de 1 a 7 e retorna o nome do dia correspondente (1 = Domingo, 2 = Segunda, etc). Se o número não estiver entre 1 e 7, a função deve informar que o valor é inválido.

// Conceitos: function, switch case, case default.

const ask = require('readline-sync')


function weekDay(day){
    switch(day){
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return undefined
    }
}

let day = Number(ask.question('Insert number from 1 to 7: '))

console.log(weekDay(day))