# JavaScript no Front-End

Até aqui, já trabalhamos bastante com:

- **HTML** → estrutura da página.
- **CSS** → aparência da página.
- **JavaScript** → lógica e comportamento.

Vocês já tiveram contato com os fundamentos do JavaScript, então neste material vamos fazer uma **revisão rápida** e começar a trabalhar com algo muito mais interessante:

> **Como fazer o JavaScript conversar com o HTML e o CSS.**

---

# 1. HTML, CSS e JavaScript

Podemos pensar nas três tecnologias desta forma:

```text
HTML
 ↓
Estrutura

CSS
 ↓
Aparência

JavaScript
 ↓
Comportamento
```

Por exemplo:

```html
<button>Comprar</button>
```

O HTML cria o botão.

```css
button {
    background-color: green;
}
```

O CSS deixa o botão verde.

Mas ainda falta responder:

> O que acontece quando alguém clicar nesse botão?

É aí que entra o JavaScript.

```javascript
// Quando o botão for clicado...
// faça alguma coisa.
```

---

# 2. Revisão rápida

Vocês já conhecem variáveis:

```javascript
const nome = "João";
let idade = 18;
```

Operações:

```javascript
const resultado = 10 + 5;
```

Comparações:

```javascript
idade >= 18
```

Condições:

```javascript
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

Funções:

```javascript
function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}
```

E chamadas:

```javascript
saudar("João");
```

Esses conceitos continuam sendo importantes.

A diferença é que agora vamos utilizá-los para **controlar uma página Web**.

---

# 3. O navegador e o JavaScript

Quando o navegador abre um HTML, ele transforma aquela página em uma estrutura que o JavaScript consegue acessar.

Essa estrutura é chamada de:

> **DOM — Document Object Model**

Podemos imaginar o HTML:

```html
<body>

    <h1>Meu Site</h1>

    <p>Olá!</p>

    <button>Clique aqui</button>

</body>
```

Como uma árvore:

```text
body
│
├── h1
│
├── p
│
└── button
```

O JavaScript consegue encontrar esses elementos e manipulá-los.

Por exemplo:

```javascript
document.querySelector("h1");
```

Estamos dizendo:

> "Encontre o primeiro `<h1>` da página."

---

# 4. `document`

O objeto `document` representa a página HTML atual.

Por isso podemos fazer:

```javascript
document.querySelector("h1");
```

Ou:

```javascript
document.querySelector("button");
```

Ou:

```javascript
document.querySelector("p");
```

O JavaScript passa a conseguir acessar os elementos que vocês criaram com HTML.

---

# 5. `querySelector()`

Uma das ferramentas mais importantes para começar a trabalhar com DOM é:

```javascript
document.querySelector()
```

Ele recebe um **seletor CSS**.

Isso significa que podemos utilizar os mesmos seletores que já conhecemos no CSS.

### Por tag

```javascript
document.querySelector("h1");
```

### Por classe

```javascript
document.querySelector(".card");
```

### Por ID

```javascript
document.querySelector("#titulo");
```

### Mais complexo

```javascript
document.querySelector(".card h2");
```

Isso é interessante porque vocês já conhecem seletores CSS.

> O JavaScript aproveita boa parte da lógica de seleção que vocês já aprenderam no CSS.

---

# 6. Guardando um elemento em uma variável

Podemos guardar o elemento encontrado:

```javascript
const titulo = document.querySelector("h1");
```

Agora `titulo` representa aquele elemento HTML.

Podemos trabalhar com ele:

```javascript
console.log(titulo);
```

O console exibirá o elemento.

---

# 7. Alterando o conteúdo

HTML:

```html
<h1 id="titulo">Olá!</h1>
```

JavaScript:

```javascript
const titulo = document.querySelector("#titulo");

titulo.textContent = "Olá, JavaScript!";
```

O conteúdo:

```text
Olá!
```

passará a ser:

```text
Olá, JavaScript!
```

---

# 8. `textContent`

`textContent` permite acessar ou modificar o texto de um elemento.

Por exemplo:

```javascript
const titulo = document.querySelector("#titulo");

console.log(titulo.textContent);
```

Podemos também modificar:

```javascript
titulo.textContent = "Novo título";
```

---

# 9. Alterando vários elementos

HTML:

```html
<h1 id="titulo">Meu site</h1>

<p id="descricao">
    Uma descrição qualquer.
</p>
```

JavaScript:

```javascript
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");

titulo.textContent = "Meu novo site";

descricao.textContent = "Essa descrição foi alterada pelo JavaScript.";
```

---

# 10. Alterando atributos

HTML:

```html
<img id="imagem" src="img/gato.jpg" alt="Gato">
```

Podemos alterar o `src`:

```javascript
const imagem = document.querySelector("#imagem");

imagem.src = "img/cachorro.jpg";
```

Também podemos alterar o `alt`:

```javascript
imagem.alt = "Cachorro";
```

Ou seja, o JavaScript também consegue modificar os **atributos dos elementos HTML**.

---

# 11. `getAttribute()` e `setAttribute()`

Outra maneira de trabalhar com atributos é:

```javascript
elemento.getAttribute()
```

e:

```javascript
elemento.setAttribute()
```

Por exemplo:

```javascript
const imagem = document.querySelector("#imagem");

console.log(imagem.getAttribute("src"));
```

Para modificar:

```javascript
imagem.setAttribute("src", "img/cachorro.jpg");
```

Podemos pensar:

```text
getAttribute()
      ↓
PEGAR informação

setAttribute()
      ↓
ALTERAR informação
```

---

# 12. Eventos

Agora chegamos a uma das partes mais importantes.

Um **evento** é algo que acontece na página.

Por exemplo:

- clique;
- movimento do mouse;
- tecla pressionada;
- formulário enviado;
- página carregada;
- campo alterado.

O JavaScript pode "escutar" esses acontecimentos.

Por exemplo:

```javascript
botao.addEventListener("click", function() {

    console.log("O botão foi clicado!");

});
```

---

# 13. `addEventListener()`

A estrutura é:

```javascript
elemento.addEventListener("evento", função);
```

Por exemplo:

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {

    console.log("Clique!");

});
```

Podemos ler isso como:

> "Escute o botão. Quando acontecer um `click`, execute essa função."

---

# 14. Primeiro exemplo completo

HTML:

```html
<h1 id="titulo">Olá!</h1>

<button id="botao">
    Clique aqui
</button>
```

JavaScript:

```javascript
const titulo = document.querySelector("#titulo");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {

    titulo.textContent = "Você clicou!";

});
```

Agora a página possui comportamento.

Antes:

```text
Olá!

[ Clique aqui ]
```

Depois do clique:

```text
Você clicou!

[ Clique aqui ]
```

---

# 15. Eventos mais comuns

Alguns eventos importantes:

| Evento | Quando acontece |
|---|---|
| `click` | Elemento clicado |
| `dblclick` | Duplo clique |
| `mouseenter` | Mouse entra no elemento |
| `mouseleave` | Mouse sai do elemento |
| `keydown` | Tecla pressionada |
| `keyup` | Tecla liberada |
| `input` | Valor de um campo é alterado |
| `change` | Valor de um campo é confirmado/alterado |
| `submit` | Formulário enviado |

Exemplo:

```javascript
botao.addEventListener("mouseenter", function() {
    console.log("Mouse entrou!");
});
```
