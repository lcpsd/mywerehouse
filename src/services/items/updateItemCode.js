const validator = require('../../validators/generic')

async function init(req, itemModel){

	let check = await validator.checkId(req.body.id, itemModel)

	if(!check) return {error:'item_not_found'}

	let result = await itemModel.update({code: req.body.newCode}, {where:{id: req.body.id}})

	if(result[0] == 1 || result == 1) return {success:'item_updated'}

	return {error:'item_not_updated'}

}

module.exports = init