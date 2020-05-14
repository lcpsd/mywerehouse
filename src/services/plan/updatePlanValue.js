async function init(req, planModel){

	let result = await planModel.update({value: req.body.newValue}, {where:{name: req.body.name}})

	if(result[0] == 1) return {success:'plan_updated'}

	return {error:'plan_not_found'}

}

module.exports = init