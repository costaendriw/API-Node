import conectarAoBanco from '../config/dbConfig.js';

// Tenta conectar ao banco de dados usando a string de conexão do arquivo de variáveis de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

//Função assíncrona para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
    // Seliciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes")
    // Seliciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts")
    // Retorna um array com todos os documnetos da coleção
    return colecao.find().toArray()
}