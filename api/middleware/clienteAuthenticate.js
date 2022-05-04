const { verify } = require('jsonwebtoken')

async function authenticationCliente(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(400).json({
            message: 'token inválido!'
        })
    }

    try {
        const [Bearer, token] = authHeader.split(' ')
        const verificarToken = verify(token, 'jp123')
        req.user = {
            id: verificarToken.id
        }
        next()
    } catch (error) {
        res.status(400).json({
            error: true,
            message: 'meu chegado, passa o token ai!!'
        })
    }

}

module.exports = { authenticationCliente }