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


# Exercícios — JavaScript no Front-End

Estes exercícios têm como objetivo praticar a interação entre **JavaScript, HTML e CSS**, utilizando os conceitos de DOM e eventos.

---

# 1. Encontrando elementos

Crie uma página com:

```html
<h1 id="titulo">Meu título</h1>

<p id="texto">Um texto qualquer.</p>

<button id="botao">Clique aqui</button>
```

No JavaScript:

1. Encontre o `<h1>` usando `querySelector()`.
2. Encontre o `<p>` usando `querySelector()`.
3. Encontre o `<button>` usando `querySelector()`.
4. Mostre os três elementos no `console.log()`.

**Objetivo:** praticar `document.querySelector()`.

---

# 2. Alterando textos

Utilize a mesma página do exercício anterior.

Faça o JavaScript alterar:

- O título para `"Bem-vindo ao JavaScript!"`.
- O texto para `"Esse texto foi alterado pelo JavaScript."`.
- O texto do botão para `"Novo botão"`.

**Objetivo:** praticar `textContent`.

---

# 3. Perfil dinâmico

Crie:

```html
<h1 id="nome">Nome</h1>

<p id="idade">Idade</p>

<p id="cidade">Cidade</p>
```

No JavaScript, crie:

```javascript
const nome = "Maria";
const idade = 18;
const cidade = "São Leopoldo";
```

Utilize essas variáveis para preencher os elementos da página.

O resultado deve ser semelhante a:

```text
Maria
18 anos
São Leopoldo
```

**Objetivo:** juntar variáveis + `querySelector()` + `textContent`.

---

# 4. Trocando uma imagem

Crie:

```html
<img id="imagem" src="img/gato.jpg" alt="Gato">

<button id="botao">Trocar imagem</button>
```

Quando o botão for clicado, altere a imagem para outra imagem.

Também altere o `alt`.

**Objetivo:** trabalhar com atributos e eventos.

---

# 5. Investigando atributos

Crie uma imagem:

```html
<img 
    id="imagem"
    src="img/gato.jpg"
    alt="Imagem de um gato"
>
```

No JavaScript:

1. Mostre o `src` atual no console.
2. Mostre o `alt` atual no console.
3. Altere o `src` usando `setAttribute()`.
4. Altere o `alt` usando `setAttribute()`.

**Objetivo:** praticar `getAttribute()` e `setAttribute()`.

---

# 6. Meu primeiro botão

Crie:

```html
<h1 id="mensagem">Ainda não aconteceu nada...</h1>

<button id="botao">
    Clique aqui
</button>
```

Quando o usuário clicar no botão, altere o `<h1>` para:

```text
Você clicou no botão!
```

**Objetivo:** entender o ciclo:

```text
selecionar elemento
        ↓
escutar evento
        ↓
executar função
        ↓
alterar elemento
```

---

# 7. Três botões

Crie:

```html
<h1 id="mensagem">Escolha uma opção</h1>

<button id="btn1">Olá</button>
<button id="btn2">Tchau</button>
<button id="btn3">JavaScript</button>
```

Cada botão deve apresentar uma mensagem diferente no `<h1>`.

Por exemplo:

```text
Olá → "Olá, usuário!"

Tchau → "Até mais!"

JavaScript → "Estou aprendendo JavaScript!"
```

**Objetivo:** trabalhar com vários elementos e vários eventos.

---

# 8. Botão contador

Crie:

```html
<h1 id="contador">0</h1>

<button id="diminuir">-</button>
<button id="aumentar">+</button>
```

O botão `+` deve aumentar o número.

O botão `-` deve diminuir.

Exemplo:

```text
      0

[ - ] [ + ]
```

Depois de clicar três vezes no `+`:

```text
      3

[ - ] [ + ]
```

**Objetivo:** juntar:

- variável;
- evento;
- operador;
- `textContent`.

---

# 9. Mouse entrou, mouse saiu

Crie:

```html
<div id="quadrado">
    Passe o mouse aqui
</div>
```

Quando o mouse entrar no elemento, altere o texto para:

```text
O mouse entrou!
```

Quando o mouse sair:

```text
O mouse saiu!
```

Utilize:

```javascript
mouseenter
mouseleave
```

**Objetivo:** entender que existem diferentes tipos de eventos.

---

# 10. Teclando

Crie:

```html
<input id="campo" type="text">

<p id="resultado"></p>
```

Utilize o evento `input`.

Enquanto o usuário digita, o `<p>` deve mostrar exatamente o que está sendo digitado.

Por exemplo:

```text
Campo:

[Leonardo]

Resultado:

Leonardo
```

Se apagar o texto, o resultado também deverá ficar vazio.

**Objetivo:** praticar `input` e `.value`.
