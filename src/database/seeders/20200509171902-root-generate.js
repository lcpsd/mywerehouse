'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async(queryInterface, Sequelize) => {

      let salt = await bcrypt.genSalt(10)
      let hash = await bcrypt.hash('root', salt)

      return queryInterface.bulkInsert('admins', [{
        email: "root@root",
        passwdHash: hash,
        createdAt: new Date(),
			  updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('admins', [{where: {email: "root@root"}}], {});

  }
};
