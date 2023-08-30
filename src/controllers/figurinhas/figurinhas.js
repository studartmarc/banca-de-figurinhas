const figurinhas = require("../../database/bancodefigurinhas");
const albuns = require("../../utils/bancodedados");

const listFigurinhas = (req, res) => {
    const { ano, pais, nome } = req.query;
    let result = figurinhas;

    if (ano) {
        result = result.filter((figurinhas) => {
            return figurinhas.ano == ano;
        });
    };
    if (pais) {
        result = result.filter((figurinhas) => {
            return figurinhas.pais === pais;
        });
    };
    if (nome) {
        result = resultado.filter((figurinhas) => {
            return figurinhas.nome === nome;
        });
    };
    return res.json({ result });

};

const getFigurinhas = (req, res) => {
    const { id } = req.params;
    const figurinhaEncontrada = figurinhas.find((figurinha) => {
        return figurinha.id == id;
    })
    return res.json({ figurinhaEncontrada });

};

module.exports = {
    listFigurinhas,
    getFigurinhas,
}