# 🚀 API de Cadastro de Clientes (Node.js)

Esta é uma API RESTful desenvolvida em Node.js para gerenciar o cadastro de clientes. Ela permite realizar operações básicas (CRUD: Criar, Ler, Atualizar e Deletar) de informações de clientes de forma simples e eficiente. Perfeita para servir como back-end para aplicações web ou mobile que precisam gerenciar dados de usuários.

## ✨ Funcionalidades

A API oferece os seguintes endpoints para a gestão de clientes:

* **Cadastro de Clientes (POST):** Adicione novos clientes à base de dados com suas informações.
* **Listagem de Clientes (GET):** Recupere a lista completa de todos os clientes cadastrados.
* **Busca por ID (GET):** Consulte os detalhes de um cliente específico utilizando seu ID único.
* **Atualização de Clientes (PUT/PATCH):** Modifique as informações de clientes existentes.
* **Exclusão de Clientes (DELETE):** Remova registros de clientes do sistema.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Node.js:** Ambiente de execução JavaScript no lado do servidor.
* **Express.js:** Framework web minimalista e flexível para Node.js, utilizado para construir a API.
* **MongoDB:** Banco de dados NoSQL, flexível e escalável, utilizado para armazenar os dados dos clientes.
* **Mongoose:** Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js, que facilita a interação com o banco de dados.

## ⚙️ Pré-requisitos para Execução

Antes de rodar a API em sua máquina, certifique-se de ter os seguintes softwares instalados:

* [**Node.js**](https://nodejs.org/en/download/) (versão LTS recomendada)
* [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (gerenciador de pacotes do Node.js, geralmente vem com o Node.js)
* [**MongoDB**](https://docs.mongodb.com/manual/installation/) (instalado e rodando localmente, ou um banco de dados MongoDB Atlas na nuvem)

## ▶️ Como Configurar e Executar o Projeto

Siga estes passos para ter a API rodando em seu ambiente:

1.  **Clone o Repositório:**
    Abra seu terminal ou Git Bash e execute o comando:
    ```bash
    git clone [https://github.com/costaendriw/API-Node.git](https://github.com/costaendriw/API-Node.git)
    ```

2.  **Navegue até o Diretório do Projeto:**
    ```bash
    cd API-Node
    ```

3.  **Instale as Dependências:**
    ```bash
    npm install
    ```

4.  **Configuração do Banco de Dados:**
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione a string de conexão do seu MongoDB a este arquivo. Por exemplo:
        ```
        MONGO_URI=mongodb://localhost:27017/clientes_db
        ```
        Se estiver usando MongoDB Atlas, cole a sua string de conexão completa aqui.

5.  **Inicie a API:**
    ```bash
    npm start
    ```
    A API será iniciada e estará disponível em `http://localhost:3000` (ou na porta configurada).

## 🧪 Como Testar a API

Você pode usar ferramentas como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download) para testar os endpoints da API:

* **POST** `http://localhost:3000/clientes` - Para criar um novo cliente (envie um JSON no corpo da requisição).
* **GET** `http://localhost:3000/clientes` - Para listar todos os clientes.
* **GET** `http://localhost:3000/clientes/:id` - Para buscar um cliente por ID.
* **PUT/PATCH** `http://localhost:3000/clientes/:id` - Para atualizar um cliente por ID.
* **DELETE** `http://localhost:3000/clientes/:id` - Para deletar um cliente por ID.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para:

1.  Fazer um `fork` do projeto.
2.  Criar uma `branch` para sua funcionalidade (`git checkout -b feature/MinhaNovaFuncionalidade`).
3.  Fazer suas alterações.
4.  Comitar suas mudanças (`git commit -m 'Adiciona nova funcionalidade X'`).
5.  Enviar para sua `branch` (`git push origin feature/MinhaNovaFuncionalidade`).
6.  Abrir um `Pull Request`.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
