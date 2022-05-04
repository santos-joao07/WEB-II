const database = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SessionDistribuidorController {
    static async authenticationDistribuidor(req, res) {
        const {email, senha} = req.body

        try {
            const distribuidor = await database.Distribuidores.findOne({ where: { email } })
            if(!distribuidor) {
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário não encontrado!'
                })
            }
            const verificarSenha = await bcryptjs.compare(senha, distribuidor.senha)

            if(!verificarSenha){
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário ou senha incorreta!'
                })
            }

            const keySecret = 'jp123'
            const token = jwt.sign({id: distribuidor.id}, keySecret)
            
            return res.status(200).json({distribuidor, token})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = SessionDistribuidorController