const figurinhas = require("../../database/bancodefigurinhas");

const newFigurinha = (req, res) => {
    const { nomeFig, paisFig, anoFig, cromoFig, telefone } = req.body;
    const { id } = figurinhas;

    const novaFigurinha = {
        id: id++,
        nome: nomeFig,
        pais: paisFig,
        album: anoFig,
        cromo: cromoFig,
        trocar: true,
        contato: telefone,
    };

    figurinhas.push(novaFigurinha);

    return res.json({ mensagem: `Figurinha cadastrada com sucesso com o ID ${novaFigurinha.id}` })
};

module.exports = newFigurinha;