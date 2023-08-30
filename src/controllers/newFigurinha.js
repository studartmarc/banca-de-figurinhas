const figurinhas = require("../bancodefigurinhas");

const newFigurinha = (req, res) => {
    const { nomeFig, paisFig, anoFig, cromoFig } = req.body;
    const { id } = figurinhas;

    const novaFigurinha = {
        id: id++,
        nome: nomeFig,
        pais: paisFig,
        album: anoFig,
        cromo: cromoFig,
    };

    figurinhas.push(novaFigurinha);

    return res.json({ mensagem: `Figurinha cadastrada com sucesso com o ID ${novaFigurinha.id}` })
};

module.exports = newFigurinha;