# Projeto — Meu Portfólio Profissional

## 🎯 Objetivo

Neste projeto, você irá desenvolver seu próprio **portfólio profissional utilizando HTML, CSS e JavaScript**.

A ideia é criar uma página que apresente você, seus conhecimentos e alguns dos projetos que já desenvolveu durante o curso.

O resultado não precisa ter a aparência de um currículo tradicional. Pelo contrário: **você terá liberdade para criar um visual que represente sua personalidade**, utilizando cores, imagens, animações e diferentes estilos de layout.

O objetivo é que, ao final do projeto, você tenha uma página que possa continuar utilizando e aprimorando mesmo depois do curso.

---

# 👤 1. Apresentação

A primeira parte do portfólio deve apresentar quem você é.

Inclua:

- Uma foto sua;
- Seu nome;
- Uma breve frase ou descrição;
- Uma pequena apresentação sobre você;
- Links para suas formas de contato profissional.

Escreva uma apresentação sobre você. Você pode falar sobre seus objetivos, interesses e área em que gostaria de trabalhar.

---

# 🧑 Sobre mim

Crie uma seção contando um pouco mais sobre você.

## 🎓 Experiência acadêmica

Conte sobre sua formação e seus estudos.

Exemplos:

- Ensino médio;
- Curso técnico;
- Graduação;
- Cursos livres;
- Outros conhecimentos que esteja desenvolvendo.

## 💼 Experiência profissional

Caso já tenha trabalhado, fale brevemente sobre suas experiências profissionais.

Você pode mencionar:

- Empresas onde trabalhou;
- Áreas em que trabalhou;
- Funções que exerceu;
- Conhecimentos adquiridos.

Se ainda não possui experiência profissional, você pode falar sobre seus objetivos profissionais e sobre a área em que gostaria de trabalhar.

## 🧑‍💻 Experiência com tecnologia

Conte um pouco sobre como você começou a se interessar por tecnologia e desenvolvimento.

Por exemplo:

- Quando começou a estudar programação;
- O que despertou seu interesse;
- Quais áreas da tecnologia mais chamam sua atenção;
- O que pretende aprender no futuro.

## 🎮 Um pouco mais sobre você

Seu portfólio não precisa ser completamente formal.

Você pode incluir alguns interesses pessoais que ajudem outras pessoas a conhecer você:

- Jogos;
- Música;
- Filmes;
- Esportes;
- Desenho;
- Leitura;
- Tecnologia;
- Hobbies.

A ideia é mostrar **a pessoa por trás do código**.

---

# 🎓 Formação

Crie uma seção apresentando sua formação acadêmica.

Exemplo:

```text
Técnico em Desenvolvimento de Sistemas
Senac
2026 — Em andamento
```

Caso possua outras formações ou cursos, você pode adicioná-los.

---

# 💻 Tecnologias

Crie uma seção apresentando as tecnologias que você já conhece ou está aprendendo.

Por exemplo:

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Node.js

Você pode apresentar essas tecnologias utilizando:

- Cards;
- Ícones;
- Logos;
- Badges;
- Lista;
- Ou qualquer outra solução visual que combine com seu portfólio.

Não é necessário utilizar porcentagens de conhecimento.

Lembre-se de apresentar apenas tecnologias que você realmente conhece ou está estudando.

---

# 🚀 Projetos

Esta será uma das principais partes do seu portfólio.

Você deverá apresentar alguns dos projetos que já desenvolveu durante o curso.

Para cada projeto, apresente:

- Nome do projeto;
- Imagem ou captura de tela;
- Breve descrição;
- Tecnologias utilizadas;
- Link para o repositório no GitHub;
- Caso esteja publicado, link para acessar o projeto.

Exemplo:

```text
Calculadora Web

Calculadora desenvolvida utilizando HTML, CSS e JavaScript.
O projeto permite realizar operações matemáticas básicas
e apresenta o resultado de forma dinâmica.

Tecnologias:
HTML | CSS | JavaScript

[ GitHub ] [ Ver projeto ]
```

Procure escolher projetos que demonstrem diferentes conhecimentos que você desenvolveu durante o curso.

---

# 🎞️ Carrossel de projetos

Os projetos devem ser apresentados através de um **carrossel**.

O carrossel permitirá que o usuário navegue entre vários projetos sem precisar colocar todos eles na tela ao mesmo tempo.

Uma estrutura simples será formada por:

```text
┌────────────────────────────────────────┐
│                                        │
│              PROJETOS                  │
│                                        │
│       ←    [ PROJETO ]    →            │
│                                        │
└────────────────────────────────────────┘
```

O carrossel será controlado utilizando **JavaScript**.

## 📄 Estrutura HTML

Uma estrutura básica para o carrossel pode ser:

```html
<section id="projetos">

    <h2>Meus Projetos</h2>

    <div class="carrossel">

        <div class="slides">

            <div class="slide">
                <img src="img/projeto1.png" alt="Imagem do projeto 1">

                <h3>Calculadora Web</h3>

                <p>
                    Calculadora desenvolvida utilizando
                    HTML, CSS e JavaScript.
                </p>

                <a href="https://github.com/seuusuario/projeto1">
                    Ver no GitHub
                </a>
            </div>


            <div class="slide">
                <img src="img/projeto2.png" alt="Imagem do projeto 2">

                <h3>Projeto 2</h3>

                <p>
                    Descrição do segundo projeto.
                </p>

                <a href="https://github.com/seuusuario/projeto2">
                    Ver no GitHub
                </a>
            </div>


            <div class="slide">
                <img src="img/projeto3.png" alt="Imagem do projeto 3">

                <h3>Projeto 3</h3>

                <p>
                    Descrição do terceiro projeto.
                </p>

                <a href="https://github.com/seuusuario/projeto3">
                    Ver no GitHub
                </a>
            </div>

        </div>

    </div>

    <button id="anterior">←</button>
    <button id="proximo">→</button>

</section>
```

Você pode modificar completamente essa estrutura visualmente. O importante para o JavaScript é manter os elementos necessários ou adaptar o código de acordo com suas próprias classes e IDs.

---

# 🎨 Como o CSS do carrossel funciona

O segredo do carrossel está em colocar todos os slides **lado a lado** e depois mover esse conjunto horizontalmente.

Uma estrutura básica de CSS é:

```css
.carrossel {
    width: 100%;
    overflow: hidden;
}

.slides {
    display: flex;
    transition: transform 0.5s ease;
}

.slide {
    min-width: 100%;
    box-sizing: border-box;
}
```

## `overflow: hidden`

```css
.carrossel {
    overflow: hidden;
}
```

O carrossel pode ser maior do que a área visível.

O `overflow: hidden` faz com que a parte que estiver fora da área do carrossel não apareça.

---

## `display: flex`

```css
.slides {
    display: flex;
}
```

Isso coloca os slides lado a lado.

Imagine três slides:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Slide 1  │ │ Slide 2  │ │ Slide 3  │
└──────────┘ └──────────┘ └──────────┘
```

---

## `min-width: 100%`

```css
.slide {
    min-width: 100%;
}
```

Cada slide ocupa 100% da largura disponível.

Assim, se o carrossel possui 500px de largura, cada slide terá aproximadamente 500px.

---

## `transition`

```css
.slides {
    transition: transform 0.5s ease;
}
```

A propriedade `transform` será alterada pelo JavaScript.

O `transition` faz com que essa mudança aconteça de maneira animada.

Sem o `transition`, o slide mudaria instantaneamente.

Com ele:

```text
Slide 1
   ↓
   ↓
   ↓
Slide 2
```

O movimento fica visualmente mais suave.

---

# 🧠 O JavaScript do carrossel

Utilize o seguinte código:

```javascript
let slideAtual = 0;

const slides = document.querySelector(".slides");
const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");

function atualizarCarrossel() {
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
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

Agora vamos entender cada parte.

---

## 1. Criando a variável que controla o slide

```javascript
let slideAtual = 0;
```

Essa variável guarda o número do slide que está sendo exibido.

O JavaScript começa contando a partir do zero:

```text
0 → primeiro slide
1 → segundo slide
2 → terceiro slide
3 → quarto slide
```

Por isso começamos com:

```javascript
let slideAtual = 0;
```

---

# 2. Encontrando os elementos no HTML

```javascript
const slides = document.querySelector(".slides");
const anterior = document.querySelector("#anterior");
const proximo = document.querySelector("#proximo");
```

Aqui estamos buscando os elementos HTML que serão utilizados pelo JavaScript.

### `.slides`

```javascript
document.querySelector(".slides");
```

Encontra o elemento que contém todos os slides.

### `#anterior`

```javascript
document.querySelector("#anterior");
```

Encontra o botão responsável por voltar para o slide anterior.

### `#proximo`

```javascript
document.querySelector("#proximo");
```

Encontra o botão responsável por avançar para o próximo slide.

---

# 3. Criando uma função para atualizar o carrossel

```javascript
function atualizarCarrossel() {
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}
```

Essa é a parte mais importante do código.

Ela movimenta os slides utilizando CSS através do JavaScript.

Imagine que estamos no primeiro slide:

```text
slideAtual = 0
```

A conta será:

```text
0 × 100 = 0%
```

Então:

```css
transform: translateX(0%);
```

O primeiro slide continua aparecendo.

---

Quando vamos para o segundo:

```text
slideAtual = 1
```

A conta:

```text
1 × 100 = 100%
```

O JavaScript aplica:

```css
transform: translateX(-100%);
```

O conjunto de slides é movido 100% para a esquerda.

---

No terceiro slide:

```text
slideAtual = 2

2 × 100 = 200%
```

Então:

```css
transform: translateX(-200%);
```

Visualmente:

```text
Slide 1 → Slide 2 → Slide 3
                       ↑
                    visível
```

---

# 4. Botão próximo

```javascript
proximo.addEventListener("click", function () {
    slideAtual++;

    if (slideAtual >= slides.children.length) {
        slideAtual = 0;
    }

    atualizarCarrossel();
});
```

Primeiro:

```javascript
proximo.addEventListener("click", function () {
```

Estamos dizendo:

> Quando o botão "próximo" for clicado, execute este código.

Depois:

```javascript
slideAtual++;
```

Isso aumenta o número do slide atual.

Por exemplo:

```text
0 → 1
1 → 2
2 → 3
```

---

## E quando chegar ao último slide?

Precisamos voltar para o primeiro.

Para isso:

```javascript
if (slideAtual >= slides.children.length) {
    slideAtual = 0;
}
```

`slides.children.length` informa quantos elementos existem dentro de `.slides`.

Se tivermos três slides:

```text
slides.children.length = 3
```

Os índices são:

```text
0
1
2
```

Depois do slide 2, o valor seria:

```text
3
```

Como não existe um slide de índice 3, o código faz:

```javascript
slideAtual = 0;
```

E o carrossel volta para o primeiro slide.

---

# 5. Botão anterior

Agora fazemos o contrário:

```javascript
anterior.addEventListener("click", function () {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.children.length - 1;
    }

    atualizarCarrossel();
});
```

Quando clicamos em "anterior":

```javascript
slideAtual--;
```

O número diminui:

```text
2 → 1
1 → 0
```

Mas existe um problema.

Se estamos no primeiro slide:

```text
slideAtual = 0
```

e clicamos em anterior:

```text
slideAtual = -1
```

Não existe um slide `-1`.

Então fazemos:

```javascript
if (slideAtual < 0) {
    slideAtual = slides.children.length - 1;
}
```

Se existem três slides:

```text
slides.children.length = 3
```

Então:

```text
3 - 1 = 2
```

O carrossel vai para o último slide.

Assim:

```text
← no primeiro slide

Slide 1
   ↓
Slide 3
```

---

# 🔄 Resumindo o funcionamento

O carrossel funciona através de quatro ideias principais:

### 1. Guardar qual slide está sendo exibido

```javascript
let slideAtual = 0;
```

### 2. Alterar esse número

Próximo:

```javascript
slideAtual++;
```

Anterior:

```javascript
slideAtual--;
```

### 3. Mover os slides

```javascript
slides.style.transform =
    `translateX(-${slideAtual * 100}%)`;
```

### 4. Voltar para o início ou para o fim

Quando chega ao final:

```javascript
slideAtual = 0;
```

Quando passa do início:

```javascript
slideAtual = slides.children.length - 1;
```

---

# 📁 Onde colocar o JavaScript?

Organize seu projeto utilizando uma pasta para JavaScript:

```text
portfolio/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── header.css
│   ├── sobre.css
│   ├── projetos.css
│   └── responsivo.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── foto.jpg
│   ├── projeto1.png
│   ├── projeto2.png
│   └── projeto3.png
│
└── README.md
```

No HTML, importe o JavaScript:

```html
<script src="js/script.js"></script>
```

Uma opção simples é colocar o `script` no final do `body`:

```html
<body>

    <!-- conteúdo da página -->

    <script src="js/script.js"></script>

</body>
```

Assim, quando o JavaScript for executado, os elementos HTML já terão sido carregados.

---

# 📱 Responsividade

Seu portfólio deverá funcionar em diferentes tamanhos de tela.

Ele deve ser pensado para:

- 📱 Celulares;
- 📱 Tablets;
- 💻 Notebooks;
- 🖥️ Monitores.

O conteúdo não deve ficar cortado ou exigir rolagem horizontal.

Utilize CSS responsivo, incluindo recursos como:

```css
@media
```

Pense em como os elementos devem se reorganizar quando a tela ficar menor.

Por exemplo:

```text
COMPUTADOR

[ FOTO ]  [ SOBRE MIM ]


CELULAR

[ FOTO ]

[ SOBRE MIM ]
```

Não basta diminuir os elementos. O layout pode precisar mudar de organização.

---

# 🎨 Identidade visual

Seu portfólio deve possuir uma identidade visual própria.

Escolha:

- Cores;
- Fontes;
- Tamanhos;
- Espaçamentos;
- Bordas;
- Sombras;
- Animações;
- Imagens;
- Ícones.

Você pode escolher qualquer estilo:

- Minimalista;
- Futurista;
- Gamer;
- Retrô;
- Elegante;
- Colorido;
- Tecnológico;
- Artístico;
- Escuro;
- Inspirado em algum universo que você goste.

**Não existe um único estilo correto.**

O importante é que o visual combine com você e com a proposta do seu portfólio.

---

# 🌈 Variáveis CSS

Utilize variáveis CSS para organizar as principais cores e valores utilizados no projeto.

Por exemplo:

```css
:root {
    --cor-principal: #8458B3;
    --cor-secundaria: #d0bdf4;
    --cor-fundo: #f5f5f5;
    --cor-texto: #222222;
}
```

Depois, utilize essas variáveis no restante do CSS:

```css
body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
}
```

Isso facilita a manutenção e permite alterar a identidade visual do site de maneira mais organizada.

---

# 🏷️ Nomes das classes

Utilize nomes de classes que indiquem claramente a função ou o conteúdo do elemento.

Evite:

```css
.a1
.coisa
.azul
.div2
.x
```

Prefira nomes como:

```css
.header
.menu
.menu-item
.sobre
.projetos
.projeto-card
.projeto-imagem
.projeto-descricao
.contato
```

Uma pessoa que abrir seu código deve conseguir entender aproximadamente o que cada classe representa apenas pelo seu nome.

---

# 📧 Contato

Crie uma seção para que uma pessoa interessada em seu trabalho consiga entrar em contato com você.

Inclua:

- E-mail;
- GitHub;
- LinkedIn, caso possua;
- Outras redes profissionais que considerar relevantes.

Você pode criar botões ou cards para cada forma de contato.

---

# 📱 Menu de navegação

Crie um menu que permita navegar pelas diferentes partes do seu portfólio.

Por exemplo:

```text
Início | Sobre | Formação | Tecnologias | Projetos | Contato
```

Os links podem levar diretamente para as seções da página utilizando `id`.

Exemplo:

```html
<a href="#projetos">Projetos</a>
```

E:

```html
<section id="projetos">
```

---

# ⭐ Outras ideias com JavaScript

Além do carrossel, você pode adicionar outras interações utilizando JavaScript.

Algumas possibilidades:

### Menu mobile

Criar um botão que abre e fecha o menu em telas pequenas.

### Dark mode

Criar um botão que permita alternar entre tema claro e escuro.

### Animações

Fazer elementos aparecerem quando o usuário interagir com a página.

### Botão "voltar ao topo"

Criar um botão que aparece depois que o usuário começa a rolar a página.

### Outros efeitos

Você também pode criar sua própria interação utilizando os conhecimentos de JavaScript.

**Não coloque JavaScript apenas para cumprir uma exigência.**

Utilize-o para tornar seu site mais interessante ou melhorar a experiência de quem estiver navegando.

---

# 🌙 Tema claro e escuro

Como recurso adicional, você pode criar dois temas para o seu portfólio.

Por exemplo:

```text
☀️ Tema claro

🌙 Tema escuro
```

As cores podem ser controladas através das variáveis definidas no `:root`.

Você pode utilizar JavaScript para alternar uma classe:

```javascript
document.body.classList.toggle("dark");
```

E então definir as cores do tema escuro no CSS.

---

# 🖼️ Imagens

Utilize imagens para tornar seu portfólio mais visual.

Você pode utilizar:

- Sua foto;
- Capturas de tela dos seus projetos;
- Ícones;
- Ilustrações;
- Imagens relacionadas aos seus interesses.

Tenha cuidado para não utilizar imagens muito grandes, pois isso pode deixar o site lento.

Também procure utilizar o atributo `alt` nas imagens:

```html
<img src="img/foto.jpg" alt="Foto de João Silva">
```

---

# 📌 Requisitos principais

Seu portfólio deverá apresentar:

- Foto;
- Nome;
- Apresentação pessoal;
- Formação acadêmica;
- Experiências profissionais, quando houver;
- Experiências acadêmicas;
- Interesses pessoais;
- Tecnologias conhecidas;
- Projetos desenvolvidos;
- Carrossel de projetos;
- Descrição dos projetos;
- Link para os repositórios;
- Informações de contato;
- Menu de navegação;
- Layout responsivo;
- Organização de arquivos e pastas;
- Variáveis CSS;
- Classes com nomes coerentes;
- JavaScript.

---

# 💡 Pense além do código

Lembre-se de que este projeto será sobre **você**.

Não pense apenas:

> "Como faço essa página funcionar?"

Pense também:

> "O que uma pessoa descobriria sobre mim ao visitar essa página?"

> "O que eu gostaria que um recrutador percebesse?"

> "Quais projetos mostram melhor o que eu aprendi?"

> "Que estilo visual combina comigo?"

> "O que posso fazer para tornar essa página diferente das outras?"

Seu portfólio não precisa ser perfeito.

Ele deve representar **o seu momento atual como desenvolvedor** e poderá continuar evoluindo conforme você aprender novas tecnologias.

---

# 🚀 Publicação

Ao terminar o projeto, publique seu código em um repositório no **GitHub**.

Procure também publicar o próprio site utilizando o **GitHub Pages**, para que você tenha um endereço que possa compartilhar com outras pessoas.

Por exemplo:

```text
https://seuusuario.github.io/portfolio/
```

Dessa forma, seu projeto deixa de ser apenas uma atividade de aula e passa a ser algo que você pode continuar desenvolvendo e utilizando profissionalmente.

---

# 🎯 Resultado esperado

Ao final do projeto, você deverá possuir uma página pessoal que apresente:

```text
┌─────────────────────────────────────┐
│                                     │
│          SUA FOTO                   │
│                                     │
│          SEU NOME                   │
│      "Sua frase pessoal"            │
│                                     │
│       [ GitHub ] [ Contato ]        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           SOBRE MIM                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           FORMAÇÃO                  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         TECNOLOGIAS                 │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           PROJETOS                  │
│                                     │
│       ←   [ Projeto ]   →           │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           CONTATO                   │
│                                     │
└─────────────────────────────────────┘
```

**Mas o visual, as cores, as animações e a personalidade do projeto são seus.**

Use o que você aprendeu até agora e transforme este projeto em algo que você teria orgulho de apresentar.
