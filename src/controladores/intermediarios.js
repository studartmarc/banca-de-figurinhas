const validarSenha = (request, response, next) => {
    const { senha } = request.query;

    if (!senha) {
        return response.send("A senha não foi informada");
    };

    if (senha !== "figurinha123") {
        response.send("Senha incorreta")
    }
    next();
}

module.exports = {
    validarSenha
}