const models = require('../models/index')
const user_model = models['User']
const plain_model = models['Plan']

//userServices
const userValidator = require('../validators/generic')
const create_service = require('../services/user/createUser')
const updateUserPass_service = require('../services/user/updateUserPasswd')
const updateUserEmail_service = require('../services/user/updateUserEmail')
const updateUserPlan_service = require('../services/user/updateUserPlan')
const readAll_service = require('../services/user/readUsers')
const delete_service = require('../services/user/deleteUser')

class User{
    
	async create(req, res){
		let result = await create_service(req, user_model, userValidator)
		return res.json(result)
	}

	async readAll(req, res){
		let result = await readAll_service(user_model)
		return res.json(result)
	}

	async updatePass(req, res){

		let result = await updateUserPass_service(req, user_model)
		return res.json(result)

	}

	async updateEmail(req, res){
		let result = await updateUserEmail_service(req, user_model)
		return res.json(result)
	}

	async updatePlan(req, res){
		let result = await updateUserPlan_service(req, user_model, plain_model)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, user_model)
		return res.json(result)
	}

	async cancelPlan(req, res){
        
	}

}

module.exports = new User()