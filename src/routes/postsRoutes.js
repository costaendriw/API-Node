import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controlles/postsControllers.js";
import { v4 as uuidv4 } from 'uuid'; // Importa a função para gerar IDs únicos (UUIDs)

// Configura o armazenamento de arquivos usando o multer.diskStorage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define o diretório de destino para os arquivos carregados. Certifique-se de que esta pasta exista.
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop(); // Obtém a extensão do arquivo original.
        const uniqueSuffix = uuidv4(); // Gera um ID único para evitar conflitos de nomes de arquivo.
        cb(null, `${uniqueSuffix}.${ext}`); // Define o nome do arquivo com um sufixo único e a extensão original.
    }
});

// Configura o middleware multer com o armazenamento definido acima.
const upload = multer({ storage });

const routes = (app) => {
    // Habilita o middleware para analisar requisições JSON.
    app.use(express.json());

    // Define a rota GET para buscar todos os posts.
    app.get("/posts", listarPosts);

    // Define a rota POST para criar um novo post (sem imagem).
    app.post("/posts", postarNovoPost);

    // Define a rota POST para upload de imagem, usando o middleware multer.
    app.post("/upload", upload.single("imagem"), uploadImagem); // upload.single espera um campo chamado 'imagem' no formulário
};

export default routes;