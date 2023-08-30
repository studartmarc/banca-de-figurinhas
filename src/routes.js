const express = require("express");
const { listFigurinhas, getFigurinhas } = require("./controladores/figurinhas");
const checkPassword = require("./middlewares/checkPassword");
const newFigurinha = require("./controllers/newFigurinha");
const checkData = require("./utils/checkData");

const rotas = express();

rotas.get("/figurinhas", checkPassword, listFigurinhas);
rotas.get("/figurinhas/encontrar/:id", getFigurinhas);
rotas.post("/figurinhas/cadastrar", checkData, newFigurinha);


module.exports = rotas;