import express from "express";
import { listarPosts } from "../controlles/postsControllers.js";

const routes = (app) => {
    // Habilita o middleware para analisar o corpo das requisições como JSON.
    app.use(express.json())
    // Rota para buscar todos os posts.
    app.get("/posts", listarPosts);
}

export default routes;
