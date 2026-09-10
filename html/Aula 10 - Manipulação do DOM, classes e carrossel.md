# Manipulação do DOM --- Classes e Carrossel

## 1. Manipulando classes com JavaScript

Até agora, utilizamos o HTML para criar a estrutura da página e o CSS
para definir sua aparência.

Com JavaScript, podemos começar a **alterar essa estrutura e aparência
enquanto a página está sendo utilizada**.

Uma das formas mais simples de fazer isso é através das classes CSS.

Para trabalhar com classes de um elemento, utilizamos:

``` javascript
elemento.classList
```

------------------------------------------------------------------------

## 2. Selecionando um elemento

Primeiro, precisamos selecionar o elemento HTML que queremos manipular.

HTML:

``` html
<div id="card">
    Meu Card
</div>
```

JavaScript:

``` javascript
const card = document.querySelector("#card");
```

Agora a variável `card` representa o elemento:

``` html
<div id="card">
```

------------------------------------------------------------------------

# 3. Adicionando uma classe

Para adicionar uma classe utilizamos:

``` javascript
elemento.classList.add("nome-da-classe");
```

Por exemplo:

``` javascript
card.classList.add("ativo");
```

Antes:

``` html
<div id="card">
    Meu Card
</div>
```

Depois:

``` html
<div id="card" class="ativo">
    Meu Card
</div>
```

### Exemplo

CSS:

``` css
.ativo {
    background-color: purple;
    color: white;
}
```

JavaScript:

``` javascript
const card = document.querySelector("#card");

card.classList.add("ativo");
```

O JavaScript adiciona a classe e o CSS define o que essa classe fará.

------------------------------------------------------------------------

# 4. Removendo uma classe

Para remover uma classe:

``` javascript
elemento.classList.remove("nome-da-classe");
```

Exemplo:

``` javascript
card.classList.remove("ativo");
```

Se o elemento possuir:

``` html
<div id="card" class="ativo">
```

depois do `remove()`:

``` html
<div id="card">
```

A classe `ativo` foi removida.

------------------------------------------------------------------------

# 5. Adicionar e remover classes através de um botão

Podemos utilizar eventos para controlar quando uma classe será
adicionada ou removida.

HTML:

``` html
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

``` css
.ativo {
    background-color: purple;
    color: white;
}
```

JavaScript:

``` javascript
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

``` text
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

------------------------------------------------------------------------

# 6. Alternando uma classe com toggle

Também podemos utilizar:

``` javascript
elemento.classList.toggle("nome-da-classe");
```

O `toggle()` funciona como um interruptor.

Se a classe não existir:

``` javascript
card.classList.toggle("ativo");
```

ela será adicionada.

Se a classe já existir:

``` javascript
card.classList.toggle("ativo");
```

ela será removida.

Exemplo:

``` javascript
const card = document.querySelector("#card");
const button = document.querySelector("#button");

button.addEventListener("click", function () {
    card.classList.toggle("ativo");
});
```

Isso é bastante utilizado para:

-   abrir e fechar menus;
-   mostrar e esconder elementos;
-   ativar botões;
-   alterar temas;
-   criar animações;
-   controlar componentes da página.

------------------------------------------------------------------------

# 7. Escondendo elementos com `display: none`

Agora podemos combinar JavaScript com CSS.

Uma das propriedades mais importantes para esconder um elemento é:

``` css
display: none;
```

Por exemplo:

``` css
.escondido {
    display: none;
}
```

Se adicionarmos essa classe a um elemento:

``` html
<div class="escondido">
    Este conteúdo está escondido.
</div>
```

o elemento não será exibido na página.

------------------------------------------------------------------------

# 8. Usando JavaScript para esconder e mostrar

Podemos combinar `classList` com `display: none`.

HTML:

``` html
<div id="mensagem">
    Olá! Eu posso ser escondido.
</div>

<button id="button">
    Mostrar / Esconder
</button>
```

CSS:

``` css
.escondido {
    display: none;
}
```

JavaScript:

``` javascript
const mensagem = document.querySelector("#mensagem");
const button = document.querySelector("#button");

button.addEventListener("click", function () {
    mensagem.classList.toggle("escondido");
});
```

Quando o botão for clicado:

``` text
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

``` text
possui "escondido"
        ↓
     toggle()
        ↓
remove "escondido"
        ↓
elemento aparece novamente
```

------------------------------------------------------------------------

# 9. Começando um carrossel

Agora vamos utilizar esses conceitos para criar um **carrossel**.

Um carrossel possui vários conteúdos, mas normalmente apenas um deles
fica visível por vez.

Podemos imaginar:

``` text
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

------------------------------------------------------------------------

# 10. Estrutura HTML

Vamos criar três slides:

``` html
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

``` html
class="slide ativo"
```

Os outros possuem apenas:

``` html
class="slide"
```

------------------------------------------------------------------------

# 11. Escondendo os slides

Agora vamos utilizar o CSS:

``` css
.slide {
    display: none;
}

.slide.ativo {
    display: block;
}
```

Isso significa:

``` text
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

------------------------------------------------------------------------

# 12. Controlando o slide com JavaScript

Precisamos saber qual slide está sendo exibido.

Para isso, podemos criar uma variável:

``` javascript
let slideAtual = 0;
```

Lembre-se:

Em JavaScript, a contagem de posições começa em `0`.

Então:

``` text
slideAtual = 0 → primeiro slide
slideAtual = 1 → segundo slide
slideAtual = 2 → terceiro slide
```

Agora vamos selecionar todos os slides:

``` javascript
const slides = document.querySelectorAll(".slide");
```

E também os botões:

``` javascript
const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");
```

------------------------------------------------------------------------

# 13. Indo para o próximo slide

Quando clicarmos em "Próximo", precisamos:

1.  Remover `ativo` do slide atual.
2.  Avançar para o próximo slide.
3.  Adicionar `ativo` ao novo slide.

``` javascript
proximo.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual++;

    slides[slideAtual].classList.add("ativo");

});
```

Existe, porém, um problema.

Se tivermos três slides:

``` text
0 → Slide 1
1 → Slide 2
2 → Slide 3
```

e tentarmos ir para:

``` text
3
```

esse slide não existe.

Precisamos verificar isso.

------------------------------------------------------------------------

# 14. Voltando para o primeiro slide

Podemos utilizar uma condição:

``` javascript
if (slideAtual >= slides.length) {
    slideAtual = 0;
}
```

Nosso código fica:

``` javascript
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

``` text
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

------------------------------------------------------------------------

# 15. Voltando para o slide anterior

Agora precisamos fazer o caminho contrário.

Ao clicar em "Anterior":

1.  Removemos `ativo` do slide atual.
2.  Diminuímos `slideAtual`.
3.  Adicionamos `ativo` ao novo slide.

``` javascript
anterior.addEventListener("click", function () {

    slides[slideAtual].classList.remove("ativo");

    slideAtual--;

    slides[slideAtual].classList.add("ativo");

});
```

Mas existe outro problema.

Se estivermos no primeiro slide:

``` text
slideAtual = 0
```

e diminuirmos:

``` javascript
slideAtual--;
```

teremos:

``` text
slideAtual = -1
```

Esse slide também não existe.

Então precisamos fazer uma verificação:

``` javascript
if (slideAtual < 0) {
    slideAtual = slides.length - 1;
}
```

O código completo fica:

``` javascript
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

``` text
← Anterior

Slide 1
Slide 2
Slide 3

Próximo →
```

------------------------------------------------------------------------

# 16. Animação do carrossel — passo a passo

Agora que já entendemos `classList`, `display: none` e a estrutura de um
carrossel, vamos aprender a fazer os slides **deslizarem**.

Vamos construir a animação aos poucos. A ideia é que você possa copiar cada
parte, testar no navegador e só depois continuar.

---

## Passo 1 — Conhecendo o `transform`

A propriedade `transform` permite alterar visualmente um elemento.

Para mover um elemento para a direita:

```css
transform: translateX(100px);
```

Para mover para a esquerda:

```css
transform: translateX(-100px);
```

O `X` representa o movimento horizontal.

Também existe o `Y`, usado para movimentos verticais:

```css
transform: translateY(100px);
```

### Teste

Crie uma `div`:

```html
<div class="caixa">
    Minha caixa
</div>
```

E coloque no CSS:

```css
.caixa {
    transform: translateX(100px);
}
```

Abra a página e observe o que aconteceu.

Agora teste:

```css
.caixa {
    transform: translateX(-100px);
}
```

A caixa deve se mover para o outro lado.

---

## Passo 2 — Usando porcentagem

No carrossel, em vez de trabalhar com pixels, vamos usar porcentagem.

```css
transform: translateX(-100%);
```

Podemos pensar assim:

```text
0%     → posição inicial
-100%  → move uma largura para a esquerda
-200%  → move duas larguras para a esquerda
```

Isso será útil porque cada slide ocupará `100%` da largura do carrossel.

---

## Passo 3 — Criando a transição

Se simplesmente mudarmos o `transform`, o movimento acontece imediatamente.

Para deixar a mudança gradual, usamos `transition`:

```css
.caixa {
    transition: transform 0.5s;
}
```

Agora, se o `transform` mudar, o navegador fará uma transição durante
meio segundo.

Podemos combinar os dois:

```css
.caixa {
    transition: transform 0.5s;
    transform: translateX(100px);
}
```

### Importante

`transform` **faz a mudança de posição**.

`transition` **faz essa mudança acontecer gradualmente**.

---

## Passo 4 — Preparando o carrossel

Agora vamos montar a estrutura que será animada.

```html
<div class="carrossel">

    <div class="slides">

        <div class="slide">
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

</div>

<button id="anterior">Anterior</button>
<button id="proximo">Próximo</button>
```

Perceba que temos dois elementos importantes:

```text
.carrossel
    ↓
é a janela que mostra os slides

.slides
    ↓
contém e movimenta os slides
```

---

## Passo 5 — Colocando os slides lado a lado

Primeiro, vamos fazer `.slides` utilizar `flex`.

```css
.slides {
    display: flex;
}
```

Agora os slides ficam lado a lado:

```text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Slide 1 │ │ Slide 2 │ │ Slide 3 │
└─────────┘ └─────────┘ └─────────┘
```

Cada slide precisa ocupar toda a largura do carrossel:

```css
.slide {
    min-width: 100%;
}
```

---

## Passo 6 — Criando a "janela"

Agora vamos definir o tamanho do carrossel e esconder tudo que estiver fora
dele.

```css
.carrossel {
    width: 300px;
    height: 200px;
    overflow: hidden;
}
```

`overflow: hidden` significa:

> Tudo que ultrapassar os limites do carrossel não será mostrado.

Isso é o que transforma o carrossel em uma espécie de **janela**.

---

## Passo 7 — Testando o movimento manualmente

Antes de colocar JavaScript, vamos testar o movimento no CSS.

Coloque:

```css
.slides {
    display: flex;
    transform: translateX(-100%);
}
```

O segundo slide deverá aparecer na janela.

Agora teste:

```css
transform: translateX(-200%);
```

O terceiro slide deverá aparecer.

Teste também:

```css
transform: translateX(0%);
```

O primeiro slide volta a aparecer.

### Resumindo

```text
translateX(0%)    → Slide 1

translateX(-100%) → Slide 2

translateX(-200%) → Slide 3
```

Se isso funcionar, podemos passar para o JavaScript.

---

## Passo 8 — Adicionando a animação

Agora vamos colocar `transition` no elemento `.slides`.

```css
.slides {
    display: flex;
    transition: transform 0.5s ease;
}
```

A partir de agora, sempre que o `transform` mudar, os slides irão se mover
gradualmente.

---

## Passo 9 — Criando a variável do slide atual

Agora precisamos informar ao JavaScript qual slide está sendo mostrado.

```javascript
let slideAtual = 0;
```

A contagem começa em `0`.

Então:

```text
0 → Slide 1
1 → Slide 2
2 → Slide 3
```

---

## Passo 10 — Selecionando os elementos

Vamos selecionar o elemento `.slides` e os dois botões:

```javascript
const slides = document.querySelector(".slides");

const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");
```

---

## Passo 11 — Criando a função que movimenta os slides

Agora vamos criar uma função responsável por atualizar a posição.

```javascript
function atualizarCarrossel() {

    slides.style.transform =
        `translateX(-${slideAtual * 100}%)`;

}
```

Essa função transforma o número do slide em uma posição.

Por exemplo:

```text
slideAtual = 0
0 × 100 = 0
translateX(0%)
```

```text
slideAtual = 1
1 × 100 = 100
translateX(-100%)
```

```text
slideAtual = 2
2 × 100 = 200
translateX(-200%)
```

Ou seja, o JavaScript decide **qual posição** o CSS deve utilizar.

---

## Passo 12 — Fazendo o botão Próximo funcionar

Agora vamos fazer o botão avançar.

```javascript
proximo.addEventListener("click", function () {

    slideAtual++;

    atualizarCarrossel();

});
```

O caminho é:

```text
Clique no botão
      ↓
slideAtual++
      ↓
atualizarCarrossel()
      ↓
novo translateX()
      ↓
transition anima o movimento
```

Teste agora no navegador.

O botão deve fazer os slides avançarem.

---

## Passo 13 — Impedindo que passe do último slide

Temos um problema.

Se existem três slides:

```text
0 → Slide 1
1 → Slide 2
2 → Slide 3
```

Depois do Slide 3, `slideAtual` ficará igual a `3`.

Esse slide não existe.

Podemos verificar isso com:

```javascript
if (slideAtual >= slides.children.length) {
    slideAtual = 0;
}
```

O botão Próximo fica assim:

```javascript
proximo.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= slides.children.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();

});
```

Agora, ao passar do último slide, voltamos para o primeiro.

---

## Passo 14 — Fazendo o botão Anterior funcionar

Agora faremos o caminho contrário.

```javascript
anterior.addEventListener("click", function () {

    slideAtual--;

    atualizarCarrossel();

});
```

Mas existe outro problema.

Se estivermos no primeiro slide:

```text
slideAtual = 0
```

e fizermos:

```javascript
slideAtual--;
```

teremos:

```text
slideAtual = -1
```

Esse slide também não existe.

---

## Passo 15 — Voltando do primeiro para o último

Vamos verificar se `slideAtual` ficou menor que `0`:

```javascript
if (slideAtual < 0) {
    slideAtual = slides.children.length - 1;
}
```

O código completo fica:

```javascript
anterior.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.children.length - 1;
    }

    atualizarCarrossel();

});
```

Agora podemos navegar nos dois sentidos:

```text
← Anterior

Slide 1 → Slide 2 → Slide 3

Próximo →
```

Se estivermos no Slide 1 e clicarmos em Anterior:

```text
Slide 1
   ↓
Slide 3
```

Se estivermos no Slide 3 e clicarmos em Próximo:

```text
Slide 3
   ↓
Slide 1
```

---

## Passo 16 — Código completo

Depois de testar cada etapa, podemos juntar tudo.

### HTML

```html
<div class="carrossel">

    <div class="slides">

        <div class="slide">
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

</div>

<button id="anterior">Anterior</button>
<button id="proximo">Próximo</button>
```

### CSS

```css
.carrossel {
    width: 300px;
    height: 200px;
    overflow: hidden;
}

.slides {
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    min-width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

### JavaScript

```javascript
const slides = document.querySelector(".slides");

const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");

let slideAtual = 0;

function atualizarCarrossel() {

    slides.style.transform =
        `translateX(-${slideAtual * 100}%)`;

}

proximo.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= slides.children.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();

});

anterior.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.children.length - 1;
    }

    atualizarCarrossel();

});
```

---

## Passo 17 — Entendendo o funcionamento completo

Quando clicamos em **Próximo**, acontece:

```text
CLIQUE
  ↓
slideAtual++
  ↓
verifica se passou do último
  ↓
atualizarCarrossel()
  ↓
calcula o translateX
  ↓
CSS muda a posição
  ↓
transition anima o movimento
```

Por exemplo:

```text
Clique 1
   ↓
slideAtual = 1
   ↓
translateX(-100%)
   ↓
Slide 2 aparece
```

Depois:

```text
Clique 2
   ↓
slideAtual = 2
   ↓
translateX(-200%)
   ↓
Slide 3 aparece
```

Depois:

```text
Clique 3
   ↓
slideAtual = 3
   ↓
passou do último
   ↓
slideAtual = 0
   ↓
translateX(0%)
   ↓
Slide 1 aparece
```

---

## O que você precisa lembrar

Para criar este carrossel, os principais conceitos são:

```text
display: flex
    ↓
coloca os slides lado a lado

min-width: 100%
    ↓
faz cada slide ocupar a janela

overflow: hidden
    ↓
esconde o que estiver fora da janela

transform: translateX()
    ↓
move os slides

transition
    ↓
anima o movimento

slideAtual
    ↓
guarda qual slide está sendo mostrado

addEventListener()
    ↓
detecta os cliques

if
    ↓
impede que o índice saia dos limites
```

A melhor forma de aprender é **não copiar tudo de uma vez**.

Faça os testes nesta ordem:

```text
1. Testar translateX()
        ↓
2. Criar os slides
        ↓
3. Colocar os slides lado a lado
        ↓
4. Criar a janela com overflow: hidden
        ↓
5. Testar translateX(-100%) e -200%
        ↓
6. Adicionar transition
        ↓
7. Criar slideAtual
        ↓
8. Fazer Próximo funcionar
        ↓
9. Fazer Anterior funcionar
        ↓
10. Integrar o carrossel à calculadora
```

# 39. Exercício --- Carrossel da Calculadora

Agora vamos aplicar tudo o que aprendemos no projeto da **calculadora
que vocês já estão desenvolvendo**.

A calculadora deverá possuir um **carrossel com pelo menos dois
slides**.

## Slide 1 --- Calculadora

O primeiro slide deverá continuar contendo a calculadora desenvolvida
por vocês.

Mantenha:

-   campos de entrada;
-   operações;
-   botão;
-   resultado;
-   imagens;
-   estilos;
-   animações que já foram desenvolvidas.

A calculadora deve continuar funcionando normalmente.

------------------------------------------------------------------------

## Slide 2 --- Sobre o projeto

O segundo slide deverá apresentar informações sobre o desenvolvimento da
calculadora.

Inclua, no mínimo:

-   Nome do projeto;
-   Nome do(s) desenvolvedor(es);
-   Curso;
-   Turma;
-   Unidade Curricular;
-   Data ou período de desenvolvimento;
-   Breve descrição do projeto;
-   Tecnologias utilizadas;
-   Link para o repositório do projeto.

Você pode adicionar outras informações que considerar relevantes.

------------------------------------------------------------------------

# 40. Funcionamento do carrossel

O usuário deverá conseguir navegar entre os slides.

Crie pelo menos:

``` text
← Anterior
```

e:

``` text
Próximo →
```

O carrossel deverá:

1.  Exibir inicialmente o primeiro slide;
2.  Permitir avançar para o segundo slide;
3.  Permitir voltar para o primeiro slide;
4.  Possuir uma animação de movimento;
5.  Funcionar sem recarregar a página;
6.  Manter a calculadora funcionando normalmente.

------------------------------------------------------------------------

# 41. Requisitos técnicos

Para realizar o exercício, utilize os conceitos estudados nesta aula.

Você deverá utilizar:

-   `document.querySelector()`;
-   `document.querySelectorAll()` quando necessário;
-   `classList.add()` quando necessário;
-   `classList.remove()` ou `classList.toggle()` quando necessário;
-   `addEventListener()`;
-   `if`;
-   variável para controlar o slide atual;
-   `overflow: hidden`;
-   `display: flex`;
-   `transform: translateX()`;
-   `transition`.

### Importante

Neste exercício, o objetivo principal é entender o movimento do
carrossel.

Não tente fazer tudo de uma vez.

Siga esta ordem:

``` text
1. Criar os slides
        ↓
2. Colocar os slides lado a lado
        ↓
3. Criar a janela com overflow: hidden
        ↓
4. Testar translateX()
        ↓
5. Criar slideAtual
        ↓
6. Fazer o botão Próximo funcionar
        ↓
7. Fazer o botão Anterior funcionar
        ↓
8. Adicionar transition
        ↓
9. Integrar com a calculadora
        ↓
10. Melhorar a aparência
```

------------------------------------------------------------------------

# 42. Desafio extra

Depois de fazer o carrossel funcionar, tente adicionar:

-   indicadores de qual slide está ativo;
-   botões estilizados;
-   navegação automática;
-   três ou mais slides;
-   animações diferentes;
-   botão para voltar diretamente ao primeiro slide.

**Importante:** primeiro faça o carrossel funcionar. Depois se preocupe
com a aparência e com os efeitos adicionais.
