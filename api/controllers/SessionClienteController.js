const database = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SessionClienteController {
    static async authenticationCliente(req, res) {
        const {email, senha} = req.body

        try {
            const cliente = await database.Clientes.findOne({ where: { email } })
            if(!cliente) {
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário não encontrado!'
                })
            }
            const verificarSenha = await bcryptjs.compare(senha, cliente.senha)

            if(!verificarSenha){
                return res.status(400).json({
                    error:true, 
                    messagem: 'Usuário ou senha incorreta!'
                })
            }

            const keySecret = 'jp123'
            const token = jwt.sign({id: cliente.id}, keySecret)
            
            return res.status(200).json({cliente, token})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = SessionClienteController