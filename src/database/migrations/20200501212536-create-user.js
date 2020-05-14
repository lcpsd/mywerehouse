'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			passwdHash: {
				type: Sequelize.STRING
			},
			planId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Plans',
					key:'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNull: true
			},
			signatureDate:{
				type:Sequelize.DATE,
				allowNull: true
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users')
	}
}