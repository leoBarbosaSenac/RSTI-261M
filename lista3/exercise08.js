// Exercício 8 — Desconto por Quantidade
// Crie uma função calcularDesconto(quantidade, precoUnitario) que recebe a quantidade de itens comprados e o preço unitário, e aplica desconto sobre o valor total:

// 10 ou mais itens → 20% de desconto
// 5 a 9 itens → 10% de desconto
// Menos de 5 itens → sem desconto
// A função deve retornar o valor final da compra.

// Conceitos: function, cálculo com base em decisão, if/else if.

function calculateDiscount(quantity, unitPrice) {
    let total = quantity * unitPrice

    if (quantity >= 10) {
        total *= 0.8
    } else if (quantity >= 5) {
        total *= 0.9
    }

    return total
}

console.log(calculateDiscount(3, 50))
console.log(calculateDiscount(7, 50))
console.log(calculateDiscount(12, 50))