const models = require('../models/index')
const adminModel = models['admin']
const create_service = require('../services/admin/createAdmin')
const read_service = require('../services/admin/readAdmins')
const delete_service = require('../services/admin/deleteAdmin')
const updateEmail_service = require('../services/admin/updateAdminEmail')
const updatePasswd_service = require('../services/admin/updateAdminPasswd')

class Admin{

	async create(req, res){
		let result = await create_service(req, adminModel)
		return res.json(result)
	}

	async read(req, res){
		let result = await read_service(adminModel)
		return res.json(result)
	}

	async updateEmail(req, res){
		let result = await updateEmail_service(req, adminModel)
		return res.json(result)
	}

	async updatePasswd(req, res){
		let result = await updatePasswd_service(req, adminModel)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, adminModel)
		return res.json(result)
	}


}

module.exports = new Admin()