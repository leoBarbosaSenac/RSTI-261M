# Lista de Exercícios – JavaScript Intermediário (Nível 2)

## Objetivo

Esta lista é para quem já terminou a lista anterior sem dificuldade. Os exercícios usam os **mesmos conceitos** (variáveis, tipos, `if/else`, `switch/case`), mas com problemas mais elaborados, entrada de dados pelo terminal e alguns métodos novos de texto e número que vocês vão precisar **pesquisar** para resolver.

> **Observação:** esta versão evita métodos como `.includes()`, `.indexOf()` e `.slice()`, que também existem em arrays. Como vocês ainda não viram arrays, usamos apenas métodos exclusivos de string e number (`.replace()`, `.charAt()`, `.trim()`, `.toFixed()`, etc.), para não misturar conceitos antes da hora.

---

# Preparando o ambiente: readline-sync

Vários exercícios pedem para ler dados digitados pelo usuário no terminal, em vez de já deixar o valor fixo no código. Para isso vamos usar o pacote `readline-sync`.

1. Crie uma pasta chamada `javascript-exercises-02` e entre nela pelo terminal.
2. Instale o pacote com `npm install readline-sync`.
3. No topo de cada arquivo que for usar leitura de dados, importe assim:

```javascript
const ask = require("readline-sync");

let name = ask.question("What is your name? ");
console.log("Hello, " + name);
```

Rode os arquivos sempre com `node exercise01.js` (por exemplo) pelo terminal, já que agora o programa vai esperar você digitar algo.

**Importante:** tudo que vem de `ask.question()` chega como **string**, mesmo que você digite um número. Então, sempre que precisar de um número, converta com `Number()`.

---

# Instruções gerais

- Crie um arquivo para cada exercício: `exercise01.js` até `exercise10.js`.
- Todo o código deve ser escrito em inglês (variáveis, constantes, mensagens, comentários).
- Alguns exercícios pedem métodos que ainda não vimos em aula — a ideia é vocês pesquisarem (documentação do MDN, Google, etc.) como usá-los. Isso é parte do exercício.

---

# Exercício 01 – Validador de nome de usuário

Peça ao usuário, via `readline-sync`, que digite um nome de usuário.

Antes de validar, remova espaços no início/fim do texto digitado (pesquise `.trim()`).

Valide as seguintes regras usando `if/else`:

- o nome não pode conter nenhum espaço no meio do texto. Dica: pesquise `.replace(" ", "")` — se você remover um espaço e o tamanho do texto **mudar**, é porque havia um espaço nele;
- o nome deve ter entre 3 e 15 caracteres (use `.length`);
- o nome deve ser exibido sempre em minúsculas, independente de como foi digitado (pesquise `.toLowerCase()`).

Exiba se o nome é válido ou não e, se for válido, mostre o nome já formatado em minúsculas.

---

# Exercício 02 – Verificador de e-mail simples

Peça ao usuário que digite um e-mail via `readline-sync`.

Sem usar expressões regulares, valide (com `if/else`) se o e-mail:

- contém o caractere `@`. Dica: use a mesma ideia de `.replace()` do exercício anterior — se ao remover o `@` o tamanho do texto mudar, ele existe;
- contém também um `.` (ponto), usando a mesma lógica de `.replace()`.

Exiba `"Valid email"` se o e-mail tiver os dois caracteres, ou `"Invalid email"` caso contrário.

---

# Exercício 03 – Calculadora de IMC detalhada

Peça peso (kg) e altura (m) via `readline-sync`. Converta os valores para número.

Calcule o IMC: `weight / (height * height)`.

Arredonde o resultado para 2 casas decimais (pesquise `.toFixed(2)` — atenção: o retorno vira string) e exiba o valor.

Classifique o resultado usando `if/else if`, nas faixas:

| IMC              | Classificação        |
|------------------|-----------------------|
| menor que 18.5   | Underweight           |
| 18.5 a 24.9      | Normal weight         |
| 25 a 29.9        | Overweight            |
| 30 a 34.9        | Obesity grade I       |
| 35 a 39.9        | Obesity grade II      |
| 40 ou mais       | Obesity grade III     |

---

# Exercício 04 – Validador de CEP

Peça ao usuário que digite um CEP via `readline-sync`, podendo ser digitado com ou sem hífen (ex: `"90010-000"` ou `"90010000"`).

1. Remova o hífen, se existir (pesquise `.replace("-", "")`).
2. Verifique se o resultado tem exatamente 8 caracteres.
3. Verifique se o resultado é numérico (dica: pesquise a função `isNaN()` combinada com `Number()` — se `Number(valor)` resultar em `NaN`, significa que não é um número válido).

Exiba se o CEP é válido, e se for, exiba ele já formatado como `00000-000`. Para montar essa formatação, pesquise `.charAt()` para pegar cada caractere pela posição e monte uma template string juntando os 5 primeiros dígitos, um hífen, e os 3 últimos:

```javascript
let formatted = `${cep.charAt(0)}${cep.charAt(1)}${cep.charAt(2)}${cep.charAt(3)}${cep.charAt(4)}-${cep.charAt(5)}${cep.charAt(6)}${cep.charAt(7)}`;
```

---

# Exercício 05 – Conversor de temperatura

Peça ao usuário, via `readline-sync`:

- o valor da temperatura (number);
- a escala de origem: `"C"` (Celsius), `"F"` (Fahrenheit) ou `"K"` (Kelvin).

Usando `switch/case` na escala de origem, converta **sempre para as outras duas escalas** e exiba os três valores (arredondados com `.toFixed(1)`).

Fórmulas:
- Celsius → Fahrenheit: `(C * 9/5) + 32`
- Celsius → Kelvin: `C + 273.15`
- Fahrenheit → Celsius: `(F - 32) * 5/9`
- Kelvin → Celsius: `K - 273.15`

Se a escala digitada não for `"C"`, `"F"` nem `"K"`, exiba `"Invalid scale"` (use o `default` do switch).

---

# Exercício 06 – Verificador de senha forte

Peça ao usuário que digite uma senha via `readline-sync`.

Verifique, com `if/else`, se a senha atende a **todas** as regras abaixo:

- tem pelo menos 8 caracteres (`.length`);
- contém pelo menos uma letra maiúscula (dica: compare a senha com `password.toLowerCase()` — se forem diferentes, é porque existe pelo menos uma letra maiúscula);
- contém pelo menos uma letra minúscula (mesma lógica, comparando com `.toUpperCase()`);
- **não pode conter espaço em branco**. Dica: use a mesma ideia de `.replace(" ", "")` do Exercício 01 — se o tamanho mudar depois de remover o espaço, é porque havia um.

Exiba `"Strong password"` se passar em todas as regras, ou `"Weak password"` caso contrário, informando qual regra falhou.

---

# Exercício 07 – Mascarando um cartão de crédito

Peça ao usuário que digite um número de cartão de crédito com 16 dígitos, sem espaços, via `readline-sync` (trate como string).

1. Verifique se o número digitado tem exatamente 16 caracteres e se é numérico (mesma ideia do Exercício 04, com `isNaN()`).
2. Se for válido, exiba o cartão mascarado, mostrando apenas os últimos 4 dígitos, no formato:

```
**** **** **** 1234
```

Para pegar os últimos 4 dígitos, pesquise `.charAt()` e monte uma template string com as posições 12, 13, 14 e 15 do texto (lembrando que a contagem começa em 0):

```javascript
let lastDigits = `${card.charAt(12)}${card.charAt(13)}${card.charAt(14)}${card.charAt(15)}`;
```

---

# Exercício 08 – Calculando troco em notas

Peça ao usuário o valor de uma compra e o valor pago (em dinheiro), via `readline-sync`, ambos convertidos para número.

Calcule o troco (valor pago − valor da compra). Se o valor pago for menor que a compra, exiba uma mensagem de erro e não continue os cálculos.

Se o troco for válido, calcule quantas notas de **R$ 100, R$ 50, R$ 20 e R$ 10** são necessárias para formar esse valor, usando o maior número de notas de valor mais alto possível antes de passar para a próxima.

Dica: pesquise `Math.floor()` (para arredondar para baixo) e o operador `%` (resto da divisão), que ajuda a saber quanto ainda falta depois de tirar as notas de um valor.

Exiba quantas notas de cada valor serão usadas.

---

# Exercício 09 – Em que década você está?

Peça a idade da pessoa via `readline-sync` (converta para número).

Usando `switch/case` sobre o resultado de `Math.floor(age / 10)` (pesquise o que essa conta representa), exiba mensagens como:

- `"You are in your 0-9 years"` → para o caso 0;
- `"You are in your teens"` → para o caso 1;
- `"You are in your 20s"` → para o caso 2;
- `"You are in your 30s"` → para o caso 3;
- e assim por diante, até pelo menos os 60s.

Para idades muito altas que não tenham um `case` específico, use o `default` para exibir `"You are 70 or older"`.

---

# Exercício 10 – Palíndromo numérico

Peça ao usuário que digite um número de **exatamente 4 dígitos** via `readline-sync` (trate como string, ex: `"1221"`).

Monte a versão invertida do número usando `.charAt()` para pegar cada caractere pela posição e uma template string para juntar na ordem contrária:

```javascript
let reversed = `${text.charAt(3)}${text.charAt(2)}${text.charAt(1)}${text.charAt(0)}`;
```

Compare o número original com o invertido e exiba se ele é um **palíndromo** (lê-se igual dos dois lados, como `1221`) ou não.

---

# Boas práticas

- Sempre converta os dados vindos de `ask.question()` para o tipo correto antes de usar em contas.
- Teste cada exercício com valores válidos e inválidos (ex: um CEP certo e um errado).
- Pesquisar a documentação de um método antes de usá-lo é parte normal do trabalho de um programador — não tem problema não saber de cara.
- Comente no código o que cada método novo (`.trim()`, `.replace()`, `.charAt()`, etc.) está fazendo, pra fixar o aprendizado.
