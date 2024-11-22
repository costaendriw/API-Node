import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        data: "2024-03-08", // Added data field
        curtidas: 15,       // Added likes field
        comentarios: [      // Added comments field (array of strings)
          "Que foto linda!",
          "Adorei!"
        ]
      },
      {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://placecats.com/landscape/800/600",
        data: "2024-03-07",
        curtidas: 50,
        comentarios: ["Incrível!", "Maravilhoso!"]
      },
      {
        id: 3,
        descricao: "Meu gato fofo",
        imagem: "https://placecats.com/cutecat/400/300",
        data: "2024-03-06",
        curtidas: 25,
        comentarios: ["Muito fofo!", "Que gracinha!"]
      },
      {
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://placecats.com/food/600/400",
        data: "2024-03-05",
        curtidas: 30,
        comentarios: ["Deu água na boca!", "Que delícia!"]
      },
      {
        id: 5,
        descricao: "Aventura na natureza",
        imagem: "https://placecats.com/nature/900/700",
        data: "2024-03-04",
        curtidas: 40,
        comentarios: ["Impressionante!", "Que aventura!"]
      },
      {
        id: 6,
        descricao: "Construção moderna",
        imagem: "https://placecats.com/building/700/500",
        data: "2024-03-03",
        curtidas: 20,
        comentarios: ["Arquitetura incrível!", "Moderno e elegante!"]
      }
]
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log( "Servidor escutando ...");
    
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostID(req.params.id)
    res.status(200).json(posts[index]);
});
