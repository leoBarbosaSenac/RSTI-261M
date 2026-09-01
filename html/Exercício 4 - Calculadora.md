# 🧮 Atividade — Calculadora Web

## 🎯 Objetivo

Desenvolver uma **calculadora utilizando HTML, CSS e JavaScript**, capaz de receber dois números, realizar uma operação matemática e apresentar o resultado na página.

A atividade tem como objetivo praticar conceitos de:

* Estruturação de páginas com **HTML**
* Estilização com **CSS**
* Manipulação de elementos com **JavaScript**
* Seleção de elementos do DOM
* Eventos e interação com o usuário
* Responsividade

---

## 📋 Proposta

Crie um site que funcione como uma calculadora simples.

A calculadora deverá:

1. Possuir um campo para o usuário informar o **primeiro número**;
2. Possuir um campo para informar o **segundo número**;
3. Possuir uma forma de realizar uma operação matemática;
4. Exibir o **resultado do cálculo** na própria página.

### ➕ Operação inicial

Como requisito mínimo, sua calculadora deve ser capaz de realizar uma **soma entre os dois números informados**.

> **Desafio:** depois de fazer a soma funcionar, tente adicionar outras operações, como subtração, multiplicação e divisão.

---

## 🎨 Estilização

A calculadora também deverá ser estilizada utilizando **CSS**.

Não é necessário seguir um modelo específico. Você pode criar seu próprio design!

Procure trabalhar aspectos como:

* Cores;
* Tipografia;
* Espaçamentos;
* Bordas;
* Sombras;
* Tamanho dos elementos;
* Organização dos componentes;
* Estados dos botões (`hover`, por exemplo).

**A aparência da aplicação também faz parte da atividade.**

---

## 📱 Responsividade

O site deverá funcionar adequadamente em diferentes tamanhos de tela.

Pense em como sua calculadora será apresentada:

* Em um computador;
* Em um notebook;
* Em um tablet;
* Em um celular.

Utilize os conhecimentos de **CSS responsivo** trabalhados durante o curso para adaptar a interface.

---

## 💻 Código de apoio

O código abaixo apresenta uma das formas possíveis de construir uma calculadora simples.

Ele pode ser utilizado como **material de apoio e referência**:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Calculadora</title>
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <section>
        <h1 class="result">0</h1>

        <input type="number" id="firstNumber">
        <input type="number" id="secondNumber">

        <button class="button">Somar</button>
    </section>

    <script src="script.js"></script>
</body>

</html>
```

```javascript
const num1 = document.querySelector("#firstNumber");

const num2 = document.querySelector("#secondNumber");

const button = document.querySelector(".button");

const result = document.querySelector(".result");

button.addEventListener("click", function () {

    result.textContent = Number(num1.value) + Number(num2.value);

});
```

### ⚠️ Importante

**Não é obrigatório fazer a atividade utilizando exatamente esse código ou essa estrutura.**

Existem diversas maneiras de desenvolver a mesma solução.

O código foi disponibilizado apenas para ajudar quem estiver com dificuldade em começar ou quiser entender uma possível forma de resolver o problema.

---

## 🔎 Pesquise!

**Pesquisar faz parte do desenvolvimento.**

Você não precisa saber tudo de cabeça para conseguir programar.

Durante a atividade, utilize a internet para pesquisar sobre os conceitos que encontrar dificuldade em utilizar.

Por exemplo:

* Como pegar o valor de um `input` com JavaScript?
* Como transformar o valor de um input em número?
* Como utilizar `addEventListener`?
* Como alterar o conteúdo de um elemento HTML?
* Como criar um layout responsivo com CSS?
* Como utilizar `@media` no CSS?

Tente entender o que encontrou antes de simplesmente copiar e colar.

---

## 📚 Revise os conteúdos

Se surgir alguma dificuldade, **revisite os conteúdos e exemplos disponibilizados no GitHub durante o curso**.

Muitas vezes você já viu o conceito necessário anteriormente, mas pode ter esquecido algum detalhe.

Voltar aos exemplos, testar novamente e modificar os códigos é uma parte importante do aprendizado de programação.

> **Programação se aprende principalmente praticando.**

---

## ⭐ Desafios extras

Depois que sua calculadora estiver funcionando, tente melhorar o projeto.

### 🚀 Boa prática!

Não tenha medo de testar, errar e modificar o código.

**Tente entender o que cada parte faz e, principalmente, tente criar sua própria versão da calculadora.**
