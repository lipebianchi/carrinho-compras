# 📋 Wishlist Cart Backend com Node.js 🛒

Este projeto implementa um sistema de wishlist (lista de desejos) em backend utilizando Node.js, com modularização via ESM (ECMAScript Modules). Ele simula um carrinho de compras e inclui funcionalidades essenciais para manipulação de produtos.

## 🎯 Objetivo do Projeto

Criar um sistema de wishlist backend modular, que permite gerenciar produtos em um carrinho de compras. O sistema simula um banco de dados local, onde é possível adicionar, remover e visualizar itens.



## 🚀 Features do Projeto
- Adicionar itens ao carrinho: Adicione produtos com quantidade personalizada.
- Remover itens do carrinho: Exclua itens específicos do carrinho.
- Exibir o carrinho: Liste todos os itens adicionados, incluindo o subtotal.
- Gerenciar produtos: Criação de novos produtos.
- Banco de dados simulado: Arquivo JS com 100 produtos pré-cadastrados.

## 🛠️ Tecnologias Utilizadas

- Node.js: Plataforma JavaScript para backend.
- ECMAScript Modules (ESM): Utilizado para modularização do código.
- JavaScript: Linguagem principal do projeto.


## ⚙️ Pré-requisitos

Antes de iniciar, você precisa ter o Node.js instalado na sua máquina:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes Node)

## 💻 Rodando localmente

Para rodar o projeto localmente siga os passos abaixo:

1. Clone o repositório

```bash
 git clone https://github.com/lipebianchi/carrinho-compras.git
```

2. Entre no diretório do projeto:

```bash
 cd carrinho-compras
```

3. Instale as dependências:

```bash
 npm install
```

4. inicie o projeto:

```bash
 node src/main.js
```

## 📚 Como Utilizar o Código

### 📔 Importação de Funções 

No arquivo `main.js`, você pode importar as funções dos módulos e utilizá-las:


```javascript

import { createItem } from "./services/products.js"; 
import * as cart from "./services/cart.js" 
import { products } from "./databases/dbProducts.js"; 

```
Funções disponíveis:
- Carrinho (cart.js):
    - addItem(item, quantidade) - Adiciona um item ao carrinho.
    - removeItem(nomeDoItem, quantidade) - Remove um item específico ou subtrai a quantidade que você desejar.
    - showCart() - Mostra uma tabela com todos os produtos atuais no carrinho juntamente com o valor total do carrinho.
- Produtos (products.js):
    - createItem(id, nome, valor, categoria, marca) - Cria um objeto de produto com os atributos do parametro.
- Banco de dados simulado (dbProducts.js):
    - products(lista de 100 produtos pré cadastrados)



### ⌨️ Manipulação do código:

Criar um item:

```javascript

const item = await createItem(1, "Xiaomi Redmi Note 13", 1020, "electronics", "Xiaomi")

```
Adicionar um item:

```javascript

cart.addItem(item, 2)

```

Imprimir carrinho atual:


```javascript

cart.showCart()

```


## 🚧 Futuras Melhorias

- [ ] Implementar persistência em banco de dados real (ex: MongoDB ou PostgreSQL).
- [ ] Adicionar autenticação para controle de usuários.
- [ ] Criar uma interface frontend para interação.
- [ ] Implementar testes automatizados (ex: Jest).


