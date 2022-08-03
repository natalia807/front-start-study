# Basic
<a href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML Basics mozilla doc</a>

## O que é HTML ?
Uma linguagem de marcação de Hipertexto, é a linguagem usada para estruturar uma página web.

## Como funciona a sintaxe ?
```HTML
<tag> conteúdo </tag> <!-- tag de fechamento -->

<tag attribute="content"> conteúdo </tag> <!-- Podemos setar atributos como class, href, id, etc. -->
```

### Aninhamento de elementos
No HTML podemos aninhar elemento, ou seja, colocar um dentro do outro.
```HTML
<div>
    <p>Clique<strong>aqui</strong></p>
</div>
```
Resultado:
> <div>
>     <p>Clique <strong>aqui</strong></p>
> </div>

### Elementos Vazios
Elementos que não tem tag de fechamento, como por exemplo o img.

```HTML
<img src="link" alt="legenda da imagem">
```

# Anatomia do HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

`<!DOCTYPE html>` Garantir que o documento se comporte corretamente como html.

`<html></html>` Elemento raiz, envolve todo conteúdo da página.

`<head></head>` Elemento onde fica as configurações básicas da página e tudo que deseja inlcuir.

`<meta charset="utf-8">` Elemento define o conjunto de caracteres que seu documento deve usar.

`<title></title> ` define o título da sua página.

`<body></body>` Contém todo o conteúdo da página.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` Deixar a página responsiva, deixará a largura da página com a largura do device.

# Principais Tags

### Títulos

h1, h2, h3, h4, h5, h6 -> Tags de títulos
Vai do maior ao menor, utilizar bem os títulos ajudam no SEO do site.

Os algoritmos de busca (SEO) usam os títulos para as indicações, então vale salientar que os títulos são marcados como importantes na construção de um site. Por conta disso é bom lembrar que quando tudo é importante, nada é importante, por isso os títulos devem ser incisivos para que sejam úteis.

```HTML
    <h1>Hello</h1> <!-- Mais importante -->
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6> <!-- Menos importante -->
```
Resultado:
> <h1>Hello h1</h1>
> <h2>Hello h2</h2>
> <h3>Hello h3</h3>
> <h4>Hello h4</h4>
> <h5>Hello h5</h5>
> <h6>Hello h6</h6>

## Parágrafo
```HTML
<p>paragrafo</p>
```
Resultado:
> <p>paragrafo</p>

Elemento de texto que tem quebra de linha automática.

```HTML
<p>paragrafo de um <br>texto</p>
```
Resultado:
> <p>paragrafo de um <br>texto</p>

Esse `<br>`serve para quebrar linha, funciona como uma gambiarra, pois usaremos o css para tratar o tamanho do paragrafo.

```HTML
<span>texto</span>
```
Resultado:
> <span>texto</span>

Funciona como um parágrafo mas sem a quebra de linha automática, com o span podemos criar textos com estilo detro dos parágrafos.

## Listas
### Listas Ordenadas (Ordered Lists)
```HTML 
<ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ol>
```
Resultado:
> <ol>
>    <li>item 1</li>
>    <li>item 2</li>
>    <li>item 3</li>
> </ol>

Utilizada quando a ordem dos elementos importam.

### Listas Sem Ordem (Unordered Lists)
```HTML 
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```
Resultado:
> <ul>
>    <li>item 1</li>
>    <li>item 2</li>
>    <li>item 3</li>
> </ul>

Utilizada quando a ordem dos elementos não importam.

## Link (âncora)
```HTML
<a href="link">Clique aqui</a>
```
Resultado:
> <a href="https://google.com">Clique aqui</a>

Utilizado para adicionar links a página, e permitir que o usuário navegue de uma página para outra.

```HTML
<a href="link" target="_blank">Clique aqui</a>
```
Com o `target="_blank"` ao clicar no link, a página irá abrir o link em uma página em branco.

## Imagem
```HTML
<img src="link" alt="legenda da imagem">
```
Adiciona a imagem que estiver linkada no `src`.

## br & hr
`<br>` Serve para quebrar linha

`<hr>` Linha divisória
