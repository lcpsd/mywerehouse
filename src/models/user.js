'use strict'
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		passwdHash: DataTypes.STRING,
		planId: DataTypes.INTEGER,
		signatureDate: DataTypes.DATE
	}, {})
	User.associate = function(models) {
		User.belongsTo(models.Plan, {foreignKey:'planId', as: 'plan'})
	}
	return User
}