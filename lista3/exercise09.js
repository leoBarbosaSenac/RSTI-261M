// Exercício 9 — Menu de Operações (Desafio)
// Crie uma função menuPrincipal() que exibe um menu para o usuário escolher entre as opções:

// Verificar se um número é par ou ímpar
// Classificar uma nota
// Calcular o IMC
// Sair
// Dentro dessa função, use um switch case para chamar a função correspondente à opção escolhida (reaproveite as funções dos exercícios anteriores!). Se o usuário escolher uma opção inválida, exiba uma mensagem de erro.

// Conceitos: function que chama outras functions, switch case, reutilização de código.


const ask = require("readline-sync")

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    }

    return "Odd"
}

function classifyGrade(grade) {
    if (grade >= 9) {
        return "Excellent"
    } else if (grade >= 7) {
        return "Good"
    } else if (grade >= 5) {
        return "Average"
    }

    return "Failed"
}

function calculateBMI(weight, height) {
    let bmi = weight / (height * height)

    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi < 25) {
        return "Normal weight"
    } else if (bmi < 30) {
        return "Overweight"
    }

    return "Obesity"
}

function mainMenu() {
    console.log("=== MAIN MENU ===")
    console.log("1 - Check if a number is even or odd")
    console.log("2 - Classify a grade")
    console.log("3 - Calculate BMI")
    console.log("4 - Exit")

    let option = Number(ask.question("Choose an option: "))

    switch (option) {
        case 1:
            let number = Number(ask.question("Enter a number: "))
            console.log(checkEvenOrOdd(number))
            break

        case 2:
            let grade = Number(ask.question("Enter a grade: "))
            console.log(classifyGrade(grade))
            break

        case 3:
            let weight = Number(ask.question("Enter your weight (kg): "))
            let height = Number(ask.question("Enter your height (m): "))
            console.log(calculateBMI(weight, height))
            break

        case 4:
            console.log("Exiting...")
            break

        default:
            console.log("Invalid option")
    }
}

mainMenu()