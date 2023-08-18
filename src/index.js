const express = require("express");
const { listagemFigurinhas, obterFigurinhas } = require("./controladores/figurinhas");
const { validarSenha } = require("./controladores/intermediarios");

const app = express();

app.use(validarSenha);

app.get("/figurinhas", listagemFigurinhas);
app.get("/figurinhas/:id", obterFigurinhas)


app.listen(3000);