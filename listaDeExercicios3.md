# Exercícios de JavaScript — Functions, If/Else e Switch Case

> **Foco principal:** criação e uso de **functions**.
> Todos os exercícios devem usar `readline-sync` para pedir dados ao usuário, e a lógica de decisão (`if/else` ou `switch case`) deve estar **dentro** de uma função.

Antes de começar, lembre-se de importar o readline-sync no topo do arquivo:

```javascript
const ask = require("readline-sync");
```
# Regras

Código todo em inglês  
Indentação de código correta  
Consulte o material e os códigos de erro para corrigir seus bugs e tirar suas dúvidas   

---

## Exercício 1 — Par ou Ímpar
Crie uma função chamada `verificarParOuImpar` que recebe um número como parâmetro e retorna (ou imprime) se ele é **par** ou **ímpar**. Peça o número ao usuário com `ask.question()` e passe o valor para a função.

**Conceitos:** function com parâmetro, if/else.

---

## Exercício 2 — Maior Idade
Crie uma função `verificarMaioridade(idade)` que recebe a idade da pessoa e informa se ela é **maior de idade** (18 anos ou mais) ou **menor de idade**. Peça a idade ao usuário antes de chamar a função.

**Conceitos:** function, if/else, comparação numérica.

---

## Exercício 3 — Classificação de Nota
Crie uma função `classificarNota(nota)` que recebe uma nota de 0 a 10 e retorna o conceito:
- 9 ou 10 → "Excelente"
- 7 ou 8 → "Bom"
- 5 ou 6 → "Regular"
- Menor que 5 → "Reprovado"

**Conceitos:** function, if/else if/else encadeado.

---

## Exercício 4 — Dias da Semana
Crie uma função `diaDaSemana(numero)` que recebe um número de 1 a 7 e retorna o nome do dia correspondente (1 = Domingo, 2 = Segunda, etc). Se o número não estiver entre 1 e 7, a função deve informar que o valor é inválido.

**Conceitos:** function, switch case, case default.

---

## Exercício 5 — Calculadora Simples
Crie uma função `calculadora(num1, num2, operador)` que recebe dois números e um operador (`+`, `-`, `*`, `/`) e retorna o resultado da operação. Peça os dois números e o operador ao usuário separadamente.

**Conceitos:** function com múltiplos parâmetros, switch case.

---

## Exercício 6 — Verificar Triângulo
Crie uma função `tipoDeTriangulo(lado1, lado2, lado3)` que recebe as medidas de três lados e informa se o triângulo é:
- **Equilátero** (todos os lados iguais)
- **Isósceles** (dois lados iguais)
- **Escaleno** (todos os lados diferentes)

**Conceitos:** function, if/else encadeado com múltiplas condições.

---

## Exercício 7 — Mês do Ano
Crie uma função `nomeDoMes(numero)` que recebe um número de 1 a 12 e retorna o nome do mês correspondente. Caso o número seja inválido, retorne uma mensagem de erro.

**Conceitos:** function, switch case, case default.

---

## Exercício 8 — Desconto por Quantidade
Crie uma função `calcularDesconto(quantidade, precoUnitario)` que recebe a quantidade de itens comprados e o preço unitário, e aplica desconto sobre o valor total:
- 10 ou mais itens → 20% de desconto
- 5 a 9 itens → 10% de desconto
- Menos de 5 itens → sem desconto

A função deve retornar o valor final da compra.

**Conceitos:** function, cálculo com base em decisão, if/else if.

---

## Exercício 9 — Menu de Operações (Desafio)
Crie uma função `menuPrincipal()` que exibe um menu para o usuário escolher entre as opções:
1. Verificar se um número é par ou ímpar
2. Classificar uma nota
3. Calcular o IMC
4. Sair

Dentro dessa função, use um `switch case` para chamar a função correspondente à opção escolhida (reaproveite as funções dos exercícios anteriores!). Se o usuário escolher uma opção inválida, exiba uma mensagem de erro.

**Conceitos:** function que chama outras functions, switch case, reutilização de código.

---

### 💡 Dica geral
Sempre que possível, tente separar:
1. A **coleta de dados** (com `ask.question()`), feita fora da função.
2. A **lógica de decisão** (`if/else` ou `switch`), feita dentro da função.

Isso ajuda a entender que uma function pode receber dados, processar algo e devolver (ou exibir) um resultado — sem se preocupar com "de onde" os dados vieram.
