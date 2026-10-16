# Resumo de consulta — HTML e CSS

## Esqueleto HTML
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>Topo</header>
  <main>Conteúdo principal</main>
  <footer>Rodapé</footer>
</body>
</html>
```

## Grade de cartões: 3 em cima e 3 embaixo
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```
- `display: grid`: ativa o Grid.
- `grid-template-columns`: define as colunas.
- `repeat(3, 1fr)`: cria 3 colunas de mesma largura.
- `gap`: distância entre linhas e colunas.
- Se existem 6 cartões e 3 colunas, o navegador coloca automaticamente 3 por linha.

## Flexbox para logo e menu
```css
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
```
- `justify-content`: distribui no eixo principal (em uma linha, horizontalmente).
- `align-items`: alinha no eixo transversal (em uma linha, verticalmente).
- `flex-wrap: wrap`: permite que os itens quebrem para outra linha se faltar espaço.

## Centralizar um elemento
```css
.caixa {
  width: 80%;
  margin: 0 auto;
}
```
`margin: 0 auto` centraliza horizontalmente um bloco que tenha largura definida.

## Espaçamento
- `padding: 20px`: espaço dentro da caixa.
- `margin: 20px`: espaço fora da caixa.
- `gap: 20px`: espaço entre itens de Grid/Flex.
- `width: 100%`: ocupa toda a largura disponível.
- `max-width: 1200px`: impede que fique maior que 1200px.

## Cores, bordas e texto
```css
.card {
  background-color: white;
  color: #333;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}
```

## Imagens
```css
img {
  max-width: 100%;
  height: auto;
}
```

## Como descobrir por que os cartões não alinham?
1. Confira se todos os cartões estão dentro do mesmo elemento pai.
2. Aplique `display: grid` **no pai**, não nos cartões.
3. Defina `grid-template-columns`.
4. Ajuste o espaço com `gap`.
5. Confira se os cartões não têm larguras fixas grandes demais.
6. Confira se não há `margin` ou `position` desnecessários nos cartões.

## Grid ou Flex?
Use **Grid** para uma grade de cartões com linhas e colunas.
Use **Flexbox** para alinhar logo e navegação, ou itens em uma única linha.
Eles podem ser usados juntos na mesma página.
