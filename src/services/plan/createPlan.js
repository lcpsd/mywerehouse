const validator = require('../../validators/generic')

async function init(req, planModel){

	const check = await validator.checkName(req.body.name, planModel)

	if(check) return {error:'plan_aready_exists'}

	await planModel.create({raw: true,
		id:req.body.id,
		name: req.body.name,
		value: req.body.value,
		validity: req.body.validity
	})

	return {success:'plan_created'}
}

module.exports = init