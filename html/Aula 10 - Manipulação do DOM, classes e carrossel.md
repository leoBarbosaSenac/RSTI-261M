# Manipulação do DOM — Classes e Carrossel

## 1. Manipulando classes com JavaScript

Até agora, utilizamos o HTML para criar a estrutura da página e o CSS para definir sua aparência.

Com JavaScript, podemos começar a **alterar essa estrutura e aparência enquanto a página está sendo utilizada**.

Uma das formas mais simples de fazer isso é através das classes CSS.

Para trabalhar com classes de um elemento, utilizamos:

```javascript
elemento.classList
```

---

## 2. Selecionando um elemento

Primeiro, precisamos selecionar o elemento HTML que queremos manipular.

HTML:

```html
<div id="card">
    Meu Card
</div>
```

JavaScript:

```javascript
const card = document.querySelector("#card");
```

Agora a variável `card` representa o elemento:

```html
<div id="card">
```

---

# 3. Adicionando uma classe

Para adicionar uma classe utilizamos:

```javascript
elemento.classList.add("nome-da-classe");
```

Por exemplo:

```javascript
card.classList.add("ativo");
```

Antes:

```html
<div id="card">
    Meu Card
</div>
```

Depois:

```html
<div id="card" class="ativo">
    Meu Card
</div>
```

### Exemplo

CSS:

```css
.ativo {
    background-color: purple;
    color: white;
}
```

JavaScript:

```javascript
const card = document.querySelector("#card");

card.classList.add("ativo");
```

O JavaScript adiciona a classe e o CSS define o que essa classe fará.

---

# 4. Removendo uma classe

Para remover uma classe:

```javascript
elemento.classList.remove("nome-da-classe");
```

Exemplo:

```javascript
card.classList.remove("ativo");
```

Se o elemento possuir:

```html
<div id="card" class="ativo">
```

depois do `remove()`:

```html
<div id="card">
```

A classe `ativo` foi removida.

---

# 5. Adicionar e remover classes através de um botão

Podemos utilizar eventos para controlar quando uma classe será adicionada ou removida.

HTML:

```html
<div id="card">
    Meu Card
</div>

<button id="ativar">
    Ativar
</button>

<button id="desativar">
    Desativar
</button>
```

CSS:

```css
.ativo {
    background-color: purple;
    color: white;
}
```

JavaScript:

```javascript
const card = document.querySelector("#card");

const ativar = document.querySelector("#ativar");
const desativar = document.querySelector("#desativar");

ativar.addEventListener("click", function () {
    card.classList.add("ativo");
});

desativar.addEventListener("click", function () {
    card.classList.remove("ativo");
});
```

Agora temos:

```text
Botão ATIVAR
      ↓
classList.add()
      ↓
adiciona "ativo"


Botão DESATIVAR
      ↓
classList.remove()
      ↓
remove "ativo"
```

---

# 6. Alternando uma classe com toggle

Também podemos utilizar:

```javascript
elemento.classList.toggle("nome-da-classe");
```

O `toggle()` funciona como um interruptor.

Se a classe não existir:

```javascript
card.classList.toggle("ativo");
```

ela será adicionada.

Se a classe já existir:

```javascript
card.classList.toggle("ativo");
```

ela será removida.

Exemplo:

```javascript
const card = document.querySelector("#card");
const button = document.querySelector("#button");

button.addEventListener("click", function () {
    card.classList.toggle("ativo");
});
```

Isso é bastante utilizado para:

- abrir e fechar menus;
- mostrar e esconder elementos;
- ativar botões;
- alterar temas;
- criar animações;
- controlar componentes da página.

---

# 7. Escondendo elementos com `display: none`

Agora podemos combinar JavaScript com CSS.

Uma das propriedades mais importantes para esconder um elemento é:

```css
display: none;
```

Por exemplo:

```css
.escondido {
    display: none;
}
```

Se adicionarmos essa classe a um elemento:

```html
<div class="escondido">
    Este conteúdo está escondido.
</div>
```

o elemento não será exibido na página.

---

# 8. Usando JavaScript para esconder e mostrar

Podemos combinar `classList` com `display: none`.

HTML:

```html
<div id="mensagem">
    Olá! Eu posso ser escondido.
</div>

<button id="button">
    Mostrar / Esconder
</button>
```

CSS:

```css
.escondido {
    display: none;
}
```

JavaScript:

```javascript
const mensagem = document.querySelector("#mensagem");
const button = document.querySelector("#button");

button.addEventListener("click", function () {
    mensagem.classList.toggle("escondido");
});
```

Quando o botão for clicado:

```text
não possui "escondido"
        ↓
     toggle()
        ↓
possui "escondido"
        ↓
display: none
        ↓
elemento desaparece
```

Ao clicar novamente:

```text
possui "escondido"
        ↓
     toggle()
        ↓
remove "escondido"
        ↓
elemento aparece novamente
```

---

# 9. Começando um carrossel

Agora vamos utilizar esses conceitos para criar um **carrossel**.

Um carrossel possui vários conteúdos, mas normalmente apenas um deles fica visível por vez.

Podemos imaginar:

```text
┌─────────────────────┐
│                     │
│      SLIDE 1        │
│                     │
└─────────────────────┘

        ↓ próximo

┌─────────────────────┐
│                     │
│      SLIDE 2        │
│                     │
└─────────────────────┘

        ↓ próximo

┌─────────────────────┐
│                     │
│      SLIDE 3        │
│                     │
└─────────────────────┘
```

---

# 10. Estrutura HTML

Vamos criar três slides:

```html
<div class="carrossel">

    <div class="slide ativo">
        <h2>Slide 1</h2>
        <p>Conteúdo do primeiro slide.</p>
    </div>

    <div class="slide">
        <h2>Slide 2</h2>
        <p>Conteúdo do segundo slide.</p>
    </div>

    <div class="slide">
        <h2>Slide 3</h2>
        <p>Conteúdo do terceiro slide.</p>
    </div>

</div>

<button id="anterior">
    Anterior
</button>

<button id="proximo">
    Próximo
</button>
```

Perceba que somente o primeiro slide possui:

```html
class="slide ativo"
```

Os outros possuem apenas:

```html
class="slide"
```

---

# 11. Escondendo os slides

Agora vamos utilizar o CSS:

```css
.slide {
    display: none;
}

.slide.ativo {
    display: block;
}
```

Isso significa:

```text
.slide
    ↓
display: none
    ↓
todos os slides ficam escondidos


.slide.ativo
    ↓
display: block
    ↓
o slide que possui "ativo" aparece
```

Como o primeiro slide começa com a classe `ativo`, ele será exibido.

---

# 12. Controlando o slide com JavaScript

Precisamos saber qual slide está sendo exibido.

Para isso, podemos criar uma variável:

```javascript
let slideAtual = 0;
```

Lembre-se:

Em JavaScript, a contagem de posições começa em `0`.

Então:

```text
slideAtual = 0 → primeiro slide
slideAtual = 1 → segundo slide
slideAtual = 2 → terceiro slide
```

Agora vamos selecionar todos os slides:

```javascript
const slides = document.querySelectorAll(".slide");
```

E também os botões:

```javascript
const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");
```

---

# 13. Indo para o próximo slide

Quando clicarmos em "Próximo", precisamos:

1. Remover `ativo` do slide atual.
2. Avançar para o próximo slide.
3. Adicionar `ativo` ao novo slide.

```javascript
proximo.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    slides[slideAtual].classList.add("ativo");

});
```

Existe, porém, um problema.

Se tivermos três slides:

```text
0 → Slide 1
1 → Slide 2
2 → Slide 3
```

e tentarmos ir para:

```text
3
```

esse slide não existe.

Precisamos verificar isso.

---

# 14. Voltando para o primeiro slide

Podemos utilizar uma condição:

```javascript
if (slideAtual >= slides.length) {
    slideAtual = 0;
}
```

Nosso código fica:

```javascript
proximo.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    slides[slideAtual].classList.add("ativo");

});
```

Agora:

```text
Slide 1
   ↓
Slide 2
   ↓
Slide 3
   ↓
Slide 1
   ↓
Slide 2
   ↓
...
```

---

# 15. Voltando para o slide anterior

Agora precisamos fazer o caminho contrário.

Ao clicar em "Anterior":

1. Removemos `ativo` do slide atual.
2. Diminuímos `slideAtual`.
3. Adicionamos `ativo` ao novo slide.

```javascript
anterior.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual--;

    slides[slideAtual].classList.add("ativo");

});
```

Mas existe outro problema.

Se estivermos no primeiro slide:

```text
slideAtual = 0
```

e diminuirmos:

```javascript
slideAtual--;
```

teremos:

```text
slideAtual = -1
```

Esse slide também não existe.

Então precisamos fazer uma verificação:

```javascript
if (slideAtual < 0) {
    slideAtual = slides.length - 1;
}
```

O código completo fica:

```javascript
anterior.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    slides[slideAtual].classList.add("ativo");

});
```

Agora podemos navegar nos dois sentidos:

```text
← Anterior

Slide 1
Slide 2
Slide 3

Próximo →
```

---

# 16. Criando uma animação de movimento

Até agora, o slide simplesmente desaparece e o próximo aparece.

Podemos criar uma sensação de movimento utilizando `transform`.

Uma propriedade importante para isso é:

```css
transform: translateX();
```

Ela permite mover um elemento horizontalmente.

Por exemplo:

```css
transform: translateX(100%);
```

move o elemento para a direita.

Enquanto:

```css
transform: translateX(-100%);
```

move o elemento para a esquerda.

---

# 17. Usando `transition`

Para que o movimento não aconteça instantaneamente, podemos utilizar:

```css
transition: transform 0.5s;
```

Por exemplo:

```css
.slide {
    transition: transform 0.5s;
}
```

Isso faz com que uma mudança no `transform` aconteça de maneira gradual.

```text
sem transition:

posição A ──────────────→ posição B


com transition:

posição A ──→ ──→ ──→ ──→ posição B
```

---

# 18. Uma estrutura de carrossel com movimento

Para um carrossel que realmente "desliza", é comum utilizar um elemento interno contendo todos os slides:

```html
<div class="carrossel">

    <div class="slides">

        <div class="slide">
            Slide 1
        </div>

        <div class="slide">
            Slide 2
        </div>

        <div class="slide">
            Slide 3
        </div>

    </div>

</div>
```

O `.carrossel` funciona como uma janela.

```css
.carrossel {
    overflow: hidden;
}
```

Assim, tudo que ultrapassar os limites do carrossel ficará escondido.

Os slides ficam lado a lado:

```css
.slides {
    display: flex;
    transition: transform 0.5s;
}

.slide {
    min-width: 100%;
}
```

Visualmente:

```text
┌───────────────┐
│    Slide 1    │
└───────────────┘
```

Mas por trás da "janela":

```text
┌───────────────┐
│    Slide 1    │ Slide 2 │ Slide 3 │
└───────────────┘
```

Quando alteramos:

```css
transform: translateX(-100%);
```

o segundo slide passa a ocupar o espaço visível.

---

# 19. Controlando o movimento com JavaScript

Podemos calcular a posição utilizando o número do slide atual.

```javascript
let slideAtual = 0;
```

Quando clicamos em próximo:

```javascript
slideAtual++;
```

Depois podemos mover os slides:

```javascript
slides.style.transform = `translateX(-${slideAtual * 100}%)`;
```

A lógica será:

```text
slideAtual = 0
translateX(0%)


slideAtual = 1
translateX(-100%)


slideAtual = 2
translateX(-200%)
```

Dessa maneira, cada clique movimenta o carrossel exatamente uma largura de slide.

---

# 20. Resumindo

Neste conteúdo aprendemos:

### Manipulação de classes

```javascript
elemento.classList.add("classe");
```

Adiciona uma classe.

```javascript
elemento.classList.remove("classe");
```

Remove uma classe.

```javascript
elemento.classList.toggle("classe");
```

Adiciona ou remove uma classe.

### Esconder elementos

```css
.escondido {
    display: none;
}
```

### Carrossel simples

Utilizamos uma classe como:

```html
class="ativo"
```

para determinar qual slide está visível.

### Carrossel com movimento

Utilizamos:

```css
transform: translateX();
```

junto com:

```css
transition: transform 0.5s;
```

para criar a animação.

---

# Exercício — Carrossel da Calculadora

Agora vamos aplicar tudo o que aprendemos no projeto da **calculadora que vocês já estão desenvolvendo**.

A calculadora deverá possuir um **carrossel com pelo menos dois slides**.

## Slide 1 — Calculadora

O primeiro slide deverá continuar contendo a calculadora desenvolvida por vocês.

Mantenha:

- campos de entrada;
- operações;
- botão;
- resultado;
- imagens;
- estilos;
- animações que já foram desenvolvidas.

A calculadora deve continuar funcionando normalmente.

---

## Slide 2 — Sobre o projeto

O segundo slide deverá apresentar informações sobre o desenvolvimento da calculadora.

Inclua, no mínimo:

- Nome do projeto;
- Nome do(s) desenvolvedor(es);
- Curso;
- Turma;
- Unidade Curricular;
- Data ou período de desenvolvimento;
- Breve descrição do projeto;
- Tecnologias utilizadas;
- Link para o repositório do projeto.

Você pode adicionar outras informações que considerar relevantes.

---

## Funcionamento do carrossel

O usuário deverá conseguir navegar entre os slides.

Crie pelo menos:

```text
← Anterior
```

e

```text
Próximo →
```

O carrossel deverá:

1. Exibir inicialmente o primeiro slide;
2. Permitir avançar para o segundo slide;
3. Permitir voltar para o primeiro slide;
4. Possuir uma animação de movimento;
5. Funcionar sem recarregar a página;
6. Manter a calculadora funcionando normalmente.

---

## Requisitos técnicos

Para realizar o exercício, utilize os conceitos estudados nesta aula.

Você deverá utilizar:

- `document.querySelector()`;
- `document.querySelectorAll()`;
- `classList.add()`;
- `classList.remove()` ou `classList.toggle()`;
- `addEventListener()`;
- `if`;
- variável para controlar o slide atual;
- `display: none` **ou** `overflow: hidden`;
- `transform: translateX()`;
- `transition`.

### Desafio extra

Depois de fazer o carrossel funcionar, tente adicionar:

- indicadores de qual slide está ativo;
- botões estilizados;
- navegação automática;
- três ou mais slides;
- animações diferentes;
- botão para voltar diretamente ao primeiro slide.

**Importante:** primeiro faça o carrossel funcionar. Depois se preocupe com a aparência e com os efeitos adicionais.
