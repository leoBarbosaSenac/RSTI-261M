# Fixação HTML Básico

## O que é Front-End?

Front-End é a parte visual de um sistema, site ou aplicação. É tudo aquilo que o usuário vê e interage na tela.

**Exemplos:**

- Botões
- Menus
- Formulários
- Imagens
- Textos
- Animações
- Layouts

Quando você acessa um site como YouTube, Instagram ou Netflix, tudo o que aparece visualmente é o Front-End.

## Diferença entre Front-End e Back-End

### Front-End

Responsável pela interface visual.

**Tecnologias principais:**

- HTML
- CSS
- JavaScript

### Back-End

Responsável pelas regras do sistema e banco de dados.

**Exemplos de funcionalidades:**

- Login
- Cadastro
- Salvar informações
- Processamento de dados

**Tecnologias comuns:**

- Node.js
- PHP
- Java
- Python
- Banco de Dados

## Tecnologias do Front-End

### HTML

Responsável pela estrutura da página.

**Exemplo:**

- Títulos
- Parágrafos
- Imagens
- Botões

HTML funciona como o "esqueleto" do site.

### CSS

Responsável pela aparência.

**Com CSS podemos:**

- Mudar cores
- Tamanhos
- Posicionamento
- Animações
- Layouts

CSS funciona como a "roupa" do site.

### JavaScript

Responsável pela interatividade.

**Com JavaScript podemos:**

- Criar animações
- Validar formulários
- Atualizar conteúdos
- Responder cliques
- Consumir APIs

JavaScript funciona como o "cérebro" da interface.

## Como um site funciona?

1. **Passo 1:** O navegador acessa um servidor.
2. **Passo 2:** O servidor envia os arquivos (HTML, CSS e JavaScript).
3. **Passo 3:** O navegador interpreta os arquivos.
4. **Passo 4:** O site aparece na tela do usuário.

## O que é um Navegador?

É o programa usado para acessar sites.

**Exemplos:**

- Google Chrome
- Firefox
- Edge
- Safari

O navegador interpreta HTML, CSS e JavaScript.

## O que é Responsividade?

É a capacidade do site se adaptar a diferentes tamanhos de tela.

**Exemplos:**

- Celulares
- Tablets
- Notebooks
- Televisões

Hoje em dia, praticamente todo sistema precisa ser responsivo.

## Ferramentas usadas no Front-End

- **VS Code:** Editor de código muito utilizado.
- **Navegador:** Usado para testar o site.
- **DevTools:** Ferramentas do navegador para inspeção e testes.

## Áreas do Front-End

Um desenvolvedor Front-End pode trabalhar com:

- Sites institucionais
- Sistemas web
- Dashboards
- Aplicativos mobile
- E-commerce
- Interfaces administrativas

## Mercado de Trabalho

O Front-End possui alta demanda. Empresas precisam de profissionais capazes de:

- Criar interfaces bonitas
- Melhorar experiência do usuário
- Desenvolver sistemas responsivos
- Otimizar desempenho

## Conceitos importantes

- **UI (User Interface / Interface do Usuário):** Parte visual do sistema.
- **UX (User Experience / Experiência do Usuário):** Como o usuário se sente usando o sistema.

---

# HTML Básico

## O que é HTML?

HTML significa **HyperText Markup Language** (Linguagem de Marcação de Hipertexto).

É a linguagem usada para estruturar páginas web.

**Com HTML criamos:**

- Títulos
- Textos
- Imagens
- Links
- Tabelas
- Listas
- Formulários

HTML **não** é uma linguagem de programação — ele é uma linguagem de marcação.

## Estrutura básica do HTML

```html
<!DOCTYPE html>
<html>

<head>
    <title>Meu Site</title>
</head>

<body>

    <h1>Olá Mundo</h1>

</body>

</html>
```

### Explicando cada parte

- **`<!DOCTYPE html>`**: Informa ao navegador que estamos usando HTML5.
- **`<html>`**: Elemento principal da página. Tudo fica dentro dele.
- **`<head>`**: Contém as configurações da página (não é exibido visualmente).
- **`<title>`**: Define o nome que aparece na aba do navegador.
- **`<body>`**: Contém tudo que aparece visualmente na página.

## Títulos

HTML possui 6 níveis de títulos, do maior (`h1`) ao menor (`h6`):

```html
<h1>Título Principal</h1>
<h2>Título</h2>
<h3>Título</h3>
<h4>Título</h4>
<h5>Título</h5>
<h6>Título</h6>
```

## Parágrafos

A tag `<p>` define um parágrafo de texto:

```html
<p>Este é um parágrafo.</p>
```

## Quebra de linha

A tag `<br>` insere uma quebra de linha, sem criar um novo parágrafo:

```html
<br>
```

## Linha horizontal

A tag `<hr>` insere uma linha horizontal, geralmente usada para separar conteúdos:

```html
<hr>
```

## Comentários

Comentários não aparecem no site, servem apenas como anotações no código:

```html
<!-- Isto é um comentário -->
```

## Links

A tag `<a>` cria um link. O atributo `href` define o endereço de destino:

```html
<a href="https://google.com">
    Acessar Google
</a>
```

## Imagens

A tag `<img>` insere uma imagem. O atributo `src` indica o caminho do arquivo:

```html
<img src="imagem.jpg">
```

Com tamanho definido (atributo `width`):

```html
<img src="imagem.jpg" width="300">
```

## Listas

### Lista não ordenada

A tag `<ul>` (unordered list) cria uma lista com marcadores, e cada item usa `<li>`:

```html
<ul>
    <li>Maçã</li>
    <li>Banana</li>
</ul>
```

### Lista ordenada

A tag `<ol>` (ordered list) cria uma lista numerada:

```html
<ol>
    <li>Primeiro</li>
    <li>Segundo</li>
</ol>
```

## Divs

A `<div>` é usada para organizar e agrupar conteúdos dentro da página:

```html
<div>
    <h1>Título</h1>
    <p>Texto</p>
</div>
```

## Botões

A tag `<button>` cria um botão clicável:

```html
<button>Clique Aqui</button>
```

## Inputs

A tag `<input>` cria campos de entrada de dados. O tipo é definido pelo atributo `type`.

**Campo de texto:**

```html
<input type="text">
```

**Senha:**

```html
<input type="password">
```

**Número:**

```html
<input type="number">
```

**Email:**

```html
<input type="email">
```

## Formulários

A tag `<form>` agrupa campos de entrada e botões para envio de dados:

```html
<form>

    <input type="text">

    <button>
        Enviar
    </button>

</form>
```

## Labels

A tag `<label>` define um rótulo (texto descritivo) para um campo de formulário:

```html
<label>Nome</label>
<input type="text">
```

## Tabelas

A tag `<table>` cria uma tabela. `<tr>` define uma linha (table row), `<th>` define uma célula de cabeçalho (table header) e `<td>` define uma célula de dado comum (table data):

```html
<table border="1">

    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>

    <tr>
        <td>Leonardo</td>
        <td>25</td>
    </tr>

</table>
```

## Estrutura completa de exemplo

```html
<!DOCTYPE html>
<html>

<head>
    <title>Meu Primeiro Site</title>
</head>

<body>

    <h1>Meu Site</h1>

    <p>
        Este é meu primeiro site.
    </p>

    <button>
        Clique Aqui
    </button>

</body>

</html>
```

## Boas práticas

- Usar indentação
- Organizar o código
- Fechar as tags corretamente
- Manter o HTML limpo

## Conclusão

HTML é a base da criação de sites. Todo desenvolvimento web começa com HTML.
