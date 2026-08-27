# Exercícios: Validação da Seção de Contato

Vocês já têm o formulário de contato pronto em HTML/CSS. Agora vamos usar JavaScript para checar se os campos foram preenchidos direito antes de "enviar".

Formulário de referência (ajustem os `id` para o que vocês já usaram):

```html
<form id="form-contato">
  <div class="campo">
    <label for="nome">Nome completo</label>
    <input type="text" id="nome">
    <span class="erro" id="erro-nome"></span>
  </div>

  <div class="campo">
    <label for="email">E-mail</label>
    <input type="email" id="email">
    <span class="erro" id="erro-email"></span>
  </div>

  <div class="campo campo-checkbox">
    <input type="checkbox" id="termos">
    <label for="termos">Li e aceito os termos de uso</label>
    <span class="erro" id="erro-termos"></span>
  </div>

  <button type="submit" id="botao-enviar">Enviar mensagem</button>
</form>
```

---

## Antes de começar: o esqueleto que todo exercício vai usar

Todo exercício abaixo acontece dentro deste mesmo bloco de código. Copiem isso primeiro no `script.js` de vocês:

```javascript
const form = document.getElementById('form-contato');

form.addEventListener('submit', function (evento) {
  evento.preventDefault(); // impede a página de recarregar

  // ... o código de cada exercício entra aqui dentro ...

});
```

Reparem: `evento.preventDefault()` é o que impede o formulário de tentar recarregar a página quando clicamos em "Enviar". Sem essa linha, nada do que fizermos depois vai fazer diferença visível, porque a página recarrega antes.

---

## Exercício 1 — Campo nome vazio

**Objetivo:** se o campo "Nome" estiver vazio, mostrar uma mensagem de erro dentro do `<span id="erro-nome">` e não deixar enviar.

```javascript
const nome = document.getElementById('nome');
const erroNome = document.getElementById('erro-nome');

if (nome.value === '') {
  erroNome.textContent = 'Por favor, preencha seu nome.';
} else {
  erroNome.textContent = '';
}
```

`nome.value` é o texto que está dentro do input. Se estiver vazio, é uma string vazia: `''`.

**Pratiquem:** rodem, testem clicando em enviar sem digitar nada, depois digitando algo. Vejam a mensagem aparecer e sumir.

---

## Exercício 2 — Fazer o mesmo para o e-mail

Agora façam sozinhos, copiando o padrão do Exercício 1, mas para o campo de e-mail (`id="email"` e `id="erro-email"`).

Mensagem sugerida: `'Por favor, preencha seu e-mail.'`

<details>
<summary>Resposta (só abram depois de tentar!)</summary>

```javascript
const email = document.getElementById('email');
const erroEmail = document.getElementById('erro-email');

if (email.value === '') {
  erroEmail.textContent = 'Por favor, preencha seu e-mail.';
} else {
  erroEmail.textContent = '';
}
```
</details>

---

## Exercício 3 — Checkbox dos termos

**Objetivo:** se a caixinha "Li e aceito os termos" não estiver marcada, mostrar um erro.

Checkbox não usa `.value` para saber se está marcada — usa `.checked`, que vale `true` ou `false`.

```javascript
const termos = document.getElementById('termos');
const erroTermos = document.getElementById('erro-termos');

if (termos.checked === false) {
  erroTermos.textContent = 'Você precisa aceitar os termos.';
} else {
  erroTermos.textContent = '';
}
```

**Dica:** `termos.checked === false` pode ser escrito de forma mais curta como `!termos.checked`. Não precisam usar a forma curta agora, mas fica o registro — vão ver bastante por aí.

---

## Exercício 4 — Não deixar enviar mesmo com erro

Reparem que nos exercícios 1 a 3, mesmo mostrando a mensagem de erro, o formulário "envia" (nesse caso, não faz nada visível, mas não bloqueia). Vamos consertar isso.

**Objetivo:** criar uma variável que guarda se está tudo certo, e só mostrar "sucesso" se estiver.

```javascript
let tudoCerto = true;

// nome
if (nome.value === '') {
  erroNome.textContent = 'Por favor, preencha seu nome.';
  tudoCerto = false;
} else {
  erroNome.textContent = '';
}

// email
if (email.value === '') {
  erroEmail.textContent = 'Por favor, preencha seu e-mail.';
  tudoCerto = false;
} else {
  erroEmail.textContent = '';
}

// termos
if (termos.checked === false) {
  erroTermos.textContent = 'Você precisa aceitar os termos.';
  tudoCerto = false;
} else {
  erroTermos.textContent = '';
}

// no final de tudo:
if (tudoCerto) {
  alert('Mensagem enviada com sucesso!');
  form.reset();
}
```

A ideia: a variável `tudoCerto` começa como `true`. Se qualquer campo estiver errado, ela vira `false` — e nunca mais volta a ser `true` naquele clique. No final, só mostramos a mensagem de sucesso se ela continuar `true`.

---

## Exercício 5 (bônus, para quem terminar rápido) — Espaços em branco não contam

Testem digitar só espaços em branco no nome (tipo `"   "`) e clicar em enviar. O que acontece? O código atual aceita isso como "preenchido" porque tecnicamente não é uma string vazia.

**Desafio:** pesquisem sobre o método `.trim()` de strings em JavaScript e usem ele para resolver esse problema. Onde no código vocês acham que ele deveria entrar?

---

## Resumo do que usamos

- `document.getElementById('algumId')` → pega um elemento do HTML pelo id
- `.value` → o texto digitado em um input
- `.checked` → se uma checkbox está marcada (`true`/`false`)
- `.textContent` → para escrever ou apagar uma mensagem de erro
- `if / else` → para decidir o que fazer
- `evento.preventDefault()` → impede o formulário de recarregar a página
- `let tudoCerto = true` + ir mudando para `false` → forma simples de "lembrar" se algo deu errado

## Sugestão de condução em sala

Façam o Exercício 1 juntos, no quadro, linha por linha, garantindo que todo mundo entende o que cada linha faz antes de seguir. O Exercício 2 pode ser feito sozinhos (é praticamente copiar e adaptar). O 3 introduz `.checked`, que costuma confundir quem só viu `.value` até agora — vale reforçar a diferença. O 4 é o mais importante conceitualmente e provavelmente vai precisar de mais tempo e mais apoio individual.
