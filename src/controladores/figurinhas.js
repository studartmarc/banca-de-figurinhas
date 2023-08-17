const figurinhas = require("../bancodefigurinhas");

const listagemFigurinhas = (request, response) => {
    const { ano, pais, nome } = request.query;
    let resultado = figurinhas;

    if (ano) {
        resultado = resultado.filter((figurinhas) => {
            return figurinhas.ano == ano;
        });
    };
    if (pais) {
        resultado = resultado.filter((figurinhas) => {
            return figurinhas.pais === pais;
        });
    };
    if (nome) {
        resultado = resultado.filter((figurinhas) => {
            return figurinhas.nome === nome;
        });
    };
    response.send(resultado);

};

const obterFigurinhas = (request, response) => {
    const { id } = request.params;
    const figurinhaEncontrada = figurinhas.find((figurinha) => {
        return figurinha.id == id;
    })
    response.send(figurinhaEncontrada);

};

module.exports = {
    listagemFigurinhas,
    obterFigurinhas,
}