# CSS — Organização, Variáveis e Dark Mode

Até aqui, já trabalhamos bastante com:

* HTML → estrutura da página.
* CSS → aparência da página.
* JavaScript → lógica e comportamento.

Na aula anterior, começamos a utilizar JavaScript para fazer o HTML e o CSS trabalharem juntos.

Agora vamos voltar nossa atenção para o **CSS** e aprender algumas formas de escrever estilos de maneira mais organizada e reutilizável.

Nesta aula vamos aprender:

* Como organizar cores e outros valores utilizando variáveis CSS.
* O que é `:root`.
* Como utilizar `var()`.
* Como criar nomes melhores para nossas classes.
* Uma introdução à convenção BEM.
* O que são Media Queries.
* Como criar um Dark Mode utilizando `prefers-color-scheme`.

---

# 1. O problema de repetir valores

Imagine que estamos criando um site e escolhemos uma cor principal:

```css
body {
    color: #8458B3;
}

header {
    background-color: #8458B3;
}

button {
    background-color: #8458B3;
}

a {
    color: #8458B3;
}
```

Funciona.

Mas temos um problema.

E se o cliente disser:

> "Quero trocar o roxo por azul."

Teríamos que procurar todos os lugares onde usamos:

```css
#8458B3
```

E trocar manualmente.

Em projetos pequenos isso pode não parecer um problema.

Mas imagine um site com centenas de elementos.

Seria muito mais interessante poder dizer:

> "A cor principal do meu site é essa."

E depois simplesmente reutilizar essa informação.

É para isso que podemos utilizar as **variáveis CSS**.

---

# 2. Variáveis CSS

Uma variável CSS é uma forma de guardar um valor para utilizá-lo posteriormente.

A criação de uma variável utiliza dois traços:

```css
--nome-da-variavel
```

Por exemplo:

```css
--cor-principal: #8458B3;
```

Podemos guardar diferentes tipos de valores:

```css
--cor-principal: #8458B3;
--cor-fundo: #f5f5f5;
--cor-texto: #222;
--tamanho-fonte: 18px;
--espacamento: 20px;
```

Podemos pensar em uma variável como uma **caixinha com um nome**:

```text
        --cor-principal
               ↓
          ┌─────────┐
          │ #8458B3 │
          └─────────┘
```

Quando precisarmos do valor, utilizamos o nome da variável.

---

# 3. O `:root`

Mas onde devemos criar nossas variáveis?

Uma forma muito comum é utilizar:

```css
:root
```

O `:root` representa o elemento raiz do documento HTML.

Em uma página HTML, normalmente estamos falando do:

```html
<html>
```

Podemos então criar nossas variáveis dentro do `:root`:

```css
:root {
    --cor-principal: #8458B3;
    --cor-fundo: #f5f5f5;
    --cor-texto: #222;
}
```

Assim, essas variáveis ficam disponíveis para serem utilizadas em diferentes partes da nossa página.

---

# 4. Utilizando uma variável com `var()`

Para utilizar uma variável CSS, usamos:

```css
var()
```

Por exemplo:

```css
:root {
    --cor-principal: #8458B3;
}
```

Podemos utilizar:

```css
button {
    background-color: var(--cor-principal);
}
```

Podemos ler isso como:

```text
--cor-principal
        ↓
   guarda o valor

var(--cor-principal)
        ↓
   utiliza o valor
```

---

# 5. Exemplo

Vamos criar algumas variáveis:

```css
:root {
    --cor-principal: #8458B3;
    --cor-secundaria: #d0bdf4;
    --cor-fundo: #f5f5f5;
    --cor-texto: #222;
}
```

Agora podemos utilizá-las:

```css
body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
}

header {
    background-color: var(--cor-principal);
}

button {
    background-color: var(--cor-principal);
}

.card {
    border: 2px solid var(--cor-secundaria);
}
```

Agora, se quisermos mudar a cor principal do site, basta alterar:

```css
--cor-principal: #8458B3;
```

Por exemplo:

```css
--cor-principal: #2196F3;
```

Todos os elementos que utilizam:

```css
var(--cor-principal)
```

serão afetados.

---

# 6. O nome das variáveis

Assim como fazemos com variáveis no JavaScript, devemos escolher nomes que façam sentido.

Prefira:

```css
--cor-principal
--cor-fundo
--cor-texto
--cor-borda
--tamanho-fonte
--espacamento
```

Evite:

```css
--cor1
--cor2
--x
--azul
--coisa
```

O objetivo é conseguir entender o que aquela variável representa apenas olhando para o seu nome.

---

# 7. Não nomeie pela aparência

Imagine que temos:

```css
:root {
    --azul: #2196F3;
}
```

E utilizamos:

```css
button {
    background-color: var(--azul);
}
```

Funciona.

Mas e se amanhã o designer decidir que o botão deve ser vermelho?

Teríamos:

```css
--azul: #F44336;
```

Agora temos uma variável chamada `--azul` que guarda vermelho.

Isso não faz muito sentido.

É melhor nomear de acordo com a **função**:

```css
:root {
    --cor-botao: #2196F3;
}
```

Assim podemos trocar a cor sem precisar trocar o nome.

---

# 8. Exemplo completo com variáveis

```css
:root {
    --cor-principal: #8458B3;
    --cor-fundo: #f5f5f5;
    --cor-card: #ffffff;
    --cor-texto: #222222;
    --cor-borda: #dddddd;

    --espacamento: 20px;
    --raio-borda: 10px;
}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
}

.card {
    background-color: var(--cor-card);
    border: 1px solid var(--cor-borda);
    padding: var(--espacamento);
    border-radius: var(--raio-borda);
}

.card__titulo {
    color: var(--cor-principal);
}

.card__botao {
    background-color: var(--cor-principal);
    color: white;
}
```

Perceba que não estamos utilizando valores diretamente em todos os lugares.

Em vez disso, estamos criando uma espécie de **sistema de valores para o nosso site**.

---

# 9. Organização das classes

Agora vamos falar sobre outro problema comum.

Imagine o seguinte HTML:

```html
<div class="coisa">
    <h2 class="titulo">Produto</h2>

    <p class="texto">
        Descrição do produto.
    </p>

    <button class="botao">
        Comprar
    </button>
</div>
```

Funciona.

Mas olhando para o código, podemos ter algumas dúvidas.

Qual título?

Qual texto?

Qual botão?

E se tivermos vários componentes diferentes na mesma página?

Por isso, devemos criar nomes de classes que sejam **claros e específicos**.

---

# 10. Classes mais descritivas

Podemos escrever:

```html
<div class="produto">
    <h2 class="produto__titulo">
        Produto
    </h2>

    <p class="produto__descricao">
        Descrição do produto.
    </p>

    <button class="produto__botao">
        Comprar
    </button>
</div>
```

Agora conseguimos entender melhor a relação entre os elementos.

Temos:

```text
produto
│
├── produto__titulo
├── produto__descricao
└── produto__botao
```

Isso facilita bastante a leitura e manutenção do código.

---

# 11. Uma introdução ao BEM

Uma convenção bastante conhecida para nomear classes CSS é chamada de:

> BEM — Block, Element, Modifier

Não precisamos decorar tudo agora.

Vamos começar pelos dois primeiros conceitos.

## Block

O **Block** representa um componente independente.

Por exemplo:

```html
<div class="card">
</div>
```

O bloco é:

```css
.card
```

Outro exemplo:

```html
<nav class="menu">
</nav>
```

O bloco é:

```css
.menu
```

---

# 12. Element

Um elemento é uma parte daquele bloco.

Utilizamos dois underscores:

```text
__
```

Por exemplo:

```html
<div class="card">

    <h2 class="card__titulo">
        Título
    </h2>

    <p class="card__descricao">
        Descrição
    </p>

    <button class="card__botao">
        Comprar
    </button>

</div>
```

Temos:

```text
card
│
├── card__titulo
├── card__descricao
└── card__botao
```

No CSS:

```css
.card {
    padding: 20px;
}

.card__titulo {
    font-size: 24px;
}

.card__descricao {
    font-size: 16px;
}

.card__botao {
    padding: 10px 20px;
}
```

---

# 13. Por que não usar nomes como `azul`, `grande` ou `caixa`?

Devemos evitar nomes que descrevem apenas a aparência.

Por exemplo:

```css
.azul {
    color: blue;
}

.grande {
    font-size: 30px;
}

.caixa {
    padding: 20px;
}
```

O problema é que a aparência pode mudar.

Imagine:

```html
<button class="azul">
    Comprar
</button>
```

Se amanhã o botão ficar vermelho, a classe continuará sendo:

```html
class="azul"
```

Isso deixa o código confuso.

É melhor:

```html
<button class="botao-comprar">
    Comprar
</button>
```

O nome descreve **o que o elemento é ou faz**, e não necessariamente sua aparência.

---

# 14. Regras simples para nomes de classes

Não existe apenas uma maneira correta de nomear classes, mas podemos seguir algumas boas práticas.

### Prefira nomes claros

```css
.card
.menu
.menu__item
.produto
.produto__titulo
.produto__preco
```

### Evite nomes genéricos

```css
.coisa
.caixa
.negocio
.abc
.x
```

### Evite nomes baseados em aparência

```css
.azul
.vermelho
.grande
.pequeno
```

### Utilize nomes consistentes

Se começamos usando:

```css
.card__titulo
.card__descricao
.card__botao
```

não devemos criar:

```css
.card_texto
.card-button
.titulo-card
```

sem uma boa razão.

Manter um padrão torna o código mais fácil de entender.

---

# 15. O que é uma Media Query?

Agora vamos aprender outro recurso importante do CSS:

> **Media Query**

Uma Media Query permite aplicar determinados estilos dependendo de alguma condição.

Por exemplo, podemos alterar o layout dependendo da largura da tela.

```css
@media (max-width: 600px) {

    body {
        font-size: 14px;
    }

}
```

Nesse caso, estamos dizendo:

> "Quando a tela tiver no máximo 600px de largura, aplique esses estilos."

---

# 16. Estrutura de uma Media Query

A estrutura básica é:

```css
@media (condição) {

    /* CSS */

}
```

Por exemplo:

```css
@media (max-width: 600px) {

    .menu {
        display: none;
    }

}
```

A regra:

```css
.menu {
    display: none;
}
```

só será aplicada quando a condição for verdadeira.

---

# 17. Dark Mode

Hoje muitos sites possuem:

* modo claro;
* modo escuro.

O modo escuro normalmente utiliza cores com baixo brilho para reduzir a quantidade de luz emitida pela tela.

Podemos utilizar CSS para detectar a preferência de tema do sistema operacional.

Para isso utilizamos:

```css
prefers-color-scheme
```

A estrutura é:

```css
@media (prefers-color-scheme: dark) {

}
```

Podemos ler isso como:

> "Se o usuário preferir um esquema de cores escuro..."

---

# 18. Primeiro exemplo de Dark Mode

Vamos começar de forma simples:

```css
body {
    background-color: white;
    color: black;
}

@media (prefers-color-scheme: dark) {

    body {
        background-color: #222;
        color: white;
    }

}
```

Quando o sistema estiver no modo claro:

```text
FUNDO: branco
TEXTO: preto
```

Quando o sistema estiver no modo escuro:

```text
FUNDO: escuro
TEXTO: branco
```

O navegador escolhe automaticamente qual regra aplicar.

---

# 19. Dark Mode com variáveis

Agora podemos juntar os dois assuntos que aprendemos:

* Variáveis CSS.
* Media Queries.

Primeiro criamos nosso tema padrão:

```css
:root {
    --cor-fundo: #ffffff;
    --cor-texto: #222222;
    --cor-card: #eeeeee;
    --cor-principal: #8458B3;
}
```

Utilizamos as variáveis:

```css
body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
}

.card {
    background-color: var(--cor-card);
}

button {
    background-color: var(--cor-principal);
}
```

Agora podemos criar o Dark Mode:

```css
@media (prefers-color-scheme: dark) {

    :root {
        --cor-fundo: #181818;
        --cor-texto: #eeeeee;
        --cor-card: #252525;
        --cor-principal: #b58de0;
    }

}
```

Perceba que não precisamos reescrever todo o CSS.

Estamos apenas alterando os valores das variáveis.

---

# 20. Como o Dark Mode funciona?

Podemos imaginar assim:

```text
             SISTEMA OPERACIONAL
                     │
                     ↓
            Qual tema está ativo?
               /           \
              /             \
          CLARO             ESCURO
            ↓                  ↓
       :root normal      @media dark
            ↓                  ↓
       variáveis          novas variáveis
            \                  /
             \                /
              ↓              ↓
                   MESMO CSS
```

O HTML continua exatamente igual.

As classes continuam exatamente iguais.

O que muda são os valores das variáveis.

---

# 21. Exemplo completo

## HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <link rel="stylesheet" href="style.css">

    <title>Dark Mode</title>

</head>

<body>

    <header class="cabecalho">

        <h1 class="cabecalho__titulo">
            Meu Site
        </h1>

    </header>

    <main class="conteudo">

        <article class="card">

            <h2 class="card__titulo">
                Meu Card
            </h2>

            <p class="card__descricao">
                Este card muda de aparência
                conforme o tema do sistema.
            </p>

            <button class="card__botao">
                Saiba mais
            </button>

        </article>

    </main>

</body>

</html>
```

## CSS

```css
:root {

    --cor-fundo: #f5f5f5;
    --cor-card: #ffffff;
    --cor-texto: #222222;
    --cor-principal: #8458B3;

    --espacamento: 20px;
    --raio-borda: 10px;

}

body {

    margin: 0;

    background-color: var(--cor-fundo);
    color: var(--cor-texto);

    font-family: Arial, sans-serif;

}

.cabecalho {

    background-color: var(--cor-principal);

    padding: var(--espacamento);

}

.cabecalho__titulo {

    color: white;

}

.conteudo {

    padding: 30px;

}

.card {

    background-color: var(--cor-card);

    padding: var(--espacamento);

    border-radius: var(--raio-borda);

}

.card__titulo {

    color: var(--cor-principal);

}

.card__botao {

    background-color: var(--cor-principal);

    color: white;

    border: none;

    padding: 10px 20px;

    border-radius: 5px;

}

/* DARK MODE */

@media (prefers-color-scheme: dark) {

    :root {

        --cor-fundo: #181818;
        --cor-card: #252525;
        --cor-texto: #eeeeee;
        --cor-principal: #b58de0;

    }

}
```

---

# 22. Uma observação importante

O Dark Mode que fizemos nesta aula é baseado na **preferência do sistema**.

Ou seja:

```css
@media (prefers-color-scheme: dark)
```

não cria um botão.

Não estamos dando ao usuário a opção de clicar e escolher o tema.

Estamos apenas perguntando ao navegador:

> "O usuário está utilizando o sistema em modo escuro?"

Se estiver:

```css
@media (prefers-color-scheme: dark)
```

é aplicado.

---

# 23. E se quisermos um botão?

Imagine que queremos:

```text
┌─────────────────────────┐
│       Meu Site          │
│                         │
│   Tema: 🌙 Escuro       │
│                         │
└─────────────────────────┘
```

Agora o usuário poderia clicar em um botão e escolher o tema.

Isso é diferente.

Para fazer isso, precisaríamos utilizar JavaScript para:

1. detectar o clique;
2. adicionar ou remover uma classe;
3. alterar o tema.

Por enquanto, nosso Dark Mode é controlado automaticamente pela preferência do sistema.

Isso será uma ótima oportunidade para juntar CSS e JavaScript posteriormente.

---

# Exercícios

Os exercícios desta aula têm como objetivo praticar:

* Variáveis CSS.
* `:root`.
* `var()`.
* Organização de classes.
* Media Queries.
* Dark Mode.

---

# 1. Criando variáveis

Crie uma página com:

```html
<h1>Meu site</h1>

<p>
    Estou aprendendo CSS.
</p>

<button>
    Clique aqui
</button>
```

No CSS, crie um `:root` contendo pelo menos:

```css
:root {

    --cor-principal: ...;
    --cor-fundo: ...;
    --cor-texto: ...;

}
```

Utilize essas variáveis nos elementos da página.

### Objetivo

Praticar:

```css
:root
```

e:

```css
var()
```

---

# 2. Sistema de cores

Crie as seguintes variáveis:

```css
:root {

    --cor-fundo:
    --cor-texto:
    --cor-principal:
    --cor-secundaria:
    --cor-borda:

}
```

Depois crie uma página utilizando todas elas.

A página deve possuir:

* um cabeçalho;
* um título;
* um parágrafo;
* um card;
* um botão.

### Desafio

Depois de terminar, altere somente os valores dentro do `:root`.

O restante do CSS deve continuar funcionando.

---

# 3. Organizando classes

O código abaixo está funcionando, mas possui nomes ruins:

```html
<div class="coisa">

    <h2 class="titulo">
        Meu produto
    </h2>

    <p class="texto">
        Um produto muito legal.
    </p>

    <button class="botao">
        Comprar
    </button>

</div>
```

Reescreva o código utilizando nomes mais descritivos.

Uma possibilidade seria:

```text
produto
produto__titulo
produto__descricao
produto__botao
```

### Objetivo

Praticar organização e nomenclatura de classes.

---

# 4. Não use a aparência como nome

Crie uma página que possua:

* um botão principal;
* um botão secundário;
* um título;
* um card.

Não utilize classes como:

```css
.azul
.vermelho
.grande
.pequeno
```

Crie nomes baseados na função dos elementos.

Por exemplo:

```css
.botao-principal
.botao-secundario
.card
.card__titulo
```

### Objetivo

Aprender a separar **função** de **aparência**.

---

# 5. Primeiro Dark Mode

Crie uma página com:

* um título;
* um parágrafo;
* um botão.

No modo claro:

```text
Fundo claro
Texto escuro
```

No modo escuro:

```text
Fundo escuro
Texto claro
```

Utilize:

```css
@media (prefers-color-scheme: dark)
```

### Objetivo

Praticar Media Queries.

---

# 6. Dark Mode com variáveis

Crie um site utilizando:

```css
:root
```

e pelo menos estas variáveis:

```css
--cor-fundo
--cor-texto
--cor-card
--cor-principal
```

Depois crie um Dark Mode que altere somente os valores das variáveis.

O restante do CSS deve permanecer igual.

### Objetivo

Juntar:

```text
Variáveis CSS
      +
:root
      +
Media Query
      +
Dark Mode
```

---

# 7. Projeto — Meu site com tema claro e escuro

Crie uma página completa contendo:

```text
┌──────────────────────────────────┐
│              HEADER              │
│          Nome do site            │
├──────────────────────────────────┤
│                                  │
│              MAIN                │
│                                  │
│       ┌──────────────────┐       │
│       │      CARD        │       │
│       │                  │       │
│       │     Título       │       │
│       │     Texto        │       │
│       │                  │       │
│       │     [ Botão ]    │       │
│       └──────────────────┘       │
│                                  │
└──────────────────────────────────┘
```

O projeto deve possuir:

### HTML

Utilize classes organizadas e com nomes claros.

### CSS

Utilize:

* `:root`;
* variáveis CSS;
* `var()`;
* classes organizadas;
* `@media`;
* `prefers-color-scheme`.

### Dark Mode

O site deve alterar automaticamente suas cores de acordo com o tema do sistema.

---

# Desafio extra ⭐

Crie pelo menos **dois cards**.

Por exemplo:

```text
┌────────────────┐    ┌────────────────┐
│     Produto    │    │     Produto    │
│                │    │                │
│     R$ 20,00   │    │     R$ 35,00   │
│                │    │                │
│   [Comprar]    │    │   [Comprar]    │
└────────────────┘    └────────────────┘
```

Todos os cards devem compartilhar as mesmas variáveis e classes.

Depois altere as cores do `:root`.

Observe como vários elementos podem mudar ao mesmo tempo.

---

# Resumo da aula

Nesta aula aprendemos que podemos utilizar CSS de maneira mais organizada.

### Variáveis

Criamos variáveis utilizando:

```css
--nome-da-variavel
```

### `:root`

Utilizamos:

```css
:root {

}
```

para declarar variáveis que serão utilizadas em diferentes partes da página.

### `var()`

Utilizamos:

```css
var(--nome-da-variavel)
```

para acessar uma variável.

### Classes

Devemos criar nomes:

* claros;
* consistentes;
* relacionados à função do elemento.

Uma convenção que conhecemos foi:

```text
bloco
bloco__elemento
```

Por exemplo:

```text
card
card__titulo
card__descricao
card__botao
```

### Media Query

Utilizamos:

```css
@media (condição) {

}
```

para aplicar CSS dependendo de uma determinada condição.

### Dark Mode

Podemos detectar a preferência de tema do sistema utilizando:

```css
@media (prefers-color-scheme: dark) {

}
```

Combinando isso com variáveis CSS, conseguimos criar um Dark Mode de maneira organizada.

---

# O que vem depois?

Agora já conseguimos:

```text
HTML
 ↓
Estrutura

CSS
 ↓
Estilo
 ↓
Variáveis
 ↓
Temas
 ↓
Dark Mode

JavaScript
 ↓
Comportamento
```

Na próxima etapa podemos juntar esses conhecimentos para criar páginas mais interativas.

Por exemplo:

```text
        BOTÃO
          ↓
      JavaScript
          ↓
    altera uma classe
          ↓
          CSS
          ↓
     muda o visual
```

É aqui que começamos a perceber a verdadeira integração entre **HTML + CSS + JavaScript**.
