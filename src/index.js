const express = require("express");
const { listagemFigurinhas, obterFigurinhas } = require("./controladores/figurinhas");

const app = express();

app.get("/figurinhas", listagemFigurinhas);
app.get("/figurinhas/:id", obterFigurinhas)


app.listen(3000);