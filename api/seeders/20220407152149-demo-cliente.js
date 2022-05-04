const bcryptjs = require('bcryptjs')

module.exports = {
	async up (queryInterface, Sequelize)  {
		return queryInterface.bulkInsert('Clientes', [
			{
				Distribuidor_id: 3,
				CPF: '22222222222',
				nome: 'Augusto Silva',
				email: 'augusto@email.com',
				senha: await bcryptjs.hash('12345', 12),
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				CPF: '111111111111',
				nome: 'Ana Paula',
				email: 'ana@email.com',
				senha: await bcryptjs.hash('paulaana', 12),
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 3,
				CPF: '22222222222',
				nome: 'Augusto Silva',
				email: 'augusto@email.com',
				senha: await bcryptjs.hash('paralelepipedo', 12),
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 1,
				CPF: '33333333333',
				nome: 'Maria Júlia',
				email: 'maria@email.com',
				senha: await bcryptjs.hash('juliamaria1234', 12),
				endereco: 'Nova Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 4,
				CPF: '55555555555',
				nome: 'Laís Cristina',
				email: 'lais@email.com',
				senha: await bcryptjs.hash('laiscris32', 12),
				endereco: 'São Félix',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Distribuidor_id: 2,
				CPF: '77777777777',
				nome: 'Hanna Souza',
				email: 'hanna@email.com',
				senha: await bcryptjs.hash('palindromo', 12),
				endereco: 'Velha Marabá',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Clientes', null, {})
	}
}
