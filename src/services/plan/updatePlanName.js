async function init(req, planModel){

	let result = await planModel.update({name: req.body.newName}, {where:{name: req.body.name}})

	if(result[0] == 1) return {success:'plan_updated'}

	return {error:'plan_not_found'}

}

module.exports = init