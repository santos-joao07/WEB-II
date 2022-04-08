const {Router} = require('express')
const DistribuidorController = require('../controllers/DistribuidorController')

const router = Router()

router.get('/distribuidores', DistribuidorController.verificarDistribuidores)

module.exports = router