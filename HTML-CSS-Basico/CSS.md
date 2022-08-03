CSS Basics Resumo

1. **O que é CSS?**

Folha em estilo cascata é como você dá estilo para a sua página. É aqui que você vai conseguir por cor e fazer a maioria das animações dos seus projetos.

![https://www.alura.com.br/artigos/assets/html-css-js/imagem-4.png](https://www.alura.com.br/artigos/assets/html-css-js/imagem-4.png)

**2. Como importar o CSS?**

Por padrão, geralmente se cria um arquivo com o nome `style.css`*.*

Para que os estilos sejam aplicados no documento HTML é necessário fazer a importação do arquivo de estilos. Para isso, dentro do arquivo `index.html` dentro da tag <head></head> deve ser feita a importação:

```jsx
<head>
    ...
		<link href="style.css" rel="stylesheet">
</head>
```

**3. Aplicar regras a um elemento**

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

**4. Aplicar regras a vários elementos**

Usa-se vírgulas para aplicar um conjunto de regras a vários elementos.

```css
p, li, h1 {
  color: red;
}
```

**5. Tipos de seletores**

1. tag → são as tags do HTML. Para mudar o estilo de uma tag HTML base escrever a tag normalmente. Exemplos de tags html (div, p, h1)

```css
p, li, h1 {
  color: red;
}
```

2. id → é possível adicionar um ID a um elemento html que deve ser único. Para estilizar um elemento através do seu id é necessário usar **#** antes.

```html
<span id="texto">Um texto qualquer</span>
```

```css
#texto {
	color: red;
}
```

3. classe → o mais comum de todos é o seletor por classe. Para isso, usamos o **.**

```html
<span class="texto">Um texto qualquer</span>
```

```css
.texto {
	color: red;
}
```

4. pseudoclasse → o seletor de pseudoclasse usa os **:**

Primeiro, o que é uma pseudoclasse? É uma palavra-chave acionada que especifica um estado especial de um elemento. Ex: hover, checked, active, disabled.. 

```css
button:hover {
	background: blue;
}
```

5. atributo → o seletor de atributo é um pouco diferente e se usa os **[].**

Primeiro, o que é um atributo? Um atributo pode ser declarado em um elemento html assim:

```html
<div lang="pt-br">Um texto qualquer</div> // lang é um atributo
```

É possível personalizar um elemento de acordo com o valor do seu atributo

```css
// todas as div que possuem o atributo lang vão ser personalizadas
div[lang] {
	font-size: 12px;
}

// somente as divs que possuem atributo lang que for igual a pt/br
div[lang="pt-br"] {
	font-size: 12px;
}
```

---

# Padding & Margin

Padding → distância entre o conteúdo de um elemento e sua borda. Ou seja a distancia **INTERNA**. 

```CSS
.element {
    padding: 0px; /* Todos os lados */
    padding: 5px 20px; /* 5px para cima e para baixo e 10px para esquerda e para direita */
    padding: 10px 20px 30px 40px; /* 10px para cima, 20px para direita, 30px para baixo e 40px para esquerda */
}
```

Fora esses podemos colocar separadamente com as propriedades específicas:
> padding-top
> padding-right
> padding-bottom
> padding-left

![https://media.gcflearnfree.org/content/5f2037ef9f0e913daccfd738_07_28_2020/padding.png](https://media.gcflearnfree.org/content/5f2037ef9f0e913daccfd738_07_28_2020/padding.png)

Margin → margem que o elemento vai ter no 4 lados do elemento. Distância **EXTERNA**

```CSS
.element {
    margin: 0px; /* Todos os lados */
    margin: 5px 20px; /* 5px para cima e para baixo e 10px para esquerda e para direita */
    margin: 10px 20px 30px 40px; /* 10px para cima, 20px para direita, 30px para baixo e 40px para esquerda */
}
```

Fora esses podemos colocar separadamente com as propriedades específicas:
> margin-top
> margin-right
> margin-bottom
> margin-left

![https://media.gcflearnfree.org/content/5fcf9a4c859924091c3d4746_12_08_2020/margins.png](https://media.gcflearnfree.org/content/5fcf9a4c859924091c3d4746_12_08_2020/margins.png)

<p>Bom site para estudar: <a href="https://edu.gcfglobal.org/en/basic-css/">GCT Global</a></p>

---
# Comentários
Podemos utilizar o atalho do VSCode `ctrl + /` que adiciona o comentário automaticamente, mas no CSS o comentário pode ser feito da seguinte maneira `/* conteúdo */`

Cuidado para não colocar muito comentário no css, pois se precisar comentar o código por completo, os comentários darão choque, pois não pode haver comentário dentro de comentário.

---
# Importar fontes (Google fonts)
<a href="https://fonts.google.com/">Google Fonts</a>

```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.content {
    font-family: 'Roboto', sans-serif;
}
```

---
# Importar Ícones do Feather icons
<a href="https://feathericons.com/">Feather Icon</a>
<a href="https://github.com/feathericons/feather#feather">Feather Icon Doc</a>

```HTML
<head>
    <!-- choose one -->
    <script src="https://unpkg.com/feather-icons"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
</head>

<body>
    <i data-feather="circle"></i>

    <script>
        feather.replace()
    </script>
</body>

```

---
# Display

Os elementos html se dividem em 2 grandes categorias: os elementos do **tipo block** e do **tipo inline**.

## Block

- Elementos como o `div`, `p`, `h1`, `h2`, ... `h6`,
- Sempre **ocupam toda a largura possível de tela** e **começam em uma nova linha**
- Pode manipular o `width` e `height`

## Inline

- Elementos como `span`, `img`, `a`
- Usam **somente o espaço necessário** e não precisam começar em uma nova linha
- Elemento aparece próximo de outro elemento e na mesma linha
- Não consegue controlar o `height` e `width`
- Desconsidera `margin` e `padding` top e bottom

## Inline-Block

- Muito usado para criar menus
- Responde a `width` e `height`

## Flex

## Grid

--- 

## Relative

- O elemento pode ser posicionado relativamente a sua posição original.
- É possível manipular `top` e `left`
- Elemento sai fora do fluxo

## Absolute

- Elemento é posicionado relativamente ao último elemento antecessor que não for static.
- É possível manipular `top` e `left`
- Elemento sai fora do fluxo
- Necessário indicar o elemento ao qual a posição é relativa

## Fixed

- Elemento é posicionado relativamente a janela do navegador
- É possível manipular `top` e `left`
- Usado para menus

## Sticky

- Elemento é posicionado baseado na posição do scroll do usuário
- Dependendo da posição do scroll o elemento se "gruda" em algum lugar e vira fixed.
- É possível manipular `top` e `left`

---

# Flexbox

Como usar

`display: flex` na classe **PAI**

**Flex-direction** → direção do flexbox, pode ser `row` (default) ou `column`

- ROW → alinha os elementos um ao lado do outro
- COLUMN → alinha os elementos um abaixo do outro

![flex-direction row (linha) e column (coluna) respectivamente](https://lh3.googleusercontent.com/proxy/TXkTXGqqwGebKsDDMXLDr52g4NEbCCtu7apWsQOv6zUOImJPkyAB-3kb7esNtdaM-zAtH6W8w2AhSoSvo9VFOooakvEEv_JYovtRvdi-SBsSDB8xbM-5moTOs7wQx_IistKOzCAQl8wuN5E)

**Propriedades:**

flex-direction → ROW

- justify-content → alinhamento horizontal
- align-items → alinhamento vertical

flex-direction → COLUMN

- justify-content → alinhamento vertical
- align-items → alinhamento horizontal

**Opções de alinhamento**

- center → alinha no centro
- space-around →  espaço entre (coloca um pouco de cada lado)
- space-between → espaço entre (só no meio)
- space-evenly → espaço igual em todos os lados
- flex-start → no inicio
- flex-end → no fim

![https://miro.medium.com/max/434/0*WGA70htf50TZAnai.png](https://miro.medium.com/max/434/0*WGA70htf50TZAnai.png)

---

# CSS Medidas

Unidades de medida absolutas:

- cm, mm, q, in, pt, pc, px

Dessas, usamos praticamente só o px.

Medidas relativas:

- Para fontes: em, ex, ch, rem
- % de viewport: vw, vh