// Crie uma função tipoDeTriangulo(lado1, lado2, lado3) que recebe as medidas de três lados e informa se o triângulo é:

// Equilátero (todos os lados iguais)
// Isósceles (dois lados iguais)
// Escaleno (todos os lados diferentes)
// Conceitos: function, if/else encadeado com múltiplas condições.

function checkTriangleType(side1, side2, side3){
    if (side1 === side2 && side2 === side3) {
        return "Equilateral"
    }
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles"
    }
    return "Scalene"
}

console.log(checkTriangleType(3, 3, 3))