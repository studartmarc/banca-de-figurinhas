const checkPassword = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.status(404).json({ mensagem: "A senha não foi informada" });
    };

    if (senha !== "figurinha123") {
        res.status(400).json({ mensagem: "Senha incorreta" })
    }
    next();
}

module.exports = checkPassword;