import conectarAoBanco from '../config/dbConfig.js';

// Importa a função que estabelece a conexão com o banco de dados (provavelmente MongoDB).

// Tenta conectar ao banco de dados usando a string de conexão obtida da variável de ambiente STRING_CONEXAO.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção "posts" dentro do banco de dados selecionado.
    const colecao = db.collection("posts"); 
    // Executa uma consulta para buscar todos os documentos da coleção e retorna como um array.
    return colecao.find().toArray(); 
}

// Função assíncrona para criar um novo post no banco de dados.
export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabytes".
    const db = conexao.db("imersao-instabytes"); 
    // Seleciona a coleção "posts" dentro do banco de dados selecionado.
    const colecao = db.collection("posts"); 
    // Insere o objeto `novoPost` na coleção "posts" e retorna um objeto com informações sobre a inserção (incluindo o ID gerado).
    return colecao.insertOne(novoPost); 
}