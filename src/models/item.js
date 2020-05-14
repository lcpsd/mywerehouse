'use strict'
module.exports = (sequelize, DataTypes) => {
	const Operation = sequelize.define('Operation', {
		name: DataTypes.STRING,
		quantity: DataTypes.FLOAT,
		code: DataTypes.INTEGER,
		measure: DataTypes.STRING,
		categoryId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER
	}, {})
	Operation.associate = function(models) {
		Operation.belongsTo(models.User, {foreignkey:'userId', as: 'user'})
		Operation.belongsTo(models.Tab, {foreignkey: 'categoryId', as:'category'})
	}
	return Operation
}