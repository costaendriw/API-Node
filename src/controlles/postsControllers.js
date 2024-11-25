import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fsPromises from 'fs/promises'; // Importa as funções de arquivo assíncronas do fs

// Função assíncrona para listar todos os posts.
export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts(); // Busca todos os posts do banco de dados.
        res.status(200).json(posts); // Retorna os posts como JSON com código de status 200 (OK).
    } catch (error) {
        console.error("Erro ao listar posts:", error); // Registra o erro no console.
        res.status(500).json({ error: "Erro ao listar posts" }); // Retorna um erro 500 (Internal Server Error) para o cliente.
    }
}


// Função assíncrona para criar um novo post (sem imagem).
export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtém os dados do novo post do corpo da requisição.
    try {
        const postCriado = await criarPost(novoPost); // Cria o novo post no banco de dados.
        res.status(201).json(postCriado); // Retorna o post criado com código de status 201 (Created).
    } catch (erro) {
        console.error("Erro ao criar post:", erro); // Registra o erro no console.
        res.status(500).json({ error: "Falha ao criar post" }); // Retorna um erro 500 para o cliente.
    }
}

// Função assíncrona para upload de imagem e criação de post.
export async function uploadImagem(req, res) {
    // Verifica se um arquivo foi enviado.
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado" }); // Retorna erro 400 (Bad Request) se nenhum arquivo foi enviado.
    }
    const novoPost = {
        descricao: req.body.descricao || "", // Obtém a descrição do corpo da requisição, ou usa uma string vazia se não existir.
        imgUrl: `${req.file.filename}`, // Obtém o nome do arquivo salvo pelo multer.
        alt: req.body.alt || "" // Obtém a tag alt do corpo da requisição, ou usa uma string vazia se não existir.
    };

    try {
        const postCriado = await criarPost(novoPost); // Cria o post no banco de dados.
        const extensao = req.file.originalname.split(".").pop(); //pega a extensão do arquivo original
        const imagemAtualizada = `uploads/${postCriado.insertedId}.${extensao}`; // Gera o novo nome do arquivo com o ID do post.
        await fsPromises.rename(req.file.path, imagemAtualizada); // Renomeia o arquivo usando promises para tratamento de erros assíncrono.
        res.status(201).json({ message: "Post criado com sucesso", postCriado }); // Retorna sucesso com o post criado.
    } catch (erro) {
        console.error("Erro no upload:", erro); // Registra o erro no console.
        await fsPromises.unlink(req.file.path); // Remove o arquivo temporário se houver erro.
        res.status(500).json({ error: "Falha no upload ou na criação do post" }); // Retorna um erro 500 para o cliente.
    }
}