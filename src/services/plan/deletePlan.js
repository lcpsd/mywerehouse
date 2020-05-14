async function init(req, planModel){

	let result = await planModel.destroy({where:{name:req.body.name}})

	if(result[0] == 1) return {success:'plan_deleted'}

	return {error:'plan_not_found'}
}

module.exports = init