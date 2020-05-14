'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tab = sequelize.define('Category', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Tab.associate = function(models) {
    Tab.belongsTo(models.User, {foreignKey: 'userId', as: "user"})
  };
  return Tab;
};