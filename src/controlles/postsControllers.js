import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../service/serviceGemini.js"
import { v4 as uuidv4 } from 'uuid';

export async function listarPosts(req, res) {
    // Chama a função para buscar os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({erro: "Falha ao criar o post. Detalhes: " + erro.message})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: "", // imgUrl será preenchido depois
        alt: ""
    };

    try {
        const uniqueFileName = `${uuidv4()}.png`;
        const imagemAtualizada = `uploads/${uniqueFileName}`;
        const result = await criarPost(novoPost);
        await fs.promises.rename(req.file.path, imagemAtualizada); // Assíncrono e tratamento de erros
        novoPost.imgUrl = `/uploads/${uniqueFileName}`; // Atualiza com o caminho correto
        res.status(200).json(novoPost);
    } catch (erro) {
        console.error('Erro ao fazer upload:', erro);
        //Remover arquivo temporário se a operação falhar!
        fs.unlink(req.file.path, (err) => {
            if (err) console.error("Erro ao remover arquivo temporário:", err)
        })
        res.status(500).json({ erro: "Falha ao fazer upload da imagem. Detalhes: " + erro.message });
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    try {
        const imgBuffer = await fs.promises.readFile(`uploads/${id}.png`); // Assíncrono
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        };

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error('Erro ao atualizar post:', erro);
        res.status(500).json({ erro: "Falha ao atualizar o post. Detalhes: " + erro.message });
    }
}