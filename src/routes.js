const express = require("express");
const { listFigurinhas, getFigurinhas } = require("./controllers/figurinhas/figurinhas");
const checkPassword = require("./middlewares/checkPassword");
const newFigurinha = require("./controllers/figurinhas/newFigurinha");
const checkData = require("./utils/checkData");

const routes = express();

routes.get("/figurinhas", checkPassword, listFigurinhas);
routes.get("/figurinhas/encontrar/:id", getFigurinhas);
routes.post("/figurinhas/cadastrar", checkData, newFigurinha);


module.exports = routes;