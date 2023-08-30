const albuns = require("./bancodedados");
const { ano, paises, cromos } = albuns;

const checkData = (req, res, next) => {
    const { paisFig, anoFig, cromoFig, telefone } = req.body;

    const checkEdition = ano.find((album) => {
        return album == anoFig;
    });

    const checkTeam = paises.find((pais) => {
        return pais == paisFig;
    });

    if (!checkTeam) {
        return res.status(404).json({ mensagem: "Não foi possível realizar o cadastro pois não foi possível verificar a validade desta figurinha quanto a seleção informada no cadastro." })
    };

    if (!checkEdition) {
        return res.status(404).json({ mensagem: "Não foi possível realizar o cadastro pois não foi possível verificar a validade desta figurinha quanto a edição informada no cadastro." })
    }

    if (Number(cromoFig) >= checkEdition.cromos && Number(cromoFig) < 0) {
        res.status(400).json({ mensagem: "Não existe o cromo no álbum selecionado. Impossível realizar o cadastro." })
    };

    if (telefone.length !== 11) {
        return res.status(400).json({ mensagem: "Insira o telefone corretamente, somente números e incluindo DDD. Esta informação é fundamental para fazer contato com possíveis interessados na figurinha cadastrada." })
    };

    next();

};

module.exports = checkData;