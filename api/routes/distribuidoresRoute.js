const {Router} = require('express')
const DistribuidorController = require('../controllers/DistribuidorController')
const { authenticationDistribuidor } = require('../middleware/distribuidorAuthenticate')
const SessionDistribuidorController = require('../controllers/SessionDistribuidorController')

const router = Router()

router.get('/distribuidores', DistribuidorController.verificarDistribuidores)

router.get('/distribuidores/:id', DistribuidorController.verificaUmDistribuidor)

router.post('/distribuidores', DistribuidorController.cadastrarDistribuidor)

router.put('/distribuidores', authenticationDistribuidor, DistribuidorController.atualizaDistribuidor)

router.delete('/distribuidores/:id', DistribuidorController.deletaDistribuidor)

router.post('/sessionDistribuidores', SessionDistribuidorController.authenticationDistribuidor)

module.exports = router