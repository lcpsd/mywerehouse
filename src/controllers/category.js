const models = require('../models/index')
const CategoryModel = models['Category']

const create_service = require('../services/category/create')
const read_service = require('../services/category/read')
const updateName_service = require('../services/category/updateName')
const updateState_service = require('../services/category/updateState')
const delete_service = require('../services/category/delete')

class init{
    async create(req, res){
        let result = await create_service(req, CategoryModel)
        return res.json(result)
    }

    async read(req, res){
        let result = await read_service(req, CategoryModel)
        return res.json(result)
    }

    async updateName(req, res){
        let result = await updateName_service(req, CategoryModel)
        return res.json(result)
    }

    async updateState(req, res){
        let result = await updateState_service(req, CategoryModel)
        return res.json(result)
    }
    
    async delete(req, res){
        let result = await delete_service(req, CategoryModel)
        return res.json(result)
    }
}

module.exports = new init()