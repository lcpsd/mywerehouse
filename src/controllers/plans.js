const models = require('../models/index')
const planModel = models['Plan']

const create_service = require('../services/plan/createPlan')
const delete_service = require('../services/plan/deletePlan')
const read_service = require('../services/plan/readPlans')
const updateName_service = require('../services/plan/updatePlanName')
const updateValidity_service = require('../services/plan/updatePlanValidity')
const updateValue_service = require('../services/plan/updatePlanValue')

class plans{
	async create(req, res){
		let result = await create_service(req, planModel)
		return res.json(result)
	}

	async updateName(req, res){
		let result = await updateName_service(req, planModel)
		return res.json(result)
	}

	async updateValidity(req, res){
		let result = await updateValidity_service(req, planModel)
		return res.json(result)
	}

	async updateValue(req, res){
		let result = await updateValue_service(req, planModel)
		return res.json(result)
	}

	async read(req, res){
		let result = await read_service(planModel)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, planModel)
		return res.json(result)
	}
}

module.exports = new plans()