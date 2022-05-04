const {Router} = require('express')
const ClienteController = require('../controllers/ClienteController')
const { authenticationCliente } = require('../middleware/clienteAuthenticate')
const SessionClienteController = require('../controllers/SessionClienteController')

const router = Router()

router.get('/clientes', ClienteController.verificarClientes)

router.get('/clientes/:id', ClienteController.verificaUmCliente)

router.post('/clientes', ClienteController.cadastrarCliente)

router.put('/clientes', authenticationCliente, ClienteController.atualizaCliente)

router.delete('/clientes/:id', ClienteController.deletaCliente)

router.post('/sessionClientes', SessionClienteController.authenticationCliente)



module.exports = router