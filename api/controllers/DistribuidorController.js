const database = require('../models')

class DistribuidorController {
    static async verificarDistribuidores(req, res) {
        try{
            const  todosOsDistribuidores = await database.Distribuidores.findAll()
            return res.status(200).json(todosOsDistribuidores) 
        } catch{
            return res.status(500).json(error.message)
        }
        
    }
}

module.exports = DistribuidorController