'use strict'
module.exports = (sequelize, DataTypes) => {
	const admin = sequelize.define('admin', {
		email: DataTypes.STRING,
		passwdHash: DataTypes.STRING
	}, {})
	admin.associate = function(models) {
		// associations can be defined here
	}
	return admin
}