'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Plans', [{
			id:1,
			name: 'basic',
			value: 10,
			validity: 30,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{	
			id:2,
			name: 'pro',
			value: 30,
			validity: 30,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
}
