# Arquitetura de pastas no CSS

## Por que separar os arquivos?

Quando começamos um projeto, é comum colocar todo o CSS em um único arquivo:

```text
meu-projeto/
├── index.html
└── style.css
```

No começo funciona bem. Mas, conforme o projeto cresce, o arquivo pode ficar muito grande e difícil de organizar.

Por exemplo:

```css
/* style.css */

body {
    margin: 0;
}

header {
    background: blue;
}

.card {
    border: 1px solid #ccc;
}

.button {
    background: green;
}

/* ... centenas de outras regras ... */
```

Então surgem algumas perguntas:

- Onde está o CSS do botão?
- Onde está o CSS do cabeçalho?
- Posso alterar esse estilo sem quebrar outra parte?

A solução é **separar o CSS por responsabilidade**.

---

# Uma estrutura simples

Para os nossos projetos, podemos começar com esta estrutura:

```text
meu-projeto/
│
├── index.html
│
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components/
│   │   ├── button.css
│   │   └── card.css
│   └── main.css
│
└── img/
```

Cada arquivo possui uma função.

| Arquivo | Responsabilidade |
|---|---|
| `base.css` | Configurações gerais |
| `layout.css` | Estrutura da página |
| `components/` | Componentes específicos |
| `main.css` | Junta todos os arquivos |

---

# 1. `base.css`

O `base.css` contém as configurações gerais do projeto.

Podemos colocar aqui:

- Reset
- Variáveis
- Fonte
- Estilos gerais do `body`
- Estilos gerais de elementos

Exemplo:

```css
/* base.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cor-principal: #3b82f6;
    --cor-texto: #333;
    --cor-fundo: #fff;

    --espacamento-pequeno: 8px;
    --espacamento-medio: 16px;
    --espacamento-grande: 32px;

    --borda-arredondada: 8px;
}

body {
    font-family: Arial, sans-serif;
    color: var(--cor-texto);
    background-color: var(--cor-fundo);
}

img {
    max-width: 100%;
}
```

### Regra simples

> Se a regra é usada no projeto inteiro, provavelmente ela pertence ao `base.css`.

---

# 2. `layout.css`

O `layout.css` cuida da **estrutura da página**.

Por exemplo:

- Cabeçalho
- Conteúdo principal
- Rodapé
- Containers
- Grid
- Flexbox para organizar grandes áreas

Exemplo:

```css
/* layout.css */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--espacamento-medio);
}

header {
    padding: var(--espacamento-medio);
    background-color: var(--cor-principal);
}

main {
    padding: var(--espacamento-grande) 0;
}

footer {
    padding: var(--espacamento-grande);
}

.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Uma forma fácil de lembrar

**Layout = onde as coisas ficam.**

Por exemplo:

```css
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Esse código organiza os elementos.

Já o visual de um card fica em `components/card.css`.

---

# 3. `components/`

Aqui colocamos os componentes da página.

Um componente é uma parte que podemos reutilizar.

Exemplos:

```text
components/
├── button.css
├── card.css
├── nav.css
└── form.css
```

Não precisamos criar todos esses arquivos imediatamente.

Começamos criando apenas os que realmente precisamos.

---

## Exemplo: `button.css`

```css
/* components/button.css */

.button {
    display: inline-block;
    padding: 10px 20px;

    background-color: var(--cor-principal);
    color: white;

    border: none;
    border-radius: var(--borda-arredondada);

    cursor: pointer;
}

.button:hover {
    opacity: 0.8;
}
```

O arquivo `button.css` cuida dos botões.

---

## Exemplo: `card.css`

```css
/* components/card.css */

.card {
    padding: var(--espacamento-medio);

    background-color: white;

    border: 1px solid #ddd;
    border-radius: var(--borda-arredondada);
}

.card__titulo {
    margin-bottom: var(--espacamento-pequeno);
}

.card__descricao {
    color: #666;
}
```

O arquivo `card.css` cuida dos cards.

---

# 4. `main.css`

O `main.css` será o arquivo responsável por **juntar todos os outros arquivos**.

Ele não precisa ter regras de CSS próprias.

Usamos `@import`.

```css
/* main.css */

@import url("base.css");

@import url("layout.css");

@import url("components/button.css");
@import url("components/card.css");
```

A ideia é:

```text
                 main.css
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     base.css   layout.css   components/
                              │
                         ┌────┴────┐
                         ↓         ↓
                     button.css  card.css
```

---

# 5. O HTML

No HTML, precisamos importar apenas o `main.css`.

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Meu projeto</title>

    <link rel="stylesheet" href="css/main.css">
</head>

<body>

    <header>
        <div class="container">
            <h1>Meu site</h1>
        </div>
    </header>

    <main>
        <div class="container">

            <div class="grid">

                <article class="card">
                    <h2 class="card__titulo">Meu card</h2>

                    <p class="card__descricao">
                        Um exemplo de componente.
                    </p>

                    <button class="button">
                        Saiba mais
                    </button>
                </article>

            </div>

        </div>
    </main>

</body>

</html>
```

Observe que o HTML conhece apenas:

```html
<link rel="stylesheet" href="css/main.css">
```

O `main.css` se encarrega do restante.

---

# 6. Como decidir onde colocar uma regra?

Quando escrever uma regra CSS, faça estas perguntas:

### É uma configuração geral?

Vai para:

```text
base.css
```

Exemplo:

```css
body {
    font-family: Arial, sans-serif;
}
```

---

### É responsável pela organização da página?

Vai para:

```text
layout.css
```

Exemplo:

```css
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

### É o visual de um componente?

Vai para:

```text
components/
```

Exemplo:

```text
components/card.css
```

```css
.card {
    border: 1px solid #ddd;
}
```

---

# 7. Quando criar um novo arquivo?

Não precisamos criar um arquivo para cada pequena regra.

Por exemplo, não precisamos fazer:

```text
components/
├── titulo.css
├── paragrafo.css
├── imagem.css
├── botao.css
└── link.css
```

Isso pode deixar o projeto mais complicado do que precisa ser.

Comece simples.

Se temos um componente chamado `card`, podemos colocar tudo relacionado a ele em:

```text
components/card.css
```

Se temos um componente chamado `button`, usamos:

```text
components/button.css
```

### Regra prática

> Um arquivo deve cuidar de uma responsabilidade.

---

# 8. Exemplo completo

A estrutura final fica assim:

```text
meu-projeto/
│
├── index.html
│
├── css/
│   │
│   ├── base.css
│   ├── layout.css
│   ├── main.css
│   │
│   └── components/
│       ├── button.css
│       └── card.css
│
└── img/
```

### Fluxo

```text
index.html
     │
     ↓
 main.css
     │
     ├──→ base.css
     │
     ├──→ layout.css
     │
     └──→ components/
             ├──→ button.css
             └──→ card.css
```

---

# Atividade — Aplicando no projeto da calculadora

Agora vamos aplicar tudo o que foi aprendido no projeto da **calculadora** que vocês já estão desenvolvendo.

A ideia não é criar uma calculadora nova. Vamos **organizar e melhorar o projeto que vocês já possuem**.

## 1. Criar a estrutura de pastas

Organize o projeto para ficar parecido com:

```text
calculadora/
│
├── index.html
│
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── main.css
│   │
│   └── components/
│       ├── calculator.css
│       └── button.css
│
├── img/
│
└── js/
    └── script.js
```

> Os nomes dos arquivos podem ser adaptados ao projeto de vocês, mas a ideia é separar o CSS por responsabilidade.

---

## 2. Criar as variáveis no `:root`

Vocês já aprenderam a utilizar `:root` e variáveis CSS.

Agora vamos colocar as cores da calculadora em um único lugar.

No `base.css`:

```css
:root {
    --ice-cold: #a0d2eb;
    --freeze-purple: #e5eaf5;
    --medium-purple: #d0bdf4;
    --purple-pain: #8458B3;
    --heavy-purple: #a28089;
}
```

Essas variáveis podem ser utilizadas em qualquer outro arquivo CSS.

Por exemplo:

```css
.calculator {
    background-color: var(--freeze-purple);
}

.button {
    background-color: var(--purple-pain);
}

.button:hover {
    background-color: var(--heavy-purple);
}
```

### Por que fazer isso?

Imagine que a cor principal da calculadora aparece em vários lugares.

Sem variável:

```css
background-color: #8458B3;
```

```css
border-color: #8458B3;
```

```css
color: #8458B3;
```

Se precisarmos mudar a cor, teremos que procurar vários lugares.

Com variável:

```css
:root {
    --purple-pain: #8458B3;
}
```

E depois:

```css
background-color: var(--purple-pain);
border-color: var(--purple-pain);
color: var(--purple-pain);
```

Agora basta alterar a variável:

```css
--purple-pain: outra-cor;
```

E todos os elementos que utilizam `var(--purple-pain)` serão alterados.

---

## 3. Separar o CSS existente

Pegue o CSS que vocês já fizeram para a calculadora e organize as regras.

### `base.css`

Coloque:

- Reset
- `:root`
- Variáveis
- Configurações gerais do `body`

Exemplo:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --ice-cold: #a0d2eb;
    --freeze-purple: #e5eaf5;
    --medium-purple: #d0bdf4;
    --purple-pain: #8458B3;
    --heavy-purple: #a28089;
}

body {
    font-family: Arial, sans-serif;
}
```

---

### `layout.css`

Coloque o CSS responsável por organizar a página.

Por exemplo:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

A ideia é:

> `layout.css` organiza **onde os elementos ficam**.

---

### `components/calculator.css`

Coloque o CSS relacionado ao card ou corpo principal da calculadora.

Por exemplo:

```css
.calculator {
    width: 300px;
    padding: 20px;

    background-color: var(--freeze-purple);
    border-radius: 10px;
}
```

---

### `components/button.css`

Coloque o CSS relacionado aos botões.

Por exemplo:

```css
.button {
    padding: 10px;

    background-color: var(--purple-pain);
    color: white;

    border: none;
    border-radius: 8px;
}

.button:hover {
    background-color: var(--heavy-purple);
}
```

---

## 4. Criar o `main.css`

O `main.css` será responsável por importar os outros arquivos:

```css
@import url("base.css");
@import url("layout.css");

@import url("components/calculator.css");
@import url("components/button.css");
```

---

## 5. Alterar o HTML

O HTML deve importar apenas o `main.css`:

```html
<link rel="stylesheet" href="css/main.css">
```

Não faça:

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components/calculator.css">
<link rel="stylesheet" href="css/components/button.css">
```

O objetivo é que o `main.css` seja o ponto central do CSS.

---

## 6. O desafio

Agora refatore a calculadora que vocês já possuem.

### Requisitos

- [ ] Criar a pasta `css`
- [ ] Criar o `base.css`
- [ ] Criar o `layout.css`
- [ ] Criar a pasta `components`
- [ ] Criar os arquivos necessários dentro de `components`
- [ ] Criar o `main.css`
- [ ] Utilizar `:root`
- [ ] Criar variáveis para as cores da calculadora
- [ ] Utilizar `var()` no restante do CSS
- [ ] Separar o CSS de acordo com sua responsabilidade
- [ ] Deixar o HTML importando somente o `main.css`
- [ ] Manter a calculadora funcionando exatamente como antes

### Importante

A aparência e o funcionamento da calculadora não precisam mudar.

O objetivo desta atividade é **organizar o código que vocês já possuem**.

Ao terminar, vocês devem conseguir responder:

> **"Se eu quiser alterar o botão da calculadora, em qual arquivo eu devo procurar?"**

E:

> **"Se eu quiser mudar a cor principal da calculadora, onde devo alterar?"**

# Resumo

A ideia principal desta aula é simples:

```text
BASE
↓
Configurações gerais

LAYOUT
↓
Estrutura da página

COMPONENTS
↓
Partes específicas da página

MAIN
↓
Junta tudo
```

## Regra de ouro

> **Não organize o projeto pensando em quantidade de arquivos. Organize pensando em responsabilidade.**

Um projeto pequeno pode começar com poucos arquivos.

Conforme ele cresce, podemos separar novas responsabilidades.

A arquitetura serve para facilitar a manutenção do código, e não para complicar o projeto.
