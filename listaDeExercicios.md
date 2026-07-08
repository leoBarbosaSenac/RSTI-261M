# Lista de Exercícios – JavaScript Básico

## Objetivo

Esta lista tem como objetivo praticar os principais conceitos vistos em aula através da resolução de problemas.

Durante os exercícios, procure pensar **na lógica antes do código**. O objetivo não é apenas escrever comandos, mas aprender a interpretar um problema e transformá-lo em uma solução utilizando programação.

**Conceitos usados nesta lista:** variáveis, constantes, strings, numbers, booleans, `typeof`, `toString()`, `Number()`, `if/else`, `switch/case`.

---

# Instruções

1. Crie uma pasta chamada `javascript-exercises-01`.
2. Dentro dessa pasta, crie um arquivo para cada exercício:

- exercise01.js
- exercise02.js
- exercise03.js
- exercise04.js
- exercise05.js
- exercise06.js
- exercise07.js
- exercise08.js
- exercise09.js
- exercise10.js

3. **Todo o código deve ser escrito em inglês**, incluindo:
- nomes de variáveis;
- nomes de constantes;
- mensagens exibidas no console;
- comentários.

Exemplo:

❌ Errado

```javascript
let idade = 25;
console.log("Sua idade é " + idade);
```

✅ Correto

```javascript
let age = 25;
console.log("Your age is " + age);
```

---

# Exercício 01 – Cadastro de um estudante

Uma escola está cadastrando um novo aluno. Crie uma variável ou constante para cada uma das informações abaixo (escolha `let` ou `const` pensando se o valor pode mudar depois):

- nome completo (string);
- idade (number);
- cidade (string);
- se está matriculado (boolean);
- altura em metros (number, ex: 1.70);
- turma (string, ex: "3A").

Ao final, exiba cada informação separadamente no console, uma por linha, no formato:

```
Full name: ...
Age: ...
City: ...
Enrolled: ...
Height: ...
Class: ...
```

---

# Exercício 02 – Perfil de um videogame

Escolha **um** videogame real e atual (por exemplo: PlayStation 5, Xbox Series X, Nintendo Switch 2). Pesquise as informações reais dele e represente em variáveis:

- nome do console (string);
- fabricante (string);
- preço médio em reais (number);
- armazenamento em GB (number);
- se possui leitor de mídia física (boolean).

Exiba todas as informações no console, uma por linha, com um texto explicando o que é cada valor (ex: `"Storage: 825 GB"`).

---

# Exercício 03 – Descobrindo os tipos

Guarde cada um dos valores abaixo em uma variável diferente:

- `"250"`
- `250`
- `true`
- `"false"`
- `"JavaScript"`
- `3.14159`

Para cada variável, use `typeof` e exiba no console uma mensagem no formato:

```
Value: 250 | Type: number
```

---

# Exercício 04 – Ajustando os dados

Um sistema recebeu os seguintes dados, todos como texto (string):

- idade: `"22"`
- salário: `"2850.50"`
- quantidade de filhos: `"1"`

Para cada dado:

1. Exiba o valor e o tipo original (com `typeof`).
2. Converta para o tipo numérico usando `Number()`.
3. Exiba o valor convertido e o novo tipo (com `typeof`).

Exemplo de saída esperada para um dos dados:

```
Age (before): 22 | Type: string
Age (after): 22 | Type: number
```

---

# Exercício 05 – Calculando uma compra

Uma pessoa comprou os seguintes itens:

- teclado: R$ 249,90
- mouse: R$ 119,90
- headset: R$ 349,90

Guarde cada preço em uma variável e calcule:

1. **Valor total** da compra (soma dos três itens);
2. **Valor médio** por item (total dividido por 3);
3. Quanto **sobra do troco** se a pessoa pagar com R$ 1.000,00.

Exiba os três resultados no console, cada um em uma linha, com um texto explicando o que é.

---

# Exercício 06 – Verificando acesso

Uma plataforma libera o acesso apenas para quem atende **as duas condições ao mesmo tempo**:

- possui assinatura ativa (`true`/`false`);
- tem 18 anos ou mais.

Escreva um `if/else` que exiba `"Access granted"` ou `"Access denied"` de acordo com essas condições.

Depois, **teste o mesmo código com 3 combinações diferentes** de valores para assinatura e idade (por exemplo: maior de idade com assinatura ativa, maior de idade sem assinatura, menor de idade com assinatura). Para isso, basta trocar os valores das variáveis e rodar o arquivo novamente a cada teste — não é necessário nenhum recurso além do que já vimos em aula. Anote nos comentários do código qual foi o resultado de cada um dos 3 testes.

---

# Exercício 07 – Pode dirigir?

Considere duas informações de uma pessoa:

- idade (number);
- se possui carteira de motorista (boolean).

Escreva um `if/else` que:

- exiba `"You can drive"` se a pessoa tiver 18 anos ou mais **e** possuir carteira;
- caso contrário, exiba `"You cannot drive"` seguido do motivo (por exemplo: `"because you are under 18"` ou `"because you don't have a driver's license"`).

---

# Exercício 08 – Situação da temperatura

Uma estação meteorológica registrou a temperatura de uma cidade, em graus Celsius, guardada em uma variável.

Usando `if/else if/else`, exiba uma mensagem de acordo com as faixas abaixo:

| Faixa (°C)        | Mensagem         |
|-------------------|------------------|
| menor que 10       | "Very cold"      |
| de 10 a 17         | "Cold"           |
| de 18 a 25         | "Pleasant"       |
| de 26 a 32         | "Hot"            |
| maior que 32        | "Very hot"       |

Teste o código com pelo menos duas temperaturas diferentes (trocando o valor da variável e rodando de novo).

---

# Exercício 09 – Dia da semana

Um sistema recebe um número de 1 a 7 representando um dia da semana, guardado em uma variável (1 = Sunday, 2 = Monday, ..., 7 = Saturday).

Usando `switch/case`, exiba o nome do dia correspondente em inglês (ex: `"Wednesday"`). Se o número não estiver entre 1 e 7, exiba `"Invalid day"` (use o `default` do switch para isso).

---

# Exercício 10 – Compra com desconto

Uma loja tem 4 categorias de cliente, cada uma com um desconto fixo:

| Categoria  | Desconto |
|------------|----------|
| Bronze     | 5%       |
| Silver     | 10%      |
| Gold       | 15%      |
| Platinum   | 20%      |

Considere uma compra no valor de **R$ 850,00** e uma variável com a categoria do cliente (string).

Usando `switch/case`, calcule e exiba:

- a categoria do cliente;
- o percentual de desconto aplicado;
- o valor do desconto (em reais);
- o valor final da compra (total - desconto).

Se a categoria informada não existir, exiba `"Invalid category"` (use o `default` do switch).

---

# Desafio (Opcional)

Pesquise o preço atual (real, de hoje) de um produto de tecnologia à sua escolha (ex: um celular, um notebook, um fone de ouvido).

Guarde em variáveis:

- nome do produto (string);
- preço unitário pesquisado (number);
- quantidade que a pessoa quer comprar (number, escolha um valor, ex: 2).

Calcule o valor total (preço × quantidade) e use um `if/else` para exibir se a compra **ultrapassa R$ 5.000,00** ou não.

Exiba no console: nome do produto, preço unitário, quantidade, valor total e a mensagem sobre o limite de R$ 5.000,00.

---

# Boas práticas

- Utilize nomes claros para variáveis e constantes.
- Organize o código com espaçamento e comentários explicando cada parte.
- No Exercício 06 e 08, repetir o teste com valores diferentes é esperado — o objetivo ali é justamente ver o mesmo código reagindo a entradas diferentes.
- Teste o código sempre que terminar uma parte, não só no final.
- Leia o enunciado inteiro antes de começar a programar.

Um programa que funciona e é fácil de entender vale mais do que um programa complicado.