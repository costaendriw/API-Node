## API-NODE: API de Gerenciamento de Posts
Este projeto é uma API RESTful para gerenciar posts, incluindo funcionalidades de criação, listagem, atualização e upload de imagens. A API utiliza o banco de dados MongoDB para persistir os dados e integra-se com a Google Gemini para gerar descrições de imagens.

# Tecnologias e Integrações
* Backend: Node.js

* Framework: Express.js (implícito pelo uso de req e res)

* Banco de Dados: MongoDB

* Gerador de Descrições: Google Gemini API

* Manipulação de Arquivos: Node.js fs (filesystem)

* Geração de IDs: uuid

* Tratamento de Erros: Tratamento explícito de erros em todas as funções assíncronas.

# Acesso à API
A API pode ser acessada através das seguintes rotas:

* Listar Posts: GET /posts - Retorna um JSON com todos os posts.

* Criar Novo Post: POST /posts - Recebe um JSON com os dados do post (sem imagem). A imagem deve ser enviada separadamente via /upload.

* Fazer Upload de Imagem: POST /upload - Recebe uma imagem como um arquivo de upload. Cria um novo post com a imagem. O nome do * arquivo deve ser o mesmo ID do Post (ver detalhe na seção de limitações).

* Atualizar Post: PUT /posts/:id - Atualiza um post existente com o ID especificado. Recebe um JSON com os novos dados do post (incluindo alt). A imagem deve existir previamente em /uploads/:id.png

# Exemplo de requisição POST /posts:

{
  "titulo": "Meu novo post",
  "conteudo": "Este é o conteúdo do meu post."
}

# Exemplo de requisição PUT /posts/:id:

{
  "alt": "Descrição alternativa da imagem"
}

