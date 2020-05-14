'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Operations', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			quantity: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			code: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			measure: {
				type: Sequelize.STRING,
				allowNull: false
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key:'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			categoryId:{
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
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
		return queryInterface.dropTable('Operations')
	}
}