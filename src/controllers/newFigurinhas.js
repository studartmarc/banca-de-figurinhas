const figurinhas = require("../bancodefigurinhas");
const albuns = require("../utils/bancodedados");

const newFigurinha = (req, res) => {
    const { nomeFig, paisFig, anoFig, cromoFig } = req.body;
    const { ano, paises, cromos } = albuns;
    const { id } = figurinhas;

    const checkEdition = ano.find((album) => {
        return album == anoFig;
    });

    const checkTeam = paises.find((pais) => {
        return pais == paisFig;
    });

    const checkFigurinhas = () => {
        if (Number(cromoFig) >= checkEdition.cromos && Number(cromoFig) < 0) {
            res.status(400).json({ mensagem: "Não existe o cromo no álbum selecionado. Impossível realizar o cadastro." })
        };
    };

    if (!checkTeam || !checkEdition) {
        return res.status(404).json({ mensagem: "Não foi possível realizar o cadastro pois não foi possível verificar a validade desta figurinha." })
    };

    const novaFigurinha = {
        id: id++,
        nome: nomeFig,
        pais: paisFig,
        album: anoFig,
        cromo: cromoFig,
    };

    figurinhas.push(novaFigurinha);
};


module.exports = newFigurinha;