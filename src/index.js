const express = require("express");
const port = 3000;
const app = express();
const routes = require("./routes");

app.use(express.json());

routes.use();

app.listen(port);