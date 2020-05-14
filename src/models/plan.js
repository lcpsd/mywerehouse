'use strict'
module.exports = (sequelize, DataTypes) => {
	const Plan = sequelize.define('Plan', {
		name: DataTypes.STRING,
		value: DataTypes.INTEGER,
		validity: DataTypes.INTEGER
	}, {})
	Plan.associate = function(models) {
    
	}
	return Plan
}