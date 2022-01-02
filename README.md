<img src="assets/ecoleta.png" width="100%">

# API - ECOLETA

## Descrição

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).


   > Quem nunca ouviu os mais velhos falarem que antigamente os produtos duravam mais? 🤔 <br> Basta uma rápida pesquisa no Google e vemos que não é apenas uma mera impressão, os eletrônicos de hoje já são fabricados com uma "validade reduzida", em outras palavras, chamamos isto de <strong> "obsolescência programada" </strong>. <br>

   > Com produtos que não terão mais atualizações, ou quebrarão depois de um certo tempo, a população é forçada cada vez mais a consumir desenfreadamente. Desta forma, temos um novo problema: o acúmulo de lixo eletrônico. 
    
  > A Ecoleta nasceu com o propósito de minimizar esse problema e realizar o descarte adequado aos eletrônicos. A API realiza o cadastro de pessoas da cidade de Belo Horizonte (MG) que desejam realizar o descarte e não sabem por onde começar.

   
# <br>📌Sumário
<!--ts-->
   * [Objetivos](#objetivos)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Rodando o Back End](#rodando-o-back-end)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
      * [Rotas](#rotas)
   * [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)

<!--te-->

## ✅Objetivos

- Cadastro de usuários interessados;
- Autenticação de usuário e senha;
- Simplificar o processo de cadastro de materiais eletrônicos elegíveis à coleta;


## ✅Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(REMOÇÃO). 

## ✅Arquitetura

        Arquitetura MVC
        |
        \--📂  API-ECOLETA
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂 assets
            \--📂src
                |
                |   **app.js**
                |
                📂---controllers
                |       user.js
                |
                📂---database
                |   **config.js
                |    
                📂---helpers
                |       auth.js
                |                      
                📂---models
                |       User.js
                |
                📂---routes
                |       user.js
                |__      



## ✅Instalação
* Para realizar download do projeto, siga as instruções abaixo:

### 👩‍👧‍👦Pré-requisitos

Você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
E claro o bom e velho editor de código como [VSCode](https://code.visualstudio.com/)

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone https://github.com/rnep280/api-ecoleta.git

# Acesse a pasta do projeto no terminal/cmd
$ cd api-ecoleta

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:5200 - acesse <http://localhost:5200/api/users/>
```

Para acessar via Heroku, acesse o [link da API](https:///)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### 👩‍👧‍👦Features

Funcionalidades da aplicação

- [x] POST - Cadastros de usuários (nome, e-mail, senha, pergunta e resposta secreta).
- [x] POST - Login na conta 
- [x] PUT - Alteração de senha / e-mail.
- [x] GET - Lista de usuários cadastrados.
- [x] DELETE - Deleção do cadastro.
-

### 👩‍👧‍👦Rotas

* local: http://localhost:5200/api/users/

* Heroku: https://api-ecoletaa.herokuapp.com/api/users
