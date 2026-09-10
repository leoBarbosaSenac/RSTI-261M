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

# 16. Criando uma animação de movimento

Até agora, aprendemos a **mostrar e esconder elementos** utilizando
classes e `display: none`.

Agora vamos aprender outra forma de mudar a posição de um elemento: o
`transform`.

A diferença é importante:

-   `display: none` → esconde o elemento.
-   `transform` → pode mover, girar, aumentar, diminuir ou transformar o
    elemento.
-   `transition` → faz a mudança acontecer de forma gradual, criando uma
    animação.

No nosso carrossel, vamos utilizar principalmente:

``` css
transform: translateX();
```

e:

``` css
transition: transform 0.5s;
```

------------------------------------------------------------------------

# 17. O que é `transform`?

A propriedade `transform` permite modificar visualmente um elemento.

Por exemplo:

``` css
transform: translateX(100px);
```

Isso movimenta o elemento **100 pixels para a direita**.

Podemos também utilizar valores negativos:

``` css
transform: translateX(-100px);
```

Nesse caso, o elemento é movimentado **100 pixels para a esquerda**.

Podemos imaginar:

``` text
                direita
                   →
        ┌───────────────┐
        │    elemento   │
        └───────────────┘
                   ←
                esquerda
```

O `X` representa o movimento **horizontal**.

Também existe:

``` css
transform: translateY();
```

O `Y` representa o movimento **vertical**.

Por exemplo:

``` css
transform: translateY(100px);
```

move o elemento para baixo.

E:

``` css
transform: translateY(-100px);
```

move o elemento para cima.

------------------------------------------------------------------------

# 18. Entendendo `translateX(%)`

No carrossel, vamos trabalhar com porcentagem em vez de pixels.

Por exemplo:

``` css
transform: translateX(-100%);
```

O `%` é calculado em relação ao próprio tamanho do elemento que está
sendo movimentado.

Imagine um slide com 300 pixels de largura:

``` text
┌──────────────────────────────┐
│            SLIDE             │
│          300 pixels          │
└──────────────────────────────┘
```

Quando usamos:

``` css
translateX(-100%);
```

estamos dizendo:

> Mova este elemento para a esquerda uma distância equivalente a 100% da
> sua própria largura.

Então:

``` text
0%

┌───────────────┐
│    Slide 1    │
└───────────────┘


-100%

              ┌───────────────┐
              │    Slide 1    │
              └───────────────┘


-200%

                            ┌───────────────┐
                            │    Slide 1    │
                            └───────────────┘
```

No carrossel, isso será utilizado para fazer os slides mudarem de
posição.

------------------------------------------------------------------------

# 19. Por que usar `overflow: hidden`?

Para criar o efeito de carrossel, precisamos imaginar que existe uma
**janela**.

O usuário deve enxergar apenas uma parte dos slides.

Por exemplo:

``` text
                 JANELA
        ┌─────────────────────┐
        │      Slide 1        │
        └─────────────────────┘

Por trás da janela existem:

        Slide 1     Slide 2     Slide 3
```

Para esconder o que estiver fora da janela, usamos:

``` css
.carrossel {
    overflow: hidden;
}
```

`overflow: hidden` significa:

> Tudo que ultrapassar os limites desse elemento não será mostrado.

Isso é fundamental para o nosso carrossel.

Sem `overflow: hidden`, poderíamos enxergar os outros slides fora da
área principal.

------------------------------------------------------------------------

# 20. Colocando os slides lado a lado

Agora precisamos fazer com que os slides fiquem **um ao lado do outro**.

Para isso, utilizamos:

``` css
.slides {
    display: flex;
}
```

E cada slide deverá ocupar toda a largura disponível:

``` css
.slide {
    min-width: 100%;
}
```

Imagine que temos três slides:

``` text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Slide 1 │ │ Slide 2 │ │ Slide 3 │
└─────────┘ └─────────┘ └─────────┘
```

Eles ficam lado a lado dentro do elemento `.slides`.

Porém, o `.carrossel` funciona como uma janela:

``` text
┌─────────────────┐
│     Slide 1     │
└─────────────────┘
```

O Slide 2 e o Slide 3 estão ali, mas estão fora da área visível.

------------------------------------------------------------------------

# 21. A estrutura HTML do carrossel

Para trabalhar com `translateX`, vamos utilizar um elemento interno
chamado `.slides`.

``` html
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

<button id="anterior">
    Anterior
</button>

<button id="proximo">
    Próximo
</button>
```

Observe a diferença entre `.carrossel` e `.slides`.

### `.carrossel`

É a **janela**.

``` text
┌─────────────────────┐
│                     │
│      JANELA         │
│                     │
└─────────────────────┘
```

Por isso usamos:

``` css
overflow: hidden;
```

### `.slides`

É o elemento que contém todos os slides.

``` text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Slide 1 │ │ Slide 2 │ │ Slide 3 │
└─────────┘ └─────────┘ └─────────┘
```

É o `.slides` que será movimentado.

Essa é uma das partes mais importantes para entender o funcionamento do
carrossel.

------------------------------------------------------------------------

# 22. CSS básico do carrossel

Vamos começar somente com o posicionamento.

``` css
.carrossel {
    width: 300px;
    height: 200px;

    overflow: hidden;
}

.slides {
    display: flex;
}

.slide {
    min-width: 100%;
    height: 200px;
}
```

Agora temos:

``` text
              CARROSSEL
        ┌─────────────────┐
        │                 │
        │    Slide 1      │
        │                 │
        └─────────────────┘

        Slide 2 e Slide 3
        estão ao lado.
```

------------------------------------------------------------------------

# 23. Movimentando o `.slides`

Agora podemos testar o `translateX`.

Se fizermos:

``` css
.slides {
    transform: translateX(-100%);
}
```

todo o conjunto de slides será movido para a esquerda.

Antes:

``` text
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Slide 1 │ │ Slide 2 │ │ Slide 3 │
└─────────┘ └─────────┘ └─────────┘
     ↑
  janela
```

Depois de `translateX(-100%)`:

``` text
          ┌─────────┐ ┌─────────┐
          │ Slide 2 │ │ Slide 3 │
          └─────────┘ └─────────┘
     ↑
  janela
```

O Slide 2 passa a ocupar a janela.

Por isso:

``` css
translateX(0%);
```

mostra o primeiro slide.

``` css
translateX(-100%);
```

mostra o segundo.

``` css
translateX(-200%);
```

mostra o terceiro.

------------------------------------------------------------------------

# 24. O que é `transition`?

Até agora, quando alteramos:

``` css
transform: translateX();
```

o movimento acontece imediatamente.

Por exemplo:

``` text
Slide 1

        ↓ mudança instantânea

Slide 2
```

Isso não parece uma animação.

Para fazer o navegador criar uma transição entre a posição antiga e a
nova posição, utilizamos:

``` css
transition: transform 0.5s;
```

Por exemplo:

``` css
.slides {
    display: flex;
    transition: transform 0.5s;
}
```

Agora, quando o `transform` mudar, o navegador fará uma transição
durante meio segundo.

Visualmente:

``` text
Sem transition:

Slide 1 ─────────────────────── Slide 2


Com transition:

Slide 1 ──→ ──→ ──→ ──→ Slide 2
```

A propriedade:

``` css
transition: transform 0.5s;
```

pode ser entendida assim:

``` text
transition
    ↓
quero uma mudança gradual

transform
    ↓
qual propriedade será animada?

0.5s
    ↓
quanto tempo a mudança deve durar?
```

------------------------------------------------------------------------

# 25. `transition` não movimenta o elemento

Essa diferença é muito importante.

A propriedade:

``` css
transition
```

**não movimenta o elemento sozinha**.

Ela apenas determina **como uma mudança acontecerá**.

Quem movimenta é:

``` css
transform: translateX();
```

Por exemplo:

``` css
.slides {
    transition: transform 0.5s;
    transform: translateX(-100%);
}
```

Aqui temos duas funções diferentes:

``` text
transform
    ↓
define a nova posição


transition
    ↓
faz a mudança até essa posição acontecer gradualmente
```

Podemos comparar com uma porta:

``` text
transform
→ "A porta deve ficar aberta."

transition
→ "A porta deve abrir lentamente."
```

------------------------------------------------------------------------

# 26. Controlando o `translateX` com JavaScript

Agora vamos fazer o JavaScript controlar a posição.

Primeiro selecionamos o elemento `.slides`:

``` javascript
const slides = document.querySelector(".slides");
```

Também precisamos saber em qual slide estamos:

``` javascript
let slideAtual = 0;
```

Agora podemos criar uma função para atualizar a posição:

``` javascript
function atualizarCarrossel() {

    slides.style.transform =
        `translateX(-${slideAtual * 100}%)`;

}
```

Vamos entender essa linha com calma:

``` javascript
slideAtual * 100
```

Se:

``` text
slideAtual = 0
```

temos:

``` text
0 × 100 = 0
```

Então:

``` css
translateX(0%)
```

------------------------------------------------------------------------

Se:

``` text
slideAtual = 1
```

temos:

``` text
1 × 100 = 100
```

Então:

``` css
translateX(-100%)
```

------------------------------------------------------------------------

Se:

``` text
slideAtual = 2
```

temos:

``` text
2 × 100 = 200
```

Então:

``` css
translateX(-200%)
```

------------------------------------------------------------------------

# 27. Entendendo a expressão completa

Observe:

``` javascript
`translateX(-${slideAtual * 100}%)`
```

Essa linha está montando um texto para o CSS.

Se:

``` javascript
slideAtual = 0;
```

o resultado será:

``` css
translateX(-0%)
```

Se:

``` javascript
slideAtual = 1;
```

o resultado será:

``` css
translateX(-100%)
```

Se:

``` javascript
slideAtual = 2;
```

o resultado será:

``` css
translateX(-200%)
```

Portanto, o JavaScript controla o `transform`.

------------------------------------------------------------------------

# 28. Fazendo o botão Próximo funcionar

Primeiro selecionamos o botão:

``` javascript
const proximo = document.querySelector("#proximo");
```

Depois criamos o evento:

``` javascript
proximo.addEventListener("click", function () {

    slideAtual++;

    atualizarCarrossel();

});
```

Quando o botão for clicado:

``` text
CLIQUE
  ↓
slideAtual++
  ↓
slideAtual muda
  ↓
atualizarCarrossel()
  ↓
novo translateX()
  ↓
CSS movimenta os slides
  ↓
transition anima o movimento
```

Esse fluxo é muito importante.

------------------------------------------------------------------------

# 29. Controlando o limite dos slides

Imagine que temos:

``` text
Slide 1 → posição 0
Slide 2 → posição 1
Slide 3 → posição 2
```

Se clicarmos em Próximo quando estamos no Slide 3:

``` javascript
slideAtual++;
```

teremos:

``` text
slideAtual = 3
```

Mas não existe Slide 4.

Precisamos verificar isso:

``` javascript
if (slideAtual >= 3) {
    slideAtual = 0;
}
```

Porém, não é uma boa ideia escrever `3` diretamente.

Podemos usar:

``` javascript
slides.children.length
```

para descobrir quantos slides existem.

Por exemplo:

``` javascript
if (slideAtual >= slides.children.length) {
    slideAtual = 0;
}
```

Assim, se adicionarmos mais slides no futuro, o código continuará
funcionando.

------------------------------------------------------------------------

# 30. Código completo do botão Próximo

``` javascript
proximo.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= slides.children.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();

});
```

A ordem é importante:

``` text
1. Aumenta o número do slide
        ↓
2. Verifica se passou do último
        ↓
3. Se passou, volta para 0
        ↓
4. Atualiza o movimento
```

------------------------------------------------------------------------

# 31. Fazendo o botão Anterior funcionar

Agora precisamos fazer o contrário.

Selecionamos o botão:

``` javascript
const anterior = document.querySelector("#anterior");
```

Quando clicar:

``` javascript
slideAtual--;
```

Depois atualizamos o carrossel:

``` javascript
anterior.addEventListener("click", function () {

    slideAtual--;

    atualizarCarrossel();

});
```

Mas existe um problema.

Se estivermos no primeiro slide:

``` text
slideAtual = 0
```

e fizermos:

``` javascript
slideAtual--;
```

teremos:

``` text
slideAtual = -1
```

Esse slide não existe.

------------------------------------------------------------------------

# 32. Voltando do primeiro para o último

Podemos verificar:

``` javascript
if (slideAtual < 0) {
    slideAtual = slides.children.length - 1;
}
```

Por que usamos `- 1`?

Porque a contagem começa em zero.

Se temos três slides:

``` text
Slide 1 → índice 0
Slide 2 → índice 1
Slide 3 → índice 2
```

Então:

``` javascript
slides.children.length
```

retorna:

``` text
3
```

Mas o último índice é:

``` text
3 - 1 = 2
```

Por isso:

``` javascript
slides.children.length - 1
```

representa o último slide.

------------------------------------------------------------------------

# 33. Código completo do botão Anterior

``` javascript
anterior.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.children.length - 1;
    }

    atualizarCarrossel();

});
```

Agora podemos navegar nos dois sentidos:

``` text
              Anterior
                 ←

Slide 1 → Slide 2 → Slide 3
                 →

              Próximo
```

Se estivermos no Slide 1 e clicarmos em Anterior:

``` text
Slide 1
   ↓
Slide 3
```

Se estivermos no Slide 3 e clicarmos em Próximo:

``` text
Slide 3
   ↓
Slide 1
```

------------------------------------------------------------------------

# 34. CSS completo do carrossel

Agora podemos juntar tudo:

``` css
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

Observe principalmente:

``` css
.carrossel {
    overflow: hidden;
}
```

O carrossel funciona como uma janela.

E:

``` css
.slides {
    display: flex;
}
```

Coloca os slides lado a lado.

E:

``` css
.slides {
    transition: transform 0.5s ease;
}
```

Cria a animação quando o `transform` mudar.

------------------------------------------------------------------------

# 35. JavaScript completo do carrossel

``` javascript
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

------------------------------------------------------------------------

# 36. O caminho completo do carrossel

Agora podemos entender tudo em conjunto.

Quando o usuário clica em **Próximo**:

``` text
                 CLIQUE
                    ↓
             botão Próximo
                    ↓
             slideAtual++
                    ↓
       verifica se chegou ao final
                    ↓
         atualizarCarrossel()
                    ↓
             calcula posição
                    ↓
       translateX(-100%, -200%...)
                    ↓
             transition
                    ↓
          movimento do slide
```

Por exemplo:

``` text
Clique 1
   ↓
slideAtual = 1
   ↓
translateX(-100%)
   ↓
Slide 2 aparece
```

Depois:

``` text
Clique 2
   ↓
slideAtual = 2
   ↓
translateX(-200%)
   ↓
Slide 3 aparece
```

Depois:

``` text
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

------------------------------------------------------------------------

# 37. Diferença entre o carrossel com `display: none` e o carrossel com `translateX`

Existem duas formas diferentes de pensar nesse componente.

### Usando `display: none`

``` css
.slide {
    display: none;
}

.slide.ativo {
    display: block;
}
```

Nesse caso:

``` text
Slide 1 → aparece

Slide 2 → desaparece

Slide 3 → desaparece
```

Quando mudamos de slide, um elemento desaparece e outro aparece.

### Usando `translateX`

Os slides ficam lado a lado:

``` text
Slide 1 | Slide 2 | Slide 3
```

E movimentamos o conjunto:

``` text
0%

[Slide 1] Slide 2  Slide 3


-100%

 Slide 1 [Slide 2] Slide 3


-200%

 Slide 1  Slide 2 [Slide 3]
```

Com:

``` css
transition: transform 0.5s ease;
```

essa mudança de posição vira uma animação.

Para um carrossel com efeito de "deslizar", `translateX` é uma solução
mais adequada.

------------------------------------------------------------------------

# 38. O que cada parte do código faz?

É importante conseguir olhar para o código e saber a função de cada
parte.

### `display: flex`

``` css
.slides {
    display: flex;
}
```

Coloca os slides lado a lado.

### `min-width: 100%`

``` css
.slide {
    min-width: 100%;
}
```

Faz cada slide ocupar toda a largura da janela.

### `overflow: hidden`

``` css
.carrossel {
    overflow: hidden;
}
```

Esconde as partes que ficam fora da janela.

### `transform: translateX()`

``` css
transform: translateX(-100%);
```

Move os slides horizontalmente.

### `transition`

``` css
transition: transform 0.5s ease;
```

Faz o movimento acontecer gradualmente.

### `slideAtual`

``` javascript
let slideAtual = 0;
```

Guarda qual slide está sendo exibido.

### `slideAtual++`

``` javascript
slideAtual++;
```

Avança um slide.

### `slideAtual--`

``` javascript
slideAtual--;
```

Volta um slide.

### `addEventListener`

``` javascript
proximo.addEventListener("click", function () {
```

Faz o código ser executado quando o usuário clicar.

------------------------------------------------------------------------

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
