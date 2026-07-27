# Exercício — Criando sua Primeira Página com CSS Externo

## Objetivo

Neste exercício, você deverá criar uma página HTML simples e aplicar estilos utilizando um arquivo CSS externo.

O objetivo é praticar os conceitos vistos em aula:

- Estrutura básica do HTML;
- Utilização da tag `<link>`;
- CSS externo;
- Seletores;
- Cores;
- Formatação de textos;
- Backgrounds.

---

# Antes de Começar

O **CSS** é uma linguagem extremamente ampla. Existem centenas de propriedades, milhares de combinações possíveis e inúmeras maneiras diferentes de estilizar uma página.

Durante a aula aprendemos apenas os conceitos fundamentais, mas isso representa apenas uma pequena parte do que o CSS é capaz de fazer.

Por isso, **não se limite apenas ao conteúdo apresentado em sala**. Pesquisar faz parte do trabalho de qualquer desenvolvedor e é uma das habilidades mais importantes para quem trabalha com tecnologia.

Sinta-se à vontade para buscar inspiração e aprender novas propriedades durante a realização deste exercício.

Você pode pesquisar, por exemplo:

- Novas cores e paletas;
- Fontes diferentes;
- Imagens de fundo;
- Bordas;
- Sombras;
- Ícones;
- Botões personalizados;
- Efeitos de texto;
- Gradientes;
- Animações simples;
- Qualquer outro estilo que torne seu site mais interessante.

> **Importante:** Não é necessário decorar todas as propriedades do CSS. Um bom desenvolvedor sabe pesquisar, compreender a documentação e aplicar novos conhecimentos sempre que necessário.

> **Desafio extra:** Encontrou uma propriedade interessante que ainda não vimos em aula? Utilize-a e depois compartilhe sua descoberta com a turma!

---

# Estrutura do Projeto

Crie uma pasta contendo os seguintes arquivos:

```text
meu-site/
│
├── index.html
└── style.css
```

---

# Requisitos

## HTML

Sua página deverá conter obrigatoriamente:

- Um título principal (`<h1>`);
- Um subtítulo (`<h2>`);
- Pelo menos dois parágrafos (`<p>`);
- Uma imagem;
- Uma lista com, no mínimo, cinco itens;
- Um botão (`<button>`).

Além disso:

- O arquivo `style.css` deve estar conectado ao HTML utilizando a tag:

```html
<link rel="stylesheet" href="style.css">
```

---

## CSS

No arquivo `style.css`, aplique os seguintes estilos.

### Página

- Defina uma cor de fundo utilizando `background-color` **ou** uma imagem utilizando `background-image`.

### Título Principal

- Altere a cor;
- Defina um tamanho de fonte maior;
- Centralize o texto.

### Subtítulo

- Utilize uma cor diferente do título;
- Aplique `text-transform: uppercase`.

### Parágrafos

- Defina uma cor para o texto;
- Ajuste o tamanho da fonte;
- Utilize um alinhamento de sua escolha.

### Imagem

- Defina uma largura utilizando a propriedade `width`.

### Botão

- Escolha uma cor de fundo;
- Escolha uma cor para o texto.

---

## Utilizando Seletores

Seu CSS deve utilizar, obrigatoriamente:

- Seletor por elemento;
- Seletor por classe;
- Seletor por ID.

### Desafio (Opcional)

Utilize também:

- Seletor descendente;
- Seletor de filho direto (`>`);
- Seletor universal (`*`).

---

# Escolha um Tema

Para deixar o exercício mais interessante para o coitado do professor, escolha **um** dos temas abaixo (ou proponha outro).

---

## 🦸 Portfólio do Homem-Caramujo

Crie um portfólio para o **Homem-Caramujo**, um herói de classe B que está tentando ser aceito na Liga da Justiça.

Sua página pode conter:

- Nome do herói;
- Foto;
- História de origem;
- Superpoderes;
- Pontos fracos;
- Missões realizadas;
- Depoimentos de cidadãos;
- Botão **"Contratar Herói"**.

---

## 🏴‍☠️ Recrutamento para uma Tripulação Pirata

Você foi contratado para criar o site oficial de recrutamento da embarcação **Pintassilgo-Zangado**.

O Capitão está procurando novos tripulantes para navegar pelos mares em busca de tesouros lendários.

O site pode conter:

- História do navio;
- Quem é o capitão;
- Requisitos para entrar na tripulação;
- Benefícios de ser um pirata;
- Lista de cargos disponíveis;
- Botão **"Quero Embarcar"**.

---

## 🚗 Venda de um Lada Laika 1.6 (Sedã)

Crie um anúncio para vender um **Lada Laika 1.6 (Sedã)**.

Informações obrigatórias:

- Valor: **R$ 750,00**;
- Aceita troca por:
  - 🐖 1 porco;
  - 🐔 2 galinhas;
  - restante a combinar.

Você pode exagerar nas qualidades do veículo e criar um anúncio extremamente convincente (ou extremamente suspeito).

Sua página pode conter:

- Fotos do veículo;
- Especificações técnicas;
- Vantagens;
- Informações para contato;
- Botão **"Tenho Interesse"**.

---

## 🎨 Tema Livre

Caso prefira, crie um site sobre qualquer outro assunto.

Apenas lembre-se de utilizar todos os elementos obrigatórios do exercício.

---

# Desafio ⭐

Crie uma seção da página utilizando uma `<div>` e aplique:

- Uma imagem de fundo;
- `background-size: cover`;
- `background-position: center`.

Se desejar, pesquise outras propriedades para tornar essa seção ainda mais bonita, como bordas arredondadas, sombras, gradientes ou efeitos de destaque.

---
> **Divirta-se!** O objetivo deste exercício é colocar em prática os conceitos aprendidos e explorar sua criatividade. Não tenha medo de testar, pesquisar e experimentar novas ideias. É assim que bons desenvolvedores aprendem.
