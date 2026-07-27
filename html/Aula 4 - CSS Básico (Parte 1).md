# CSS Básico -- Guia Completo e Didático

## 1. O que é CSS?

CSS (Cascading Style Sheets) é a linguagem usada para controlar a
aparência de uma página HTML.

Pense assim:

-   **HTML** = estrutura (esqueleto)
-   **CSS** = aparência (roupa/visual)

Sem CSS, o site fica funcional, mas com aparência simples e sem
identidade visual.

------------------------------------------------------------------------

## 2. Como o CSS funciona

O CSS funciona selecionando elementos HTML e definindo regras de estilo
para eles.

Exemplo:

``` css
p{
    color:red;
}
```

Tradução:

> Todo elemento `<p>` terá sua cor vermelha.

------------------------------------------------------------------------

## 3. Formas de usar CSS

### 3.1 Inline

``` html
<p style="color:red;">Texto</p>
```

✔ Rápido para testes.

✖ Mistura HTML com CSS.

------------------------------------------------------------------------

### 3.2 Interno

``` html
<style>
p{
    color:red;
}
</style>
```

✔ Melhor que inline.

✖ Ainda mistura estrutura e estilo.

------------------------------------------------------------------------

### 3.3 Externo (recomendado)

``` html
<link rel="stylesheet" href="style.css">
```

✔ Organização.

✔ Reutilização.

✔ Fácil manutenção.

A tag `<link>` deve ficar dentro do `<head>`.

------------------------------------------------------------------------

## 4. Sintaxe

``` css
seletor{
    propriedade: valor;
}
```

Exemplo:

``` css
p{
    color:blue;
    font-size:20px;
}
```

------------------------------------------------------------------------

## 5. Seletores

### Elemento

``` css
p{
    color:red;
}
```

Afeta todos os `<p>`.

### Classe

``` css
.texto{
    color:green;
}
```

``` html
<p class="texto"></p>
```

Pode ser reutilizada em vários elementos.

### ID

``` css
#titulo{
    color:blue;
}
```

``` html
<h1 id="titulo"></h1>
```

Deve ser único na página.

### Universal

``` css
*{
    margin:0;
    padding:0;
}
```

Afeta todos os elementos.

### Descendente

``` css
section p{
    color:red;
}
```

Seleciona qualquer `<p>` dentro de `<section>`, mesmo que existam outros
elementos entre eles.

### Filho direto

``` css
div > p{
    color:blue;
}
```

Seleciona apenas `<p>` filhos imediatos da `<div>`.

------------------------------------------------------------------------

## 6. Cores

``` css
color:red;
color:#ff0000;
color:rgb(255,0,0);
```

-   Nome → simples.
-   HEX → padrão da Web.
-   RGB → controle da intensidade das cores.

------------------------------------------------------------------------

## 7. Texto

``` css
p{
    font-size:16px;
    font-weight:bold;
    text-align:center;
    text-transform:uppercase;
}
```

-   `font-size` → tamanho.
-   `font-weight` → espessura.
-   `text-align` → alinhamento.
-   `text-transform` → transformação do texto.

------------------------------------------------------------------------

## 8. Background

``` css
div{
    background-color:yellow;
}
```

Imagem:

``` css
div{
    background-image:url("img.jpg");
    background-size:cover;
    background-position:center;
}
```

-   `cover` → cobre toda a área.
-   `center` → centraliza a imagem.

------------------------------------------------------------------------

## 9. Box Model

Todo elemento é uma caixa.

    Margin
    └── Border
        └── Padding
            └── Conteúdo

``` css
div{
    width:200px;
    padding:20px;
    border:2px solid black;
    margin:10px;
}
```

-   Content → conteúdo.
-   Padding → espaço interno.
-   Border → borda.
-   Margin → espaço externo.

------------------------------------------------------------------------

## 10. Display

A propriedade `display` define como um elemento ocupa espaço e se
comporta no layout.

### Block

Ocupa toda a largura disponível e quebra linha.

### Inline

Ocupa apenas o tamanho do conteúdo. Não aceita `width` e `height`.

### Inline-block

Fica na mesma linha que outros elementos, mas aceita largura e altura.

### None

Esconde completamente o elemento.

  Display        Comportamento
  -------------- ---------------------------
  block          Linha inteira
  inline         Apenas conteúdo
  inline-block   Conteúdo + largura/altura
  none           Esconde elemento

------------------------------------------------------------------------

## 11. Position

Define como o elemento será posicionado.

### Static

Padrão.

### Relative

Move o elemento mantendo seu espaço original.

### Absolute

Sai do fluxo e posiciona-se em relação ao ancestral posicionado mais
próximo.

### Fixed

Fica preso à janela do navegador.

### Sticky

Age como normal até atingir um ponto e então permanece fixo.

  Position   Uso
  ---------- -------------------------------
  static     padrão
  relative   pequenos ajustes e referência
  absolute   sobreposições
  fixed      botões flutuantes
  sticky     menus

------------------------------------------------------------------------

## 12. Flexbox

Flexbox facilita o alinhamento dos elementos.

``` css
.container{
    display:flex;
}
```

### Eixos

Por padrão (`flex-direction: row`):

-   eixo principal → horizontal
-   eixo secundário → vertical

### justify-content

Controla o eixo principal.

Valores comuns:

-   flex-start
-   center
-   flex-end
-   space-between
-   space-around
-   space-evenly

### align-items

Controla o eixo secundário.

Valores comuns:

-   flex-start
-   center
-   flex-end
-   stretch

### gap

Espaçamento entre elementos.

``` css
gap:20px;
```

### flex-direction

``` css
flex-direction:row;
flex-direction:column;
```

`row` organiza lado a lado.

`column` organiza um abaixo do outro e inverte os eixos de
`justify-content` e `align-items`.

### Exemplo

``` css
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:15px;
}
```

### Regra de ouro

-   `justify-content` → eixo principal.
-   `align-items` → eixo secundário.
