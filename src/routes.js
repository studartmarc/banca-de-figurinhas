const express = require("express");
const { listFigurinhas, getFigurinhas } = require("./controladores/figurinhas");
const checkPassword = require("./middlewares/checkPassword");
const newFigurinha = require("./controllers/newFigurinhas");

const rotas = express();

rotas.get("/figurinhas", checkPassword, listFigurinhas);
rotas.get("/figurinhas/:id", getFigurinhas);
rotas.post("/figurinhas/cadastrar", newFigurinha);


module.exports = rotas;