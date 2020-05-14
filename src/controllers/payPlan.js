const models = require('../models/index')
const planModel = models['Plan']
const userModel = models['User']
const createBasic_service = require('../services/payment/create')
const confirmBasic_service = require('../services/payment/confirm')

class payment{
	async create(req, res){
		let result = await createBasic_service(req, planModel)
		return res.json(result)
	}

	async confirm(req, res){
		let result = await confirmBasic_service(req, userModel, planModel)
		return res.json(result)
	}
}

module.exports = new payment()