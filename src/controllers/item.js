const models = require('../models/index')
const categoryModel = models['Category']
const itemModel = models['Item']
const create_service = require('../services/items/createItem')
const updateCode_service = require('../services/items/updateItemCode')
const readByRange_service = require('../services/items/readItems')
const delete_service = require('../services/items/deleteItem')

class operation{

	async create(req, res){
		let result = await create_service(req, itemModel, categoryModel)
		return res.json(result)
	}

	async readByRange(req, res){
		let result = await readByRange_service(req, itemModel, tabModel)
		return res.json(result)
	}

	async updateCode(req, res){
		let result = await updateCode_service(req, itemModel)
		return res.json(result)
	}

	async updateName(req, res){
		let result = await updateCode_service(req, itemModel)
		return res.json(result)
	}

	async updateQuantity(req, res){
		let result = await updateCode_service(req, itemModel)
		return res.json(result)
	}

	async delete(req, res){
		let result = await delete_service(req, itemModel)
		return res.json(result)
	}

}

module.exports = new operation()