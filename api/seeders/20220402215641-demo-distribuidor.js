const bcryptjs = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Distribuidores', [
			{
				CNPJ: '00000000000000',
				nome: 'FortiFruti',
				email: 'fortifruti@email.com',
				senha: await bcryptjs.hash('12345', 12),
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '11111111111111',
				nome: 'Fruta Pão',
				email: 'pao@email.com',
				senha: await bcryptjs.hash('paralelepipedo', 12),
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '22222222222222',
				nome: 'Frutas Norte',
				email: 'norte@email.com',
				senha: await bcryptjs.hash('frutasnorte', 12),
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '33333333333333',
				nome: 'Marabá Frutas',
				email: 'marafrutas@email.com',
				senha: await bcryptjs.hash('marabafrutas', 12),
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '44444444444444',
				nome: 'Horti Fruti',
				email: 'hortifruti@email.com',
				senha: await bcryptjs.hash('horti123', 12),
				endereco: 'Cidade Nova',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				CNPJ: '77777777777777',
				nome: 'Top Frutas',
				email: 'topfrutas@email.com',
				senha: await bcryptjs.hash('frutastop', 12),
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Distribuidores', null, {})
  }
}
